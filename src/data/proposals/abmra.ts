import { ProposalData } from "@/types/proposal";

export const abmraProposal: ProposalData = {
  clientName: "ABMRA",
  projectName: "Plataforma Mostra de Comunicação",
  companyName: "Onic Tech",
  objective: `Esta proposta contempla a sustentação técnica da Plataforma Mostra de Comunicação. 

Considerando o contexto de um sistema já consolidado e com sazonalidade bem definida, estruturamos um modelo de fee mensal variável que garante segurança técnica nos períodos críticos sem onerar a operação nos meses de baixa demanda, além de um handover técnico nesse primeiro momento.`,
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
  totalPrice: "R$ 10.400,00",
  paymentTerms: [
    {
      text: "Handover Técnico (Pontual): R$ 2.400,00",
      highlight: false,
    },
    {
      text: "Sustentação (Fee Mensal): R$ 8.000,00 - Total Anual",
      highlight: false,
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
        { name: "Suporte operacional ao time da BMRA" },
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
        { name: "Entendimento geral da arquitetura" },
        { name: "Apresentação dos fluxos de negócio" },
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
      description: "Custo único referente à transição segura de conhecimento e assunção da responsabilidade técnica pelo projeto.",
      price: "R$ 2.400,00"
    },
    {
      id: 2,
      title: "Sustentação: Baixa Demanda Operacional",
      dateRange: "Março a Julho",
      description: "Valor reduzido compatível com o período de baixa demanda (fora do cronograma de uso da aplicação), focando apenas na disponibilidade.",
      price: "R$ 480,00 / mês"
    },
    {
      id: 3,
      title: "Sustentação: Período de Uso Intensivo",
      dateRange: "Agosto a Dezembro",
      description: "Valor ajustado para suportar a operação crítica, garantindo estabilidade e resposta rápida durante a época em que o sistema opera.",
      price: "R$ 1.120,00 / mês"
    }
  ]
};
