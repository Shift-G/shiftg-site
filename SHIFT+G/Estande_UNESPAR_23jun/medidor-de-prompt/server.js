/* =============================================================================
   MEDIDOR DE PROMPT — Shift+G  (servidor)
   Roda sem dependências (Node 18+). Guarda a chave da API e conversa com o Claude.

   COMO RODAR (resumo — veja COMO_RODAR.md):
     1) Tenha o Node instalado (node --version)
     2) export ANTHROPIC_API_KEY="sua-chave-aqui"     (Windows: set ANTHROPIC_API_KEY=...)
     3) node server.js
     4) abra http://localhost:3000

   Sem chave configurada, ele roda em MODO DEMO (análise offline) — útil para testar
   e como rede de segurança se a internet do estande cair.
   ============================================================================= */

const http = require("http");
const fs   = require("fs");
const path = require("path");

const PORT     = process.env.PORT || 3000;
const API_KEY  = process.env.ANTHROPIC_API_KEY || "";
const MODEL    = process.env.MODEL || "claude-haiku-4-5-20251001"; // troque p/ claude-sonnet-4-6 p/ análise mais profunda
const LEADS    = path.join(__dirname, "leads.csv");

// ---- rubrica / instruções para o Claude --------------------------------------
const SYSTEM = `Você é o "Medidor de Prompt" da Shift+G, uma empresa de tecnologia e IA.
Sua tarefa: avaliar a QUALIDADE de um prompt que um usuário escreveria para uma IA, com rigor justo e tom didático, encorajador e direto. Escreva tudo em português do Brasil.

Avalie estes 6 critérios, cada um de 0 a 100:
1. Objetivo — está claro o que a pessoa quer que a IA faça?
2. Contexto — há informação de fundo suficiente (situação, dados, público)?
3. Papel/Persona — o prompt define um papel/especialidade para a IA?
4. Formato de saída — especifica como a resposta deve ser (formato, tamanho, estrutura)?
5. Restrições e critérios — há limites, regras, tom, o que evitar, o que priorizar?
6. Especificidade — é concreto e específico, em vez de vago e genérico?

Calcule "nota" geral (0-100) como uma média ponderada coerente com os critérios.
Dê 1-3 "pontos_fortes" e 2-4 "melhorias" — cada melhoria deve ser uma DICA ACIONÁVEL e curta.
Reescreva o prompt do usuário em uma versão claramente melhor ("prompt_reescrito"), aplicando as melhorias. Se o prompt original for muito vago, faça suposições razoáveis e use [colchetes] onde a pessoa deveria preencher algo.
"resumo": uma frase honesta sobre o estado do prompt.

Responda EXCLUSIVAMENTE com um objeto JSON válido, sem texto fora dele, sem markdown, neste formato exato:
{"nota": <int>, "resumo": "<str>", "criterios": [{"nome":"Objetivo","nota":<int>,"comentario":"<str curto>"},{"nome":"Contexto","nota":<int>,"comentario":"<str>"},{"nome":"Papel/Persona","nota":<int>,"comentario":"<str>"},{"nome":"Formato de saída","nota":<int>,"comentario":"<str>"},{"nome":"Restrições","nota":<int>,"comentario":"<str>"},{"nome":"Especificidade","nota":<int>,"comentario":"<str>"}], "pontos_fortes": ["<str>"], "melhorias": ["<str>"], "prompt_reescrito": "<str>"}`;

// ---- nível a partir da nota --------------------------------------------------
function nivelDaNota(n) {
  if (n >= 85) return "Arquiteto de Inteligência";
  if (n >= 70) return "Avançado";
  if (n >= 50) return "Praticante";
  if (n >= 30) return "Aprendiz";
  return "Iniciante";
}

// ---- chamada ao Claude -------------------------------------------------------
async function analisarComClaude(prompt) {
  const resp = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": API_KEY,
      "anthropic-version": "2023-06-01"
    },
    body: JSON.stringify({
      model: MODEL,
      max_tokens: 1600,
      temperature: 0.3,
      system: SYSTEM,
      messages: [{ role: "user", content: `Avalie este prompt:\n\n"""${prompt}"""` }]
    })
  });
  if (!resp.ok) {
    const t = await resp.text();
    throw new Error(`Anthropic ${resp.status}: ${t.slice(0, 300)}`);
  }
  const data = await resp.json();
  let txt = (data.content && data.content[0] && data.content[0].text || "").trim();
  // remove cercas de código se houver
  txt = txt.replace(/^```(json)?/i, "").replace(/```$/, "").trim();
  const start = txt.indexOf("{"), end = txt.lastIndexOf("}");
  if (start >= 0 && end >= 0) txt = txt.slice(start, end + 1);
  return JSON.parse(txt);
}

