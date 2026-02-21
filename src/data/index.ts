import { abmraProposal, abmraEvolutionProposal } from "./proposals/abmra";
import { ProposalData } from "@/types/proposal";

export const proposals: Record<string, { reduced: ProposalData, full?: ProposalData }> = {
  abmra: {
    reduced: abmraProposal,
    full: abmraEvolutionProposal
  }
};

export const defaultProposal = "abmra";
