import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DentalCTA } from '../components/dental/DentalCTA'; // Reuse CTA for now

export function Fertility() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1584515933487-9d9fc112e36b?q=80&w=2070&auto=format&fit=crop"
            alt="Newborn baby feet representing fertility success"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1923]/60"></div>
        </div>

        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 text-sm md:text-base mb-6 text-[#F9F6F0]/80 font-['DM_Sans']"
          >
            <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Treatments</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">Fertility</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight"
          >
            Fertility & IVF <br/>
            <span className="text-[#C5A059]">The Gift of Life</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-['DM_Sans'] text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed"
          >
            Advanced reproductive technologies combined with compassionate care. 
            Experience world-class fertility treatments in Egypt with success rates rivalling Europe.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/consultation">
               <button className="bg-[#C9A84C] text-[#0F1923] px-8 py-4 rounded-full font-['DM_Sans'] text-base font-bold uppercase tracking-wider hover:bg-[#B8983B] transition-colors shadow-lg hover:shadow-[#C9A84C]/20">
                 Free Fertility Assessment
               </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Intro / Stats */}
      <section className="py-20 bg-[#FAF6EF]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl text-[#0F1923] font-bold mb-6">
                Why Choose Egypt for IVF?
              </h2>
              <p className="font-['DM_Sans'] text-[#5D5D5D] text-lg leading-relaxed mb-8">
                Egypt has become a leading destination for fertility treatments, offering state-of-the-art laboratories and highly experienced specialists at a fraction of the cost found in Europe or the US.
              </p>
              
              <ul className="space-y-4">
                {[
                  "Success rates up to 65% for women under 35",
                  "Comprehensive genetic screening (PGT-A/PGT-M)",
                  "Legal framework supporting various treatments",
                  "Privacy and luxury recovery accommodations"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#C9A84C]/20 flex items-center justify-center text-[#C9A84C] flex-shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <span className="font-['DM_Sans'] text-[#0F1923]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#C9A84C] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-2">65%</span>
                <span className="font-['DM_Sans'] text-sm text-[#5D5D5D] uppercase tracking-wide">Success Rate</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#1B7A6E] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-2">50%</span>
                <span className="font-['DM_Sans'] text-sm text-[#5D5D5D] uppercase tracking-wide">Cost Savings</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F1923] text-center col-span-2">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-2">3,000+</span>
                <span className="font-['DM_Sans'] text-sm text-[#5D5D5D] uppercase tracking-wide">Successful Procedures</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures List */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F1923] font-bold mb-4">
              Fertility Treatments
            </h2>
            <div className="w-24 h-1 bg-[#C9A84C] mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* IVF */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#FAF6EF]">
              <div className="h-64 overflow-hidden relative">
                <img 
                  src="https://images.unsplash.com/photo-1579154204601-01588f351e67?q=80&w=2070&auto=format&fit=crop" 
                  alt="Microscope lab" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-[#0F1923] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  Most Popular
                </div>
              </div>
              <div className="p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-3 group-hover:text-[#C9A84C] transition-colors">
                  IVF / ICSI
                </h3>
                <p className="font-['DM_Sans'] text-[#5D5D5D] mb-6 line-clamp-3">
                  In Vitro Fertilization with Intracytoplasmic Sperm Injection. The gold standard for overcoming various infertility factors.
                </p>
                <div className="flex items-center justify-between border-t border-[#0F1923]/10 pt-6">
                  <span className="font-['Space_Mono'] font-bold text-[#1B7A6E]">From $2,500</span>
                  <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-wide group-hover:underline">Learn More</span>
                </div>
              </div>
            </div>

            {/* Egg Freezing */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#FAF6EF]">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=2070&auto=format&fit=crop" 
                  alt="Laboratory cryostorage" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-3 group-hover:text-[#C9A84C] transition-colors">
                  Egg Freezing
                </h3>
                <p className="font-['DM_Sans'] text-[#5D5D5D] mb-6 line-clamp-3">
                  Preserve your fertility for the future. Advanced vitrification technology ensures high survival rates for your oocytes.
                </p>
                <div className="flex items-center justify-between border-t border-[#0F1923]/10 pt-6">
                  <span className="font-['Space_Mono'] font-bold text-[#1B7A6E]">From $1,800</span>
                  <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-wide group-hover:underline">Learn More</span>
                </div>
              </div>
            </div>

            {/* Genetic Screening */}
            <div className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#FAF6EF]">
              <div className="h-64 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1530482054429-cc491f61333b?q=80&w=2071&auto=format&fit=crop" 
                  alt="DNA double helix concept" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="p-8">
                <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-3 group-hover:text-[#C9A84C] transition-colors">
                  Genetic Screening
                </h3>
                <p className="font-['DM_Sans'] text-[#5D5D5D] mb-6 line-clamp-3">
                  Pre-implantation Genetic Testing (PGT) to screen embryos for chromosomal abnormalities and hereditary diseases.
                </p>
                <div className="flex items-center justify-between border-t border-[#0F1923]/10 pt-6">
                  <span className="font-['Space_Mono'] font-bold text-[#1B7A6E]">From $1,200</span>
                  <span className="text-[#C9A84C] text-sm font-bold uppercase tracking-wide group-hover:underline">Learn More</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <DentalCTA />
    </>
  );
}
