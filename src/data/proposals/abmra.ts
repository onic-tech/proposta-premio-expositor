import { ProposalData } from "@/types/proposal";

export const abmraProposal: ProposalData = {
  clientName: "ABMRA",
  projectName: "Plataforma Mostra de Comunicação",
  companyName: "Onic Tech",
  objective: `Esta proposta contempla a sustentação técnica da Plataforma Mostra de Comunicação. 

Sobre o esclarecimento que tivemos da ultima reunião, ajustamos o fee para garantir a sustentação adequada da plataforma. Ainda assim mantivemos um modelo sazonal justamente para não onerar a operação nos meses de baixa demanda.`,
  colors: {
    primary: "#00f3ff",
    secondary: "#000000",
  },
  assumptions: [
    "Fee mensal cobre infraestrutura (AWS, Cloudflare, Turso)",
    "Suporte operacional e ajustes pontuais inclusos no fee",
    "Desenvolvimento será orçado à parte",
    "Valores de fee baseados no volume de uso sazonal",
    "O handover é um serviço pontual e não recorrente"
  ],
  totalPrice: "R$ 10.100,00",
  paymentTerms: [
    {
      text: "Handover Técnico (Pontual): Isento",
      oldText: "R$ 2.400,00",
      highlight: true,
    },
    {
      text: "Sustentação (Fee Mensal): R$ 10.100,00 - Total somado referente ao restante do ano",
      highlight: true,
    }
  ],
  modules: [
    {
      id: "fee-coverage",
      title: "O que está incluído no Fee",
      description: "Cobertura completa para garantir estabilidade e segurança.",
      iconName: "Server",
      features: [
        { name: "Gestão de infraestrutura (AWS, Cloudflare e Turso)" },
        { name: "Monitoramento básico da aplicação" },
        { name: "Correções pequenas e ajustes pontuais" },
        { name: "Suporte operacional ao time da ABMRA" },
        { name: "Ajustes simples de conteúdo e configuração" },
        { name: "Acompanhamento técnico nos períodos-chave" }
      ]
    },
    {
      id: "handover",
      title: "Processo de Handover",
      description: "Transição segura e transparente do conhecimento técnico.",
      iconName: "Users",
      features: [
        { name: "Analise geral do código do projeto" },
        { name: "Entendimento dos fluxos de negócio" },
        { name: "Transferência de conhecimento técnico" },
        { name: "Reuniões de alinhamento" },
        { name: "Suporte pós-transição (período acordado)" }
      ]
    }
  ],
  stages: [
    {
      id: 1,
      title: "Handover Técnico",
      dateRange: "Pontual",
      description: "Custo único referente à transição segura de conhecimento e assumir a responsabilidade técnica pelo projeto.",
      price: "Isento"
    },
    {
      id: 2,
      title: "Sustentação: Baixa Demanda Operacional",
      dateRange: "Março a Julho",
      description: "Valor reduzido compatível com o período de baixa demanda (fora do cronograma de uso da aplicação), focando apenas na disponibilidade.",
      price: "960,00 / mês"
    },
    {
      id: 3,
      title: "Sustentação: Período de Uso Intensivo",
      dateRange: "Agosto a Dezembro",
      description: "Valor ajustado para suportar a operação crítica, garantindo estabilidade e resposta rápida durante a época em que o sistema opera.",
      price: "1.120,00 / mês"
    }
  ]
};


