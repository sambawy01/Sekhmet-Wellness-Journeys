import React, { useRef } from 'react';
import { DoctorCard } from '../DoctorCard';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

import { useLanguage } from '../../context/LanguageContext';
const doctors = [
  {
    image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTI1NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Hassan El-Masry",
    specialty: "Implantologist",
    credentials: ["MSc Oral Surgery (UK)", "Fellow, ITI", "15+ Years Experience"],
    affiliation: "Cairo Dental Institute"
  },
  {
    image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxMjU0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Sarah Amin",
    specialty: "Cosmetic Dentist",
    credentials: ["DDS, Cairo University", "Member, AACD", "Hollywood Smile Expert"],
    affiliation: "Nile Dental Center"
  },
  {
    image: "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExODYyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Nour Rashwan",
    specialty: "Orthodontist",
    credentials: ["PhD Orthodontics", "Invisalign Platinum", "10+ Years Experience"],
    affiliation: "Smile Design Studio"
  },
  {
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRvY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTIyNzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Karim Fouad",
    specialty: "Oral Surgeon",
    credentials: ["BDS, Alexandria Univ", "Maxillofacial Specialist", "12+ Years Experience"],
    affiliation: "Royal Dental Hospital"
  }
];

export function FeaturedDoctors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
  const { t, direction } = useLanguage();
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-20 bg-[#F5F0E5]">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-12">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
            >
              Meet Our Specialists
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl"
            >
              Expertly trained in the UK, US, and Europe, our dental team delivers world-class care.
            </motion.p>
          </div>
          
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('left')}
              className="rounded-full border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={() => scroll('right')}
              className="rounded-full border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-white"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-8 pb-8 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {doctors.map((doctor, index) => (
            <div key={index} className="snap-center shrink-0">
              <div className="w-[300px]">
                {/* We need to pass required props. DoctorCard handles image/name/specialty etc. */}
                {/* DoctorCard inside FeaturedDoctors has specific styling in DoctorCard.tsx, 
                    we are reusing it. It expects props. */}
                <DoctorCard 
                  image={doctor.image}
                  name={doctor.name}
                  specialty={doctor.specialty}
                  credentials={doctor.credentials}
                  affiliation={doctor.affiliation}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
