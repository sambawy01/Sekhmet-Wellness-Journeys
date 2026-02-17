import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Check, Download, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

import { useLanguage } from '../../context/LanguageContext';
export function HollywoodContent() {
  const [veneerCount, setVeneerCount] = useState(10); // Typical top arch makeover
  const veneerPrice = 200;
  const ukPrice = 1200;

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content (65%) */}
          <div className="lg:w-[65%] space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-6">
                Achieve Flawless Aesthetics with a Hollywood Smile
              </h2>
              <p className="font-['DM_Sans'] text-lg text-[#0F1923]/70 leading-relaxed mb-6">
                A "Hollywood Smile" isn't just about white teeth—it's about designing a smile that perfectly complements your facial features. Using ultra-thin Emax or Porcelain veneers, we correct discoloration, chips, gaps, and misalignment to give you a radiant, symmetrical smile.
              </p>
              <p className="font-['DM_Sans'] text-lg text-[#0F1923]/70 leading-relaxed mb-6">
                Our partner clinics in Cairo and Hurghada utilize Digital Smile Design (DSD) technology, allowing you to "test drive" your new smile before any treatment begins. We use premium German and Swiss materials (Ivoclar Vivadent) that mimic the natural translucency of tooth enamel, ensuring your result looks luxurious yet natural.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-[#FAF6EF] p-8 rounded-xl border border-[#C5A059]/20"
            >
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-4">
                The VIP Package Includes
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Digital Smile Design (DSD)",
                  "Premium Emax/Porcelain Veneers",
                  "Temporary Veneers",
                  "Deep Cleaning & Polishing",
                  "5-Star Hotel Accommodation",
                  "Private Airport Transfers",
                  "Personal Coordinator",
                  "5-Year Guarantee"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-[#1B7A6E] rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="font-['DM_Sans'] text-[#0F1923]/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-4">
                Your Transformation Journey
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">1</div>
                    <div className="w-0.5 h-full bg-[#C5A059]/20 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">Consultation & Design (Day 1)</h4>
                    <p className="text-[#0F1923]/60 text-sm">3D scanning, color matching, and Digital Smile Design. We apply a temporary mockup so you can see the final result.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">2</div>
                    <div className="w-0.5 h-full bg-[#C5A059]/20 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">Preparation (Day 2)</h4>
                    <p className="text-[#0F1923]/60 text-sm">Minimal preparation of the teeth (if needed) and taking final impressions. Temporary veneers are placed.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">Final Fitting (Day 5-7)</h4>
                    <p className="text-[#0F1923]/60 text-sm">Bonding of your permanent custom veneers. Final adjustments for a perfect bite and smile.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Sticky Sidebar (35%) */}
          <div className="lg:w-[35%] relative">
            <div className="sticky top-24 space-y-6">
              
              {/* Cost Calculator Widget */}
              <div className="bg-[#0F1923] text-white p-6 rounded-xl shadow-xl border border-[#C5A059]/30">
                <h3 className="font-['Playfair_Display'] text-xl font-bold mb-4 text-[#C5A059]">
                  Estimate Your Makeover
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-['DM_Sans'] mb-2 text-white/80">Number of Veneers</label>
                  <input 
                    type="range" 
                    min="4" 
                    max="20" 
                    step="2"
                    value={veneerCount} 
                    onChange={(e) => setVeneerCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                  />
                  <div className="flex justify-between mt-2 text-sm text-[#C5A059]">
                    <span>4</span>
                    <span className="font-bold text-white text-lg">{veneerCount} Veneers</span>
                    <span>20</span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/60">Egypt Price:</span>
                    <span className="font-bold text-[#1B7A6E] text-lg">${(veneerCount * veneerPrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/60">UK/US Price (Est.):</span>
                    <span className="font-bold text-white/40 line-through decoration-red-500/50">${(veneerCount * ukPrice).toLocaleString()}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#C5A059]">You Save:</span>
                    <span className="font-['Space_Mono'] font-bold text-2xl text-[#C5A059]">
                      ${(veneerCount * (ukPrice - veneerPrice)).toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-[#C5A059] hover:bg-[#B08D45] text-white font-bold">
                  Get This Package
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-[#0F1923]/10">
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F1923] mb-4">
                  Speak to a Smile Designer
                </h3>
                <div className="space-y-3">
                  <Button variant="outline" className="w-full justify-start gap-3 border-[#25D366] text-[#25D366] hover:bg-[#25D366]/10">
                    <MessageCircle className="w-5 h-5" /> WhatsApp Us
                  </Button>
                  <Button variant="outline" className="w-full justify-start gap-3 border-[#0F1923]/20 text-[#0F1923]">
                    <Phone className="w-5 h-5" /> Request Callback
                  </Button>
                </div>
              </div>

              {/* Download Guide */}
              <div className="bg-[#FAF6EF] p-6 rounded-xl border border-[#C5A059]/20 flex items-start gap-4">
                <div className="w-10 h-10 bg-[#C5A059]/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Download className="w-5 h-5 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0F1923] mb-1">Lookbook & Guide</h4>
                  <p className="text-xs text-[#0F1923]/60 mb-3">See before/afters and style options.</p>
                  <a href="#" className="text-[#C5A059] text-sm font-bold flex items-center hover:underline">
                    Download PDF <ArrowRight className="w-3 h-3 ml-1" />
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
