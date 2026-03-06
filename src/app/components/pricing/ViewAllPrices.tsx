import React, { useState } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

const TREATMENTS = [
  // DENTAL
  { id: 1, name: "prices.treatment.singleImplant", category: "Dental", price: "$400 – $800", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 2, name: "prices.treatment.allOn4", category: "Dental", price: "$3,500 – $7,000", usPrice: "$15,000 – $25,000", savings: "Up to 75%" },
  { id: 3, name: "prices.treatment.allOn6", category: "Dental", price: "$5,000 – $9,000", usPrice: "$20,000 – $35,000", savings: "Up to 75%" },
  { id: 4, name: "prices.treatment.porcelainVeneers", category: "Dental", price: "$200 – $300", usPrice: "$1,000 – $2,500", savings: "Up to 80%" },
  { id: 5, name: "prices.treatment.compositeVeneers", category: "Dental", price: "$120 – $180", usPrice: "$400 – $800", savings: "Up to 75%" },
  { id: 6, name: "prices.treatment.hollywoodSmile", category: "Dental", price: "$2,400 – $6,000", usPrice: "$20,000 – $40,000", savings: "Up to 88%" },
  { id: 7, name: "prices.treatment.zirconiacrown", category: "Dental", price: "$150 – $300", usPrice: "$800 – $1,500", savings: "Up to 80%" },
  { id: 8, name: "prices.treatment.porcelainCrown", category: "Dental", price: "$100 – $250", usPrice: "$700 – $1,200", savings: "Up to 80%" },
  { id: 9, name: "prices.treatment.rootCanal", category: "Dental", price: "$100 – $250", usPrice: "$700 – $1,500", savings: "Up to 85%" },
  { id: 10, name: "prices.treatment.teethWhitening", category: "Dental", price: "$100 – $250", usPrice: "$500 – $1,000", savings: "Up to 80%" },
  { id: 11, name: "prices.treatment.dentalBonding", category: "Dental", price: "$60 – $150", usPrice: "$300 – $800", savings: "Up to 80%" },
  { id: 12, name: "prices.treatment.dentalBridge", category: "Dental", price: "$300 – $600", usPrice: "$1,500 – $4,000", savings: "Up to 80%" },
  { id: 13, name: "prices.treatment.simpleExtraction", category: "Dental", price: "$30 – $60", usPrice: "$150 – $400", savings: "Up to 80%" },
  { id: 14, name: "prices.treatment.wisdomTooth", category: "Dental", price: "$80 – $200", usPrice: "$300 – $800", savings: "Up to 75%" },
  { id: 15, name: "prices.treatment.fullDentures", category: "Dental", price: "$200 – $400", usPrice: "$1,000 – $3,000", savings: "Up to 85%" },

  // HAIR RESTORATION
  { id: 16, name: "prices.treatment.fue2000", category: "Hair", price: "$500 – $1,700", usPrice: "$8,000 – $15,000", savings: "Up to 95%" },
  { id: 17, name: "prices.treatment.fue3000", category: "Hair", price: "$1,000 – $2,500", usPrice: "$10,000 – $20,000", savings: "Up to 90%" },
  { id: 18, name: "prices.treatment.dhi", category: "Hair", price: "$1,000 – $2,000", usPrice: "$10,000 – $18,000", savings: "Up to 90%" },
  { id: 19, name: "prices.treatment.megaSession", category: "Hair", price: "$1,500 – $3,000", usPrice: "$12,000 – $20,000", savings: "Up to 88%" },
  { id: 20, name: "prices.treatment.prpHair", category: "Hair", price: "$50 – $150", usPrice: "$500 – $1,500", savings: "Up to 90%" },
  { id: 21, name: "prices.treatment.beardTransplant", category: "Hair", price: "$500 – $1,200", usPrice: "$5,000 – $10,000", savings: "Up to 90%" },
  { id: 22, name: "prices.treatment.eyebrowTransplant", category: "Hair", price: "$400 – $1,000", usPrice: "$4,000 – $8,000", savings: "Up to 90%" },

  // COSMETIC SURGERY
  { id: 23, name: "prices.treatment.rhinoplasty", category: "Cosmetic", price: "$1,200 – $4,500", usPrice: "$8,000 – $15,000", savings: "Up to 85%" },
  { id: 24, name: "prices.treatment.revisionRhinoplasty", category: "Cosmetic", price: "$2,500 – $5,500", usPrice: "$10,000 – $20,000", savings: "Up to 75%" },
  { id: 25, name: "prices.treatment.breastAugmentation", category: "Cosmetic", price: "$3,000 – $5,000", usPrice: "$6,000 – $12,000", savings: "Up to 60%" },
  { id: 26, name: "prices.treatment.breastLift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$7,000 – $12,000", savings: "Up to 70%" },
  { id: 27, name: "prices.treatment.breastReduction", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $12,000", savings: "Up to 65%" },
  { id: 28, name: "prices.treatment.tummyTuck", category: "Cosmetic", price: "$2,500 – $5,000", usPrice: "$8,000 – $15,000", savings: "Up to 70%" },
  { id: 29, name: "prices.treatment.miniTummyTuck", category: "Cosmetic", price: "$1,800 – $3,500", usPrice: "$6,000 – $10,000", savings: "Up to 70%" },
  { id: 30, name: "prices.treatment.liposuction", category: "Cosmetic", price: "$800 – $2,000", usPrice: "$3,500 – $7,500", savings: "Up to 75%" },
  { id: 31, name: "prices.treatment.vaserLipo", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $9,000", savings: "Up to 75%" },
  { id: 32, name: "prices.treatment.liposuction360", category: "Cosmetic", price: "$2,500 – $5,000", usPrice: "$8,000 – $15,000", savings: "Up to 70%" },
  { id: 33, name: "prices.treatment.bbl", category: "Cosmetic", price: "$3,000 – $5,500", usPrice: "$8,000 – $15,000", savings: "Up to 65%" },
  { id: 34, name: "prices.treatment.facelift", category: "Cosmetic", price: "$3,000 – $6,000", usPrice: "$10,000 – $20,000", savings: "Up to 70%" },
  { id: 35, name: "prices.treatment.miniFacelift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$7,000 – $14,000", savings: "Up to 70%" },
  { id: 36, name: "prices.treatment.blepharoplasty", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $8,000", savings: "Up to 75%" },
  { id: 37, name: "prices.treatment.otoplasty", category: "Cosmetic", price: "$800 – $2,000", usPrice: "$4,000 – $8,000", savings: "Up to 80%" },
  { id: 38, name: "prices.treatment.chinAugmentation", category: "Cosmetic", price: "$1,200 – $3,000", usPrice: "$5,000 – $10,000", savings: "Up to 75%" },
  { id: 39, name: "prices.treatment.neckLift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $12,000", savings: "Up to 70%" },
  { id: 40, name: "prices.treatment.mommyMakeover", category: "Cosmetic", price: "$5,000 – $9,000", usPrice: "$15,000 – $30,000", savings: "Up to 70%" },
  { id: 41, name: "prices.treatment.gynecomastia", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $8,000", savings: "Up to 75%" },
  { id: 42, name: "prices.treatment.armLift", category: "Cosmetic", price: "$1,500 – $3,000", usPrice: "$5,000 – $9,000", savings: "Up to 70%" },
  { id: 43, name: "prices.treatment.thighLift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $10,000", savings: "Up to 65%" },

  // EYE / VISION
  { id: 44, name: "prices.treatment.lasik", category: "Eye", price: "$400 – $700", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 45, name: "prices.treatment.femtoLasik", category: "Eye", price: "$650 – $1,200", usPrice: "$4,000 – $7,000", savings: "Up to 85%" },
  { id: 46, name: "prices.treatment.smile", category: "Eye", price: "$800 – $1,500", usPrice: "$4,500 – $8,000", savings: "Up to 80%" },
  { id: 47, name: "prices.treatment.prk", category: "Eye", price: "$400 – $800", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 48, name: "prices.treatment.icl", category: "Eye", price: "$2,000 – $4,000", usPrice: "$6,000 – $10,000", savings: "Up to 65%" },
  { id: 49, name: "prices.treatment.cataractSurgery", category: "Eye", price: "$500 – $1,200", usPrice: "$3,500 – $6,000", savings: "Up to 85%" },

  // BARIATRIC
  { id: 50, name: "prices.treatment.gastricSleeve", category: "Bariatric", price: "$2,400 – $4,500", usPrice: "$15,000 – $25,000", savings: "Up to 85%" },
  { id: 51, name: "prices.treatment.gastricBypass", category: "Bariatric", price: "$3,500 – $6,000", usPrice: "$20,000 – $35,000", savings: "Up to 80%" },
  { id: 52, name: "prices.treatment.gastricBalloon", category: "Bariatric", price: "$1,500 – $3,000", usPrice: "$6,000 – $10,000", savings: "Up to 75%" },
  { id: 53, name: "prices.treatment.miniGastricBypass", category: "Bariatric", price: "$3,000 – $5,000", usPrice: "$18,000 – $30,000", savings: "Up to 80%" },
  { id: 54, name: "prices.treatment.revisionBariatric", category: "Bariatric", price: "$3,500 – $6,500", usPrice: "$20,000 – $35,000", savings: "Up to 80%" },

  // SKIN
  { id: 55, name: "prices.treatment.botox", category: "Skin", price: "$50 – $150", usPrice: "$300 – $600", savings: "Up to 80%" },
  { id: 56, name: "prices.treatment.fillers", category: "Skin", price: "$100 – $300", usPrice: "$600 – $1,200", savings: "Up to 80%" },
  { id: 57, name: "prices.treatment.chemicalPeel", category: "Skin", price: "$50 – $200", usPrice: "$400 – $1,000", savings: "Up to 85%" },
  { id: 58, name: "prices.treatment.laserResurfacing", category: "Skin", price: "$300 – $800", usPrice: "$2,000 – $5,000", savings: "Up to 85%" },
  { id: 59, name: "prices.treatment.laserHairRemoval", category: "Skin", price: "$100 – $300", usPrice: "$500 – $1,500", savings: "Up to 80%" },
  { id: 60, name: "prices.treatment.prpFacial", category: "Skin", price: "$50 – $150", usPrice: "$500 – $1,200", savings: "Up to 90%" },
  { id: 61, name: "prices.treatment.mesotherapy", category: "Skin", price: "$50 – $120", usPrice: "$300 – $700", savings: "Up to 80%" },
  { id: 62, name: "prices.treatment.eyeFiller", category: "Skin", price: "$100 – $250", usPrice: "$600 – $1,000", savings: "Up to 80%" },
  { id: 63, name: "prices.treatment.threadLift", category: "Skin", price: "$300 – $800", usPrice: "$2,000 – $5,000", savings: "Up to 85%" },
  { id: 64, name: "prices.treatment.lipFiller", category: "Skin", price: "$80 – $200", usPrice: "$500 – $1,000", savings: "Up to 80%" },
];

const CATEGORY_KEYS = ["prices.category.all", "prices.category.dental", "prices.category.cosmetic", "prices.category.hair", "prices.category.eye", "prices.category.bariatric", "prices.category.skin"];
const CATEGORY_VALUES = ["All", "Dental", "Cosmetic", "Hair", "Eye", "Bariatric", "Skin"];

export function ViewAllPrices() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTreatments = TREATMENTS.filter(treatment => {
    const treatmentName = t(treatment.name);
    const matchesSearch = treatmentName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || treatment.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-16 px-4 bg-slate-50 font-sans" id="view-all-prices">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className={cn("text-center mb-12", isRTL && "text-right")}>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4 font-heading uppercase tracking-[0.2em]">
            {t('prices.heading')}
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            {t('prices.description')}
          </p>
        </div>

        {/* Controls Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className={cn("flex flex-col md:flex-row gap-6 justify-between items-center", isRTL && "flex-row-reverse")}>
            
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder={t('prices.searchPlaceholder')} 
                className={cn("w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-transparent transition-all", isRTL && "text-right pl-4 pr-10")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className={cn("absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5", isRTL && "left-auto right-3")}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className={cn("flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide", isRTL && "flex-row-reverse")}>
              {CATEGORY_KEYS.map((keyName, idx) => {
                const categoryValue = CATEGORY_VALUES[idx];
                return (
                  <button
                    key={categoryValue}
                    onClick={() => setActiveCategory(categoryValue)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === categoryValue
                        ? "bg-[#1A5276] text-white shadow-md" 
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t(keyName)}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A5276] text-white">
                  <th className={cn("p-4 text-sm font-semibold uppercase tracking-wider", isRTL && "text-right")}>{t('prices.tableHeading.treatment')}</th>
                  <th className={cn("p-4 text-sm font-semibold uppercase tracking-wider hidden sm:table-cell", isRTL && "text-right")}>{t('prices.tableHeading.category')}</th>
                  <th className={cn("p-4 text-sm font-semibold uppercase tracking-wider", isRTL && "text-right")}>{t('prices.tableHeading.egyptPrice')}</th>
                  <th className={cn("p-4 text-sm font-semibold uppercase tracking-wider hidden md:table-cell", isRTL && "text-right")}>{t('prices.tableHeading.usPrice')}</th>
                  <th className={cn("p-4 text-sm font-semibold uppercase tracking-wider", isRTL && "text-right")}>{t('prices.tableHeading.savings')}</th>
                </tr>
              </thead>
              <tbody>
                {filteredTreatments.length > 0 ? (
                  filteredTreatments.map((item, index) => (
                    <tr 
                      key={item.id} 
                      className={`
                        border-b border-gray-100 transition-colors hover:bg-blue-50/50
                        ${index % 2 === 0 ? "bg-white" : "bg-[#F8F9FA]"}
                      `}
                    >
                      <td className={cn("p-4 font-medium text-[#1A5276] text-base md:text-lg", isRTL && "text-right")}>
                        {t(item.name)}
                      </td>
                      <td className={cn("p-4 hidden sm:table-cell", isRTL && "text-right")}>
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                          {item.category}
                        </span>
                      </td>
                      <td className={cn("p-4 font-bold text-[#1A5276] text-lg", isRTL && "text-right")}>
                        {item.price}
                      </td>
                      <td className={cn("p-4 text-gray-400 line-through hidden md:table-cell", isRTL && "text-right")}>
                        {item.usPrice}
                      </td>
                      <td className={cn("p-4", isRTL && "text-right")}>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#27AE60]/10 text-[#27AE60] border border-[#27AE60]/20 whitespace-nowrap">
                          {item.savings}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className={cn("p-8 text-center text-gray-500", isRTL && "text-right")}>
                      {t('prices.noResults')}: "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer / Disclaimer */}
        <div className="mt-8">
          <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 mb-8", isRTL && "text-right")}>
            <div>
              <h4 className="font-bold text-[#1A5276] mb-2">{t('prices.pricingNotesTitle')}</h4>
              <ul className={cn("space-y-1 list-disc pl-4", isRTL && "pr-4 pl-0 list-inside")}>
                <li>{t('prices.note1')}</li>
                <li>{t('prices.note2')}</li>
                <li>{t('prices.note3')}</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A5276] mb-2">{t('prices.disclaimerTitle')}</h4>
              <p className="italic">
                {t('prices.disclaimerText')}
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <button
              onClick={() => document.getElementById('get-quote')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-block bg-[#E85D4A] hover:bg-[#d14030] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-0.5 text-center cursor-pointer"
            >
              {t('prices.ctaButton')}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
