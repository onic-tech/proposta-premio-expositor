"use client";

import { useForm, useFieldArray, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { proposalSchema, ProposalFormValues } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Trash2, Plus, GripVertical, Eye } from "lucide-react";
import { Proposal } from "@/lib/proposal-service";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface ProposalFormProps {
  initialData?: Proposal;
  onSubmit: (data: ProposalFormValues) => void;
  isEditing?: boolean;
}

export function ProposalForm({ initialData, onSubmit, isEditing = false }: ProposalFormProps) {
  const router = useRouter();
  const form = useForm<ProposalFormValues>({
    resolver: zodResolver(proposalSchema),
    defaultValues: initialData || {
      clientName: "",
      projectName: "",
      companyName: "Onic Tech",
      colors: { primary: "#000000", secondary: "#ffffff" },
      stages: [],
      modules: [],
      paymentTerms: [],
      assumptions: [],
      status: "draft",
    },
  });

  const { register, control, handleSubmit, watch, setValue, formState: { errors, isSubmitting } } = form;

  const { fields: stageFields, append: appendStage, remove: removeStage } = useFieldArray({
    control,
    name: "stages",
  });

  const { fields: moduleFields, append: appendModule, remove: removeModule } = useFieldArray({
    control,
    name: "modules",
  });

  const onFormSubmit = async (data: ProposalFormValues) => {
    try {
      await onSubmit(data);
      toast.success(isEditing ? "Proposta atualizada!" : "Proposta criada!");
      router.push("/admin/proposals");
    } catch (error) {
      toast.error("Erro ao salvar proposta");
      console.error(error);
    }
  };

  const handlePreview = () => {
    if (isEditing && initialData?.id) {
      window.open(`/admin/preview/${initialData.id}`, '_blank');
    } else {
      toast.warning("Salve a proposta antes de visualizar.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit)} className="space-y-8 text-white">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">{isEditing ? "Editar Proposta" : "Nova Proposta"}</h2>
        <div className="flex gap-2">
          {isEditing && (
            <Button variant="outline" type="button" onClick={handlePreview} className="border-primary/20 bg-primary/10 text-primary hover:bg-primary/20 hover:text-white">
              <Eye className="mr-2 h-4 w-4" /> Visualizar
            </Button>
          )}
          <Button variant="outline" type="button" onClick={() => router.back()} className="border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white">
            Cancelar
          </Button>
          <Button type="submit" disabled={isSubmitting} className="bg-primary text-black hover:bg-primary/80">
            {isSubmitting ? "Salvando..." : "Salvar Proposta"}
          </Button>
        </div>
      </div>

      <Tabs defaultValue="general" className="w-full">
        <TabsList className="grid w-full grid-cols-4 bg-white/5 border border-white/10">
          <TabsTrigger value="general" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Geral</TabsTrigger>
          <TabsTrigger value="stages" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Etapas & Valores</TabsTrigger>
          <TabsTrigger value="modules" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Módulos</TabsTrigger>
          <TabsTrigger value="details" className="data-[state=active]:bg-primary/20 data-[state=active]:text-primary">Detalhes & Termos</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4 mt-4">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
            <CardHeader>
              <CardTitle>Informações Básicas</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 md:grid-cols-2">
              <div className="grid gap-2">
                <Label htmlFor="clientName" className="text-gray-300">Nome do Cliente</Label>
                <Input id="clientName" {...register("clientName")} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                {errors.clientName && <span className="text-red-400 text-sm">{errors.clientName.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="projectName" className="text-gray-300">Nome do Projeto</Label>
                <Input id="projectName" {...register("projectName")} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                {errors.projectName && <span className="text-red-400 text-sm">{errors.projectName.message}</span>}
              </div>
              <div className="grid gap-2">
                <Label htmlFor="companyName" className="text-gray-300">Nome da Empresa</Label>
                <Input id="companyName" {...register("companyName")} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
              </div>
               <div className="grid gap-2">
                <Label htmlFor="status" className="text-gray-300">Status</Label>
                <select 
                  className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 disabled:cursor-not-allowed disabled:opacity-50"
                  {...register("status")}
                >
                  <option value="draft" className="bg-[#020204]">Rascunho</option>
                  <option value="active" className="bg-[#020204]">Ativa</option>
                  <option value="archived" className="bg-[#020204]">Arquivada</option>
                </select>
              </div>
              <div className="grid gap-2 col-span-2">
                <Label htmlFor="objective" className="text-gray-300">Objetivo</Label>
                <Textarea id="objective" {...register("objective")} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="primaryColor" className="text-gray-300">Cor Primária</Label>
                <div className="flex gap-2">
                  <Input id="primaryColor" type="color" className="w-12 p-1 h-10 bg-black/20 border-white/10" {...register("colors.primary")} />
                  <Input {...register("colors.primary")} placeholder="#000000" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                </div>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="secondaryColor" className="text-gray-300">Cor Secundária</Label>
                 <div className="flex gap-2">
                  <Input id="secondaryColor" type="color" className="w-12 p-1 h-10 bg-black/20 border-white/10" {...register("colors.secondary")} />
                  <Input {...register("colors.secondary")} placeholder="#ffffff" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="stages" className="space-y-4 mt-4">
           <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Etapas do Projeto</CardTitle>
              <Button type="button" size="sm" onClick={() => appendStage({ id: stageFields.length + 1, title: "", dateRange: "", description: "", price: "" })} className="bg-primary/10 text-primary hover:bg-primary/20">
                <Plus className="h-4 w-4 mr-2" /> Adicionar Etapa
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
              {stageFields.map((field, index) => (
                <div key={field.id} className="grid gap-4 border border-white/10 p-4 rounded-md relative bg-black/20">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => removeStage(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="grid gap-2">
                      <Label className="text-gray-300">Título</Label>
                      <Input {...register(`stages.${index}.title`)} placeholder="Ex: Handover Técnico" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                       {errors.stages?.[index]?.title && <span className="text-red-400 text-sm">{errors.stages[index]?.title?.message}</span>}
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-gray-300">Período</Label>
                      <Input {...register(`stages.${index}.dateRange`)} placeholder="Ex: Pontual" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                    </div>
                    <div className="grid gap-2 col-span-2">
                      <Label className="text-gray-300">Descrição</Label>
                      <Textarea {...register(`stages.${index}.description`)} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                    </div>
                    <div className="grid gap-2">
                      <Label className="text-gray-300">Preço</Label>
                      <Input {...register(`stages.${index}.price`)} placeholder="Ex: R$ 2.400,00" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                    </div>
                  </div>
                </div>
              ))}
              {stageFields.length === 0 && <p className="text-gray-500 text-center py-4">Nenhuma etapa adicionada.</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modules" className="space-y-4 mt-4">
          <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
             <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Módulos do Sistema</CardTitle>
              <Button type="button" size="sm" onClick={() => appendModule({ id: `module-${Date.now()}`, title: "", description: "", iconName: "Server", features: [] })} className="bg-primary/10 text-primary hover:bg-primary/20">
                <Plus className="h-4 w-4 mr-2" /> Adicionar Módulo
              </Button>
            </CardHeader>
            <CardContent className="space-y-4">
               {moduleFields.map((field, index) => (
                <div key={field.id} className="grid gap-4 border border-white/10 p-4 rounded-md relative bg-black/20">
                   <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 text-red-400 hover:text-red-300 hover:bg-red-500/10"
                    onClick={() => removeModule(index)}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="grid gap-2">
                      <Label className="text-gray-300">Título</Label>
                      <Input {...register(`modules.${index}.title`)} placeholder="Ex: Gestão de Infraestrutura" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                    </div>
                     <div className="grid gap-2">
                      <Label className="text-gray-300">Ícone</Label>
                       <select 
                        className="flex h-10 w-full rounded-md border border-white/10 bg-black/20 px-3 py-2 text-sm text-white ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
                        {...register(`modules.${index}.iconName`)}
                      >
                        <option value="Server" className="bg-[#020204]">Server</option>
                        <option value="LayoutDashboard" className="bg-[#020204]">Dashboard</option>
                        <option value="Users" className="bg-[#020204]">Users</option>
                        <option value="Gavel" className="bg-[#020204]">Gavel</option>
                        <option value="Map" className="bg-[#020204]">Map</option>
                        <option value="Smartphone" className="bg-[#020204]">Smartphone</option>
                      </select>
                    </div>
                     <div className="grid gap-2 col-span-2">
                      <Label className="text-gray-300">Descrição</Label>
                      <Textarea {...register(`modules.${index}.description`)} className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
                    </div>
                  </div>
                  {/* Nested Features could go here, but for MVP simplifying */}
                  <div className="mt-2">
                    <Label className="text-xs text-gray-500">Features (separadas por linha - simplificado para MVP)</Label>
                    <Textarea 
                      placeholder="Feature 1&#10;Feature 2&#10;Feature 3" 
                      className="h-24 bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50"
                      defaultValue={field.features?.map(f => f.name).join('\n')}
                      onChange={(e) => {
                        const features = e.target.value.split('\n').filter(Boolean).map(name => ({ name }));
                        form.setValue(`modules.${index}.features`, features);
                      }}
                    />
                  </div>
                </div>
               ))}
               {moduleFields.length === 0 && <p className="text-gray-500 text-center py-4">Nenhum módulo adicionado.</p>}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="space-y-4 mt-4">
           <Card className="bg-white/5 border-white/10 backdrop-blur-sm text-white">
            <CardHeader>
              <CardTitle>Valores e Pagamento</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4">
               <div className="grid gap-2">
                <Label className="text-gray-300">Valor Total</Label>
                <Input {...register("totalPrice")} placeholder="Ex: R$ 10.100,00" className="bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50" />
              </div>
               <div className="grid gap-2">
                <Label className="text-gray-300">Premissas (uma por linha)</Label>
                <Controller
                  control={control}
                  name="assumptions"
                  render={({ field }) => (
                    <Textarea 
                      placeholder="Premissa 1&#10;Premissa 2"
                      className="h-32 bg-black/20 border-white/10 text-white placeholder:text-gray-600 focus-visible:ring-primary/50"
                      value={Array.isArray(field.value) ? field.value.join('\n') : ''}
                      onChange={(e) => {
                        const values = e.target.value.split('\n');
                        field.onChange(values);
                      }}
                    />
                  )}
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </form>
  );
}
