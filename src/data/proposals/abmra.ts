import { ProposalData } from "@/types/proposal";

export const abmraProposal: ProposalData = {
  clientName: "ABMRA",
  projectName: "Plataforma Amostra de Comunicação",
  companyName: "Onic Tech",
  objective: `Esta proposta contempla a sustentação técnica e evolução da Plataforma Amostra de Comunicação. 

Considerando o contexto de um sistema já consolidado e com sazonalidade bem definida, estruturamos um modelo de fee mensal variável que garante segurança técnica nos períodos críticos sem onerar a operação nos meses de baixa demanda, além de um handover técnico completo.`,
  colors: {
    primary: "#00f3ff", // Neon Blue
    secondary: "#000000",
  },
  assumptions: [
    "Fee mensal cobre infraestrutura (AWS, Cloudflare, Turso) e monitoramento",
    "Suporte operacional e ajustes pontuais inclusos no fee",
    "Desenvolvimentos de novas features complexas serão orçados à parte",
    "Valores de fee baseados no volume de uso sazonal",
    "O handover é um serviço pontual e não recorrente"
  ],
  totalPrice: "R$ 10.400,00",
  paymentTerms: [
    {
      text: "Sustentação Anual (Fee)",
      highlight: true,
      oldText: "R$ 8.000,00 (Total Anual)"
    },
    {
      text: "Handover Técnico",
      highlight: true,
      oldText: "R$ 2.400,00 (Pontual)"
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
      description: "Passagem de bastão e alinhamento inicial.",
      price: "R$ 2.400,00",
      categories: [
        {
          name: "Entregáveis",
          items: [
            { name: "Documentação de arquitetura básica" },
            { name: "Credenciais e acessos" },
            { name: "Sessão de transferência de conhecimento" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "Sustentação: Baixa Estação",
      dateRange: "Março a Julho",
      description: "Manutenção essencial e monitoramento.",
      price: "R$ 480,00 / mês",
      categories: [
        {
          name: "Escopo",
          items: [
            { name: "Monitoramento de uptime" },
            { name: "Backup rotineiro" },
            { name: "Manutenção de infraestrutura" }
          ]
        }
      ]
    },
    {
      id: 3,
      title: "Sustentação: Alta Estação",
      dateRange: "Agosto a Dezembro",
      description: "Suporte intensivo e acompanhamento do evento.",
      price: "R$ 1.120,00 / mês",
      categories: [
        {
          name: "Escopo Ampliado",
          items: [
            { name: "Suporte prioritário" },
            { name: "Acompanhamento em tempo real" },
            { name: "Ajustes rápidos de configuração" },
            { name: "Monitoramento intensivo de recursos" }
          ]
        }
      ]
    }
  ],
  comparison: {
    pros: [
      "Modelo Sazonal (Economia nos meses parados)",
      "Previsibilidade Financeira",
      "Segurança Técnica Garantida",
      "Infraestrutura inclusa no valor"
    ],
    cons: [
      "Novas features grandes requerem orçamento extra"
    ]
  }
};
