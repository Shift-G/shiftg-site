"use client";

import { useEffect, useState } from "react";
import { Box, HStack, Input, Text, Textarea, VStack } from "@chakra-ui/react";
import { ArrowRight, Check } from "lucide-react";
import { API_URL } from "@/constants";

/* ── types (English) — displayed strings stay pt-BR ── */
interface Criterion {
  name: string;
  score: number;
  comment: string;
}
interface Analysis {
  score: number;
  summary: string;
  level: string;
  mode: "ai" | "demo";
  criteria: Criterion[];
  strengths: string[];
  improvements: string[];
  rewritten_prompt: string;
}

const EXAMPLES = [
  "Escreva um e-mail para cobrar um cliente atrasado há 30 dias",
  "Me ajude a criar um plano de marketing",
  "Resuma este relatório",
  "Crie um post para o Instagram da minha empresa",
];

const RING_C = 351.86; // 2π·56

export function PromptMeterClient() {
  const [view, setView] = useState<"input" | "loading" | "result">("input");
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState("");
  const [analysis, setAnalysis] = useState<Analysis | null>(null);

  async function analyze() {
    const value = prompt.trim();
    setError("");
    if (value.length < 5) {
      setError("Escreva um prompt um pouquinho maior 🙂");
      return;
    }
    setView("loading");
    try {
      const res = await fetch(`${API_URL}/prompt-meter/analyze`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ prompt: value }),
      });
      const json = await res.json();
      if (!res.ok || json.detail) throw new Error(json.detail || "error");
      setAnalysis(json as Analysis);
      setView("result");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (e) {
      console.error(e);
      setView("input");
      setError("Não consegui analisar agora. Tente de novo.");
    }
  }

  function reset() {
    setPrompt("");
    setAnalysis(null);
    setView("input");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <Box
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.200"
      p={{ base: 6, md: 10 }}
      w="full"
      maxW="720px"
      mx="auto"
    >
      {view === "input" && (
        <VStack align="stretch" gap={0}>
          <HStack
            fontFamily="mono"
            fontSize="2xs"
            fontWeight={600}
            letterSpacing="0.16em"
            textTransform="uppercase"
            color="blue.solid"
            gap="10px"
            mb={4}
          >
            <Box w="18px" h="1.5px" bg="blue.solid" />
            <Text>Desafio Shift+G</Text>
          </HStack>

          <Text as="h1" fontSize={{ base: "32px", md: "44px" }} lineHeight={1.05} letterSpacing="-1px" color="fg" mb={3}>
            <Text as="span" fontWeight={800}>
              Qual é o seu{" "}
            </Text>
            <Text as="span" fontFamily="serif" fontStyle="italic" fontWeight={400} color="blue.solid">
              nível de prompt
            </Text>
            <Text as="span" fontWeight={800}>
              ?
            </Text>
          </Text>

          <Text color="fg.muted" fontSize="md" lineHeight={1.6} mb={6}>
            Escreva o que você pediria para uma IA. A nossa analisa, pontua e te mostra como deixar muito melhor — na hora.
          </Text>

          <Textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Ex.: Escreva um e-mail para cobrar um cliente que está atrasado há 30 dias..."
            minH="140px"
            size="lg"
            rounded="none"
            bg="off"
            border="1px solid"
            borderColor="blackAlpha.200"
            fontSize="md"
            _placeholder={{ color: "blackAlpha.400" }}
            _focus={{ borderColor: "blue.solid", bg: "white", outline: "none", boxShadow: "none" }}
          />
          <Text fontFamily="mono" fontSize="xs" color="fg.subtle" mt={2}>
            {prompt.length} caracteres
          </Text>

          <HStack flexWrap="wrap" gap={2} mt={4}>
            {EXAMPLES.map((t) => (
              <Box
                key={t}
                as="button"
                onClick={() => setPrompt(t)}
                fontSize="xs"
                color="blue.solid"
                bg="off"
                border="1px solid"
                borderColor="blackAlpha.200"
                px="12px"
                py="6px"
                cursor="pointer"
                transition="background .12s"
                _hover={{ bg: "blue.subtle" }}
              >
                {t}
              </Box>
            ))}
          </HStack>

          {error && (
            <Text color="red.500" fontSize="sm" mt={3}>
              {error}
            </Text>
          )}

          <Box
            as="button"
            onClick={analyze}
            mt={6}
            w="full"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="10px"
            bg="blue.solid"
            color="white"
            py="16px"
            fontWeight={700}
            fontSize="md"
            cursor="pointer"
            transition="all 0.2s"
            _hover={{ bg: "blue.fg" }}
          >
            Analisar meu prompt <ArrowRight size={16} />
          </Box>
        </VStack>
      )}

      {view === "loading" && (
        <VStack py="60px" gap={3}>
          <style>{`@keyframes promptMeterPulse{0%,100%{transform:scale(1);opacity:.5}50%{transform:scale(1.18);opacity:1}}`}</style>
          <Box
            as="span"
            fontFamily="serif"
            fontSize="64px"
            color="blue.solid"
            lineHeight={1}
            style={{ animation: "promptMeterPulse 1.1s ease-in-out infinite" }}
          >
            +
          </Box>
          <Text color="fg.muted" fontSize="md">
            Analisando o seu prompt...
          </Text>
        </VStack>
      )}

      {view === "result" && analysis && <Result analysis={analysis} prompt={prompt} onReset={reset} />}
    </Box>
  );
}

