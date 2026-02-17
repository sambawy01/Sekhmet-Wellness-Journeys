import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Percent, Calendar, Globe } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
const stats = [
  {
    icon: CircleDollarSign,
    label: "Price Range",
    value: "$250–$500",
    description: "Per Single Implant"
  },
  {
    icon: Globe,
    label: "UK Price",
    value: "vs $3,500",
    description: "Average Cost"
  },
  {
    icon: Percent,
    label: "Savings",
    value: "90%",
    description: "Off Western Prices"
  },
  {
    icon: Calendar,
    label: "Availability",
    value: "Same-Day",
    description: "Appointments Possible"
  }
];

export function ImplantsKeyFacts() {
  return (
    <section className="bg-[#FAF6EF] border-b border-[#C5A059]/20 py-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center justify-center text-center p-4 bg-white rounded-lg shadow-sm border border-[#C5A059]/10"
            >
              <stat.icon className="w-6 h-6 text-[#C5A059] mb-2" />
              <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#0F1923]">{stat.value}</h3>
              <p className="font-['DM_Sans'] text-xs font-bold uppercase tracking-wide text-[#1B7A6E] mb-1">{stat.label}</p>
              <p className="font-['DM_Sans'] text-xs text-[#0F1923]/60">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
