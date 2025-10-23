import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sentinela - Vigilância Operacional Inteligente | Shift+G",
  description:
    "Serviço de vigilância operacional inteligente para Departamento Pessoal. Neutralize riscos antes que ocorram com tecnologia proprietária e inteligência artificial.",
  keywords: [
    "departamento pessoal",
    "BPaaS",
    "gestão de pessoas",
    "conformidade trabalhista",
    "automação RH",
    "inteligência artificial",
    "folha de pagamento",
    "vigilância operacional",
  ],
};

export default function SentinelaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
