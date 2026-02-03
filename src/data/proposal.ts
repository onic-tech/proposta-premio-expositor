import { ProposalData } from "@/types/proposal";

export const proposalData: ProposalData = {
  clientName: "POPAI",
  projectName: "Sistema de Gestão de Eventos e Premiações",
  companyName: "Onic Tech",
  objective: `Esta proposta tem como objetivo o desenvolvimento de uma plataforma web completa para gerenciar o processo de inscrição de stands, avaliação, roteiros de jurados, premiação e administração de Prêmio Expositor organizadas pelo POPAI, com suporte a múltiplas edições, configuração white-label e operação offline do módulo de jurados.

O sistema será projetado para atender participantes, jurados, guias e administradores, garantindo escalabilidade, segurança e experiência de uso otimizada.`,
  totalPrice: "R$ 48.000,00",
  assumptions: [
    "Infraestrutura AWS será mantida na conta do cliente",
    "Custos de serviços AWS, gateways de pagamento e serviços de terceiros não estão inclusos",
    "Escopo fechado conforme descrito acima",
    "Alterações ou novas funcionalidades fora do escopo serão tratadas como demanda adicional",
    "Suporte e manutenção pós-entrega podem ser contratados separadamente"
  ],
  colors: {
    primary: "#00f3ff",
    secondary: "#000000",
  },
  modules: [
    {
      id: "admin",
      title: "Painel Administrativo",
      description: "Controle total do evento, gestão financeira e configurações.",
      iconName: "LayoutDashboard",
      features: [
        "Dashboard & KPIs",
        "Gestão de Usuários e Perfis",
        "Controle de Pagamentos",
        "Gestão de Rotas e Juris",
        "Configuração Whitelabel"
      ]
    },
    {
      id: "participant",
      title: "Portal do Participante",
      description: "Área exclusiva para expositores gerenciarem suas inscrições.",
      iconName: "Users",
      features: [
        "Gestão de Inscrições",
        "Cadastro de Stands",
        "Checkout de Pagamento",
        "Histórico Financeiro",
        "Edição de Perfil"
      ]
    },
    {
      id: "jury",
      title: "App do Jurado (PWA)",
      description: "Aplicação mobile-first para avaliação in-loco, mesmo offline.",
      iconName: "Gavel",
      features: [
        "Roteiro de Visitação",
        "Avaliação via QR Code",
        "Operação Offline",
        "Critérios Dinâmicos",
        "Sincronização Automática"
      ]
    },
    {
      id: "infra",
      title: "Infraestrutura & API",
      description: "A base robusta e segura que sustenta toda a operação.",
      iconName: "Server",
      features: [
        "Banco de Dados Seguro",
        "API Restful",
        "CDN (Cloudfront)",
        "Backups Automáticos",
        "Alta Disponibilidade"
      ]
    }
  ],
  stages: [
    {
      id: 1,
      title: "1ª Etapa",
      dateRange: "04/02 → 17/02",
      description: "Fundação do sistema, infraestrutura e funcionalidades essenciais do participante.",
      price: "R$ 12.000,00",
      categories: [
        {
          name: "Infraestrutura",
          items: [
            { name: "Configuração AWS" },
            { name: "Configuração de domínio/subdomínios" },
            { name: "Configuração EC2 + Cloudfront" },
            { name: "Banco de dados e Backups" },
            { name: "Bucket de arquivos (S3)" },
            { name: "Servidor de Email" },
            { name: "Repositórios e CI/CD (Pipeline de deploy automatizado)" },
            { name: "Ambientes de Homologação e Produção" },
            { name: "Estrutura Back-end e Front-end" },
          ],
        },
        {
          name: "Design & Arquitetura",
          items: [
            { name: "Modelagem de dados" },
            { name: "Prototipação UX (Agnóstico/Whitelabel)" },
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
              name: "Gerenciar Usuários (Proprietário)",
              subFeatures: [
                { name: "Adicionar proprietário" },
                { name: "Adicionar operador" },
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
            { name: "Acesso ao cronograma e regulamento" },
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
      price: "R$ 12.000,00",
      categories: [
        {
          name: "Módulo: Admin",
          items: [
            {
              name: "Gerenciamento de Contas",
              subFeatures: [
                { name: "Gestão de usuários" },
                { name: "Alteração de senha, Ativação/Inativação" },
                { name: "Inscrição de stand fora do prazo" },
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
              details: ["Importação em massa"],
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
      price: "R$ 12.000,00",
      categories: [
        {
          name: "Módulo: Juri (PWA - Mobile First)",
          items: [
            { name: "Acesso Offline/Online" },
            { name: "Roteiro (Listagem de stands)" },
            { name: "Acompanhamento de execução em tempo real" },
            { name: "Scanner QR Code para avaliação" },
            { name: "Critérios de avaliação" },
            { name: "Preview do stand e Manual do Juri" },
          ],
        },
        {
          name: "Módulo: Admin",
          items: [
            { name: "Monitoramento de roteiros em tempo real" },
            { name: "Revisão de registros de stands" },
            { name: "Exportação e Relatórios de stands" },
            {
              name: "Módulo de Premiação",
              subFeatures: [
                { name: "Ranking Automático" },
                { name: "Exportação de dados" },
              ]
            },
          ],
        },
        {
          name: "Módulo: Guia",
          items: [
            { name: "Visualização de roteiro" },
            { name: "Acompanhamento em tempo real" },
          ],
        },
      ],
    },
    {
      id: 4,
      title: "4ª Etapa",
      dateRange: "13/04 → 10/05",
      description: "Dashboards, Whitelabel e Gestão de Edições.",
      price: "R$ 12.000,00",
      categories: [
        {
          name: "Módulo: Admin",
          items: [
            { name: "Dashboard e KPIs (Usuários, Pagamentos, Arrecadação)" },
            {
              name: "Gestão de Categorias",
              subFeatures: [
                { name: "Perguntas dinâmicas" },
                { name: "Critérios de avaliação dinâmicos" },
              ]
            },
            {
              name: "Gerenciamento de Exposições (Whitelabel)",
              subFeatures: [
                { name: "Banner de login customizável" },
                { name: "Cores primária/secundária customizáveis" },
                { name: "Logo do header customizável" },
                { name: "Subdomínio próprio" },
              ]
            },
            { name: "Gestão de Edições (2026, 2027...)" },
            { name: "Gestão de Cronograma" },
          ],
        },
      ],
    },
  ],
};
