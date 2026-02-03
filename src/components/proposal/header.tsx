"use client";

import { motion } from "framer-motion";
import { ProposalData } from "@/types/proposal";

export function ProposalHeader({ data }: { data: ProposalData }) {
  return (
    <motion.header 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full py-4 md:py-8 px-4 md:px-12 border-b border-primary/20 bg-background/80 backdrop-blur-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
        
        {/* Logo & Subtitle Section */}
        <div className="w-full md:w-auto flex flex-row justify-between md:flex-col items-center md:items-start">
          <div>
            <h1 className="text-2xl md:text-5xl font-bold tracking-tighter text-white">
              <span className="text-primary">ONIC</span> TECH
            </h1>
            <p className="text-muted-foreground text-[10px] md:text-sm uppercase tracking-widest md:mt-1 hidden md:block">
              Proposta Técnica
            </p>
          </div>
          
          {/* Mobile Only: Client Badge visible next to logo to save space */}
          <div className="md:hidden">
             <span className="text-xs text-primary font-mono bg-primary/10 px-2 py-1 rounded-full border border-primary/20">
              {data.clientName}
            </span>
          </div>
        </div>
        
        {/* Project Info Section */}
        <div className="w-full md:w-auto text-center md:text-right">
          <h2 className="text-sm md:text-2xl font-semibold text-white leading-tight">
            {data.projectName}
          </h2>
          
          {/* Desktop Only: Client Badge */}
          <div className="hidden md:flex flex-col md:items-end mt-2">
             <span className="text-sm text-primary font-mono bg-primary/10 px-3 py-1 rounded-full border border-primary/20">
              Cliente: {data.clientName}
            </span>
          </div>
        </div>

      </div>
    </motion.header>
  );
}
