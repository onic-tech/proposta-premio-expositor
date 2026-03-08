import { z } from "zod";

export const featureItemSchema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  details: z.array(z.string()).optional(),
  excluded: z.boolean().optional(),
});

export const proposalStageSchema = z.object({
  id: z.number(),
  title: z.string().min(1, "Título é obrigatório"),
  dateRange: z.string().min(1, "Período é obrigatório"),
  description: z.string().optional(),
  price: z.string().optional(),
  categories: z.array(z.object({
    name: z.string(),
    items: z.array(featureItemSchema),
    excluded: z.boolean().optional(),
  })).optional(),
});

export const systemModuleSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Título é obrigatório"),
  description: z.string().min(1, "Descrição é obrigatória"),
  iconName: z.enum(["LayoutDashboard", "Users", "Gavel", "Map", "Server", "Smartphone"]),
  features: z.array(z.object({
    name: z.string().min(1, "Nome da feature é obrigatório"),
    excluded: z.boolean().optional(),
  })),
  excluded: z.boolean().optional(),
});

export const paymentTermSchema = z.object({
  text: z.string().min(1, "Texto é obrigatório"),
  oldText: z.string().optional(),
  highlight: z.boolean().optional(),
});

export const proposalSchema = z.object({
  clientName: z.string().min(1, "Nome do cliente é obrigatório"),
  projectName: z.string().min(1, "Nome do projeto é obrigatório"),
  companyName: z.string().min(1, "Nome da empresa é obrigatório"),
  objective: z.string().optional(),
  totalPrice: z.string().optional(),
  oldTotalPrice: z.string().optional(),
  paymentTerms: z.array(paymentTermSchema).optional(),
  assumptions: z.array(z.string()).optional(),
  comparison: z.object({
    pros: z.array(z.string()),
    cons: z.array(z.string()),
  }).optional(),
  colors: z.object({
    primary: z.string(),
    secondary: z.string(),
  }),
  stages: z.array(proposalStageSchema),
  modules: z.array(systemModuleSchema).optional(),
  status: z.enum(["draft", "active", "archived"]),
});

export type ProposalFormValues = z.infer<typeof proposalSchema>;