/* ── result ── */
function Result({ analysis, prompt, onReset }: { analysis: Analysis; prompt: string; onReset: () => void }) {
  const [score, setScore] = useState(0);
  const [barsOn, setBarsOn] = useState(false);

  useEffect(() => {
    const target = Math.max(0, Math.min(100, analysis.score));
    const t0 = performance.now();
    const duration = 900;
    let raf = 0;
    const step = (t: number) => {
      const k = Math.min(1, (t - t0) / duration);
      const eased = 1 - Math.pow(1 - k, 3);
      setScore(Math.round(eased * target));
      if (k < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    const tm = setTimeout(() => setBarsOn(true), 150);
    return () => {
      cancelAnimationFrame(raf);
      clearTimeout(tm);
    };
  }, [analysis.score]);

  const offset = RING_C - RING_C * (score / 100);
  const title = analysis.score >= 85 ? "Arquiteto de Inteligência" : `Você está no nível ${analysis.level}`;

  return (
    <VStack align="stretch" gap={0}>
      {/* score */}
      <HStack gap={{ base: 4, md: 6 }} align="center">
        <Box position="relative" w={{ base: "108px", md: "128px" }} h={{ base: "108px", md: "128px" }} flexShrink={0}>
          <svg width="100%" height="100%" viewBox="0 0 128 128" style={{ transform: "rotate(-90deg)" }}>
            <circle cx="64" cy="64" r="56" fill="none" stroke="var(--chakra-colors-blackAlpha-200)" strokeWidth="12" />
            <circle
              cx="64"
              cy="64"
              r="56"
              fill="none"
              stroke="var(--chakra-colors-blue-solid)"
              strokeWidth="12"
              strokeLinecap="round"
              strokeDasharray={RING_C}
              strokeDashoffset={offset}
            />
          </svg>
          <VStack position="absolute" inset={0} justify="center" gap={0}>
            <Text fontFamily="mono" fontSize={{ base: "28px", md: "34px" }} fontWeight={500} color="fg" lineHeight={1}>
              {score}
            </Text>
            <Text fontSize="2xs" color="fg.subtle" letterSpacing="0.1em">
              DE 100
            </Text>
          </VStack>
        </Box>

        <VStack align="flex-start" gap={1}>
          <Box bg="blue.solid" color="white" px="14px" py="6px" fontWeight={700} fontSize="xs">
            {analysis.level}
          </Box>
          <Text fontFamily="serif" fontSize={{ base: "20px", md: "23px" }} lineHeight={1.1} color="fg">
            {title}
          </Text>
          <Text color="fg.muted" fontSize="sm">
            {analysis.summary}
          </Text>
        </VStack>
      </HStack>

      {/* criteria */}
      <Block title="Análise por critério">
        <VStack align="stretch" gap={3}>
          {analysis.criteria.map((c, i) => (
            <Box key={c.name}>
              <HStack justify="space-between" mb={1}>
                <Text fontSize="sm" fontWeight={600} color="fg">
                  {c.name}
                </Text>
                <Text fontFamily="mono" fontSize="sm" color="blue.solid">
                  {c.score}
                </Text>
              </HStack>
              <Box h="8px" bg="off" overflow="hidden">
                <Box
                  h="full"
                  bg="blue.solid"
                  w={barsOn ? `${Math.max(3, c.score)}%` : "0%"}
                  transition={`width .9s cubic-bezier(.2,.7,.2,1) ${i * 0.09}s`}
                />
              </Box>
              <Text fontSize="xs" color="fg.muted" mt={1.5}>
                {c.comment}
              </Text>
            </Box>
          ))}
        </VStack>
      </Block>

      {/* strengths */}
      {analysis.strengths.length > 0 && (
        <Block title="O que você mandou bem">
          <VStack align="stretch" gap={2}>
            {analysis.strengths.map((x, i) => (
              <HStack key={i} align="flex-start" gap={2}>
                <Box color="green.600" mt="2px" flexShrink={0}>
                  <Check size={16} strokeWidth={3} />
                </Box>
                <Text fontSize="sm" color="fg" lineHeight={1.5}>
                  {x}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Block>
      )}

      {/* improvements */}
      {analysis.improvements.length > 0 && (
        <Block title="Como subir de nível">
          <VStack align="stretch" gap={2}>
            {analysis.improvements.map((x, i) => (
              <HStack key={i} align="flex-start" gap={2}>
                <Box color="blue.solid" mt="2px" flexShrink={0}>
                  <ArrowRight size={16} strokeWidth={3} />
                </Box>
                <Text fontSize="sm" color="fg" lineHeight={1.5}>
                  {x}
                </Text>
              </HStack>
            ))}
          </VStack>
        </Block>
      )}

      {/* rewritten prompt */}
      <Block title="Seu prompt, reescrito pela Shift+G">
        <Box bg="off" border="1px solid" borderColor="blackAlpha.200" p={4}>
          <Text fontFamily="mono" fontSize="xs" lineHeight={1.55} color="fg" whiteSpace="pre-wrap" wordBreak="break-word">
            {analysis.rewritten_prompt}
          </Text>
          <CopyButton text={analysis.rewritten_prompt} />
        </Box>
      </Block>

      <LeadCapture analysis={analysis} prompt={prompt} />

      <Box
        as="button"
        onClick={onReset}
        mt={4}
        w="full"
        py="13px"
        fontSize="sm"
        fontWeight={600}
        color="blue.solid"
        bg="white"
        border="1px solid"
        borderColor="blackAlpha.200"
        cursor="pointer"
        _hover={{ bg: "off" }}
      >
        Analisar outro prompt
      </Box>

      <Text textAlign="center" fontFamily="mono" fontSize="2xs" color="fg.subtle" mt={4}>
        {analysis.mode === "demo" ? "modo demonstração (offline)" : "análise por IA"}
      </Text>
    </VStack>
  );
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <Box mt={6}>
      <Text fontSize="2xs" fontWeight={700} letterSpacing="0.12em" textTransform="uppercase" color="fg.subtle" mb={3}>
        {title}
      </Text>
      {children}
    </Box>
  );
}

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <Box
      as="button"
      onClick={() => {
        navigator.clipboard.writeText(text).then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 1600);
        });
      }}
      mt={3}
      fontSize="xs"
      fontWeight={600}
      color="blue.solid"
      bg="white"
      border="1px solid"
      borderColor="blackAlpha.200"
      px="14px"
      py="9px"
      cursor="pointer"
    >
      {copied ? "Copiado ✓" : "Copiar prompt melhorado"}
    </Box>
  );
}

