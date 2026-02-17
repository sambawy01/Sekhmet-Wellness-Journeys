import React, { useRef } from 'react';
import { DoctorCard } from '../DoctorCard';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

const doctors = [
  {
    image: "https://images.unsplash.com/photo-1565090567208-c8038cfcf6cd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZW50aXN0JTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzcxMjU0MTczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Sarah Amin",
    specialty: "Cosmetic Dentist",
    credentials: ["DDS, Cairo University", "Member, AACD", "Hollywood Smile Expert"],
    affiliation: "Nile Dental Center"
  },
  {
    image: "https://images.unsplash.com/photo-1662837625427-970713d74aa6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkZW50aXN0JTIwY29uc3VsdGluZyUyMHBhdGllbnQlMjBjb3NtZXRpYyUyMGRlbnRpc3RyeXxlbnwxfHx8fDE3NzEyNzY4ODZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Ahmed Zaki",
    specialty: "Prosthodontist",
    credentials: ["PhD, Heidelberg University", "Veneer Specialist", "12+ Years Experience"],
    affiliation: "Cairo Dental Institute"
  },
  {
    image: "https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExODYyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Nour Rashwan",
    specialty: "Orthodontist",
    credentials: ["PhD Orthodontics", "Invisalign Platinum", "Alignment Specialist"],
    affiliation: "Smile Design Studio"
  },
  {
    image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTI1NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Hassan El-Masry",
    specialty: "Implantologist",
    credentials: ["MSc Oral Surgery (UK)", "Fellow, ITI", "Complex Rehab Specialist"],
    affiliation: "Cairo Dental Institute"
  }
];

export function HollywoodDoctors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
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
              Meet Our Smile Designers
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl"
            >
              Certified by the American Academy of Cosmetic Dentistry (AACD).
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
