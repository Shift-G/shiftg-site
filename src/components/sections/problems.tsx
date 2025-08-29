"use client";

import { SimpleGrid } from "@chakra-ui/react";
import { Section } from "../layout/section";
import { FeatureCard } from "../cards/feature-card";
import { Database, ShieldOff, Clock, Package } from "lucide-react";

const problems = [
  {
    icon: <Database size={24} />,
    title: "Silos de Informação",
    description: "Dados de pessoas, finanças e operações estão espalhados, impedindo uma visão 360º do negócio.",
  },
  {
    icon: <ShieldOff size={24} />,
    title: "Baixa Autonomia",
    description: "As equipes dependem de processos manuais ou de TI para tarefas que poderiam ser automatizadas.",
  },
  {
    icon: <Clock size={24} />,
    title: "Decisões Lentas",
    description: "A dificuldade em consolidar e analisar dados atrasa decisões críticas para o negócio.",
  },
  {
    icon: <Package size={24} />,
    title: "Ferramentas Genéricas",
    description: "Soluções de prateleira não atendem às particularidades da sua empresa, gerando mais adaptações do que soluções.",
  },
];

export function ProblemsSection() {
  return (
    <Section
      title="Sua operação está presa em processos manuais e dados que não conversam entre si?"
      subtitle="C-levels e gestores de áreas como RH e Operações perdem um tempo precioso tentando extrair valor de planilhas complexas, sistemas legados e fornecedores engessados. A falta de autonomia e a lentidão nos processos não são apenas frustrantes — elas custam caro."
      centered
    >
      <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} gap={{ base: 6, md: 8 }}>
        {problems.map((problem) => (
          <FeatureCard
            key={problem.title}
            icon={problem.icon}
            title={problem.title}
            description={problem.description}
          />
        ))}
      </SimpleGrid>
    </Section>
  );
}
