import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
const features = [
  { name: "Medical Expertise Verification", sekhmet: true, diy: false, hospital: true },
  { name: "Personal Travel Coordinator", sekhmet: true, diy: false, hospital: false },
  { name: "All-Inclusive Pricing", sekhmet: true, diy: false, hospital: false },
  { name: "Luxury Accommodation Included", sekhmet: true, diy: true, hospital: false },
  { name: "Post-Treatment Recovery Support", sekhmet: true, diy: false, hospital: true },
  { name: "Legal & Insurance Assistance", sekhmet: true, diy: false, hospital: false },
  { name: "24/7 On-Ground Support", sekhmet: true, diy: false, hospital: false },
  { name: "Cultural & Tourism Itinerary", sekhmet: true, diy: true, hospital: false },
];

export function ComparisonTable() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4">
            Why Choose Sekhmet?
          </h2>
          <p className="font-['DM_Sans'] text-lg text-[#0F1923]/60">
            See how we compare to planning it yourself or booking directly.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className="p-4 text-left font-['Playfair_Display'] text-xl font-bold text-[#0F1923]">Feature</th>
                <th className="p-4 bg-[#FAF6EF] text-center font-['Space_Mono'] text-lg font-bold text-[#C5A059] rounded-t-xl border-t-4 border-[#C5A059]">
                  Sekhmet Wellness
                </th>
                <th className="p-4 text-center font-['Space_Mono'] text-lg font-bold text-[#0F1923]/60">
                  DIY Planning
                </th>
                <th className="p-4 text-center font-['Space_Mono'] text-lg font-bold text-[#0F1923]/60">
                  Hospital Direct
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <motion.tr 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-[#0F1923]/10 hover:bg-[#FAF6EF]/50 transition-colors"
                >
                  <td className="p-4 font-['DM_Sans'] text-[#0F1923] font-medium">
                    {feature.name}
                  </td>
                  
                  {/* Sekhmet Column */}
                  <td className="p-4 bg-[#FAF6EF] text-center border-l border-r border-[#C5A059]/20">
                    <div className="flex justify-center">
                      <div className="w-8 h-8 rounded-full bg-[#C5A059] flex items-center justify-center text-white shadow-sm">
                        <Check className="w-5 h-5" />
                      </div>
                    </div>
                  </td>

                  {/* DIY Column */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {feature.diy ? (
                        <Check className="w-6 h-6 text-[#0F1923]/40" />
                      ) : (
                        <X className="w-6 h-6 text-red-400/60" />
                      )}
                    </div>
                  </td>

                  {/* Hospital Column */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {feature.hospital ? (
                        <Check className="w-6 h-6 text-[#0F1923]/40" />
                      ) : (
                        <X className="w-6 h-6 text-red-400/60" />
                      )}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
