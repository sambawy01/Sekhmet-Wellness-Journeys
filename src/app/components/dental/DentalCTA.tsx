import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '../ui/button';

import { useLanguage } from '../../context/LanguageContext';
export function DentalCTA() {
  return (
    <section className="py-24 bg-[#0F1923] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#0F1923] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6"
        >
          Your New Smile Awaits
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-['DM_Sans'] text-xl text-[#F9F6F0]/80 max-w-2xl mx-auto mb-10"
        >
          Get a free consultation and personalized treatment plan today. Save up to 85% without compromising on quality.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <Button 
            size="lg" 
            className="bg-[#C5A059] hover:bg-[#B08D45] text-white font-['DM_Sans'] text-lg px-8 py-6 rounded-full"
          >
            Get Free Quote <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/20 text-white hover:bg-white/10 hover:text-white font-['DM_Sans'] text-lg px-8 py-6 rounded-full"
          >
            <MessageCircle className="mr-2 w-5 h-5" /> WhatsApp Us
          </Button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-[#F9F6F0]/40 font-['DM_Sans']"
        >
          No commitment required. 100% free assessment.
        </motion.p>
      </div>
    </section>
  );
}
