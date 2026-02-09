"use client";

import { motion } from "framer-motion";
import { ProposalData, SystemModule } from "@/types/proposal";
import { Card } from "@/components/ui/card";
import { 
  LayoutDashboard, 
  Users, 
  Gavel, 
  Map, 
  Server, 
  Smartphone,
  CheckCircle2,
  ArrowRight,
  XCircle
} from "lucide-react";
import { cn } from "@/lib/utils";

const icons = {
  LayoutDashboard,
  Users,
  Gavel,
  Map,
  Server,
  Smartphone
};

function ModuleCard({ module, index }: { module: SystemModule; index: number }) {
  const Icon = icons[module.iconName];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className={cn(
        "h-full bg-secondary/20 border-primary/10 hover:border-primary/40 transition-all duration-300 group p-6 relative overflow-hidden",
        module.excluded && "opacity-60 border-red-500/20 hover:border-red-500/40"
      )}>
        {/* Hover Gradient Effect */}
        <div className={cn(
          "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
          module.excluded ? "from-red-500/5 to-transparent" : "from-primary/5 to-transparent"
        )} />
        
        <div className="relative z-10">
          <div className={cn(
            "w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300",
            module.excluded ? "bg-red-500/10" : "bg-primary/10"
          )}>
            <Icon className={cn("w-6 h-6", module.excluded ? "text-red-500/50" : "text-primary")} />
          </div>
          
          <h4 className={cn("text-xl font-bold text-white mb-2", module.excluded && "line-through decoration-red-500/50")}>
            {module.title}
          </h4>
          <p className={cn("text-sm text-gray-400 mb-6 min-h-[40px]", module.excluded && "line-through decoration-red-500/30")}>
            {module.description}
          </p>
          
          <ul className="space-y-2">
            {module.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                {(module.excluded || feature.excluded) ? (
                  <XCircle className="w-4 h-4 text-red-500/50 mt-0.5 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                )}
                <span className={cn((module.excluded || feature.excluded) && "line-through decoration-red-500/30 text-gray-500")}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}

export function SystemEcosystem({ data, hideHeader = false }: { data: ProposalData; hideHeader?: boolean }) {
  if (!data.modules) return null;

  return (
    <section className={hideHeader ? "" : "container mx-auto px-6 mb-20"}>
      {!hideHeader && (
        <div className="text-center mb-12">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">ARQUITETURA DA SOLUÇÃO</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">
            Ecossistema Integrado
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Uma visão geral de como os módulos se conectam para entregar uma experiência completa para todos os stakeholders.
          </p>
        </div>
      )}

      <div className={`grid grid-cols-1 md:grid-cols-2 ${data.modules.length > 2 ? 'lg:grid-cols-4' : 'lg:grid-cols-2 max-w-4xl mx-auto'} gap-6 relative`}>
        {/* Connecting Lines (Desktop Only - Visual decoration) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
        
        {data.modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </div>
    </section>
  );
}
