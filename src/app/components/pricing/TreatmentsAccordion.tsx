import React, { useState } from 'react';
import { 
  Smile, 
  Scissors, 
  Eye, 
  Sparkles, 
  Activity, 
  HeartPulse, 
  Info,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

// Treatment Data with translation keys
const treatments = [
  {
    id: "implants",
    nameKey: "accordion.implants.title",
    category: "Dental",
    taglineKey: "accordion.implants.tagline",
    priceKey: "accordion.implants.price",
    descriptionKey: "accordion.implants.description",
    includesKeys: ["accordion.implants.includes.1", "accordion.implants.includes.2", "accordion.implants.includes.3", "accordion.implants.includes.4", "accordion.implants.includes.5", "accordion.implants.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.implants.pricing.1.item", priceKey: "accordion.implants.pricing.1.price" },
      { itemKey: "accordion.implants.pricing.2.item", priceKey: "accordion.implants.pricing.2.price" }
    ],
    recoveryKey: "accordion.implants.recovery",
    durationKey: "accordion.implants.duration",
    icon: Smile,
    color: "bg-blue-100 text-blue-700",
    savings: "70%"
  },
  {
    id: "veneers",
    nameKey: "accordion.veneers.title",
    category: "Dental",
    taglineKey: "accordion.veneers.tagline",
    priceKey: "accordion.veneers.price",
    descriptionKey: "accordion.veneers.description",
    includesKeys: ["accordion.veneers.includes.1", "accordion.veneers.includes.2", "accordion.veneers.includes.3", "accordion.veneers.includes.4", "accordion.veneers.includes.5"],
    pricingKeys: [
      { itemKey: "accordion.veneers.pricing.1.item", priceKey: "accordion.veneers.pricing.1.price" },
      { itemKey: "accordion.veneers.pricing.2.item", priceKey: "accordion.veneers.pricing.2.price" }
    ],
    recoveryKey: "accordion.veneers.recovery",
    durationKey: "accordion.veneers.duration",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-700",
    savings: "75%"
  },
  {
    id: "wisdom",
    nameKey: "accordion.wisdom.title",
    category: "Dental",
    taglineKey: "accordion.wisdom.tagline",
    priceKey: "accordion.wisdom.price",
    descriptionKey: "accordion.wisdom.description",
    includesKeys: ["accordion.wisdom.includes.1", "accordion.wisdom.includes.2", "accordion.wisdom.includes.3", "accordion.wisdom.includes.4", "accordion.wisdom.includes.5", "accordion.wisdom.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.wisdom.pricing.1.item", priceKey: "accordion.wisdom.pricing.1.price" },
      { itemKey: "accordion.wisdom.pricing.2.item", priceKey: "accordion.wisdom.pricing.2.price" }
    ],
    recoveryKey: "accordion.wisdom.recovery",
    durationKey: "accordion.wisdom.duration",
    icon: Activity,
    color: "bg-blue-100 text-blue-700",
    savings: "75%"
  },
  {
    id: "hair",
    nameKey: "accordion.hair.title",
    category: "Hair",
    taglineKey: "accordion.hair.tagline",
    priceKey: "accordion.hair.price",
    descriptionKey: "accordion.hair.description",
    includesKeys: ["accordion.hair.includes.1", "accordion.hair.includes.2", "accordion.hair.includes.3", "accordion.hair.includes.4", "accordion.hair.includes.5", "accordion.hair.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.hair.pricing.1.item", priceKey: "accordion.hair.pricing.1.price" },
      { itemKey: "accordion.hair.pricing.2.item", priceKey: "accordion.hair.pricing.2.price" }
    ],
    recoveryKey: "accordion.hair.recovery",
    durationKey: "accordion.hair.duration",
    icon: Scissors,
    color: "bg-amber-100 text-amber-700",
    savings: "80%"
  },
  {
    id: "rhinoplasty",
    nameKey: "accordion.rhino.title",
    category: "Cosmetic",
    taglineKey: "accordion.rhino.tagline",
    priceKey: "accordion.rhino.price",
    descriptionKey: "accordion.rhino.description",
    includesKeys: ["accordion.rhino.includes.1", "accordion.rhino.includes.2", "accordion.rhino.includes.3", "accordion.rhino.includes.4", "accordion.rhino.includes.5", "accordion.rhino.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.rhino.pricing.1.item", priceKey: "accordion.rhino.pricing.1.price" },
      { itemKey: "accordion.rhino.pricing.2.item", priceKey: "accordion.rhino.pricing.2.price" }
    ],
    recoveryKey: "accordion.rhino.recovery",
    durationKey: "accordion.rhino.duration",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "70%"
  },
  {
    id: "lasik",
    nameKey: "accordion.lasik.title",
    category: "Eye",
    taglineKey: "accordion.lasik.tagline",
    priceKey: "accordion.lasik.price",
    descriptionKey: "accordion.lasik.description",
    includesKeys: ["accordion.lasik.includes.1", "accordion.lasik.includes.2", "accordion.lasik.includes.3", "accordion.lasik.includes.4", "accordion.lasik.includes.5"],
    pricingKeys: [
      { itemKey: "accordion.lasik.pricing.1.item", priceKey: "accordion.lasik.pricing.1.price" },
      { itemKey: "accordion.lasik.pricing.2.item", priceKey: "accordion.lasik.pricing.2.price" }
    ],
    recoveryKey: "accordion.lasik.recovery",
    durationKey: "accordion.lasik.duration",
    icon: Eye,
    color: "bg-emerald-100 text-emerald-700",
    savings: "65%"
  },
  {
    id: "tummy",
    nameKey: "accordion.tummy.title",
    category: "Cosmetic",
    taglineKey: "accordion.tummy.tagline",
    priceKey: "accordion.tummy.price",
    descriptionKey: "accordion.tummy.description",
    includesKeys: ["accordion.tummy.includes.1", "accordion.tummy.includes.2", "accordion.tummy.includes.3", "accordion.tummy.includes.4", "accordion.tummy.includes.5", "accordion.tummy.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.tummy.pricing.1.item", priceKey: "accordion.tummy.pricing.1.price" },
      { itemKey: "accordion.tummy.pricing.2.item", priceKey: "accordion.tummy.pricing.2.price" }
    ],
    recoveryKey: "accordion.tummy.recovery",
    durationKey: "accordion.tummy.duration",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "65%"
  },
  {
    id: "breast",
    nameKey: "accordion.breast.title",
    category: "Cosmetic",
    taglineKey: "accordion.breast.tagline",
    priceKey: "accordion.breast.price",
    descriptionKey: "accordion.breast.description",
    includesKeys: ["accordion.breast.includes.1", "accordion.breast.includes.2", "accordion.breast.includes.3", "accordion.breast.includes.4", "accordion.breast.includes.5", "accordion.breast.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.breast.pricing.1.item", priceKey: "accordion.breast.pricing.1.price" },
      { itemKey: "accordion.breast.pricing.2.item", priceKey: "accordion.breast.pricing.2.price" }
    ],
    recoveryKey: "accordion.breast.recovery",
    durationKey: "accordion.breast.duration",
    icon: HeartPulse,
    color: "bg-pink-100 text-pink-700",
    savings: "65%"
  },
  {
    id: "bariatric",
    nameKey: "accordion.bariatric.title",
    category: "Bariatric",
    taglineKey: "accordion.bariatric.tagline",
    priceKey: "accordion.bariatric.price",
    descriptionKey: "accordion.bariatric.description",
    includesKeys: ["accordion.bariatric.includes.1", "accordion.bariatric.includes.2", "accordion.bariatric.includes.3", "accordion.bariatric.includes.4", "accordion.bariatric.includes.5", "accordion.bariatric.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.bariatric.pricing.1.item", priceKey: "accordion.bariatric.pricing.1.price" }
    ],
    recoveryKey: "accordion.bariatric.recovery",
    durationKey: "accordion.bariatric.duration",
    icon: Activity,
    color: "bg-purple-100 text-purple-700",
    savings: "75%"
  },
  {
    id: "hollywood",
    nameKey: "accordion.hollywood.title",
    category: "Dental",
    taglineKey: "accordion.hollywood.tagline",
    priceKey: "accordion.hollywood.price",
    descriptionKey: "accordion.hollywood.description",
    includesKeys: ["accordion.hollywood.includes.1", "accordion.hollywood.includes.2", "accordion.hollywood.includes.3", "accordion.hollywood.includes.4", "accordion.hollywood.includes.5", "accordion.hollywood.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.hollywood.pricing.1.item", priceKey: "accordion.hollywood.pricing.1.price" }
    ],
    recoveryKey: "accordion.hollywood.recovery",
    durationKey: "accordion.hollywood.duration",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-700",
    savings: "80%"
  },
  {
    id: "lipo",
    nameKey: "accordion.lipo.title",
    category: "Cosmetic",
    taglineKey: "accordion.lipo.tagline",
    priceKey: "accordion.lipo.price",
    descriptionKey: "accordion.lipo.description",
    includesKeys: ["accordion.lipo.includes.1", "accordion.lipo.includes.2", "accordion.lipo.includes.3", "accordion.lipo.includes.4", "accordion.lipo.includes.5", "accordion.lipo.includes.6"],
    pricingKeys: [
      { itemKey: "accordion.lipo.pricing.1.item", priceKey: "accordion.lipo.pricing.1.price" },
      { itemKey: "accordion.lipo.pricing.2.item", priceKey: "accordion.lipo.pricing.2.price" }
    ],
    recoveryKey: "accordion.lipo.recovery",
    durationKey: "accordion.lipo.duration",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "55%"
  }
];

