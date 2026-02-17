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

// Treatment Data
const treatments = [
  {
    id: "implants",
    name: "Dental Implants",
    category: "Dental",
    tagline: "Permanent solution for missing teeth",
    price: "From $800",
    description: "Permanent titanium posts surgically placed into the jawbone to replace missing teeth, topped with natural-looking crowns.",
    includes: ["Consultation", "3D scan/X-ray", "Implant post", "Abutment", "Porcelain crown", "Follow-up visits"],
    pricing: [
      { item: "Single Implant", price: "$800 – $1,500" },
      { item: "All-on-4 (Full Mouth)", price: "$5,000 – $10,000" }
    ],
    recovery: "1–2 days initial downtime",
    duration: "3–6 months integration",
    icon: Smile,
    color: "bg-blue-100 text-blue-700",
    savings: "70%"
  },
  {
    id: "veneers",
    name: "Dental Veneers",
    category: "Dental",
    tagline: "Hollywood smile transformation",
    price: "From $250",
    description: "Ultra-thin porcelain shells bonded to the front of teeth to correct shape, color, and alignment for a Hollywood smile.",
    includes: ["Consultation", "Tooth preparation", "Temporary veneers", "Custom porcelain veneers", "Fitting & bonding"],
    pricing: [
      { item: "Per Veneer", price: "$250 – $450" },
      { item: "Full Smile (16-20)", price: "$4,000 – $8,000" }
    ],
    recovery: "Immediate",
    duration: "2–3 visits",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-700",
    savings: "75%"
  },
  {
    id: "hair",
    name: "Hair Transplant (FUE)",
    category: "Hair",
    tagline: "Permanent natural hair restoration",
    price: "From $1,500",
    description: "Follicular Unit Extraction — individual hair follicles harvested from a donor area and transplanted to thinning/balding zones for permanent, natural-looking growth.",
    includes: ["Consultation", "Blood tests", "Local anesthesia", "FUE procedure (up to 5000 grafts)", "PRP therapy", "Aftercare kit"],
    pricing: [
      { item: "2,000–4,000 Grafts", price: "$1,500 – $3,500" },
      { item: "Mega Session (5000+)", price: "$3,000 – $5,000" }
    ],
    recovery: "7–10 days",
    duration: "6–8 hours",
    icon: Scissors,
    color: "bg-amber-100 text-amber-700",
    savings: "80%"
  },
  {
    id: "rhinoplasty",
    name: "Rhinoplasty",
    category: "Cosmetic",
    tagline: "Nose reshaping and refinement",
    price: "From $2,500",
    description: "Surgical reshaping of the nose to improve appearance and/or breathing function. Can address humps, width, tip refinement, and asymmetry.",
    includes: ["Pre-op consultation & imaging", "General anesthesia", "Surgery", "1-night hospital stay", "Splint", "Post-op follow-ups"],
    pricing: [
      { item: "Primary Rhinoplasty", price: "$2,500 – $5,000" },
      { item: "Revision Rhinoplasty", price: "$3,500 – $7,000" }
    ],
    recovery: "1–2 weeks off work",
    duration: "2–3 hours",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "70%"
  },
  {
    id: "lasik",
    name: "LASIK Eye Surgery",
    category: "Eye",
    tagline: "Vision correction for life",
    price: "From $800/eye",
    description: "Laser-assisted vision correction to reduce or eliminate the need for glasses/contacts by reshaping the cornea.",
    includes: ["Comprehensive eye exam", "Wavefront mapping", "LASIK or PRK procedure", "Eye drops", "Follow-up visits"],
    pricing: [
      { item: "Per Eye", price: "$800 – $1,500" },
      { item: "Both Eyes", price: "$1,500 – $2,800" }
    ],
    recovery: "24–48 hours",
    duration: "15 mins per eye",
    icon: Eye,
    color: "bg-emerald-100 text-emerald-700",
    savings: "65%"
  },
  {
    id: "tummy",
    name: "Tummy Tuck",
    category: "Cosmetic",
    tagline: "Flatter, firmer midsection",
    price: "From $3,000",
    description: "Removal of excess skin and fat from the abdomen, combined with muscle tightening, to create a flatter, firmer midsection.",
    includes: ["Pre-op labs", "General anesthesia", "Surgery", "1–2 night hospital stay", "Compression garment", "Follow-ups"],
    pricing: [
      { item: "Full Tummy Tuck", price: "$3,000 – $5,500" },
      { item: "Mini Tummy Tuck", price: "$2,000 – $3,500" }
    ],
    recovery: "2–3 weeks",
    duration: "2–4 hours",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "65%"
  },
  {
    id: "breast",
    name: "Breast Augmentation",
    category: "Cosmetic",
    tagline: "Enhance volume and shape",
    price: "From $2,500",
    description: "Surgical enhancement of breast size and shape using silicone or saline implants, or fat transfer techniques.",
    includes: ["Consultation", "Pre-op tests", "General anesthesia", "Implants (Mentor/Motiva)", "1-night stay", "Surgical bra"],
    pricing: [
      { item: "Implants", price: "$2,500 – $4,500" },
      { item: "Fat Transfer", price: "$3,000 – $5,000" }
    ],
    recovery: "1–2 weeks",
    duration: "1–2 hours",
    icon: HeartPulse,
    color: "bg-pink-100 text-pink-700",
    savings: "65%"
  },
  {
    id: "bariatric",
    name: "Gastric Sleeve",
    category: "Bariatric",
    tagline: "Significant weight loss solution",
    price: "From $4,000",
    description: "Laparoscopic removal of ~80% of the stomach to create a smaller, sleeve-shaped pouch, reducing hunger and food intake.",
    includes: ["Pre-op evaluation", "General anesthesia", "Laparoscopic surgery", "2–3 night hospital stay", "Nutrition plan", "12-month follow-up"],
    pricing: [
      { item: "Gastric Sleeve", price: "$4,000 – $6,500" }
    ],
    recovery: "2–3 weeks",
    duration: "1–2 hours",
    icon: Activity,
    color: "bg-purple-100 text-purple-700",
    savings: "75%"
  },
  {
    id: "hollywood",
    name: "Hollywood Smile",
    category: "Dental",
    tagline: "Complete smile makeover",
    price: "From $4,000",
    description: "A comprehensive cosmetic dental package combining veneers, whitening, gum contouring, and sometimes crowns for a complete smile transformation.",
    includes: ["Consultation", "Digital smile design", "Teeth whitening", "Gum reshaping", "20 porcelain veneers/crowns", "Fitting"],
    pricing: [
      { item: "Full Package", price: "$4,000 – $8,000" }
    ],
    recovery: "Immediate",
    duration: "5–7 days",
    icon: Sparkles,
    color: "bg-blue-100 text-blue-700",
    savings: "80%"
  },
  {
    id: "lipo",
    name: "Liposuction",
    category: "Cosmetic",
    tagline: "Body contouring and fat removal",
    price: "From $1,500",
    description: "Surgical fat removal from targeted areas (abdomen, thighs, arms, chin, flanks) using suction-assisted or laser-assisted techniques.",
    includes: ["Consultation", "Pre-op tests", "Anesthesia", "Procedure (1–3 areas)", "Compression garment", "Follow-ups"],
    pricing: [
      { item: "Per Area", price: "$1,500 – $3,500" },
      { item: "3+ Areas", price: "$3,500 – $7,000" }
    ],
    recovery: "1–2 weeks",
    duration: "1–3 hours",
    icon: Activity,
    color: "bg-pink-100 text-pink-700",
    savings: "55%"
  }
];

