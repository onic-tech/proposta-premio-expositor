"use client";

import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";

interface FloatingToggleProps {
  variant: 'reduced' | 'full';
  onToggle: (variant: 'reduced' | 'full') => void;
  labels?: {
    reduced: string;
    full: string;
  };
}

export function FloatingToggle({ variant, onToggle, labels }: FloatingToggleProps) {
  const defaultLabels = {
    reduced: "Opção 1 (R$ 30k)",
    full: "Opção 2 (R$ 42k)"
  };

  const currentLabels = labels || defaultLabels;

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
      className="fixed bottom-6 md:bottom-8 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-[350px] md:w-auto md:max-w-none"
    >
      <div className="flex items-center justify-between md:justify-center gap-2 md:gap-3 bg-black/90 md:bg-black/80 backdrop-blur-xl p-3 md:p-2 md:pl-4 md:pr-4 rounded-full border border-primary/20 shadow-[0_0_30px_rgba(0,243,255,0.15)] hover:border-primary/40 transition-colors w-full">
        <span className={`text-xs md:text-sm font-medium cursor-pointer transition-colors whitespace-nowrap ${variant === 'reduced' ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`} onClick={() => onToggle('reduced')}>
          {currentLabels.reduced}
        </span>
        
        <Switch 
          checked={variant === 'full'}
          onCheckedChange={(checked) => onToggle(checked ? 'full' : 'reduced')}
          className="data-[state=checked]:bg-primary shrink-0"
        />
        
        <span className={`text-xs md:text-sm font-medium cursor-pointer transition-colors whitespace-nowrap ${variant === 'full' ? 'text-primary' : 'text-gray-500 hover:text-gray-300'}`} onClick={() => onToggle('full')}>
          {currentLabels.full}
        </span>
      </div>
    </motion.div>
  );
}