export function TreatmentsAccordion() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  
  const [activeTab, setActiveTab] = useState("all");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const categories = [t('accordion.tabs.all'), t('accordion.tabs.dental'), t('accordion.tabs.cosmetic'), t('accordion.tabs.eye'), t('accordion.tabs.hair'), t('accordion.tabs.bariatric')];

  const filteredTreatments = activeTab === "all" 
    ? treatments 
    : treatments.filter(treatment => {
        const categoryName = t(`accordion.tabs.${treatment.category.toLowerCase()}`);
        return treatment.category === 
          (activeTab === t('accordion.tabs.eye') ? "Eye" : 
           activeTab === t('accordion.tabs.dental') ? "Dental" :
           activeTab === t('accordion.tabs.cosmetic') ? "Cosmetic" :
           activeTab === t('accordion.tabs.hair') ? "Hair" :
           activeTab === t('accordion.tabs.bariatric') ? "Bariatric" : activeTab);
      }); 

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="treatments">
      <div className="container mx-auto px-4">
        <div className={cn("text-center mb-12", isRTL && "text-right")}>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-[#1A5276] mb-4 uppercase tracking-[0.2em]">
            {t('accordion.section.title')}
          </h2>
          <p className="text-lg text-[#0F172A]/70 max-w-2xl mx-auto font-sans">
            {t('accordion.section.subtitle')}
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {["all", "dental", "cosmetic", "eye", "hair", "bariatric"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat === "all" ? "all" : t(`accordion.tabs.${cat}`))}
              className={`rounded-full px-6 py-2 border transition-all text-sm font-medium
                ${(activeTab === "all" && cat === "all") || activeTab === t(`accordion.tabs.${cat}`)
                  ? "bg-[#1A5276] text-white border-[#1A5276]"
                  : "bg-transparent text-[#1A5276] border-[#1A5276]/20 hover:bg-[#1A5276]/5"
                }
              `}
            >
              {cat === "all" ? t('accordion.tabs.all') : t(`accordion.tabs.${cat}`)}
            </button>
          ))}
        </div>

        {/* Custom Accordion */}
        <div className="max-w-4xl mx-auto space-y-4">
          {filteredTreatments.map((treatment) => {
            const isOpen = openItem === treatment.id;
            return (
              <div 
                key={treatment.id} 
                className="border border-[#1A5276]/10 rounded-2xl bg-white shadow-sm hover:shadow-md transition-shadow overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(treatment.id)}
                  className={cn("w-full text-left py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-gray-50/50 transition-colors", isRTL && "flex-row-reverse")}
                >
                  <div className={`p-3 rounded-full shrink-0 ${treatment.color}`}>
                    <treatment.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className={cn("flex flex-wrap items-center gap-2 mb-1", isRTL && "flex-row-reverse")}>
                      <h3 className="text-xl font-bold text-[#0F172A]">{t(treatment.nameKey)}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#27AE60]/10 text-[#27AE60] border border-[#27AE60]/20">
                        {t('accordion.savings', { savings: treatment.savings })}
                      </span>
                    </div>
                    <p className="text-[#0F172A]/60 text-sm">{t(treatment.taglineKey)}</p>
                  </div>
                  <div className={cn("flex items-center justify-between md:justify-end w-full md:w-auto mt-2 md:mt-0 gap-4", isRTL && "flex-row-reverse")}>
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A5276]/5 text-[#1A5276] font-bold text-sm border border-[#1A5276]/10">
                      {t(treatment.priceKey)}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className={cn("px-4 md:px-6 pb-6 border-t border-[#1A5276]/5", isRTL && "text-right")}>
                    <div className={cn("pt-4 grid grid-cols-1 md:grid-cols-2 gap-8", isRTL && "text-right")}>
                      <div>
                        <h4 className="font-bold text-[#1A5276] mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" /> {t('accordion.details.description')}
                        </h4>
                        <p className="text-[#0F172A]/70 mb-4 leading-relaxed text-sm">
                          {t(treatment.descriptionKey)}
                        </p>
                        
                        <h4 className="font-bold text-[#1A5276] mb-2 text-sm">{t('accordion.details.included')}</h4>
                        <ul className={cn("grid grid-cols-1 gap-2 mb-4", isRTL && "text-right")}>
                          {treatment.includesKeys.map((inc, i) => (
                            <li key={i} className={cn("flex items-start gap-2 text-sm text-[#0F172A]/70", isRTL && "flex-row-reverse")}>
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                              {t(inc)}
                            </li>
                          ))}
                        </ul>
                        
                        <div className={cn("flex gap-4 text-sm mt-4 p-3 bg-[#F0F7F4]/50 rounded-lg", isRTL && "flex-row-reverse text-right")}>
                          <div>
                            <span className="block text-[#1A5276] font-bold text-xs uppercase tracking-wide">{t('accordion.details.recovery')}</span>
                            <span className="text-[#0F172A]">{t(treatment.recoveryKey)}</span>
                          </div>
                          <div className="w-px bg-[#1A5276]/10" />
                          <div>
                            <span className="block text-[#1A5276] font-bold text-xs uppercase tracking-wide">{t('accordion.details.duration')}</span>
                            <span className="text-[#0F172A]">{t(treatment.durationKey)}</span>
                          </div>
                        </div>
                      </div>

                      <div className={cn("bg-[#F8F9FA] p-5 rounded-xl border border-[#1A5276]/10 h-fit", isRTL && "text-right")}>
                        <h4 className="font-bold text-[#1A5276] mb-4 text-center">{t('accordion.details.pricing')}</h4>
                        <div className="space-y-3 mb-6">
                          {treatment.pricingKeys.map((p, i) => (
                            <div key={i} className="flex justify-between items-center pb-2 border-b border-dashed border-[#1A5276]/20 last:border-0">
                              <span className="text-sm font-medium text-[#0F172A]/80">{t(p.itemKey)}</span>
                              <span className="font-mono font-bold text-[#1A5276]">{t(p.priceKey)}</span>
                            </div>
                          ))}
                        </div>
                        
                        <button
                          onClick={() => document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })}
                          className="block w-full text-center bg-[#1A5276] hover:bg-[#133D58] text-white font-bold py-3 px-4 rounded-lg transition-colors cursor-pointer"
                        >
                          {t('accordion.details.quote')}
                        </button>
                        <p className="text-xs text-center text-[#0F172A]/40 mt-3">
                          {t('accordion.details.disclaimer')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
