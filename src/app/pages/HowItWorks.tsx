import React from 'react';
import { Hero } from '../components/how-it-works/Hero';
import { Timeline } from '../components/how-it-works/Timeline';
import { ComparisonTable } from '../components/how-it-works/ComparisonTable';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

import { useLanguage } from '../context/LanguageContext';
export function HowItWorks() {
  return (
    <div className="pt-20">
      <Hero />
      <Timeline />
      <ComparisonTable />
      
      {/* CTA Section */}
      <section className="py-24 bg-[#0F1923] text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[#F5F0E5]">
              Ready to Begin Your Transformation?
            </h2>
            <p className="font-['DM_Sans'] text-xl text-[#F5F0E5]/80 mb-10 leading-relaxed">
              Experience the perfect blend of world-class medical care and luxury travel. 
              Let us handle every detail while you focus on your health.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Button asChild className="bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-6 rounded-full text-lg">
                <Link to="/consultation" className="flex items-center gap-2">
                  Get Your Free Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#F5F0E5] text-[#F5F0E5] hover:bg-[#F5F0E5]/10 px-8 py-6 rounded-full text-lg">
                <Link to="/contact">
                  Contact a Coordinator
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
