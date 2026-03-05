import React from 'react';
import { Hero } from '../components/how-it-works/Hero';
import { Timeline } from '../components/how-it-works/Timeline';
import { ComparisonTable } from '../components/how-it-works/ComparisonTable';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

export function HowItWorks() {
  return (
    <div className="pt-20">
      <Hero />
      <Timeline />
      <ComparisonTable />

      {/* CTA Section */}
      <section className="py-24 bg-[#0F172A] text-white text-center">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold mb-6 text-[#F0F7F4]">
              Ready to Begin Your Transformation?
            </h2>
            <p className="font-['Outfit'] text-xl text-[#F0F7F4]/80 mb-10 leading-relaxed">
              Experience the perfect blend of world-class medical care and luxury travel.
              Let us handle every detail while you focus on your health.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <Link
                to="/consultation"
                className="inline-flex items-center justify-center gap-2 bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-4 rounded-full text-lg font-['Outfit'] font-bold transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get Your Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-[#0F172A] px-8 py-4 rounded-full text-lg font-['Outfit'] font-bold transition-all duration-300"
              >
                Contact a Coordinator
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
