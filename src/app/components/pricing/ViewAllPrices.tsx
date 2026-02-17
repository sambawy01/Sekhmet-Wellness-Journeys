import React, { useState } from 'react';

// Hardcoded Data based on verified 2024-2026 market data
const TREATMENTS = [
  // DENTAL
  { id: 1, name: "Single Dental Implant (incl. crown)", category: "Dental", price: "$400 – $800", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 2, name: "All-on-4 Dental Implants (per jaw)", category: "Dental", price: "$3,500 – $7,000", usPrice: "$15,000 – $25,000", savings: "Up to 75%" },
  { id: 3, name: "All-on-6 Dental Implants (per jaw)", category: "Dental", price: "$5,000 – $9,000", usPrice: "$20,000 – $35,000", savings: "Up to 75%" },
  { id: 4, name: "Porcelain Veneers (per tooth)", category: "Dental", price: "$200 – $300", usPrice: "$1,000 – $2,500", savings: "Up to 80%" },
  { id: 5, name: "Composite Veneers (per tooth)", category: "Dental", price: "$120 – $180", usPrice: "$400 – $800", savings: "Up to 75%" },
  { id: 6, name: "Hollywood Smile – Full Makeover (16–20 veneers)", category: "Dental", price: "$2,400 – $6,000", usPrice: "$20,000 – $40,000", savings: "Up to 88%" },
  { id: 7, name: "Dental Crown – Zirconia (per unit)", category: "Dental", price: "$150 – $300", usPrice: "$800 – $1,500", savings: "Up to 80%" },
  { id: 8, name: "Dental Crown – Porcelain (per unit)", category: "Dental", price: "$100 – $250", usPrice: "$700 – $1,200", savings: "Up to 80%" },
  { id: 9, name: "Root Canal Treatment", category: "Dental", price: "$100 – $250", usPrice: "$700 – $1,500", savings: "Up to 85%" },
  { id: 10, name: "Teeth Whitening (professional)", category: "Dental", price: "$100 – $250", usPrice: "$500 – $1,000", savings: "Up to 80%" },
  { id: 11, name: "Dental Bonding (per tooth)", category: "Dental", price: "$60 – $150", usPrice: "$300 – $800", savings: "Up to 80%" },
  { id: 12, name: "Dental Bridge (3-unit)", category: "Dental", price: "$300 – $600", usPrice: "$1,500 – $4,000", savings: "Up to 80%" },
  { id: 13, name: "Tooth Extraction (simple)", category: "Dental", price: "$30 – $60", usPrice: "$150 – $400", savings: "Up to 80%" },
  { id: 14, name: "Wisdom Tooth Extraction (surgical)", category: "Dental", price: "$80 – $200", usPrice: "$300 – $800", savings: "Up to 75%" },
  { id: 15, name: "Full Dentures (upper or lower)", category: "Dental", price: "$200 – $400", usPrice: "$1,000 – $3,000", savings: "Up to 85%" },

  // HAIR RESTORATION
  { id: 16, name: "Hair Transplant – FUE (2,000–3,000 grafts)", category: "Hair", price: "$500 – $1,700", usPrice: "$8,000 – $15,000", savings: "Up to 95%" },
  { id: 17, name: "Hair Transplant – FUE (3,000–5,000 grafts)", category: "Hair", price: "$1,000 – $2,500", usPrice: "$10,000 – $20,000", savings: "Up to 90%" },
  { id: 18, name: "Hair Transplant – DHI (2,000–4,000 grafts)", category: "Hair", price: "$1,000 – $2,000", usPrice: "$10,000 – $18,000", savings: "Up to 90%" },
  { id: 19, name: "Hair Transplant – Mega Session (5,000+ grafts)", category: "Hair", price: "$1,500 – $3,000", usPrice: "$12,000 – $20,000", savings: "Up to 88%" },
  { id: 20, name: "PRP Hair Therapy (per session)", category: "Hair", price: "$50 – $150", usPrice: "$500 – $1,500", savings: "Up to 90%" },
  { id: 21, name: "Beard Transplant (FUE)", category: "Hair", price: "$500 – $1,200", usPrice: "$5,000 – $10,000", savings: "Up to 90%" },
  { id: 22, name: "Eyebrow Transplant", category: "Hair", price: "$400 – $1,000", usPrice: "$4,000 – $8,000", savings: "Up to 90%" },

  // COSMETIC SURGERY
  { id: 23, name: "Rhinoplasty (Nose Job)", category: "Cosmetic", price: "$1,200 – $4,500", usPrice: "$8,000 – $15,000", savings: "Up to 85%" },
  { id: 24, name: "Revision Rhinoplasty", category: "Cosmetic", price: "$2,500 – $5,500", usPrice: "$10,000 – $20,000", savings: "Up to 75%" },
  { id: 25, name: "Breast Augmentation (implants)", category: "Cosmetic", price: "$3,000 – $5,000", usPrice: "$6,000 – $12,000", savings: "Up to 60%" },
  { id: 26, name: "Breast Lift (Mastopexy)", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$7,000 – $12,000", savings: "Up to 70%" },
  { id: 27, name: "Breast Reduction", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $12,000", savings: "Up to 65%" },
  { id: 28, name: "Tummy Tuck (Abdominoplasty)", category: "Cosmetic", price: "$2,500 – $5,000", usPrice: "$8,000 – $15,000", savings: "Up to 70%" },
  { id: 29, name: "Mini Tummy Tuck", category: "Cosmetic", price: "$1,800 – $3,500", usPrice: "$6,000 – $10,000", savings: "Up to 70%" },
  { id: 30, name: "Liposuction (per area)", category: "Cosmetic", price: "$800 – $2,000", usPrice: "$3,500 – $7,500", savings: "Up to 75%" },
  { id: 31, name: "VASER Liposuction (per area)", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $9,000", savings: "Up to 75%" },
  { id: 32, name: "360° Liposuction (full torso)", category: "Cosmetic", price: "$2,500 – $5,000", usPrice: "$8,000 – $15,000", savings: "Up to 70%" },
  { id: 33, name: "BBL – Brazilian Butt Lift", category: "Cosmetic", price: "$3,000 – $5,500", usPrice: "$8,000 – $15,000", savings: "Up to 65%" },
  { id: 34, name: "Facelift (Full)", category: "Cosmetic", price: "$3,000 – $6,000", usPrice: "$10,000 – $20,000", savings: "Up to 70%" },
  { id: 35, name: "Mini Facelift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$7,000 – $14,000", savings: "Up to 70%" },
  { id: 36, name: "Eyelid Surgery (Blepharoplasty)", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $8,000", savings: "Up to 75%" },
  { id: 37, name: "Otoplasty (Ear Pinning)", category: "Cosmetic", price: "$800 – $2,000", usPrice: "$4,000 – $8,000", savings: "Up to 80%" },
  { id: 38, name: "Chin / Jaw Augmentation", category: "Cosmetic", price: "$1,200 – $3,000", usPrice: "$5,000 – $10,000", savings: "Up to 75%" },
  { id: 39, name: "Neck Lift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $12,000", savings: "Up to 70%" },
  { id: 40, name: "Mommy Makeover (Tummy + Breast + Lipo)", category: "Cosmetic", price: "$5,000 – $9,000", usPrice: "$15,000 – $30,000", savings: "Up to 70%" },
  { id: 41, name: "Gynecomastia (Male Breast Reduction)", category: "Cosmetic", price: "$1,000 – $2,500", usPrice: "$4,000 – $8,000", savings: "Up to 75%" },
  { id: 42, name: "Arm Lift (Brachioplasty)", category: "Cosmetic", price: "$1,500 – $3,000", usPrice: "$5,000 – $9,000", savings: "Up to 70%" },
  { id: 43, name: "Thigh Lift", category: "Cosmetic", price: "$2,000 – $4,000", usPrice: "$6,000 – $10,000", savings: "Up to 65%" },

  // EYE / VISION
  { id: 44, name: "Traditional LASIK (both eyes)", category: "Eye", price: "$400 – $700", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 45, name: "Femto LASIK (both eyes)", category: "Eye", price: "$650 – $1,200", usPrice: "$4,000 – $7,000", savings: "Up to 85%" },
  { id: 46, name: "Femto SMILE (both eyes)", category: "Eye", price: "$800 – $1,500", usPrice: "$4,500 – $8,000", savings: "Up to 80%" },
  { id: 47, name: "PRK Laser Eye Surgery (both eyes)", category: "Eye", price: "$400 – $800", usPrice: "$3,000 – $5,000", savings: "Up to 85%" },
  { id: 48, name: "ICL – Implantable Lens (both eyes)", category: "Eye", price: "$2,000 – $4,000", usPrice: "$6,000 – $10,000", savings: "Up to 65%" },
  { id: 49, name: "Cataract Surgery (per eye)", category: "Eye", price: "$500 – $1,200", usPrice: "$3,500 – $6,000", savings: "Up to 85%" },

  // BARIATRIC
  { id: 50, name: "Gastric Sleeve (Laparoscopic)", category: "Bariatric", price: "$2,400 – $4,500", usPrice: "$15,000 – $25,000", savings: "Up to 85%" },
  { id: 51, name: "Gastric Bypass", category: "Bariatric", price: "$3,500 – $6,000", usPrice: "$20,000 – $35,000", savings: "Up to 80%" },
  { id: 52, name: "Gastric Balloon (non-surgical)", category: "Bariatric", price: "$1,500 – $3,000", usPrice: "$6,000 – $10,000", savings: "Up to 75%" },
  { id: 53, name: "Mini Gastric Bypass (OAGB)", category: "Bariatric", price: "$3,000 – $5,000", usPrice: "$18,000 – $30,000", savings: "Up to 80%" },
  { id: 54, name: "Revision Bariatric Surgery", category: "Bariatric", price: "$3,500 – $6,500", usPrice: "$20,000 – $35,000", savings: "Up to 80%" },

  // SKIN
  { id: 55, name: "Botox (per area)", category: "Skin", price: "$50 – $150", usPrice: "$300 – $600", savings: "Up to 80%" },
  { id: 56, name: "Dermal Fillers (per syringe)", category: "Skin", price: "$100 – $300", usPrice: "$600 – $1,200", savings: "Up to 80%" },
  { id: 57, name: "Chemical Peel (medical grade)", category: "Skin", price: "$50 – $200", usPrice: "$400 – $1,000", savings: "Up to 85%" },
  { id: 58, name: "Laser Skin Resurfacing", category: "Skin", price: "$300 – $800", usPrice: "$2,000 – $5,000", savings: "Up to 85%" },
  { id: 59, name: "Laser Hair Removal (full body, per session)", category: "Skin", price: "$100 – $300", usPrice: "$500 – $1,500", savings: "Up to 80%" },
  { id: 60, name: "PRP Facial (Vampire Facial)", category: "Skin", price: "$50 – $150", usPrice: "$500 – $1,200", savings: "Up to 90%" },
  { id: 61, name: "Mesotherapy (face, per session)", category: "Skin", price: "$50 – $120", usPrice: "$300 – $700", savings: "Up to 80%" },
  { id: 62, name: "Under Eye Filler (tear trough)", category: "Skin", price: "$100 – $250", usPrice: "$600 – $1,000", savings: "Up to 80%" },
  { id: 63, name: "Thread Lift (face)", category: "Skin", price: "$300 – $800", usPrice: "$2,000 – $5,000", savings: "Up to 85%" },
  { id: 64, name: "Lip Filler (per syringe)", category: "Skin", price: "$80 – $200", usPrice: "$500 – $1,000", savings: "Up to 80%" },
];

const CATEGORIES = ["All", "Dental", "Cosmetic", "Hair", "Eye", "Bariatric", "Skin"];

export function ViewAllPrices() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  // Filtering Logic (No useEffect)
  const filteredTreatments = TREATMENTS.filter(treatment => {
    const matchesSearch = treatment.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === "All" || treatment.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="w-full py-16 px-4 bg-slate-50 font-sans" id="view-all-prices">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A5276] mb-4 font-serif">
            Transparent Pricing. Real Savings.
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            All prices below are based on real market data gathered from Egyptian clinics and verified patient quotes (2024–2026).
          </p>
        </div>

        {/* Controls Section */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8">
          <div className="flex flex-col md:flex-row gap-6 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-1/3">
              <input 
                type="text" 
                placeholder="Search treatments..." 
                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1A5276] focus:border-transparent transition-all"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <svg 
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Category Filters */}
            <div className="flex gap-2 overflow-x-auto w-full md:w-auto pb-2 md:pb-0 scrollbar-hide">
              {CATEGORIES.map(cat => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                    activeCategory === cat 
                      ? "bg-[#1A5276] text-white shadow-md" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Table Section */}
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-[#1A5276] text-white">
                  <th className="p-4 text-sm font-semibold uppercase tracking-wider">Treatment Name</th>
                  <th className="p-4 text-sm font-semibold uppercase tracking-wider hidden sm:table-cell">Category</th>
                  <th className="p-4 text-sm font-semibold uppercase tracking-wider">Egypt Price (USD)</th>
                  <th className="p-4 text-sm font-semibold uppercase tracking-wider hidden md:table-cell">US/UK Price (USD)</th>
                  <th className="p-4 text-sm font-semibold uppercase tracking-wider">Savings</th>
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
                      <td className="p-4 font-medium text-[#1A5276] text-base md:text-lg">
                        {item.name}
                      </td>
                      <td className="p-4 hidden sm:table-cell">
                        <span className="inline-block px-2 py-1 text-xs font-semibold rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                          {item.category}
                        </span>
                      </td>
                      <td className="p-4 font-bold text-[#1A5276] text-lg">
                        {item.price}
                      </td>
                      <td className="p-4 text-gray-400 line-through hidden md:table-cell">
                        {item.usPrice}
                      </td>
                      <td className="p-4">
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#27AE60]/10 text-[#27AE60] border border-[#27AE60]/20 whitespace-nowrap">
                          {item.savings}
                        </span>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="p-8 text-center text-gray-500">
                      No treatments found matching "{searchTerm}"
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer / Disclaimer */}
        <div className="mt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-sm text-gray-500 mb-8">
            <div>
              <h4 className="font-bold text-[#1A5276] mb-2">Pricing Notes</h4>
              <ul className="space-y-1 list-disc pl-4">
                <li>Prices are in USD. At time of research, 1 USD ≈ 50 EGP.</li>
                <li>Includes surgeon's fee, anesthesia, and basic facility fees.</li>
                <li>Does not include flights, accommodation, or extended aftercare unless part of a package.</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-[#1A5276] mb-2">Disclaimer</h4>
              <p className="italic">
                Prices are approximate averages gathered from reputable private clinics in Cairo, Alexandria, Giza, and Hurghada. Actual costs vary by case complexity and clinic choice.
              </p>
            </div>
          </div>
          
          <div className="flex justify-center">
            <a 
              href="#get-quote" 
              className="inline-block bg-[#E85D4A] hover:bg-[#d14030] text-white font-bold py-3 px-8 rounded-full shadow-lg transform transition hover:-translate-y-0.5 text-center"
            >
              Request Custom Quote
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
