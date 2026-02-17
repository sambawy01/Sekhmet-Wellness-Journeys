import React, { useState } from 'react';
import { Check, X, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '../../../lib/utils';
import { Button } from '../ui/button';

const currencies = ['USD', 'GBP', 'EUR', 'AED'];

const prices = [
  {
    procedure: "Dental Implant",
    egypt: 250,
    uk: 2500,
    us: 3500,
    turkey: 600,
    uae: 1000
  },
  {
    procedure: "Hollywood Smile",
    egypt: 2500,
    uk: 12000,
    us: 18000,
    turkey: 4000,
    uae: 6000
  },
  {
    procedure: "All-on-4",
    egypt: 3500,
    uk: 15000,
    us: 24000,
    turkey: 5500,
    uae: 8000
  },
  {
    procedure: "Veneers (Per Tooth)",
    egypt: 180,
    uk: 900,
    us: 1500,
    turkey: 300,
    uae: 500
  },
  {
    procedure: "Root Canal",
    egypt: 100,
    uk: 600,
    us: 1200,
    turkey: 200,
    uae: 400
  },
  {
    procedure: "Teeth Whitening",
    egypt: 150,
    uk: 600,
    us: 800,
    turkey: 250,
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

export function PriceComparison() {
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
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Compare Prices
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl mx-auto mb-8"
          >
            See exactly how much you can save by choosing Sekhmet Wellness for your dental care.
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
                    : "border-[#C5A059]/30 text-[#0F1923] hover:border-[#C5A059] hover:text-[#C5A059]"
                )}
              >
                {curr}
              </Button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl border border-[#C5A059]/20 shadow-lg">
          <table className="w-full min-w-[800px] border-collapse bg-white">
            <thead>
              <tr className="bg-[#FAF6EF]">
                <th className="p-4 text-left font-['Playfair_Display'] text-xl font-bold text-[#0F1923] border-b border-[#C5A059]/20 w-1/4 sticky left-0 bg-[#FAF6EF] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)]">Procedure</th>
                <th className="p-4 text-center font-['DM_Sans'] text-lg font-bold text-[#1B7A6E] bg-[#E8F3F1] border-b border-[#1B7A6E]/20 w-1/6">Egypt (Sekhmet)</th>
                <th className="p-4 text-center font-['DM_Sans'] text-lg font-medium text-[#0F1923]/60 border-b border-[#C5A059]/20 w-1/6">UK</th>
                <th className="p-4 text-center font-['DM_Sans'] text-lg font-medium text-[#0F1923]/60 border-b border-[#C5A059]/20 w-1/6">US</th>
                <th className="p-4 text-center font-['DM_Sans'] text-lg font-medium text-[#0F1923]/60 border-b border-[#C5A059]/20 w-1/6">Turkey</th>
                <th className="p-4 text-center font-['DM_Sans'] text-lg font-bold text-[#C84B31] border-b border-[#C5A059]/20 w-1/6">Your Savings</th>
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
                    className="hover:bg-[#FAF6EF]/50 transition-colors group"
                  >
                    <td className="p-4 font-['DM_Sans'] font-medium text-[#0F1923] border-b border-[#C5A059]/10 sticky left-0 bg-white group-hover:bg-[#FAF6EF] z-10 shadow-[2px_0_5px_-2px_rgba(0,0,0,0.1)] transition-colors">
                      {row.procedure}
                    </td>
                    <td className="p-4 text-center font-['Space_Mono'] font-bold text-[#1B7A6E] bg-[#E8F3F1]/50 border-b border-[#1B7A6E]/10 text-lg">
                      {currencySymbols[currency]}{convert(row.egypt)}
                    </td>
                    <td className="p-4 text-center font-['Space_Mono'] text-[#0F1923]/60 border-b border-[#C5A059]/10 relative">
                      <span className="line-through decoration-red-500/50 decoration-2">
                        {currencySymbols[currency]}{convert(row.uk)}
                      </span>
                    </td>
                    <td className="p-4 text-center font-['Space_Mono'] text-[#0F1923]/60 border-b border-[#C5A059]/10 relative">
                      <span className="line-through decoration-red-500/50 decoration-2">
                        {currencySymbols[currency]}{convert(row.us)}
                      </span>
                    </td>
                    <td className="p-4 text-center font-['Space_Mono'] text-[#0F1923]/60 border-b border-[#C5A059]/10 relative">
                      {currencySymbols[currency]}{convert(row.turkey)}
                    </td>
                    <td className="p-4 text-center border-b border-[#C5A059]/10">
                      <div className="flex flex-col items-center justify-center">
                        <span className="font-['Space_Mono'] font-bold text-[#C84B31] text-lg">
                          {currencySymbols[currency]}{convert(savings)}
                        </span>
                        <span className="text-xs font-['DM_Sans'] text-[#C84B31] bg-[#C84B31]/10 px-2 py-1 rounded-full mt-1">
                          Save {savingsPercent}%
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
