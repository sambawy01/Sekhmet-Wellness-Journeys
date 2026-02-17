import React from 'react';
import { BadgeDollarSign, HeartPulse, Building2, GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

import { useLanguage } from '../../context/LanguageContext';
const stats = [
  {
    icon: BadgeDollarSign,
    label: "Starting From",
    value: "$250",
    description: "Implants & Veneers"
  },
  {
    icon: HeartPulse,
    label: "Save Up To",
    value: "85%",
    description: "vs UK & US Prices"
  },
  {
    icon: Building2,
    label: "Network Of",
    value: "11",
    description: "JCI Accredited Hospitals"
  },
  {
    icon: GraduationCap,
    label: "Medical Team",
    value: "UK",
    description: "Trained Specialists"
  }
];

export function DentalStats() {
  return (
    <section className="py-12 bg-[#FAF6EF]">
      <div className="container mx-auto px-6">
        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 pb-6 md:pb-0 scrollbar-hide">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-[#F9F6F0] p-6 rounded-xl shadow-sm border border-[#C5A059]/20 hover:border-[#C5A059] transition-all duration-300 min-w-[240px] snap-center shrink-0 flex-1"
            >
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 bg-[#0F1923] rounded-full flex items-center justify-center mb-4">
                  <stat.icon className="w-6 h-6 text-[#C5A059]" />
                </div>
                <h3 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-1">
                  {stat.value}
                </h3>
                <p className="font-['DM_Sans'] text-sm font-semibold text-[#C5A059] uppercase tracking-wide mb-1">
                  {stat.label}
                </p>
                <p className="font-['DM_Sans'] text-sm text-[#0F1923]/60">
                  {stat.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
