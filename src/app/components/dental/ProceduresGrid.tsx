import React from 'react';
import { ArrowRight, BadgeDollarSign, ScanFace, Smile, Crown, Sparkles, Activity, FileCheck, Layers } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../ui/button';
import { Link } from 'react-router-dom';

const procedures = [
  {
    icon: Crown,
    title: "Dental Implants",
    price: "$250",
    description: "Permanent solution for missing teeth with lifetime warranty",
    link: "/treatments/dental/implants"
  },
  {
    icon: ScanFace,
    title: "Veneers",
    price: "$180",
    description: "Custom-made shells to improve tooth appearance",
    link: "/treatments/dental/veneers"
  },
  {
    icon: Smile,
    title: "Hollywood Smile",
    price: "$2,500",
    description: "Complete smile makeover for a celebrity look",
    link: "/treatments/dental/hollywood-smile"
  },
  {
    icon: Layers,
    title: "All-on-4",
    price: "$3,500",
    description: "Full arch restoration on just four implants",
    link: "/treatments/dental/all-on-4"
  },
  {
    icon: Layers,
    title: "All-on-6",
    price: "$4,500",
    description: "Maximum stability with six implants per arch",
    link: "/treatments/dental/all-on-6"
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    price: "$150",
    description: "Professional laser whitening for immediate results",
    link: "/treatments/dental/whitening"
  },
  {
    icon: Activity,
    title: "Root Canal",
    price: "$100",
    description: "Pain-free treatment to save infected teeth",
    link: "/treatments/dental/root-canal"
  },
  {
    icon: FileCheck,
    title: "Clear Aligners",
    price: "$1,200",
    description: "Invisible alternative to traditional braces",
    link: "/treatments/dental/aligners"
  }
];

export function ProceduresGrid() {
  return (
    <section className="py-20 bg-[#F5F0E5]">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Our Dental Procedures
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl mx-auto"
          >
            Comprehensive dental care using the latest technology and materials, performed by internationally accredited specialists.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {procedures.map((proc, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 group border border-[#C5A059]/10 hover:border-[#C5A059]/40"
            >
              <div className="p-6 flex flex-col h-full">
                <div className="w-12 h-12 bg-[#FAF6EF] rounded-full flex items-center justify-center mb-4 group-hover:bg-[#C5A059] transition-colors duration-300">
                  <proc.icon className="w-6 h-6 text-[#C5A059] group-hover:text-white transition-colors duration-300" />
                </div>
                
                <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F1923] mb-2 group-hover:text-[#C5A059] transition-colors">
                  {proc.title}
                </h3>
                
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-['Space_Mono'] text-[#1B7A6E] font-bold text-lg">
                    From {proc.price}
                  </span>
                </div>

                <p className="font-['DM_Sans'] text-sm text-[#0F1923]/60 mb-6 flex-grow">
                  {proc.description}
                </p>

                <Button 
                  asChild 
                  variant="ghost" 
                  className="w-full justify-between hover:bg-[#FAF6EF] hover:text-[#C5A059] group-hover:translate-x-1 transition-all"
                >
                  <Link to={proc.link} className="flex items-center w-full">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
