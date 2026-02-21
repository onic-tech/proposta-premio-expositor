"use client";

import { motion } from "framer-motion";
import { ProposalData } from "@/types/proposal";
import { Card } from "@/components/ui/card";
import { CheckCircle2, DollarSign } from "lucide-react";

export function FinancialSummary({ data }: { data: ProposalData }) {
  if (!data.totalPrice) return null;

  const isProposeNewFeatures = data.projectName === "Plataforma Mostra de Comunicação - Roadmap de Evolução"

  // Extract the numeric value from the string (e.g., "R$ 30.000,00" -> 30000)
  const numericPrice = parseFloat(data.totalPrice.replace(/[^0-9,]/g, '').replace(',', '.'));
  const installmentValue = (numericPrice / 4).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

  // Format large numbers (e.g. 19500 -> 19.5k)
  const formattedLargePrice = numericPrice >= 1000 
    ? (numericPrice / 1000).toLocaleString('en-US', { maximumFractionDigits: 1 }) + 'k'
    : numericPrice;

  return (
    <section className="container mx-auto px-6 mt-12 mb-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Card className="bg-[#050508] border-primary/30 overflow-hidden relative">
           {/* Background Glow */}
           <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-primary/10 rounded-full blur-[100px]" />

          <div className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 relative z-10">
            <div className="flex-1 space-y-4">
              {isProposeNewFeatures? (
                <h2 className="text-3xl font-bold text-white">Proposta do Roadmap</h2>
              ) : (
                <h2 className="text-3xl font-bold text-white">Proposta de Valor 2026</h2>
              )}
              <p className="text-gray-400 max-w-lg">
                O modelo foi estruturado para garantir segurança técnica e previsibilidade financeira.
              </p>
              
              <div className="flex flex-col gap-2 mt-4">
                {data.paymentTerms ? (
                  data.paymentTerms.map((term, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                      <div className="flex flex-col">
                        {term.oldText && (
                          <span className="text-xs text-red-400/70 line-through decoration-red-500/50 mb-0.5">
                            {term.oldText}
                          </span>
                        )}
                        <span>
                          {term.highlight ? (
                            <strong className="text-white">{term.text}</strong>
                          ) : (
                            term.text
                          )}
                        </span>
                      </div>
                    </div>
                  ))
                ) : (
                  <>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>4 Parcelas de <strong className="text-white">{installmentValue}</strong></span>
                    </div>
                    <div className="flex items-center gap-3 text-gray-300">
                      <CheckCircle2 className="w-5 h-5 text-primary" />
                      <span>Pagamento por etapa entregue</span>
                    </div>

                  </>
                )}
              </div>
            </div>
            {
              isProposeNewFeatures && (
                <div className="flex items-start gap-1 text-primary">
                  <DollarSign className="w-8 h-8 mt-2" />
                  <span className="text-5xl md:text-6xl font-bold tracking-tighter">
                    {formattedLargePrice}
                  </span>
                </div>
              )
            }
          </div>
        </Card>
      </motion.div>
    </section>
  );
}
