import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button } from '../ui/button';

const prices = [
  { procedure: "Single Implant (Titanium)", egypt: 250, uk: 2500, us: 3500, turkey: 600 },
  { procedure: "All-on-4 (Per Arch)", egypt: 3500, uk: 15000, us: 24000, turkey: 5500 },
  { procedure: "All-on-6 (Per Arch)", egypt: 4500, uk: 18000, us: 28000, turkey: 6500 },
  { procedure: "Bone Grafting", egypt: 150, uk: 800, us: 1200, turkey: 300 },
  { procedure: "Sinus Lift", egypt: 300, uk: 1500, us: 2500, turkey: 500 }
];

export function ImplantsPriceComparison() {
  const [currency, setCurrency] = useState('USD');
  const currencySymbols: Record<string, string> = { USD: '$', GBP: '£', EUR: '€' };
  const rates: Record<string, number> = { USD: 1, GBP: 0.79, EUR: 0.92 };

  const convert = (val: number) => Math.round(val * rates[currency]).toLocaleString();

  return (
    <section className="py-16 bg-[#F5F0E5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-4">Transparent Pricing</h2>
          <div className="flex justify-center gap-2 mb-6">
            {['USD', 'GBP', 'EUR'].map(c => (
              <Button key={c} variant={currency === c ? "default" : "outline"} onClick={() => setCurrency(c)} className={`rounded-full ${currency === c ? "bg-[#C5A059]" : ""}`}>
                {c}
              </Button>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl shadow-lg border border-[#C5A059]/20 bg-white">
          <table className="w-full min-w-[700px]">
            <thead className="bg-[#FAF6EF]">
              <tr>
                <th className="p-4 text-left font-bold text-[#0F1923]">Procedure</th>
                <th className="p-4 text-center font-bold text-[#1B7A6E] bg-[#E8F3F1]">Egypt</th>
                <th className="p-4 text-center font-medium text-[#0F1923]/60">UK</th>
                <th className="p-4 text-center font-medium text-[#0F1923]/60">US</th>
                <th className="p-4 text-center font-medium text-[#0F1923]/60">Turkey</th>
              </tr>
            </thead>
            <tbody>
              {prices.map((row, i) => (
                <tr key={i} className="border-t border-gray-100 hover:bg-gray-50">
                  <td className="p-4 font-medium text-[#0F1923]">{row.procedure}</td>
                  <td className="p-4 text-center font-bold text-[#1B7A6E] bg-[#E8F3F1]/30">{currencySymbols[currency]}{convert(row.egypt)}</td>
                  <td className="p-4 text-center text-[#0F1923]/60 line-through decoration-red-500/30">{currencySymbols[currency]}{convert(row.uk)}</td>
                  <td className="p-4 text-center text-[#0F1923]/60 line-through decoration-red-500/30">{currencySymbols[currency]}{convert(row.us)}</td>
                  <td className="p-4 text-center text-[#0F1923]/60">{currencySymbols[currency]}{convert(row.turkey)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
