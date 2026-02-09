"use client";

import { motion } from "framer-motion";
import { ProposalData } from "@/types/proposal";
import { Card } from "@/components/ui/card";
import { ChartNoAxesColumnIncreasing, Pencil, ShieldCheck, Sparkle, Target, Zap } from "lucide-react";

export function ProposalObjective({ data }: { data: ProposalData }) {
  if (!data.objective) return null;

  return (
    <section className="container mx-auto px-6 mt-12 mb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-gradient-to-br from-card to-card/50 border-primary/20 p-8 md:p-12 relative overflow-hidden group hover:border-primary/40 transition-all duration-500">
          
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-start">
            <div className="shrink-0 bg-primary/10 p-4 rounded-xl border border-primary/20">
              <Target className="w-8 h-8 text-primary" />
            </div>
            
            <div className="flex-1 space-y-4">
              <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                Objetivo da Proposta
              </h3>
              
              <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed space-y-4">
                {data.objective.split('\n\n').map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* <div className="pt-4 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  <Sparkle className="w-4 h-4" />
                  <span>Experiência do Usuário</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  <ChartNoAxesColumnIncreasing className="w-4 h-4" />
                  <span>Escalabilidade</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  <Zap className="w-4 h-4" />
                  <span>Performance</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  <Pencil className="w-4 h-4" />
                  <span>Customizável</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-primary/80 bg-primary/5 px-3 py-1.5 rounded-full border border-primary/10">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Segurança</span>
                </div>
              </div> */}
            </div>
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