/* ── lead capture ── */
function LeadCapture({ analysis, prompt }: { analysis: Analysis; prompt: string }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  async function submit() {
    setError("");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Digite um e-mail válido.");
      return;
    }
    if (!consent) {
      setError("Marque a autorização para continuar.");
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_URL}/prompt-meter/lead`, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          prompt,
          score: analysis.score,
          level: analysis.level,
          summary: analysis.summary,
          criteria: analysis.criteria,
          strengths: analysis.strengths,
          improvements: analysis.improvements,
          rewritten_prompt: analysis.rewritten_prompt,
        }),
      });
      if (!res.ok) throw new Error("failed");
      setDone(true);
    } catch {
      setError("Não foi possível salvar agora. Tente de novo.");
    } finally {
      setLoading(false);
    }
  }

  if (done) {
    return (
      <Box mt={6} bg="blue.solid" color="white" p={6} textAlign="center">
        <Text fontFamily="serif" fontSize="xl" mb={1}>
          Prontinho! 🎉
        </Text>
        <Text fontSize="sm" opacity={0.92}>
          Seu prompt melhorado está a caminho do seu e-mail.
        </Text>
      </Box>
    );
  }

  const inputProps = {
    rounded: "none" as const,
    bg: "white",
    color: "fg",
    border: "none",
    size: "lg" as const,
    _placeholder: { color: "blackAlpha.500" },
    _focus: { outline: "none", boxShadow: "none" },
  };

  return (
    <Box mt={6} bg="blue.solid" color="white" p={6}>
      <Text fontFamily="serif" fontSize="xl" lineHeight={1.15} mb={1}>
        Receba por e-mail seu prompt melhorado
      </Text>
      <Text fontSize="sm" opacity={0.92} mb={4}>
        Informe seu nome e e-mail: enviamos a versão reescrita do seu prompt, com a cara da Shift+G.
      </Text>

      <VStack align="stretch" gap={2}>
        <Input {...inputProps} placeholder="Seu nome" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
        <Input
          {...inputProps}
          type="email"
          placeholder="Seu melhor e-mail"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <HStack align="flex-start" gap={2} fontSize="xs" opacity={0.92} mt={1}>
          <input
            type="checkbox"
            checked={consent}
            onChange={(e) => setConsent(e.target.checked)}
            style={{ marginTop: "3px", width: "16px", height: "16px", flexShrink: 0 }}
          />
          <Text lineHeight={1.4}>Autorizo a Shift+G a me enviar o material e entrar em contato.</Text>
        </HStack>
        {error && (
          <Text color="red.200" fontSize="xs">
            {error}
          </Text>
        )}
        <Box
          as="button"
          onClick={submit}
          mt={2}
          w="full"
          py="14px"
          fontSize="sm"
          fontWeight={700}
          color="blue.solid"
          bg="white"
          cursor={loading ? "default" : "pointer"}
          opacity={loading ? 0.7 : 1}
        >
          {loading ? "Enviando..." : "Receber por e-mail →"}
        </Box>
      </VStack>
    </Box>
  );
}
