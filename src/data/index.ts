import { abmraProposal } from "./proposals/abmra";
import { ProposalData } from "@/types/proposal";

export const proposals: Record<string, { reduced: ProposalData, full?: ProposalData }> = {
  abmra: {
    reduced: abmraProposal,
    full: abmraProposal
  }
};

export const defaultProposal = "abmra";
