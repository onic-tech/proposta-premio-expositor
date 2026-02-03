"use client";

import { motion } from "framer-motion";
import { FeatureItem, ProposalStage } from "@/types/proposal";
import { Card } from "@/components/ui/card";
import { Calendar, CheckCircle2, Layers, DollarSign } from "lucide-react";

function FeatureList({ items }: { items: FeatureItem[] }) {
  return (
    <ul className="space-y-3 mt-4">
      {items.map((item, idx) => (
        <li key={idx} className="flex flex-col gap-1">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-gray-300 font-medium">{item.name}</span>
          </div>
          
          {/* Details (e.g., Payment methods) */}
          {item.details && (
            <div className="ml-8 flex flex-wrap gap-2 mt-1">
              {item.details.map((detail, dIdx) => (
                <span key={dIdx} className="text-xs bg-secondary px-2 py-0.5 rounded text-primary/80 border border-primary/10">
                  {detail}
                </span>
              ))}
            </div>
          )}

          {/* Subfeatures */}
          {item.subFeatures && (
            <ul className="ml-8 mt-2 space-y-2 border-l border-primary/20 pl-4">
              {item.subFeatures.map((sub, sIdx) => (
                <li key={sIdx} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/50 mt-2 shrink-0" />
                  <span className="text-sm text-gray-400">{sub.name}</span>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export function StageCard({ stage, index }: { stage: ProposalStage; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 md:pl-0"
    >
      {/* Timeline Connector for Desktop */}
      <div className="hidden md:flex flex-col items-center absolute left-1/2 -translate-x-1/2 top-0 bottom-0 h-full">
        <div className="w-4 h-4 rounded-full bg-primary shadow-[0_0_10px_#00f3ff] z-10" />
        <div className="w-0.5 bg-gradient-to-b from-primary via-primary/20 to-transparent h-full" />
      </div>

      <div className={`flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
        
        {/* Date & Title Section */}
        <div className="flex-1 md:text-right md:pt-2 group">
          <div className={`flex flex-col ${index % 2 === 0 ? "md:items-start md:text-left" : "md:items-end"}`}>
            <span className="text-primary font-mono text-lg font-bold tracking-wider mb-2 inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {stage.dateRange}
            </span>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 group-hover:text-primary transition-colors">
              {stage.title}
            </h3>
            <p className="text-muted-foreground max-w-md mb-4">{stage.description}</p>
            
            {stage.price && (
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-lg mt-2">
                <DollarSign className="w-4 h-4 text-primary" />
                <span className="text-white font-mono font-semibold">{stage.price}</span>
              </div>
            )}
          </div>
        </div>

        {/* Content Section */}
        <div className="flex-1 pb-16">
          <Card className="bg-card/50 backdrop-blur border-primary/10 hover:border-primary/30 transition-all duration-300">
            {stage.categories.map((category, catIdx) => (
              <div key={catIdx} className="mb-8 last:mb-0">
                <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                  <Layers className="w-5 h-5 text-primary" />
                  {category.name}
                </h4>
                <FeatureList items={category.items} />
              </div>
            ))}
          </Card>
        </div>
      </div>
    </motion.div>
  );
}
