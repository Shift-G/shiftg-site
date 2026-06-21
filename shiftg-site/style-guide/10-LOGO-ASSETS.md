# 10 — Logo & Assets

## Logo Atualizada (Junho 2026)

A logo da SHIFT+G foi atualizada. A versão atual apresenta:

- **"shift"** em azul (`#003FCD`) — tipografia sans-serif bold customizada
- **"+"** entre shift e gnosis em azul (`#003FCD`) — símbolo de conexão
- **"gnosis"** em preto (`#000000`) — tipografia serif bold/black

### Composição visual
A logo combina intencionalmente duas famílias tipográficas:
1. **Sans-serif geométrica** para "shift" → modernidade, tecnologia, precisão
2. **Serif clássica** para "gnosis" → sabedoria, profundidade, tradição intelectual

O "+" azul centralizado conecta as duas metades, simbolizando a união entre tecnologia e conhecimento.

---

## Variantes de Logo

### 1. Logo padrão (fundo claro)
- "shift" → Azul `#003FCD`
- "+" → Azul `#003FCD`  
- "gnosis" → Preto `#000000`

### 2. Logo monocromática preta (documentos formais)
- "shift" → Preto `#000000`
- "+" → Preto `#000000`
- "gnosis" → Preto `#000000`

### 3. Logo branca (fundos escuros)
- "shift" → Branco `#FFFFFF`
- "+" → Branco `#FFFFFF`
- "gnosis" → Branco `#FFFFFF`

### 4. Logo ícone (favicon, app icon)
- Apenas a letra "G" estilizada em azul `#003FCD` sobre fundo branco
- Ou ícone SVG compacto com símbolo "+"

---

## SVG da Logo (navbar — versão completa inline)

A logo é renderizada inline como SVG na navbar para máxima performance e controle de cor.

```
Dimensões originais do viewBox: 0 0 3022 1335
Dimensões renderizadas: width="222" height="48"
```

### Cores dos paths no SVG:
| Path | Fill | Elemento |
|---|---|---|
| Path 1 (G geométrico) | `#003FCD` | Letra "G" principal |
| Paths 2-6 (s, h, i, f, t) | `#000000` (black) | Letras "shift" |
| Path 7 (cruz +) | `#003FCD` | Símbolo "+" |

---

## Regras de Uso da Logo

### Área de segurança
- Mínimo de **1x a altura da letra "s"** ao redor de toda a logo
- Nunca sobrepor a logo com outros elementos

### Tamanho mínimo
- **Digital**: mínimo 120px de largura
- **Impressão**: mínimo 30mm de largura

### Fundo
```
✅ Fundo branco sólido
✅ Fundo off-white (#f4f4f1)
✅ Fundo claro uniforme com contraste adequado
✅ Fundo escuro sólido (com variante branca)

❌ Sobre fotografias complexas sem overlay
❌ Sobre gradientes multicoloridos
❌ Sobre padrões/texturas
❌ Sobre fundos com contraste insuficiente
```

### Transformações
```
❌ NUNCA rotacionar
❌ NUNCA distorcer (stretch/squeeze)
❌ NUNCA alterar as cores
❌ NUNCA adicionar sombra à logo
❌ NUNCA adicionar outline/contorno
❌ NUNCA animar a logo
❌ NUNCA separar os elementos (shift de gnosis)
```

---

## Ícone / Favicon

### favicon.ico
- Formato: .ico
- Tamanhos incluídos: 16x16, 32x32, 48x48

### apple-icon.png
- Formato: PNG
- Tamanho: 180x180px

### Web App Manifest Icons
- `web-app-manifest-192x192.png` — 192×192px
- `web-app-manifest-512x512.png` — 512×512px

### Open Graph Image
- Gerada dinamicamente via `opengraph-image.tsx`
- Tamanho: 1200×630px

---

## Arquivos de Logo no Projeto

```
public/
├── logo.png                        # Logo PNG alta resolução
├── logo-shift-gnosis.png           # Logo alternativa
├── favicon.ico                     # Favicon
├── apple-icon.png                  # Apple Touch Icon
├── web-app-manifest-192x192.png    # PWA icon small
├── web-app-manifest-512x512.png    # PWA icon large
└── ...

src/app/
├── icon0.svg                       # SVG icon
├── icon1.png                       # PNG icon
├── apple-icon.png                  # Apple icon (app dir)
└── favicon.ico                     # Favicon (app dir)
```

---

## Paleta da Marca (resumo visual)

```
┌─────────────────────────────────────────────┐
│                                             │
│   ████████  #003FCD  Azul Primário          │
│   ████████  #0051FF  Azul de Marca          │
│   ████████  #09090B  Preto / Foreground     │
│   ████████  #FFFFFF  Branco / Background    │
│   ████████  #f4f4f1  Off-white (bg alt)     │
│   ████████  #eceae4  Stone (hover)          │
│   ████████  #b8923a  Gold (acento)          │
│                                             │
└─────────────────────────────────────────────┘
```
