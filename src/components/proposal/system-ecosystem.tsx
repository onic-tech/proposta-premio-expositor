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
  ArrowRight
} from "lucide-react";

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
      <Card className="h-full bg-secondary/20 border-primary/10 hover:border-primary/40 transition-all duration-300 group p-6 relative overflow-hidden">
        {/* Hover Gradient Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        <div className="relative z-10">
          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          
          <h4 className="text-xl font-bold text-white mb-2">{module.title}</h4>
          <p className="text-sm text-gray-400 mb-6 min-h-[40px]">{module.description}</p>
          
          <ul className="space-y-2">
            {module.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                <CheckCircle2 className="w-4 h-4 text-primary/60 mt-0.5 shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>
    </motion.div>
  );
}

export function SystemEcosystem({ data }: { data: ProposalData }) {
  if (!data.modules) return null;

  return (
    <section className="container mx-auto px-6 mb-20">
      <div className="text-center mb-12">
        <p className="text-primary font-mono text-sm tracking-widest mb-2">ARQUITETURA DA SOLUÇÃO</p>
        <h2 className="text-3xl md:text-4xl font-bold text-white">
          Ecossistema Integrado
        </h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Uma visão geral de como os módulos se conectam para entregar uma experiência completa para todos os stakeholders.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connecting Lines (Desktop Only - Visual decoration) */}
        <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -z-10" />
        
        {data.modules.map((module, index) => (
          <ModuleCard key={module.id} module={module} index={index} />
        ))}
      </div>
    </section>
  );
}
