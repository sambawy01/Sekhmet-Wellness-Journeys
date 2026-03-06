import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

export function ImplantsPriceComparison() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const prices = [
    { procedure: t('implantsPrices.procedures.singleImplant'), egypt: 250, uk: 2500, us: 3500 },
    { procedure: t('implantsPrices.procedures.allOn4'), egypt: 3500, uk: 15000, us: 24000 },
    { procedure: t('implantsPrices.procedures.allOn6'), egypt: 4500, uk: 18000, us: 28000 },
    { procedure: t('implantsPrices.procedures.boneGrafting'), egypt: 150, uk: 800, us: 1200 },
    { procedure: t('implantsPrices.procedures.sinusLift'), egypt: 300, uk: 1500, us: 2500 }
  ];

  const [currency, setCurrency] = useState('USD');
  const currencySymbols: Record<string, string> = { USD: '$', GBP: '£', EUR: '€' };
  const rates: Record<string, number> = { USD: 1, GBP: 0.79, EUR: 0.92 };

  const convert = (val: number) => Math.round(val * rates[currency]).toLocaleString();

  return (
    <section className="py-16 bg-[#F0F7F4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-4">{t('implantsPrices.title')}</h2>
          <div className="flex justify-center gap-2 mb-6">
            {['USD', 'GBP', 'EUR'].map(c => (
              <Button key={c} variant={currency === c ? "default" : "outline"} onClick={() => setCurrency(c)} className={cn("rounded-full", currency === c ? "bg-[#C5A059]" : "")}>
                {c}
              </Button>
            ))}
          </div>
        </div>

        <div className={cn("overflow-x-auto rounded-xl shadow-lg border border-[#C5A059]/20 bg-white", isRTL && "rtl")}>
          <table className="w-full min-w-[600px]">
            <thead className="bg-[#F0F7F4]">
              <tr>
                <th className={cn("p-4", isRTL ? "text-right" : "text-left", "font-bold text-[#0F172A]")}>{t('implantsPrices.header.procedure')}</th>
                <th className="p-4 text-center font-bold text-[#14B8A6] bg-[#E8F3F1]">{t('implantsPrices.header.egypt')}</th>
                <th className="p-4 text-center font-medium text-[#0F172A]/60">{t('implantsPrices.header.uk')}</th>
                <th className="p-4 text-center font-medium text-[#0F172A]/60">{t('implantsPrices.header.us')}</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className={cn("p-4 font-medium text-[#0F172A]", isRTL && "text-right")}>{row.procedure}</td>
                  <td className="p-4 text-center font-bold text-[#14B8A6] bg-[#E8F3F1]/30">{currencySymbols[currency]}{convert(row.egypt)}</td>
                  <td className="p-4 text-center text-[#0F172A]/60 line-through decoration-red-500/30">{currencySymbols[currency]}{convert(row.uk)}</td>
                  <td className="p-4 text-center text-[#0F172A]/60 line-through decoration-red-500/30">{currencySymbols[currency]}{convert(row.us)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
