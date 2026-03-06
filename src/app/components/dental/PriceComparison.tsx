import React, { useState } from 'react';
import { Check, X, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { Button } from '../ui/button';
import { useLanguage } from '../../context/LanguageContext';

export function PriceComparison() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const currencies = ['USD', 'GBP', 'EUR', 'AED'];

  const prices = [
    {
      procedure: t('dentalPrices.procedures.dentalImplant'),
      egypt: 250,
      uk: 2500,
      us: 3500,
      uae: 1000
    },
    {
      procedure: t('dentalPrices.procedures.hollywoodSmile'),
      egypt: 2500,
      uk: 12000,
      us: 18000,
      uae: 6000
    },
    {
      procedure: t('dentalPrices.procedures.allOn4'),
      egypt: 3500,
      uk: 15000,
      us: 24000,
      uae: 8000
    },
    {
      procedure: t('dentalPrices.procedures.veneersPerTooth'),
      egypt: 180,
      uk: 900,
      us: 1500,
      uae: 500
    },
    {
      procedure: t('dentalPrices.procedures.rootCanal'),
      egypt: 100,
      uk: 600,
      us: 1200,
      uae: 400
    },
    {
      procedure: t('dentalPrices.procedures.teethWhitening'),
      egypt: 150,
      uk: 600,
      us: 800,
      uae: 400
    }
  ];

  const exchangeRates: Record<string, number> = {
    USD: 1,
    GBP: 0.79,
    EUR: 0.92,
    AED: 3.67
  };

  const currencySymbols: Record<string, string> = {
    USD: '$',
    GBP: '£',
    EUR: '€',
    AED: 'AED '
  };

  const [currency, setCurrency] = useState('USD');

  const convert = (price: number) => {
    return Math.round(price * exchangeRates[currency]).toLocaleString();
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
          >
            {t('dentalPrices.title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-sans text-lg text-[#0F172A]/60 max-w-2xl mx-auto mb-8"
          >
            {t('dentalPrices.subtitle')}
          </motion.p>

          <div className="flex justify-center gap-2 mb-8">
            {currencies.map((curr) => (
              <Button
                key={curr}
                variant={currency === curr ? "default" : "outline"}
                onClick={() => setCurrency(curr)}
                className={cn(
                  "rounded-full px-6 transition-all duration-300",
                  currency === curr
                    ? "bg-[#C5A059] text-white hover:bg-[#B08D45] border-transparent"
                    : "border-[#C5A059]/30 text-[#0F172A] hover:border-[#C5A059] hover:text-[#C5A059]"
                )}
              >
                {curr}
              </Button>
            ))}
          </div>
        </div>

        <div className={cn("overflow-x-auto rounded-xl border border-[#C5A059]/20 shadow-lg", isRTL && "rtl")}>
          <table className="w-full min-w-[700px] border-collapse bg-white">
            <thead>
              <tr className="bg-[#F0F7F4]">
                <th className={cn("p-4", isRTL ? "text-right" : "text-left", "font-heading text-xl font-bold text-[#0F172A] border-b border-[#C5A059]/20 w-1/5 sticky left-0 bg-[#F0F7F4] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]")}>{t('dentalPrices.header.procedure')}</th>
                <th className="p-4 text-center font-sans text-lg font-bold text-[#14B8A6] bg-[#E8F3F1] border-b border-[#14B8A6]/20 w-1/5">{t('dentalPrices.header.egypt')}</th>
                <th className="p-4 text-center font-sans text-lg font-medium text-[#0F172A]/60 border-b border-[#C5A059]/20 w-1/5">{t('dentalPrices.header.uk')}</th>
                <th className="p-4 text-center font-sans text-lg font-medium text-[#0F172A]/60 border-b border-[#C5A059]/20 w-1/5">{t('dentalPrices.header.us')}</th>
                <th className="p-4 text-center font-sans text-lg font-bold text-[#C84B31] border-b border-[#C5A059]/20 w-1/5">{t('dentalPrices.header.savings')}</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, index) => {
                const maxPrice = Math.max(row.uk, row.us);
                const savings = maxPrice - row.egypt;
                const savingsPercent = Math.round((savings / maxPrice) * 100);

                return (
                  <motion.tr
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-[#F0F7F4]/50 transition-colors group"
                  >
                    <td className={cn("p-4 font-sans font-medium text-[#0F172A] border-b border-[#C5A059]/10 sticky left-0 bg-white group-hover:bg-[#F0F7F4] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] transition-colors", isRTL && "text-right")}>
                      {row.procedure}
                    </td>
                    <td className="p-4 text-center font-heading font-bold text-[#14B8A6] bg-[#E8F3F1]/50 border-b border-[#14B8A6]/10 text-lg">
                      {currencySymbols[currency]}{convert(row.egypt)}
                    </td>
                    <td className="p-4 text-center font-heading text-[#0F172A]/60 border-b border-[#C5A059]/10 relative">
                      <span className="line-through decoration-red-500/50 decoration-2">
                        {currencySymbols[currency]}{convert(row.uk)}
                      </span>
                    </td>
                    <td className="p-4 text-center font-heading text-[#0F172A]/60 border-b border-[#C5A059]/10 relative">
                      <span className="line-through decoration-red-500/50 decoration-2">
                        {currencySymbols[currency]}{convert(row.us)}
                      </span>
                    </td>
                    <td className="p-4 text-center border-b border-[#C5A059]/10">
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-heading font-bold text-[#C84B31] text-lg">
                          {currencySymbols[currency]}{convert(savings)}
                        </span>
                        <span className="text-xs font-sans text-[#C84B31] bg-[#C84B31]/10 px-2 py-1 rounded-full mt-1">
                          {t('dentalPrices.savingsLabel')} {savingsPercent}%
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
