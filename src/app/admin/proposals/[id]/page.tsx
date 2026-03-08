"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { ProposalForm } from "@/components/admin/proposal-form";
import { ProposalService, Proposal } from "@/lib/proposal-service";
import { ProposalFormValues } from "@/lib/schemas";
import { toast } from "sonner";

export default function EditProposalPage() {
  const params = useParams();
  const router = useRouter();
  const [proposal, setProposal] = useState<Proposal | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      const found = ProposalService.getById(params.id as string);
      if (found) {
        setProposal(found);
      } else {
        toast.error("Proposta não encontrada");
        router.push("/admin/proposals");
      }
      setLoading(false);
    }
  }, [params.id, router]);

  const handleSubmit = (data: ProposalFormValues) => {
    if (proposal) {
      ProposalService.update(proposal.id, data as any);
    }
  };

  if (loading) {
    return <div>Carregando...</div>;
  }

  if (!proposal) {
    return null;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Editar Proposta</h1>
        <p className="text-muted-foreground">
          {proposal.projectName} - {proposal.clientName}
        </p>
      </div>
      <div className="max-w-5xl">
        <ProposalForm 
          initialData={proposal} 
          onSubmit={handleSubmit} 
          isEditing 
        />
      </div>
    </div>
  );
}
