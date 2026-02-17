import React from 'react';
import { TestimonialCard } from '../TestimonialCard';
import { motion } from 'framer-motion';

import { useLanguage } from '../../context/LanguageContext';
const testimonials = [
  {
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200",
    name: "Emma Thompson",
    country: "🇬🇧 United Kingdom",
    quote: "I was quoted £12,000 for implants in London. I paid less than £4,000 in Cairo including flights and a 5-star hotel. The clinic was pristine.",
    treatment: "All-on-4 Implants"
  },
  {
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200",
    name: "Michael Chen",
    country: "🇺🇸 United States",
    quote: "The doctors speak perfect English and the facilities are better than what I'm used to in New York. My veneers look incredibly natural.",
    treatment: "Veneers"
  },
  {
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200",
    name: "Sophia Rossi",
    country: "🇮🇹 Italy",
    quote: "A truly luxury experience. From the airport pickup to the dental chair, everything was handled with such care. I recommend Sekhmet to everyone.",
    treatment: "Hollywood Smile"
  }
];

export function DentalTestimonials() {
  return (
    <section className="py-20 bg-[#FAF6EF]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Patient Stories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl mx-auto"
          >
            Hear from patients who have transformed their smiles and their lives with us.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <TestimonialCard 
                image={t.image}
                name={t.name}
                country={t.country}
                quote={t.quote}
                treatment={t.treatment}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
