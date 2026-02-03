"use client";

import { motion } from "framer-motion";
import { ProposalData } from "@/types/proposal";
import { AlertCircle } from "lucide-react";

export function Assumptions({ data }: { data: ProposalData }) {
  if (!data.assumptions || data.assumptions.length === 0) return null;

  return (
    <section className="container mx-auto px-6 mb-16">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="border-t border-white/10 pt-12"
      >
        <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-primary" />
          Premissas e Considerações
        </h3>
        
        <ul className="grid gap-3 md:grid-cols-2">
          {data.assumptions.map((item, idx) => (
            <li key={idx} className="flex items-start gap-3 text-sm text-gray-400">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-1.5 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