export function TreatmentsAccordion() {
  const [activeTab, setActiveTab] = useState("all");
  const [openItem, setOpenItem] = useState<string | null>(null);

  const categories = ["All", "Dental", "Cosmetic", "Eye", "Hair", "Bariatric"];

  const filteredTreatments = activeTab === "all" 
    ? treatments 
    : treatments.filter(t => t.category === (activeTab === "Eye" ? "Eye" : activeTab)); 

  const toggleItem = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 md:py-24 bg-white" id="treatments">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A5276] mb-4">
            Explore Our Treatments
          </h2>
          <p className="text-lg text-[#0F1923]/70 max-w-2xl mx-auto font-sans">
            Click any treatment to see details, what's included, and transparent average pricing.
          </p>
        </div>

        {/* Custom Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat.toLowerCase() === "all" ? "all" : cat)}
              className={`rounded-full px-6 py-2 border transition-all text-sm font-medium
                ${(activeTab === "all" && cat === "All") || activeTab === cat
                  ? "bg-[#1A5276] text-white border-[#1A5276]"
                  : "bg-transparent text-[#1A5276] border-[#1A5276]/20 hover:bg-[#1A5276]/5"
                }
              `}
            >
              {cat}
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
                  className="w-full text-left py-6 px-4 md:px-6 flex flex-col md:flex-row md:items-center gap-4 hover:bg-gray-50/50 transition-colors"
                >
                  <div className={`p-3 rounded-full shrink-0 ${treatment.color}`}>
                    <treatment.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl font-bold text-[#0F1923]">{treatment.name}</h3>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#27AE60]/10 text-[#27AE60] border border-[#27AE60]/20">
                        Save up to {treatment.savings}
                      </span>
                    </div>
                    <p className="text-[#0F1923]/60 text-sm">{treatment.tagline}</p>
                  </div>
                  <div className="flex items-center justify-between md:justify-end w-full md:w-auto mt-2 md:mt-0 gap-4">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-[#1A5276]/5 text-[#1A5276] font-bold text-sm border border-[#1A5276]/10">
                      {treatment.price}
                    </span>
                    {isOpen ? <ChevronUp className="w-5 h-5 text-gray-400" /> : <ChevronDown className="w-5 h-5 text-gray-400" />}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-4 md:px-6 pb-6 border-t border-[#1A5276]/5">
                    <div className="pt-4 grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-bold text-[#1A5276] mb-2 flex items-center gap-2">
                          <Info className="w-4 h-4" /> Description
                        </h4>
                        <p className="text-[#0F1923]/70 mb-4 leading-relaxed text-sm">
                          {treatment.description}
                        </p>
                        
                        <h4 className="font-bold text-[#1A5276] mb-2 text-sm">What's Included</h4>
                        <ul className="grid grid-cols-1 gap-2 mb-4">
                          {treatment.includes.map((inc, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-[#0F1923]/70">
                              <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] mt-1.5 shrink-0" />
                              {inc}
                            </li>
                          ))}
                        </ul>
                        
                        <div className="flex gap-4 text-sm mt-4 p-3 bg-[#F5F0E5]/50 rounded-lg">
                          <div>
                            <span className="block text-[#1A5276] font-bold text-xs uppercase tracking-wide">Recovery</span>
                            <span className="text-[#0F1923]">{treatment.recovery}</span>
                          </div>
                          <div className="w-px bg-[#1A5276]/10" />
                          <div>
                            <span className="block text-[#1A5276] font-bold text-xs uppercase tracking-wide">Duration</span>
                            <span className="text-[#0F1923]">{treatment.duration}</span>
                          </div>
                        </div>
                      </div>

                      <div className="bg-[#F8F9FA] p-5 rounded-xl border border-[#1A5276]/10 h-fit">
                        <h4 className="font-bold text-[#1A5276] mb-4 text-center">Average Pricing</h4>
                        <div className="space-y-3 mb-6">
                          {treatment.pricing.map((p, i) => (
                            <div key={i} className="flex justify-between items-center pb-2 border-b border-dashed border-[#1A5276]/20 last:border-0">
                              <span className="text-sm font-medium text-[#0F1923]/80">{p.item}</span>
                              <span className="font-mono font-bold text-[#1A5276]">{p.price}</span>
                            </div>
                          ))}
                        </div>
                        
                        <a 
                          href="#get-quote" 
                          className="block w-full text-center bg-[#1A5276] hover:bg-[#133D58] text-white font-bold py-3 px-4 rounded-lg transition-colors"
                        >
                          Get a Quote for This Treatment
                        </a>
                        <p className="text-xs text-center text-[#0F1923]/40 mt-3">
                          *Prices vary by complexity and clinic
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
