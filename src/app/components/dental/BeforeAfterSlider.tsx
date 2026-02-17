import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, EyeOff } from 'lucide-react';
import { Button } from '../ui/button';

const cases = [
  {
    title: "Full Mouth Rehabilitation",
    procedure: "All-on-4 Implants",
    before: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800&blur=50", // Blurred placeholder
    after: "https://images.unsplash.com/photo-1552058544-f2b08422138a?auto=format&fit=crop&q=80&w=800", // Same image for now but clear
    description: "Patient received upper and lower All-on-4 implants, restoring full function and aesthetics."
  },
  {
    title: "Hollywood Smile Makeover",
    procedure: "20 Porcelain Veneers",
    before: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800&blur=50",
    after: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
    description: "Complete smile transformation correcting discoloration and alignment."
  },
  {
    title: "Single Tooth Replacement",
    procedure: "Dental Implant",
    before: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800&blur=50",
    after: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800",
    description: "Single implant placement matching natural tooth shade perfectly."
  }
];

export function BeforeAfterSlider() {
  const [currentindex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const next = () => setCurrentIndex((prev) => (prev + 1) % cases.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + cases.length) % cases.length);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Real Patient Results
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl mx-auto"
          >
            Browse our gallery of transformations. 
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto bg-[#F9F6F0] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 h-[500px]">
             {/* Before Image (Left) */}
             <div className="relative h-full overflow-hidden group">
               <div className="absolute top-4 left-4 bg-black/60 text-white px-3 py-1 rounded-full text-sm font-bold z-10">BEFORE</div>
               <img 
                 src={cases[currentindex].before} 
                 alt="Before treatment" 
                 className="w-full h-full object-cover filter blur-sm transition-all duration-500 group-hover:blur-none"
               />
               <div className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity">
                 <span className="text-white font-bold text-lg">Hover to Reveal</span>
               </div>
             </div>

             {/* After Image (Right) */}
             <div className="relative h-full overflow-hidden">
               <div className="absolute top-4 right-4 bg-[#C5A059] text-white px-3 py-1 rounded-full text-sm font-bold z-10">AFTER</div>
               <img 
                 src={cases[currentindex].after} 
                 alt="After treatment" 
                 className="w-full h-full object-cover"
               />
             </div>
          </div>

          {/* Controls */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between px-4 pointer-events-none">
            <Button 
              size="icon" 
              onClick={prev}
              className="rounded-full bg-white/80 hover:bg-white text-[#0F1923] shadow-lg pointer-events-auto w-12 h-12"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>
            <Button 
              size="icon" 
              onClick={next}
              className="rounded-full bg-white/80 hover:bg-white text-[#0F1923] shadow-lg pointer-events-auto w-12 h-12"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>

          {/* Caption */}
          <div className="absolute bottom-0 inset-x-0 bg-white/90 backdrop-blur-md p-6 border-t border-[#C5A059]/20">
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923] mb-2">
              {cases[currentindex].title}
            </h3>
            <p className="font-['DM_Sans'] text-[#0F1923]/60 mb-2 font-medium">
              {cases[currentindex].procedure}
            </p>
            <p className="font-['DM_Sans'] text-sm text-[#0F1923]/60">
              {cases[currentindex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
