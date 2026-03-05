import React from 'react';
import { motion } from 'motion/react';
import { Check, X, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const features = [
  { nameKey: "hiw.comparison.feature1", sekhmet: true, diy: false, hospital: true },
  { nameKey: "hiw.comparison.feature2", sekhmet: true, diy: false, hospital: false },
  { nameKey: "hiw.comparison.feature3", sekhmet: true, diy: false, hospital: false },
  { nameKey: "hiw.comparison.feature4", sekhmet: true, diy: true, hospital: false },
  { nameKey: "hiw.comparison.feature5", sekhmet: true, diy: false, hospital: true },
  { nameKey: "hiw.comparison.feature6", sekhmet: true, diy: false, hospital: false },
  { nameKey: "hiw.comparison.feature7", sekhmet: true, diy: false, hospital: false },
  { nameKey: "hiw.comparison.feature8", sekhmet: true, diy: true, hospital: false },
];

export function ComparisonTable() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 ${isRTL ? 'text-right' : ''}`}>
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-4">
            {t('hiw.comparison.heading')}
          </h2>
          <p className="font-['Outfit'] text-lg text-[#0F172A]/60">
            {t('hiw.comparison.subtitle')}
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] border-collapse">
            <thead>
              <tr>
                <th className={`p-4 font-['Playfair_Display'] text-xl font-bold text-[#0F172A] ${isRTL ? 'text-right' : 'text-left'}`}>
                  {t('hiw.comparison.featureHeader')}
                </th>
                <th className="p-4 bg-[#F0F7F4] text-center font-['Space_Mono'] text-lg font-bold text-[#C5A059] rounded-t-xl border-t-4 border-[#C5A059]">
                  {t('hiw.comparison.column1')}
                </th>
                <th className="p-4 text-center font-['Space_Mono'] text-lg font-bold text-[#0F172A]/60">
                  {t('hiw.comparison.column2')}
                </th>
                <th className="p-4 text-center font-['Space_Mono'] text-lg font-bold text-[#0F172A]/60">
                  {t('hiw.comparison.column3')}
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
                  className="border-b border-[#0F172A]/10 hover:bg-[#F0F7F4]/50 transition-colors"
                >
                  <td className={`p-4 font-['Outfit'] text-[#0F172A] font-medium ${isRTL ? 'text-right' : ''}`}>
                    {t(feature.nameKey)}
                  </td>

                  {/* Sekhmet Column */}
                  <td className="p-4 bg-[#F0F7F4] text-center border-l border-r border-[#C5A059]/20">
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
                        <Check className="w-6 h-6 text-[#0F172A]/40" />
                      ) : (
                        <X className="w-6 h-6 text-red-400/60" />
                      )}
                    </div>
                  </td>

                  {/* Hospital Column */}
                  <td className="p-4 text-center">
                    <div className="flex justify-center">
                      {feature.hospital ? (
                        <Check className="w-6 h-6 text-[#0F172A]/40" />
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
