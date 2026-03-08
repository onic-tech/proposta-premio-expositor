"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ProposalService, Proposal } from "@/lib/proposal-service";
import { useAuth } from "@/lib/auth-context";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreHorizontal, Plus, Search, Copy, Trash2, Edit, FileDown, Eye } from "lucide-react";
import { toast } from "sonner";
import * as XLSX from 'xlsx';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function ProposalsPage() {
  const router = useRouter();
  const [proposals, setProposals] = useState<Proposal[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState<string>("all");

  const { user } = useAuth();

  useEffect(() => {
    loadProposals();
  }, []);

  const loadProposals = () => {
    setProposals(ProposalService.getAll());
  };

  const handleDelete = (id: string) => {
    if (confirm("Tem certeza que deseja excluir esta proposta?")) {
      ProposalService.delete(id);
      loadProposals();
      toast.success("Proposta excluída com sucesso.");
    }
  };

  const handleDuplicate = (id: string) => {
    try {
      ProposalService.duplicate(id);
      loadProposals();
      toast.success("Proposta duplicada com sucesso.");
    } catch (error) {
      toast.error("Erro ao duplicar proposta.");
    }
  };
  
  const exportToExcel = () => {
    const data = proposals.map(p => ({
      Cliente: p.clientName,
      Projeto: p.projectName,
      Status: p.status,
      "Data Criação": new Date(p.createdAt).toLocaleDateString(),
      "Valor Total": p.totalPrice
    }));
    
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Propostas");
    XLSX.writeFile(wb, "propostas_onic.xlsx");
    toast.success("Exportação Excel concluída.");
  };
  
  const exportToPDF = () => {
    const doc = new jsPDF();
    doc.text("Relatório de Propostas - Onic Tech", 14, 20);
    
    const tableData = proposals.map(p => [
      p.clientName,
      p.projectName,
      p.status,
      new Date(p.createdAt).toLocaleDateString(),
      p.totalPrice || "-"
    ]);
    
    autoTable(doc, {
      head: [['Cliente', 'Projeto', 'Status', 'Data', 'Valor']],
      body: tableData,
      startY: 30,
    });
    
    doc.save("propostas_onic.pdf");
    toast.success("Exportação PDF concluída.");
  };

  const filteredProposals = proposals.filter((proposal) => {
    const matchesSearch =
      proposal.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      proposal.projectName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === "all" || proposal.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight text-white">Propostas</h1>
        <div className="flex gap-2">
           <Button variant="outline" onClick={exportToExcel} className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:text-white">
            <FileDown className="mr-2 h-4 w-4" /> Excel
          </Button>
           <Button variant="outline" onClick={exportToPDF} className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:text-white">
            <FileDown className="mr-2 h-4 w-4" /> PDF
          </Button>
          <Button onClick={() => router.push("/admin/proposals/create")} className="bg-primary text-black hover:bg-primary/80">
            <Plus className="mr-2 h-4 w-4" /> Nova Proposta
          </Button>
        </div>
      </div>

      <Card className="bg-white/5 border-white/10 backdrop-blur-sm">
        <CardHeader>
          <div className="flex items-center justify-between">
            <CardTitle className="text-white">Gerenciar Propostas</CardTitle>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
                <Input
                  type="search"
                  placeholder="Buscar..."
                  className="pl-8 w-[250px] bg-black/20 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary/50"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <select
                className="h-10 rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
              >
                <option value="all" className="bg-[#020204]">Todos os Status</option>
                <option value="active" className="bg-[#020204]">Ativas</option>
                <option value="draft" className="bg-[#020204]">Rascunhos</option>
                <option value="archived" className="bg-[#020204]">Arquivadas</option>
              </select>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border border-white/10">
            <table className="w-full text-sm text-left">
              <thead className="bg-white/5 text-gray-400">
                <tr>
                  <th className="p-4 font-medium">Cliente</th>
                  <th className="p-4 font-medium">Projeto</th>
                  <th className="p-4 font-medium">Status</th>
                  <th className="p-4 font-medium">Data</th>
                  <th className="p-4 font-medium text-right">Ações</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                {filteredProposals.length === 0 ? (
                  <tr>
                    <td colSpan={5} className="p-4 text-center text-gray-500">
                      Nenhuma proposta encontrada.
                    </td>
                  </tr>
                ) : (
                  filteredProposals.map((proposal) => (
                    <tr key={proposal.id} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                      <td className="p-4 font-medium text-white">{proposal.clientName}</td>
                      <td className="p-4">{proposal.projectName}</td>
                      <td className="p-4">
                        <span
                          className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium border ${
                            proposal.status === "active"
                              ? "bg-green-500/10 text-green-500 border-green-500/20"
                              : proposal.status === "draft"
                              ? "bg-yellow-500/10 text-yellow-500 border-yellow-500/20"
                              : "bg-gray-500/10 text-gray-500 border-gray-500/20"
                          }`}
                        >
                          {proposal.status === "active"
                            ? "Ativa"
                            : proposal.status === "draft"
                            ? "Rascunho"
                            : "Arquivada"}
                        </span>
                      </td>
                      <td className="p-4 text-gray-400">
                        {new Date(proposal.updatedAt).toLocaleDateString()}
                      </td>
                      <td className="p-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" className="h-8 w-8 p-0 text-gray-400 hover:text-white hover:bg-white/10">
                              <span className="sr-only">Abrir menu</span>
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="bg-[#0a0a0c] border-white/10 text-white">
                            <DropdownMenuLabel>Ações</DropdownMenuLabel>
                            <DropdownMenuItem onClick={() => router.push(`/admin/proposals/${proposal.id}`)} className="focus:bg-white/10 focus:text-white cursor-pointer">
                              <Edit className="mr-2 h-4 w-4" /> Editar
                            </DropdownMenuItem>
                            <DropdownMenuItem onClick={() => handleDuplicate(proposal.id)} className="focus:bg-white/10 focus:text-white cursor-pointer">
                              <Copy className="mr-2 h-4 w-4" /> Duplicar
                            </DropdownMenuItem>
                            {user?.role === 'admin' && (
                              <>
                                <DropdownMenuSeparator className="bg-white/10" />
                                <DropdownMenuItem 
                                  className="text-red-400 focus:text-red-300 focus:bg-red-500/10 cursor-pointer"
                                  onClick={() => handleDelete(proposal.id)}
                                >
                                  <Trash2 className="mr-2 h-4 w-4" /> Excluir
                                </DropdownMenuItem>
                              </>
                            )}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
