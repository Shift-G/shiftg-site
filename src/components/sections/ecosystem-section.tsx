"use client";

import { Box, Flex, HStack, Text } from "@chakra-ui/react";
import { useEffect, useRef } from "react";

/* ── Section Tag ── */
function SectionTag({ children, dark }: { children: string; dark?: boolean }) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={600}
      letterSpacing="0.16em"
      textTransform="uppercase"
      color={dark ? "whiteAlpha.400" : "blue.solid"}
      gap="10px"
      mb={4}
    >
      <Box w="18px" h="1.5px" bg={dark ? "whiteAlpha.200" : "blue.solid"} />
      <Text>{children}</Text>
    </HStack>
  );
}

/* ── Legend ── */
function LegendItem({
  label,
  color,
  filled,
}: {
  label: string;
  color: string;
  filled?: boolean;
}) {
  return (
    <HStack
      fontFamily="mono"
      fontSize="2xs"
      fontWeight={500}
      letterSpacing="0.1em"
      textTransform="uppercase"
      color={color}
      gap={2}
    >
      <Box
        w="10px"
        h="10px"
        border="1.5px solid"
        borderColor="currentColor"
        borderRadius="full"
        bg={filled ? "currentColor" : "transparent"}
        flexShrink={0}
      />
      <Text>{label}</Text>
    </HStack>
  );
}

/* ── Canvas types ── */
interface EcoNode {
  id: string;
  label: string;
  sub: string;
  type: number;
  x: number;
  y: number;
  w: number;
  h: number;
}

interface Particle {
  from: EcoNode;
  to: EcoNode;
  t: number;
  spd: number;
  size: number;
  alpha: number;
  trail: { x: number; y: number; a: number }[];
}

const T = { CENTER: 0, INPUT: 1, TECH: 2, OUTPUT: 3 };

const NODES_DATA: Omit<EcoNode, "x" | "y" | "w" | "h">[] = [
  { id: "sg", label: "Shift+G", sub: "Arquitetura & IA", type: T.CENTER },
  { id: "op", label: "Processos", sub: "Operação interna", type: T.INPUT },
  { id: "rh", label: "RH & Pessoas", sub: "Gestão humana", type: T.INPUT },
  { id: "data", label: "Dados dispersos", sub: "Sem estrutura", type: T.INPUT },
  { id: "tech0", label: "Tech legado", sub: "Sistemas antigos", type: T.INPUT },
  { id: "ai", label: "IA", sub: "LLMs · Automação", type: T.TECH },
  { id: "arch", label: "Arquitetura", sub: "Sistemas & APIs", type: T.TECH },
  { id: "train", label: "Treinamento", sub: "Capacitação", type: T.TECH },
  { id: "rhaas", label: "RHaaS", sub: "Terceirização RH", type: T.TECH },
  { id: "mat", label: "Maturidade", sub: "Digital", type: T.OUTPUT },
  { id: "eff", label: "Eficiência", sub: "Operacional", type: T.OUTPUT },
  { id: "dec", label: "Decisões", sub: "Dados", type: T.OUTPUT },
  { id: "scl", label: "Escala", sub: "Crescimento real", type: T.OUTPUT },
];

const EDGES: [string, string][] = [
  ["op", "sg"], ["rh", "sg"], ["data", "sg"], ["tech0", "sg"],
  ["sg", "ai"], ["sg", "arch"], ["sg", "train"], ["sg", "rhaas"],
  ["ai", "mat"], ["ai", "eff"], ["arch", "eff"], ["arch", "dec"],
  ["train", "scl"], ["train", "mat"], ["rhaas", "eff"], ["rhaas", "scl"],
  ["ai", "dec"], ["arch", "scl"],
];

function nodeColor(type: number, alpha: number) {
  switch (type) {
    case T.CENTER: return `rgba(0,81,255,${alpha})`;
    case T.INPUT: return `rgba(200,200,195,${alpha})`;
    case T.TECH: return `rgba(184,146,58,${alpha})`;
    case T.OUTPUT: return `rgba(0,180,100,${alpha})`;
    default: return `rgba(255,255,255,${alpha})`;
  }
}

function ctrl(a: EcoNode, b: EcoNode) {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const len = Math.sqrt(dx * dx + dy * dy) || 1;
  const curve = len * 0.22;
  return { x: mx - (dy / len) * curve, y: my + (dx / len) * curve };
}

