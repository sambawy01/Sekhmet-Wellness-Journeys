import React, { useState } from 'react';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

export function HollywoodPriceComparison() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const prices = [
    { procedure: t('hollywoodPrices.procedures.emaxVeneer'), egypt: 200, uk: 950, us: 1500 },
    { procedure: t('hollywoodPrices.procedures.porcelainVeneer'), egypt: 180, uk: 850, us: 1200 },
    { procedure: t('hollywoodPrices.procedures.lumineer'), egypt: 350, uk: 1100, us: 1800 },
    { procedure: t('hollywoodPrices.procedures.compositeBonding'), egypt: 80, uk: 350, us: 500 },
    { procedure: t('hollywoodPrices.procedures.laserWhitening'), egypt: 150, uk: 500, us: 600 }
  ];

  const [currency, setCurrency] = useState('USD');
  const currencySymbols: Record<string, string> = { USD: '$', GBP: '£', EUR: '€' };
  const rates: Record<string, number> = { USD: 1, GBP: 0.79, EUR: 0.92 };

  const convert = (val: number) => Math.round(val * rates[currency]).toLocaleString();

  return (
    <section className="py-16 bg-[#F0F7F4]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-heading text-3xl font-bold text-[#0F172A] mb-4">{t('hollywoodPrices.title')}</h2>
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
                <th className={cn("p-4", isRTL ? "text-right" : "text-left", "font-bold text-[#0F172A]")}>{t('hollywoodPrices.header.procedure')}</th>
                <th className="p-4 text-center font-bold text-[#14B8A6] bg-[#E8F3F1]">{t('hollywoodPrices.header.egypt')}</th>
                <th className="p-4 text-center font-medium text-[#0F172A]/60">{t('hollywoodPrices.header.uk')}</th>
                <th className="p-4 text-center font-medium text-[#0F172A]/60">{t('hollywoodPrices.header.us')}</th>
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
