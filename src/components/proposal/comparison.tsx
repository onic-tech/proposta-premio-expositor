"use client";

import { motion } from "framer-motion";
import { ProposalData } from "@/types/proposal";
import { Card } from "@/components/ui/card";
import { ThumbsUp, ThumbsDown } from "lucide-react";
import { cn } from "@/lib/utils";

export function ProposalComparison({ data }: { data: ProposalData }) {
  if (!data.comparison) return null;

  return (
    <section className="container mx-auto px-6 mt-12 mb-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <p className="text-primary font-mono text-sm tracking-widest mb-2">ANÁLISE DE CENÁRIO</p>
          <h2 className="text-3xl font-bold text-white">Pontos de Atenção</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* PROS */}
          <Card className="bg-green-500/5 border-green-500/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                <ThumbsUp className="w-5 h-5 text-green-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Pontos Positivos</h3>
            </div>
            <ul className="space-y-3">
              {data.comparison.pros.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>

          {/* CONS */}
          <Card className="bg-red-500/5 border-red-500/20 p-6">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center">
                <ThumbsDown className="w-5 h-5 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-white">Pontos de Atenção</h3>
            </div>
            <ul className="space-y-3">
              {data.comparison.cons.map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span className="text-gray-300">{item}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </motion.div>
    </section>
  );
}
