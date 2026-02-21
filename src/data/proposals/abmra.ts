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
      highlight: true,
    },
    {
      text: "Sustentação (Fee Mensal): R$ 8.000,00 - Total somado referente ao restante do ano",
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

const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

export const abmraEvolutionProposal: ProposalData = {
  ...clone(abmraProposal),
  projectName: "Plataforma Mostra de Comunicação - Roadmap de Evolução",
  totalPrice: "R$ 19.500,00",
  objective: `Esta proposta apresenta o Roadmap de Evolução estratégica para a Plataforma Mostra de Comunicação.

Estruturamos as melhorias em fases lógicas focadas em impacto de negócio e redução de risco, visando elevar a maturidade da plataforma em segurança, automação e gestão.`,
  assumptions: [
    "Valores referentes ao desenvolvimento das funcionalidades listadas",
    "Não inclui o valor de sustentação mensal (Fee)",
    "Prazos estimados em horas úteis de desenvolvimento",
    "Implementação sequencial recomendada para mitigar riscos"
  ],
  paymentTerms: [
    {
      text: "Fase 1: Estabilidade e Confiabilidade: R$ 6.500,00",
      highlight: true
    },
    {
      text: "Fase 2: Automação Operacional: R$ 7.500,00",
      highlight: true
    },
    {
      text: "Fase 3: Gestão e Transparência: R$ 5.500,00",
      highlight: true
    }
  ],
  stages: [
    {
      id: 1,
      title: "FASE 1 — Estabilidade e Confiabilidade Financeira",
      dateRange: "35–45 horas",
      description: "Foco em reduzir risco financeiro e técnico, eliminando dependências manuais críticas.",
      price: "R$ 6.500,00",
      categories: [
        {
          name: "Entregáveis",
          items: [
            { name: "Implementação de Webhooks Stripe (Segurança em pagamentos)" },
            { name: "Botão de Reembolso na Plataforma (Autonomia)" },
            { name: "Ajuste de Política no Cognito (Segurança de acesso)" },
          ]
        },
        {
          name: "Considerações",
          items: [
            { name: "Elimina risco em pagamentos" },
            { name: "Remove dependência de schedule" },
            { name: "Melhora controle financeiro" },
          ]
        }
      ]
    },
    {
      id: 2,
      title: "FASE 2 — Automação Operacional",
      dateRange: "40–50 horas",
      description: "Foco em eliminar processos manuais anuais e reduzir erro humano.",
      price: "R$ 7.500,00",
      categories: [
        {
          name: "Entregáveis",
          items: [
            { name: "Distribuição automática de jurados" },
            { name: "Arquivamento automático na virada de edição" },
            { name: "Mudança agendada de preços" },
          ]
        },
        {
          name: "Considerações",
          items: [
            { name: "Reduz retrabalho anual" },
            { name: "Diminui risco operacional" },
            { name: "Aumenta autonomia da ABMRA" },
          ]
        }
      ]
    },
    {
      id: 3,
      title: "FASE 3 — Gestão e Transparência",
      dateRange: "30–40 horas",
      description: "Foco em melhoria administrativa e eficiência na gestão do prêmio.",
      price: "R$ 5.500,00",
      categories: [
        {
          name: "Entregáveis",
          items: [
            { name: "Shortlist dinâmica" },
            { name: "Tela centralizada de emails" },
          ]
        },
        {
          name: "Considerações",
          items: [
            { name: "Melhoria de eficiência" },
            { name: "Maior transparência no processo" },
          ]
        }
      ]
    }
  ],
  modules: [
    {
      id: "financeiro",
      title: "Módulo Financeiro & Segurança",
      description: "Blindagem do fluxo de pagamentos e acessos.",
      iconName: "Gavel", // Using Gavel as placeholder for security/rules
      features: [
        { name: "Webhooks Stripe" },
        { name: "Reembolso Automatizado" },
        { name: "Políticas de Segurança (Cognito)" }
      ]
    },
    {
      id: "operacional",
      title: "Automação Operacional",
      description: "Redução de carga manual e inteligência de processo.",
      iconName: "Server",
      features: [
        { name: "Distribuição de Jurados" },
        { name: "Arquivamento de Edições" },
        { name: "Agendamento de Preços" }
      ]
    },
    {
      id: "gestao",
      title: "Gestão Administrativa",
      description: "Ferramentas para facilitar o dia a dia da organização.",
      iconName: "LayoutDashboard",
      features: [
        { name: "Shortlist Dinâmica" },
        { name: "Central de Emails" }
      ]
    }
  ]
};