function bezierPt(a: EcoNode, cp: { x: number; y: number }, b: EcoNode, t: number) {
  const mt = 1 - t;
  return {
    x: mt * mt * a.x + 2 * mt * t * cp.x + t * t * b.x,
    y: mt * mt * a.y + 2 * mt * t * cp.y + t * t * b.y,
  };
}

/* ── Measure text width helper ── */
function measureLabel(ctx: CanvasRenderingContext2D, label: string, sub: string, isCenter: boolean) {
  ctx.font = isCenter
    ? "700 13px 'Geist Mono Variable','Geist Mono',monospace"
    : "600 11px 'DM Sans',sans-serif";
  const lw = ctx.measureText(label).width;

  ctx.font = "400 10px 'DM Sans',sans-serif";
  const sw = ctx.measureText(sub).width;

  return Math.max(lw, sw);
}

function EcoCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const animRef = useRef(false);
  const nodesRef = useRef<EcoNode[]>([]);
  const particlesRef = useRef<Particle[]>([]);
  const nodeMapRef = useRef<Record<string, EcoNode>>({});
  const pulseRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    const wrap = wrapRef.current;
    if (!canvas || !wrap) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let W = 0;
    let H = 0;
    const MAX_PAR = 40;

    // Initialize nodes
    const nodes: EcoNode[] = NODES_DATA.map((n) => ({ ...n, x: 0, y: 0, w: 0, h: 0 }));
    nodesRef.current = nodes;
    const nodeMap: Record<string, EcoNode> = {};
    nodes.forEach((n) => { nodeMap[n.id] = n; });
    nodeMapRef.current = nodeMap;

    function layoutNodes() {
      const cx = W / 2;
      const cy = H / 2;

      // Measure and size nodes
      const PAD_X = 22;
      const PAD_Y = 16;
      nodes.forEach((n) => {
        const textW = measureLabel(ctx!, n.label, n.sub, n.type === T.CENTER);
        n.w = Math.max(textW + PAD_X * 2, n.type === T.CENTER ? 120 : 90);
        n.h = n.type === T.CENTER ? 54 : 46;
      });

      // Center node
      nodes[0].x = cx;
      nodes[0].y = cy;

      const inputs = nodes.filter((n) => n.type === T.INPUT);
      inputs.forEach((n, i) => {
        n.x = W * 0.1;
        n.y = H * 0.18 + i * ((H * 0.64) / Math.max(inputs.length - 1, 1));
      });

      const techs = nodes.filter((n) => n.type === T.TECH);
      const tx = [cx - W * 0.16, cx + W * 0.06, cx - W * 0.06, cx + W * 0.16];
      const ty = [cy - H * 0.33, cy - H * 0.33, cy + H * 0.33, cy + H * 0.33];
      techs.forEach((n, i) => { n.x = tx[i]; n.y = ty[i]; });

      const outs = nodes.filter((n) => n.type === T.OUTPUT);
      outs.forEach((n, i) => {
        n.x = W * 0.9;
        n.y = H * 0.18 + i * ((H * 0.64) / Math.max(outs.length - 1, 1));
      });
    }

    function resize() {
      W = wrap!.offsetWidth || 800;
      H = wrap!.offsetHeight || 580;
      canvas!.width = Math.round(W * dpr);
      canvas!.height = Math.round(H * dpr);
      canvas!.style.width = W + "px";
      canvas!.style.height = H + "px";
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0);
      layoutNodes();
    }

    function spawnParticle() {
      if (particlesRef.current.length >= MAX_PAR) return;
      const edge = EDGES[Math.floor(Math.random() * EDGES.length)];
      const from = nodeMap[edge[0]];
      const to = nodeMap[edge[1]];
      if (!from || !to) return;
      particlesRef.current.push({
        from, to, t: 0,
        spd: 0.0006 + Math.random() * 0.002,
        size: 2.5 + Math.random() * 2,
        alpha: 0.6 + Math.random() * 0.4,
        trail: [],
      });
    }

    function draw() {
      if (!animRef.current) return;
      pulseRef.current += 0.012;
      const pulse = Math.sin(pulseRef.current) * 0.5 + 0.5;

      ctx!.fillStyle = "#0e0e0c";
      ctx!.fillRect(0, 0, W, H);

      // Edges - smoother curves with gradient strokes
      EDGES.forEach(([fid, tid]) => {
        const f = nodeMap[fid];
        const t = nodeMap[tid];
        if (!f || !t) return;
        const cp = ctrl(f, t);

        // Subtle glow line
        ctx!.beginPath();
        ctx!.moveTo(f.x, f.y);
        ctx!.quadraticCurveTo(cp.x, cp.y, t.x, t.y);
        ctx!.strokeStyle = `rgba(255,255,255,${0.03 + pulse * 0.015})`;
        ctx!.lineWidth = 2.5;
        ctx!.lineCap = "round";
        ctx!.stroke();

        // Core line
        ctx!.beginPath();
        ctx!.moveTo(f.x, f.y);
        ctx!.quadraticCurveTo(cp.x, cp.y, t.x, t.y);
        ctx!.strokeStyle = `rgba(255,255,255,${0.05 + pulse * 0.02})`;
        ctx!.lineWidth = 1;
        ctx!.lineCap = "round";
        ctx!.stroke();
      });

      // Nodes with sharp-edged rects
      nodes.forEach((n) => {
        const hw = n.w / 2;
        const hh = n.h / 2;

        // Center glow
        if (n.type === T.CENTER) {
          const g = ctx!.createRadialGradient(n.x, n.y, 0, n.x, n.y, hw * 3);
          g.addColorStop(0, `rgba(0,81,255,${0.1 + pulse * 0.06})`);
          g.addColorStop(1, "rgba(0,81,255,0)");
          ctx!.fillStyle = g;
          ctx!.beginPath();
          ctx!.arc(n.x, n.y, hw * 3, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Node background - sharp rect
        ctx!.fillStyle = nodeColor(n.type, n.type === T.CENTER ? 0.14 : 0.07);
        ctx!.fillRect(n.x - hw, n.y - hh, n.w, n.h);

        // Node border - sharp rect
        ctx!.strokeStyle = nodeColor(n.type, n.type === T.CENTER ? (0.7 + pulse * 0.3) : 0.4);
        ctx!.lineWidth = n.type === T.CENTER ? 1.5 : 1;
        ctx!.strokeRect(n.x - hw, n.y - hh, n.w, n.h);

        // Label text
        ctx!.textAlign = "center";
        ctx!.textBaseline = "middle";
        ctx!.fillStyle = n.type === T.CENTER ? "rgba(255,255,255,.95)" : "rgba(255,255,255,.7)";
        ctx!.font = n.type === T.CENTER
          ? "700 13px 'Geist Mono Variable','Geist Mono',monospace"
          : "600 11px 'DM Sans',sans-serif";
        ctx!.fillText(n.label, n.x, n.y - 6);

        // Sublabel text
        ctx!.fillStyle = "rgba(255,255,255,.38)";
        ctx!.font = "400 10px 'DM Sans',sans-serif";
        ctx!.fillText(n.sub, n.x, n.y + 9);
      });

      // Particles with natural glow trail
      const particles = particlesRef.current;
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        p.t += p.spd;
        if (p.t >= 1) { particles.splice(i, 1); continue; }

        const cp = ctrl(p.from, p.to);
        const pos = bezierPt(p.from, cp, p.to, p.t);

        // Add to trail
        p.trail.push({ x: pos.x, y: pos.y, a: 1 });
        if (p.trail.length > 12) p.trail.shift();

        // Fade in/out
        const fade = p.t < 0.1 ? p.t / 0.1 : p.t > 0.85 ? (1 - p.t) / 0.15 : 1;

        // Draw trail - smooth gradient tail
        for (let j = 0; j < p.trail.length; j++) {
          const tp = p.trail[j];
          const trailFade = (j + 1) / p.trail.length;
          const ta = p.alpha * fade * trailFade * 0.3;
          const ts = p.size * trailFade * 0.6;

          const tg = ctx!.createRadialGradient(tp.x, tp.y, 0, tp.x, tp.y, ts * 3);
          tg.addColorStop(0, nodeColor(p.from.type, ta));
          tg.addColorStop(1, "rgba(0,0,0,0)");
          ctx!.fillStyle = tg;
          ctx!.beginPath();
          ctx!.arc(tp.x, tp.y, ts * 3, 0, Math.PI * 2);
          ctx!.fill();
        }

        // Core glow particle (circle, not square)
        const a = p.alpha * fade;
        const coreSize = p.size;

        // Outer soft glow
        const gp = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, coreSize * 6);
        gp.addColorStop(0, nodeColor(p.from.type, a * 0.25));
        gp.addColorStop(0.4, nodeColor(p.from.type, a * 0.08));
        gp.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = gp;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, coreSize * 6, 0, Math.PI * 2);
        ctx!.fill();

        // Inner bright core
        const gc = ctx!.createRadialGradient(pos.x, pos.y, 0, pos.x, pos.y, coreSize * 1.5);
        gc.addColorStop(0, nodeColor(p.from.type, a * 0.9));
        gc.addColorStop(0.5, nodeColor(p.from.type, a * 0.4));
        gc.addColorStop(1, "rgba(0,0,0,0)");
        ctx!.fillStyle = gc;
        ctx!.beginPath();
        ctx!.arc(pos.x, pos.y, coreSize * 1.5, 0, Math.PI * 2);
        ctx!.fill();
      }

      // Spawn particles more frequently for dynamism
      if (Math.random() < 0.06) spawnParticle();
      requestAnimationFrame(draw);
    }

    resize();

    let resizeTimer: ReturnType<typeof setTimeout>;
    const handleResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 100);
    };
    window.addEventListener("resize", handleResize);

    const obs = new IntersectionObserver(
      (entries) => {
        const visible = entries[0].isIntersecting;
        if (visible && !animRef.current) {
          animRef.current = true;
          requestAnimationFrame(draw);
        } else if (!visible) {
          animRef.current = false;
        }
      },
      { threshold: 0.05 }
    );
    obs.observe(canvas);

    return () => {
      animRef.current = false;
      window.removeEventListener("resize", handleResize);
      obs.disconnect();
    };
  }, []);

  return (
    <Box ref={wrapRef} position="relative" w="full" h={{ base: "400px", md: "580px" }} overflow="hidden">
      <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%" }} />
    </Box>
  );
}

