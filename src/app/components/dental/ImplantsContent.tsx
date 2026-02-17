import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Download, MessageCircle, Phone, ArrowRight } from 'lucide-react';
import { Button } from '../ui/button';

import { useLanguage } from '../../context/LanguageContext';
export function ImplantsContent() {
  const [implantCount, setImplantCount] = useState(1);
  const implantPrice = 250;
  const ukPrice = 2500;

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
                Restore Your Smile with Premium Dental Implants
              </h2>
              <p className="font-['DM_Sans'] text-lg text-[#0F1923]/70 leading-relaxed mb-6">
                Dental implants are the gold standard for replacing missing teeth. Unlike dentures or bridges, implants are surgically placed into the jawbone, providing a permanent, stable foundation for artificial teeth that look, feel, and function just like natural ones.
              </p>
              <p className="font-['DM_Sans'] text-lg text-[#0F1923]/70 leading-relaxed mb-6">
                At Sekhmet Wellness, we partner with Egypt’s leading implantologists who use only FDA-approved, top-tier implant systems from Switzerland and Germany (Straumann, Nobel Biocare). By choosing Egypt, you access the same world-class materials and expertise available in the UK or US, but at a fraction of the cost.
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
                What’s Included in Your Package?
              </h3>
              <ul className="grid md:grid-cols-2 gap-4">
                {[
                  "Premium Titanium Implant",
                  "Zirconia or Porcelain Crown",
                  "3D CT Scan & X-Rays",
                  "Airport Transfers",
                  "Local Transportation",
                  "English-Speaking Coordinator",
                  "Lifetime Warranty on Implants",
                  "Post-Op Medication"
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
                Recovery Timeline
              </h3>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">1</div>
                    <div className="w-0.5 h-full bg-[#C5A059]/20 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">First Visit (3–5 Days)</h4>
                    <p className="text-[#0F1923]/60 text-sm">Implant placement surgery. A temporary crown or bridge may be placed. You can return to work within 2-3 days.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">2</div>
                    <div className="w-0.5 h-full bg-[#C5A059]/20 my-2"></div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">Healing Period (3–6 Months)</h4>
                    <p className="text-[#0F1923]/60 text-sm">Osseointegration occurs, where the implant fuses with your jawbone. You are back home during this time.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <div className="w-8 h-8 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold font-['Space_Mono']">3</div>
                  </div>
                  <div>
                    <h4 className="font-bold text-lg text-[#0F1923] mb-1">Second Visit (5–7 Days)</h4>
                    <p className="text-[#0F1923]/60 text-sm">Final crown or bridge fitting. Your smile is complete!</p>
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
                  Calculate Your Savings
                </h3>
                
                <div className="mb-6">
                  <label className="block text-sm font-['DM_Sans'] mb-2 text-white/80">Number of Implants</label>
                  <input 
                    type="range" 
                    min="1" 
                    max="10" 
                    value={implantCount} 
                    onChange={(e) => setImplantCount(parseInt(e.target.value))}
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#C5A059]"
                  />
                  <div className="flex justify-between mt-2 text-sm text-[#C5A059]">
                    <span>1</span>
                    <span className="font-bold text-white text-lg">{implantCount} Implants</span>
                    <span>10</span>
                  </div>
                </div>

                <div className="bg-white/5 p-4 rounded-lg mb-6 border border-white/10">
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/60">Egypt Price:</span>
                    <span className="font-bold text-[#1B7A6E] text-lg">${(implantCount * implantPrice).toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm text-white/60">UK Price (Est.):</span>
                    <span className="font-bold text-white/40 line-through decoration-red-500/50">${(implantCount * ukPrice).toLocaleString()}</span>
                  </div>
                  <div className="h-[1px] w-full bg-white/10 my-3"></div>
                  <div className="flex justify-between items-center">
                    <span className="font-bold text-[#C5A059]">You Save:</span>
                    <span className="font-['Space_Mono'] font-bold text-2xl text-[#C5A059]">
                      ${(implantCount * (ukPrice - implantPrice)).toLocaleString()}
                    </span>
                  </div>
                </div>

                <Button className="w-full bg-[#C5A059] hover:bg-[#B08D45] text-white font-bold">
                  Get This Price
                </Button>
              </div>

              {/* Quick Contact */}
              <div className="bg-white p-6 rounded-xl shadow-md border border-[#0F1923]/10">
                <h3 className="font-['Playfair_Display'] text-lg font-bold text-[#0F1923] mb-4">
                  Speak to an Expert
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
                  <h4 className="font-bold text-[#0F1923] mb-1">Free Implant Guide</h4>
                  <p className="text-xs text-[#0F1923]/60 mb-3">Everything you need to know about costs, procedure, and recovery.</p>
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
