import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight } from 'lucide-react';
import { IconAnkh } from './EgyptianIcons';

import { useLanguage } from '../context/LanguageContext';
export const ExitIntentPopup = () => {
  const { t, direction } = useLanguage();
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !hasShown && !localStorage.getItem('exit_intent_shown')) {
        setIsVisible(true);
        setHasShown(true);
        localStorage.setItem('exit_intent_shown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    return () => document.removeEventListener('mouseleave', handleMouseLeave);
  }, [hasShown]);

  const handleClose = () => setIsVisible(false);

  return (
    <AnimatePresence>
      {isVisible && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-[#0F1923]/60 backdrop-blur-sm"
            onClick={handleClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-[560px] bg-white rounded-[20px] shadow-2xl overflow-hidden border-t-4 border-[#C5A059]"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />

            <button 
              onClick={handleClose}
              className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors z-10"
            >
              <X size={20} />
            </button>

            <div className="relative z-10 p-8 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-[#F5F0E5] rounded-full flex items-center justify-center mb-6 text-[#C5A059]">
                <IconAnkh className="w-6 h-6" />
              </div>

              <h2 className="font-playfair text-3xl text-[#0F1923] mb-2">
                Before You Go...
              </h2>
              <p className="text-[#3D3D3D] mb-8 font-sans">
                Get your free personalized quote in 24 hours
              </p>

              <form className="w-full max-w-sm space-y-4 text-left" onSubmit={(e) => { e.preventDefault(); handleClose(); }}>
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all bg-white text-gray-600">
                    <option value="">Select Treatment Interest</option>
                    <option value="dental">Dental Care</option>
                    <option value="cosmetic">Cosmetic Surgery</option>
                    <option value="hair">Hair Transplant</option>
                    <option value="vision">Vision Correction</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#C5A059] text-white font-bold py-3 rounded-lg hover:bg-[#B08D4B] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200"
                >
                  Get My Quote
                </button>
              </form>

              <div className="mt-6 pt-6 border-t border-gray-100 w-full">
                <a 
                  href="https://wa.me/201000000000" 
                  className="inline-flex items-center text-[#25D366] font-medium hover:underline gap-2 text-sm"
                >
                  Or WhatsApp us directly <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
