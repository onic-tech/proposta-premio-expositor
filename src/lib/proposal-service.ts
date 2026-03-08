import { ProposalData } from "@/types/proposal";
import { abmraProposal } from "@/data/proposals/abmra";

export interface Proposal extends ProposalData {
  id: string;
  createdAt: string;
  updatedAt: string;
  status: "draft" | "active" | "archived";
  version: number;
}

const STORAGE_KEY = "onic_proposals";

// Helper to generate ID
const generateId = () => Math.random().toString(36).substr(2, 9);

export const ProposalService = {
  getAll: (): Proposal[] => {
    if (typeof window === "undefined") return [];
    
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      // Initialize with default data if empty
      const initial: Proposal[] = [
        {
          ...abmraProposal,
          id: "abmra-1",
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
          status: "active",
          version: 1,
        },
      ];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initial));
      return initial;
    }
    
    return JSON.parse(stored);
  },

  getById: (id: string): Proposal | undefined => {
    const proposals = ProposalService.getAll();
    return proposals.find((p) => p.id === id);
  },

  create: (data: Omit<Proposal, "id" | "createdAt" | "updatedAt" | "version">): Proposal => {
    const proposals = ProposalService.getAll();
    const newProposal: Proposal = {
      ...data,
      id: generateId(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      version: 1,
    };
    
    proposals.push(newProposal);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proposals));
    return newProposal;
  },

  update: (id: string, data: Partial<Proposal>): Proposal => {
    const proposals = ProposalService.getAll();
    const index = proposals.findIndex((p) => p.id === id);
    
    if (index === -1) throw new Error("Proposal not found");
    
    const updatedProposal = {
      ...proposals[index],
      ...data,
      updatedAt: new Date().toISOString(),
      version: proposals[index].version + 1,
    };
    
    proposals[index] = updatedProposal;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(proposals));
    return updatedProposal;
  },

  delete: (id: string): void => {
    const proposals = ProposalService.getAll();
    const filtered = proposals.filter((p) => p.id !== id);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered));
  },
  
  duplicate: (id: string): Proposal => {
    const original = ProposalService.getById(id);
    if (!original) throw new Error("Proposal not found");
    
    const { id: _, ...rest } = original;
    
    return ProposalService.create({
      ...rest,
      projectName: `${rest.projectName} (Cópia)`,
      status: "draft",
    });
  }
};
