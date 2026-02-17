import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';
import { Button } from '../ui/button';

export function Hero() {
  return (
    <section className="relative h-[80vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1744912739625-1c188aa85c7a?auto=format&fit=crop&q=80&w=1920" 
          alt="Patient being greeted at hospital reception" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0F1923]/90 via-[#0F1923]/70 to-transparent" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          <h1 className="font-['Playfair_Display'] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Your Journey With <span className="text-[#C5A059]">Sekhmet</span>
          </h1>
          
          <p className="font-['DM_Sans'] text-xl md:text-2xl text-white/90 mb-10 leading-relaxed max-w-2xl">
            From your first inquiry to post-return follow-up, we handle every detail of your medical experience with precision and care.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-[#C5A059] hover:bg-[#B08D55] text-white rounded-full px-8 py-6 text-lg">
              Start Your Journey
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8 py-6 text-lg">
              View Process
            </Button>
          </div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white animate-bounce"
      >
        <ArrowDown className="w-8 h-8 opacity-70" />
      </motion.div>
    </section>
  );
}
