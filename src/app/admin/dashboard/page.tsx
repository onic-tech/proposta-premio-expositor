"use client";

import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProposalService, Proposal } from "@/lib/proposal-service";
import { FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";

export default function DashboardPage() {
  const [stats, setStats] = useState({
    total: 0,
    active: 0,
    draft: 0,
    recent: [] as Proposal[],
  });

  useEffect(() => {
    const proposals = ProposalService.getAll();
    setStats({
      total: proposals.length,
      active: proposals.filter((p) => p.status === "active").length,
      draft: proposals.filter((p) => p.status === "draft").length,
      recent: proposals
        .sort((a, b) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime())
        .slice(0, 5),
    });
  }, []);

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold tracking-tight text-white">Dashboard</h1>
      
      <div className="grid gap-4 md:grid-cols-3">
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Total de Propostas</CardTitle>
            <FileText className="h-4 w-4 text-primary" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.total}</div>
            <p className="text-xs text-gray-500">Propostas cadastradas no sistema</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Ativas</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.active}</div>
            <p className="text-xs text-gray-500">Propostas finalizadas e ativas</p>
          </CardContent>
        </Card>
        
        <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-400">Rascunhos</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.draft}</div>
            <p className="text-xs text-gray-500">Propostas em edição</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-1">
        <Card className="col-span-1 bg-white/5 border-white/10 backdrop-blur-sm text-white">
          <CardHeader>
            <CardTitle>Atividade Recente</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {stats.recent.map((proposal) => (
                <div key={proposal.id} className="flex items-center">
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none text-white">
                      {proposal.projectName} - {proposal.clientName}
                    </p>
                    <p className="text-sm text-gray-500">
                      Atualizado em {new Date(proposal.updatedAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="ml-auto font-medium">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                      proposal.status === 'active' 
                        ? 'bg-green-500/10 text-green-500 border-green-500/20' 
                        : 'bg-yellow-500/10 text-yellow-500 border-yellow-500/20'
                    }`}>
                      {proposal.status === 'active' ? 'Ativo' : 'Rascunho'}
                    </span>
                  </div>
                </div>
              ))}
              {stats.recent.length === 0 && (
                <div className="text-sm text-gray-500 text-center py-4">
                  Nenhuma atividade recente encontrada.
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
