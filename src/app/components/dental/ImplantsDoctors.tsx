import React, { useRef } from 'react';
import { DoctorCard } from '../DoctorCard';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '../ui/button';

import { useLanguage } from '../../context/LanguageContext';
const doctors = [
  {
    image: "https://images.unsplash.com/photo-1631596577204-53ad0d6e6978?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGVudGlzdCUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTI1NDE3M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Hassan El-Masry",
    specialty: "Chief Implantologist",
    credentials: ["MSc Oral Surgery (UK)", "Fellow, ITI", "15+ Years Experience", "5,000+ Implants Placed"],
    affiliation: "Cairo Dental Institute"
  },
  {
    image: "https://images.unsplash.com/photo-1645066928295-2506defde470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGRvY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTIyNzU5N3ww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Karim Fouad",
    specialty: "Maxillofacial Surgeon",
    credentials: ["BDS, Alexandria Univ", "German Board Certified", "All-on-4 Expert"],
    affiliation: "Royal Dental Hospital"
  },
   {
    image: "https://images.unsplash.com/photo-1748200100041-3d815ae01dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBzdXJnZW9uJTIwbWFsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI3NDM4OHww&ixlib=rb-4.1.0&q=80&w=1080",
    name: "Dr. Youssef Mahmoud",
    specialty: "Senior Implantologist",
    credentials: ["PhD, Munich Germany", "Computer Guided Surgery", "20+ Years Experience"],
    affiliation: "Red Sea Medical Group"
  }
];

export function ImplantsDoctors() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-10">
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-2">
              Meet Your Implant Specialists
            </h2>
            <p className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl">
              Leaders in the field of implantology with international certifications.
            </p>
          </div>
          <div className="flex gap-2">
             <Button variant="outline" size="icon" onClick={() => scroll('left')}><ChevronLeft className="w-4 h-4" /></Button>
             <Button variant="outline" size="icon" onClick={() => scroll('right')}><ChevronRight className="w-4 h-4" /></Button>
          </div>
        </div>
        <div ref={scrollRef} className="flex overflow-x-auto gap-8 pb-4 snap-x snap-mandatory scrollbar-hide">
          {doctors.map((doctor, index) => (
            <div key={index} className="snap-center shrink-0 w-[300px]">
              <DoctorCard {...doctor} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
