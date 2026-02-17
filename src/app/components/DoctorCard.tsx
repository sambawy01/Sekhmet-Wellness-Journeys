import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
interface DoctorCardProps {
  image: string;
  name: string;
  specialty: string;
  credentials: string[];
  affiliation: string;
}

export const DoctorCard: React.FC<DoctorCardProps> = ({ 
  image, 
  name, 
  specialty, 
  credentials, 
  affiliation 
}) => {
  const { t, direction } = useLanguage();
  return (
    <motion.div 
      className="group relative w-[300px] h-[400px] rounded-xl overflow-hidden cursor-pointer shadow-md bg-[#F5F0E5] border border-transparent hover:border-[#C9A84C]/50 transition-all duration-300"
      whileHover={{ y: -6 }}
    >
      {/* Background Image / Decoration */}
      <div className="h-[120px] bg-gradient-to-b from-[#0F1923]/5 to-transparent absolute top-0 w-full" />

      {/* Profile Image */}
      <div className="relative pt-8 px-6 pb-4 flex justify-center">
        <div className="w-[120px] h-[120px] rounded-full p-1 border-2 border-[#C9A84C] relative bg-white shadow-sm overflow-hidden group-hover:scale-105 transition-transform duration-300">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-full"
          />
        </div>
      </div>

      {/* Details */}
      <div className="px-6 text-center space-y-3 relative z-10">
        <h3 className="font-['Playfair_Display'] font-bold text-[20px] text-[#0F1923] leading-tight">
          {name}
        </h3>
        
        <p className="font-['DM_Sans'] text-[14px] font-medium text-[#1B7A6E] uppercase tracking-wide">
          {specialty}
        </p>
        
        <div className="h-[1px] w-12 bg-[#0F1923]/10 mx-auto my-3" />
        
        <ul className="text-sm space-y-1 font-['DM_Sans'] text-[#0F1923]/60 leading-tight">
          {credentials.map((cred, i) => (
            <li key={i}>{cred}</li>
          ))}
        </ul>
        
        <div className="pt-4 flex items-center justify-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
          {/* Mock Hospital Logo */}
          <div className="w-6 h-6 bg-[#0F1923]/10 rounded-full flex items-center justify-center text-[10px] font-bold text-[#0F1923]">H</div>
          <span className="text-xs text-[#0F1923]/50 font-['DM_Sans']">{affiliation}</span>
        </div>
      </div>

      {/* Footer Link */}
      <div className="absolute bottom-4 w-full text-center">
        <button className="text-[#1B7A6E] font-['DM_Sans'] text-[13px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 hover:text-[#C9A84C] transition-colors">
          View Profile <ExternalLink size={12} />
        </button>
      </div>
    </motion.div>
  );
};

export const DoctorShowcase: React.FC = () => {
  return (
    <section className="bg-white p-12 rounded-3xl border border-[#0F1923]/10 space-y-8">
       <div className="border-b border-[#0F1923]/10 pb-4">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Medical Experts</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">World-class surgeons & specialists</p>
      </div>

      <div className="flex flex-wrap justify-center gap-8">
        <DoctorCard 
          image="https://images.unsplash.com/photo-1762066436595-67edb4610539?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwbWFsZSUyMGRvY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTI3NDM4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          name="Dr. Ahmed El-Sayed"
          specialty="Cosmetic & Plastic Surgeon"
          credentials={["FRCS (UK)", "Fellow, Cambridge Univ", "15+ Years Experience"]}
          affiliation="Cairo International Hospital"
        />
        <DoctorCard 
          image="https://images.unsplash.com/photo-1706565029539-d09af5896340?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkb2N0b3IlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3NzExODYyMTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          name="Dr. Layla Hassan"
          specialty="Senior Dermatologist"
          credentials={["MD, Cairo University", "Laser Specialist", "12+ Years Experience"]}
          affiliation="Nile Wellness Center"
        />
        <DoctorCard 
          image="https://images.unsplash.com/photo-1748200100041-3d815ae01dd1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZW5pb3IlMjBzdXJnZW9uJTIwbWFsZSUyMHBvcnRyYWl0fGVufDF8fHx8MTc3MTI3NDM4OHww&ixlib=rb-4.1.0&q=80&w=1080"
          name="Dr. Youssef Mahmoud"
          specialty="Orthopedic Surgeon"
          credentials={["PhD, Munich Germany", "Sports Medicine", "20+ Years Experience"]}
          affiliation="Red Sea Medical Group"
        />
      </div>
    </section>
  );
};