// ---- MODO DEMO (offline, heurístico) ----------------------------------------
function analisarDemo(prompt) {
  const p = (prompt || "").trim();
  const low = p.toLowerCase();
  const words = p ? p.split(/\s+/).length : 0;
  const has = (arr) => arr.some(w => low.includes(w));
  const clamp = (n) => Math.max(5, Math.min(100, Math.round(n)));

  const objetivo = clamp((has(["crie","escreva","gere","faça","analise","resuma","liste","explique","traduza","planeje"]) ? 70 : 35) + Math.min(words, 25));
  const contexto = clamp((/(porque|para|contexto|sou|somos|minha empresa|público|cliente)/.test(low) ? 65 : 25) + Math.min(words / 2, 25));
  const papel = clamp(/(aja como|você é|atue como|como um|especialista|consultor)/.test(low) ? 80 : 15);
  const formato = clamp(/(em formato|tabela|lista|bullet|tópicos|markdown|json|parágrafo|palavras|itens|passo a passo)/.test(low) ? 80 : 25);
  const restricoes = clamp(/(não|evite|tom|formal|informal|máximo|mínimo|apenas|somente|priorize)/.test(low) ? 70 : 30);
  const espec = clamp(words >= 25 ? 75 : words >= 12 ? 55 : 30);

  const criterios = [
    { nome: "Objetivo", nota: objetivo, comentario: objetivo > 60 ? "A intenção principal aparece." : "Diga com um verbo claro o que você quer (crie, analise, resuma...)." },
    { nome: "Contexto", nota: contexto, comentario: contexto > 60 ? "Há algum contexto." : "Explique a situação, para quem é e por quê." },
    { nome: "Papel/Persona", nota: papel, comentario: papel > 60 ? "Você definiu um papel para a IA." : "Dê um papel à IA (ex.: 'aja como um especialista em...')." },
    { nome: "Formato de saída", nota: formato, comentario: formato > 60 ? "O formato esperado está indicado." : "Diga o formato: tabela, lista, nº de palavras, tom." },
    { nome: "Restrições", nota: restricoes, comentario: restricoes > 60 ? "Há limites/critérios." : "Inclua restrições: tom, tamanho, o que evitar." },
    { nome: "Especificidade", nota: espec, comentario: espec > 60 ? "Bom nível de detalhe." : "Troque termos vagos por detalhes concretos." }
  ];
  const nota = Math.round(criterios.reduce((s, c) => s + c.nota, 0) / criterios.length);
  const melhorias = criterios.filter(c => c.nota < 60).slice(0, 4).map(c => c.comentario);
  return {
    nota,
    resumo: nota >= 70 ? "Bom prompt — uns ajustes e fica nível arquiteto." : "Há uma boa base, mas dá pra deixar bem mais forte.",
    criterios,
    pontos_fortes: criterios.filter(c => c.nota >= 65).slice(0, 3).map(c => `${c.nome}: ${c.comentario}`),
    melhorias: melhorias.length ? melhorias : ["Adicione contexto e formato de saída para subir de nível."],
    prompt_reescrito: `Aja como um especialista no tema. Contexto: [explique sua situação e seu público].\nTarefa: ${p || "[o que você quer]"}.\nFormato da resposta: [ex.: lista de 5 itens, tom profissional].\nRestrições: [o que evitar / priorizar].`,
    _modo: "demo"
  };
}

// ---- helpers HTTP ------------------------------------------------------------
function readBody(req) {
  return new Promise((resolve) => {
    let b = "";
    req.on("data", c => { b += c; if (b.length > 1e6) req.destroy(); });
    req.on("end", () => { try { resolve(JSON.parse(b || "{}")); } catch { resolve({}); } });
  });
}
function send(res, code, obj) {
  res.writeHead(code, { "content-type": "application/json; charset=utf-8" });
  res.end(JSON.stringify(obj));
}
function csvEscape(s) { return `"${String(s == null ? "" : s).replace(/"/g, '""')}"`; }

// ---- servidor ----------------------------------------------------------------
const server = http.createServer(async (req, res) => {
  // CORS liberado (útil se a página for servida de outro lugar)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Headers", "content-type");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  if (req.method === "OPTIONS") { res.writeHead(204); return res.end(); }

  if (req.method === "GET" && (req.url === "/" || req.url === "/index.html")) {
    return fs.readFile(path.join(__dirname, "index.html"), (e, buf) => {
      if (e) { res.writeHead(500); return res.end("index.html não encontrado"); }
      res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
      res.end(buf);
    });
  }

  if (req.method === "POST" && req.url === "/analisar") {
    const { prompt } = await readBody(req);
    if (!prompt || !prompt.trim()) return send(res, 400, { erro: "Prompt vazio." });
    try {
      let r;
      if (API_KEY) {
        try { r = await analisarComClaude(prompt); r._modo = "ia"; }
        catch (e) { console.error("Falha na IA, caindo p/ demo:", e.message); r = analisarDemo(prompt); }
      } else {
        r = analisarDemo(prompt);
      }
      r.nota = Math.max(0, Math.min(100, Math.round(r.nota)));
      r.nivel = nivelDaNota(r.nota); // nível sempre calculado aqui (consistência)
      return send(res, 200, r);
    } catch (e) {
      console.error(e);
      return send(res, 500, { erro: "Não foi possível analisar agora." });
    }
  }

  if (req.method === "POST" && req.url === "/lead") {
    const d = await readBody(req);
    if (!d.email) return send(res, 400, { erro: "E-mail obrigatório." });
    if (!fs.existsSync(LEADS)) fs.writeFileSync(LEADS, "data,nome,email,nota,nivel,prompt\n");
    const linha = [new Date().toISOString(), d.nome, d.email, d.nota, d.nivel, d.prompt].map(csvEscape).join(",") + "\n";
    fs.appendFileSync(LEADS, linha);
    return send(res, 200, { ok: true });
  }

  res.writeHead(404); res.end("not found");
});

server.listen(PORT, () => {
  console.log(`\n  Medidor de Prompt — Shift+G`);
  console.log(`  ▶ http://localhost:${PORT}`);
  console.log(`  Modo: ${API_KEY ? "IA REAL (" + MODEL + ")" : "DEMO (offline) — configure ANTHROPIC_API_KEY para IA real"}`);
  console.log(`  Leads serão salvos em: ${LEADS}\n`);
});
