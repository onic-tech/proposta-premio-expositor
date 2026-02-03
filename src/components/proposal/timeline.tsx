"use client";

import { ProposalData } from "@/types/proposal";
import { StageCard } from "./stage-card";

export function ProposalTimeline({ data }: { data: ProposalData }) {
  return (
    <div className="max-w-6xl mx-auto px-6 py-16 relative">
       {/* Mobile Timeline Line */}
       <div className="absolute left-9 top-0 bottom-0 w-0.5 bg-primary/20 md:hidden" />
       
      <div className="space-y-12">
        {data.stages.map((stage, index) => (
          <StageCard key={stage.id} stage={stage} index={index} />
        ))}
      </div>
    </div>
  );
}
