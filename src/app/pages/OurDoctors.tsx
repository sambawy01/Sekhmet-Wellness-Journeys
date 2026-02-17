import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DoctorCard } from '../components/DoctorCard';
import { CheckCircle, Globe, Award, Stethoscope } from 'lucide-react';

const doctors = [
  {
    id: 1,
    name: "Dr. Ahmed El-Sayed",
    specialty: "Cosmetic",
    title: "Senior Plastic Surgeon",
    image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?auto=format&fit=crop&q=80&w=800",
    credentials: ["FRCS (UK)", "Fellow, Cambridge Univ", "15+ Years Experience"],
    affiliation: "Cairo International Hospital"
  },
  {
    id: 2,
    name: "Dr. Layla Hassan",
    specialty: "Cosmetic",
    title: "Dermatologist",
    image: "https://images.unsplash.com/photo-1770130174214-477ce018479f?auto=format&fit=crop&q=80&w=800",
    credentials: ["MD, Cairo University", "Laser Specialist", "12+ Years Experience"],
    affiliation: "Nile Wellness Center"
  },
  {
    id: 3,
    name: "Dr. Youssef Mahmoud",
    specialty: "Checkups",
    title: "Orthopedic Surgeon",
    image: "https://images.unsplash.com/photo-1651596082255-bcb4993cee27?auto=format&fit=crop&q=80&w=800",
    credentials: ["PhD, Munich Germany", "Sports Medicine", "20+ Years Experience"],
    affiliation: "Red Sea Medical Group"
  },
  {
    id: 4,
    name: "Dr. Sarah Johnson",
    specialty: "Dental",
    title: "Implantologist",
    image: "https://images.unsplash.com/photo-1611690061822-b707a67bfebb?auto=format&fit=crop&q=80&w=800",
    credentials: ["DDS, NYU", "Fellow, ICOI", "10+ Years Experience"],
    affiliation: "Smile Artistry Clinic"
  },
  {
    id: 5,
    name: "Dr. Omar Farouk",
    specialty: "Vision",
    title: "Ophthalmologist",
    image: "https://images.unsplash.com/photo-1698465281093-9f09159733b9?auto=format&fit=crop&q=80&w=800",
    credentials: ["FRCOphth (UK)", "LASIK Expert", "18+ Years Experience"],
    affiliation: "Vision Correction Center"
  },
  {
    id: 6,
    name: "Dr. Amira Zaki",
    specialty: "IVF",
    title: "Fertility Specialist",
    image: "https://images.unsplash.com/photo-1770130174214-477ce018479f?auto=format&fit=crop&q=80&w=800",
    credentials: ["MD, London", "IVF & Embryology", "14+ Years Experience"],
    affiliation: "Life Fertility Clinic"
  },
  // Add more mock doctors to fill the grid
  {
    id: 7,
    name: "Dr. Kareem Soliman",
    specialty: "Dental",
    title: "Cosmetic Dentist",
    image: "https://images.unsplash.com/photo-1762237798212-bcc000c00891?auto=format&fit=crop&q=80&w=800",
    credentials: ["DDS, Cairo", "Veneer Specialist", "8+ Years Experience"],
    affiliation: "Cairo Dental Institute"
  },
  {
    id: 8,
    name: "Dr. Nadia Ezzat",
    specialty: "Checkups",
    title: "Cardiologist",
    image: "https://images.unsplash.com/photo-1770130174214-477ce018479f?auto=format&fit=crop&q=80&w=800",
    credentials: ["FACC (USA)", "Interventional Cardio", "22+ Years Experience"],
    affiliation: "Heart Care Center"
  }
];

const specialties = ["All", "Dental", "Vision", "Cosmetic", "Checkups", "IVF"];

export function OurDoctors() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const filteredDoctors = doctors.filter(doc => 
    activeSpecialty === "All" || doc.specialty === activeSpecialty
  );

  return (
    <div className="pt-20 bg-[#FAF6EF] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#0F1923] text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
             {/* Abstract background pattern could go here */}
        </div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Playfair_Display'] text-5xl md:text-6xl font-bold mb-4"
          >
            World-Class Specialists
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-xl text-white/80 max-w-2xl mx-auto mb-12"
          >
            UK, European, and US-trained doctors performing at Egypt’s top hospitals.
          </motion.p>

          {/* Credibility Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#C5A059]/20 p-3 rounded-full mb-4">
                <CheckCircle className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-['Space_Mono'] text-3xl font-bold text-[#C5A059] mb-2">15+ Years</h3>
              <p className="font-['DM_Sans'] text-white/60 uppercase tracking-widest text-sm">Average Experience</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#C5A059]/20 p-3 rounded-full mb-4">
                <Globe className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-['Space_Mono'] text-3xl font-bold text-[#C5A059] mb-2">12+ Countries</h3>
              <p className="font-['DM_Sans'] text-white/60 uppercase tracking-widest text-sm">Training Locations</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col items-center"
            >
              <div className="bg-[#C5A059]/20 p-3 rounded-full mb-4">
                <Stethoscope className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h3 className="font-['Space_Mono'] text-3xl font-bold text-[#C5A059] mb-2">10,000+</h3>
              <p className="font-['DM_Sans'] text-white/60 uppercase tracking-widest text-sm">Procedures Performed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 -mt-8 relative z-20 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-lg border border-[#0F1923]/5 flex flex-wrap justify-center gap-4">
          {specialties.map(spec => (
            <button
              key={spec}
              onClick={() => setActiveSpecialty(spec)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
                activeSpecialty === spec 
                  ? 'bg-[#0F1923] text-white shadow-md transform -translate-y-1' 
                  : 'bg-[#FAF6EF] text-[#0F1923]/60 hover:bg-[#C5A059]/10 hover:text-[#C5A059]'
              }`}
            >
              {spec}
            </button>
          ))}
        </div>
      </section>

      {/* Doctor Grid */}
      <section className="container mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredDoctors.map((doc, index) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="flex justify-center"
            >
              <DoctorCard 
                image={doc.image}
                name={doc.name}
                specialty={doc.title} // Mapping title to specialty prop for display
                credentials={doc.credentials}
                affiliation={doc.affiliation}
              />
            </motion.div>
          ))}
        </div>

        {filteredDoctors.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-2xl font-['Playfair_Display'] text-[#0F1923] mb-2">No doctors found</h3>
            <p className="text-[#0F1923]/60">Try adjusting your specialty filter.</p>
          </div>
        )}
      </section>
    </div>
  );
}