/* ── Rounded rect helper ── */
function roundedRect(ctx: CanvasRenderingContext2D, x: number, y: number, w: number, h: number, r: number) {
  ctx.moveTo(x + r, y);
  ctx.lineTo(x + w - r, y);
  ctx.arcTo(x + w, y, x + w, y + r, r);
  ctx.lineTo(x + w, y + h - r);
  ctx.arcTo(x + w, y + h, x + w - r, y + h, r);
  ctx.lineTo(x + r, y + h);
  ctx.arcTo(x, y + h, x, y + h - r, r);
  ctx.lineTo(x, y + r);
  ctx.arcTo(x, y, x + r, y, r);
  ctx.closePath();
}

export function EcosystemSection() {
  return (
    <Box
      as="section"
      pt={{ base: 16, md: "100px" }}
      bg="#0e0e0c"
      borderTop="1px solid rgba(255,255,255,0.05)"
      id="ecossistema"
    >
      {/* Header */}
      <Flex
        direction={{ base: "column", lg: "row" }}
        gap={{ base: 7, lg: "80px" }}
        px={{ base: 6, md: "60px" }}
        pb={{ base: 10, md: "64px" }}
        align={{ base: "flex-start", lg: "flex-end" }}
      >
        <Box flex={1}>
          <SectionTag dark>Ecossistema</SectionTag>
          <Text
            as="h2"
            fontSize={{ base: "34px", md: "clamp(34px, 4vw, 54px)" }}
            fontWeight={800}
            lineHeight={1.04}
            letterSpacing="-1.5px"
            color="white"
          >
            Como a transformação
            <br />
            <Text as="span" fontFamily="serif" fontWeight={400} fontStyle="italic" color="white">
              acontece na prática.
            </Text>
          </Text>
        </Box>
        <Text
          flex={1}
          fontSize="md"
          color="white"
          lineHeight={1.88}
        >
          A Shift+G conecta a sua empresa às tecnologias, processos e inteligência artificial que ela precisa — orquestrando cada fluxo até que a maturidade digital seja real e permanente.
        </Text>
      </Flex>

      {/* Canvas */}
      <EcoCanvas />

      {/* Legend */}
      <Flex
        align="center"
        justify="center"
        gap={{ base: 4, md: 8 }}
        px={{ base: 6, md: "60px" }}
        py={{ base: 5, md: 6 }}
        pb={{ base: 10, md: "60px" }}
        flexWrap="wrap"
      >
        <LegendItem label="Shift+G" color="rgb(0,81,255)" filled />
        <LegendItem label="Empresa Cliente" color="rgba(255,255,255,0.5)" />
        <LegendItem label="Tecnologia & IA" color="#b8923a" />
        <LegendItem label="Resultado / Saída" color="rgb(0,180,100)" />
      </Flex>
    </Box>
  );
}
