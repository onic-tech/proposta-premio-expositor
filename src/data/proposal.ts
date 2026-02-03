import { ProposalData } from "@/types/proposal";

const baseData: ProposalData = {
  clientName: "POPAI",
  projectName: "Plataforma de Gestão do Prêmio Expositor",
  companyName: "Onic Tech",
  objective: `Esta proposta tem como objetivo o desenvolvimento de uma plataforma web completa para gerenciar o processo de inscrição de stands, avaliação, roteiros de jurados, premiação e administração de Prêmio Expositor organizadas pelo POPAI, com suporte a múltiplas edições, configuração white-label e operação offline do módulo de jurados.

O sistema será projetado para atender participantes, jurados, guias e administradores, garantindo escalabilidade, segurança e experiência de uso otimizada.`,
  colors: {
    primary: "#00f3ff",
    secondary: "#000000",
  },
  assumptions: [
    "Infraestrutura AWS será mantida na conta do cliente",
    "Custos de serviços AWS, gateways de pagamento e serviços de terceiros não estão inclusos",
    "Escopo fechado conforme descrito acima",
    "Alterações ou novas funcionalidades fora do escopo serão tratadas como demanda adicional",
    "Suporte e manutenção pós-entrega podem ser contratados separadamente"
  ],
  modules: [
    {
      id: "admin",
      title: "Painel Administrativo",
      description: "Controle total do evento, gestão financeira e configurações.",
      iconName: "LayoutDashboard",
      features: [
        { name: "Dashboard & KPIs", excluded: true },
        { name: "Gestão de Usuários e Perfis" },
        { name: "Controle de Pagamentos" },
        { name: "Gestão de Rotas e Juris" },
        { name: "Configuração White Label", excluded: true },
        { name: "Gestão e Configuração de Edições", excluded: true }
      ]
    },
    {
      id: "participant",
      title: "Portal do Participante",
      description: "Área exclusiva para expositores gerenciarem suas inscrições.",
      iconName: "Users",
      features: [
        { name: "Gestão de Inscrições" },
        { name: "Cadastro de Stands" },
        { name: "Gestão de usuários da sua conta", excluded: true },
        { name: "Checkout de Pagamento" },
        { name: "Histórico Financeiro" },
        { name: "Edição de Perfil" }
      ]
    },
    {
      id: "jury",
      title: "App do Jurado (PWA)",
      description: "Aplicação mobile-first para avaliação in-loco, mesmo offline.",
      iconName: "Gavel",
      features: [
        { name: "Roteiro de Visitação" },
        { name: "Avaliação via QR Code" },
        { name: "Operação Offline" },
        { name: "Acompanhamento em tempo real", excluded: true },
        { name: "Critérios Dinâmicos" },
        { name: "Sincronização Automática" }
      ]
    },
    {
      id: "infra",
      title: "Infraestrutura & API",
      description: "A base robusta e segura que sustenta toda a operação.",
      iconName: "Server",
      features: [
        { name: "Banco de Dados Seguro" },
        { name: "API Restful" },
        { name: "Subdomínio por exposição", excluded: true },
        { name: "CDN (Cloudfront)" },
        { name: "Backups Automáticos" },
        { name: "Alta Disponibilidade" }
      ]
    }
  ],
  stages: [
    {
      id: 1,
      title: "1ª Etapa",
      dateRange: "04/02 → 17/02",
      description: "Fundação do sistema, infraestrutura e funcionalidades essenciais do participante.",
      categories: [
        {
          name: "Infraestrutura",
          items: [
            { name: "Configuração AWS" },
            { name: "Configuração de domínio/subdomínios por exposição", excluded: true  },
            { name: "Configuração EC2 + Cloudfront" },
            { name: "Banco de dados e Backups" },
            { name: "Bucket de arquivos (S3)" },
            { name: "Configuração do serviço de Email" },
            { name: "Repositórios e CI/CD (Pipeline de deploy automatizado)" },
            { name: "Ambientes de Homologação e Produção" },
          ],
        },
        {
          name: "Design & Arquitetura",
          items: [
            { name: "Modelagem de dados" },
            { name: "Prototipação UX (Agnóstico/White Label)", excluded: true  },
            { name: "Estrutura Back-end" },
            { name: "Estrutura Front-end" },
          ],
        },
        {
          name: "Autenticação",
          items: [
            { name: "Login, Logout e Gestão de Sessão" },
            { name: "Recuperação de senha" },
          ],
        },
        {
          name: "Módulo: Participante",
          items: [
            { name: "Criação de conta" },
            { 
              name: "Gerenciar Usuários",
              excluded: true,
              subFeatures: [
                { name: "Adicionar administrador da conta" },
                { name: "Adicionar membro" },
              ]
            },
            {
              name: "Gerenciamento de Inscrições",
              subFeatures: [
                { name: "Cadastro e gestão de stands" },
                { name: "Seleção de categorias do stand" },
              ]
            },
            {
              name: "Pagamentos (Checkout)",
              details: ["Cartão de Crédito", "Boleto"],
            },
            { name: "Acesso ao regulamento" },
            { name: "Edição de perfil (Senha, idioma, email...)" },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "2ª Etapa",
      dateRange: "18/02 → 15/03",
      description: "Administração central e controle de pagamentos.",
      categories: [
        {
          name: "Módulo: Administrador do Sistema",
          items: [
            {
              name: "Gerenciamento de Contas",
              subFeatures: [
                { name: "Gestão de usuários" },
                { name: "Alteração de senha, Ativação/Inativação" },
                { name: "Inscrição de stand fora do prazo", excluded: true  },
              ]
            },
            {
              name: "Controle de Pagamentos",
              subFeatures: [
                { name: "Pagamento manual" },
                { name: "Acompanhamento de status" },
              ]
            },
            {
              name: "Gerenciamento de Juris",
              subFeatures: [
                { name: "Importação em massa", excluded: true  },
                { name: "Alteração de senha, Ativação/Inativação"  },
              ],
            },
            {
              name: "Gerenciamento de Rotas",
              subFeatures: [
                { name: "Criar/Editar rotas" },
                { name: "Selecionar juris e stands" },
                { name: "Definir roteiro de visitação" },
              ]
            },
          ],
        },
        {
          name: "Módulo: Participante",
          items: [
            { name: "Histórico e status de pagamento" },
          ],
        },
      ],
    },
    {
      id: 3,
      title: "3ª Etapa",
      dateRange: "16/03 → 12/04",
      description: "Aplicativo do Juri (PWA), Avaliação e Premiação.",
      categories: [
        {
          name: "Módulo: Juri (PWA - Mobile First)",
          items: [
            { name: "Acesso Offline/Online" },
            { name: "Roteiro (Listagem de stands)" },
            { name: "Acompanhamento de execução em tempo real", excluded: true  },
            { name: "Scanner QR Code para avaliação" },
            { name: "Critérios de avaliação" },
            { name: "Preview do stand e Manual do Juri" },
          ],
        },
        {
          name: "Módulo: Administrador do Sistema",
          items: [
            { name: "Monitoramento de roteiros em tempo real", excluded: true  },
            { name: "Revisão de registros de stands" },
            { name: "Exportação de Relatório de stands"  },
            {
              name: "Módulo de Premiação",
              subFeatures: [
                { name: "Ranking Automático", excluded: true  },
                { name: "Ranking Público", excluded: true  },
                { name: "Exportação de dados" },
              ]
            },
          ],
        },
        {
          name: "Módulo: Guia",
          excluded: true,
          items: [
            { name: "Visualização de roteiro",  },
            { name: "Acompanhamento em tempo real",  },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "4ª Etapa",
      dateRange: "13/04 → 10/05",
      description: "Dashboards, White Label e Gestão de Edições.",
      categories: [
        {
          name: "Módulo: Administrador do Sistema",
          items: [
            { name: "Dashboard e KPIs (Usuários, Pagamentos, Arrecadação)", excluded: true  },
            {
              name: "Gestão de Categorias",
              subFeatures: [
                { name: "Perguntas dinâmicas" },
                { name: "Critérios de avaliação dinâmicos" },
              ]
            },
            {
              name: "Gerenciamento de Exposições (White Label)",
              excluded: true,
              subFeatures: [
                { name: "Banner de login customizável" },
                { name: "Cores primária/secundária customizáveis" },
                { name: "Logo do header customizável" },
                { name: "Subdomínio próprio" },
              ]
            },
            { name: "Gestão e configuração de Edições (2026, 2027...)", excluded: true  },
            { name: "Gestão de Cronograma", excluded: true  },
          ],
        },
      ],
    },
  ],
};

// Deep clone helper
const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj));

// --- Reduced Proposal (Original with exclusions) ---
export const reducedProposal: ProposalData = {
  ...clone(baseData),
  totalPrice: "R$ 30.000,00",
  oldTotalPrice: "R$ 48.000,00",
  paymentTerms: [
    {
      text: "Pagamento À Vista",
      oldText: "4 Parcelas de R$ 12.000,00",
      highlight: false
    },
    {
      text: "",
      oldText: "Pagamento por etapa entregue"
    },

  ],
  comparison: {
    pros: [
      "Menor investimento inicial",
      "Foco no essencial para a operação",
      "Atende os requisitos principais"
    ],
    cons: [
      "Sem customização White Label",
      "Decidir White Label depois exigira um custo maior de desenvolvimento",
      "Sem módulo do Guia",
      "Sem gestão de múltiplas edições",
      "Necessidade de contratar time técnico para configurar novas edições",
      "Sem dashboards avançados e KPIs",
      "Sem acompanhamento em tempo real no dia do evento"
    ]
  }
};

// --- Full Proposal (No exclusions, different price) ---
const fullData = clone(baseData);

// Recursively remove 'excluded' flag
const removeExclusions = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) return;
  if (Array.isArray(obj)) {
    obj.forEach(removeExclusions);
  } else {
    delete obj.excluded;
    Object.values(obj).forEach(removeExclusions);
  }
};

removeExclusions(fullData.modules);
removeExclusions(fullData.stages);

export const fullProposal: ProposalData = {
  ...fullData,
  totalPrice: "R$ 42.000,00",
  oldTotalPrice: "R$ 48.000,00",
  paymentTerms: [
    {
      text: "Entrada de R$ 30.000,00",
      highlight: false
    },
    {
      text: "Saldo de R$ 12.000,00",
      highlight: false
    },
    {
      text: "Parcelamento do saldo em até 4x após a entrega"
    }
  ],
  stages: fullData.stages.map(s => ({ ...s, price: undefined })), // Remove per-stage price as it's a different model
  comparison: {
    pros: [
      "Sistema Completo e Robusto",
      "Totalmente White Label (Customizável por exposição)",
      "Gestão de Múltiplas Edições (Longo Prazo)",
      "Dashboards e KPIs para tomada de decisão",
      "Módulo Guia e Acompanhamento em Tempo Real",
      "Desconto e Condição de pagamento facilitada"
    ],
    cons: [
      "Investimento total maior"
    ]
  }
};

// Default export for backward compatibility if needed, but we'll switch to named exports
export const proposalData = reducedProposal;
