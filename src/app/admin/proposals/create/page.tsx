"use client";

import { ProposalForm } from "@/components/admin/proposal-form";
import { ProposalService } from "@/lib/proposal-service";
import { ProposalFormValues } from "@/lib/schemas";

export default function CreateProposalPage() {
  const handleSubmit = (data: ProposalFormValues) => {
    // We need to cast or transform data if strictly typed, but here it matches mostly.
    // ProposalFormValues comes from Zod, ProposalService expects specific object.
    // They should align.
    ProposalService.create(data as any);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Nova Proposta</h1>
        <p className="text-muted-foreground">
          Preencha os dados abaixo para criar uma nova proposta comercial.
        </p>
      </div>
      <div className="max-w-5xl">
        <ProposalForm onSubmit={handleSubmit} />
      </div>
    </div>
  );
}
