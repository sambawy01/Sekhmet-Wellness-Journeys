import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
const WhatsAppIcon = () => (
  <svg 
    viewBox="0 0 24 24" 
    width="28" 
    height="28" 
    fill="currentColor"
    className="text-white"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

export const FloatingWhatsApp = () => {
  const { t, direction } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    const hasSeenTooltip = localStorage.getItem('whatsapp_tooltip_seen');
    if (!hasSeenTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(true);
      }, 2000); // Show after 2 seconds
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    if (showTooltip) {
      const timer = setTimeout(() => {
        setShowTooltip(false);
        localStorage.setItem('whatsapp_tooltip_seen', 'true');
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const handleDismissTooltip = () => {
    setShowTooltip(false);
    localStorage.setItem('whatsapp_tooltip_seen', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end pointer-events-none">
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="mb-4 bg-white p-3 rounded-xl shadow-lg relative pointer-events-auto max-w-[200px]"
          >
            <div className="text-sm font-medium text-navy-900 leading-tight">
              Hi! Need help? Chat with us on WhatsApp
            </div>
            <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white rotate-45 transform" />
            <button 
              onClick={handleDismissTooltip}
              className="absolute -top-2 -left-2 bg-gray-100 rounded-full p-0.5 hover:bg-gray-200"
            >
              <X size={12} className="text-gray-500" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.a
        href="https://wa.me/201000000000?text=Hello%2C%20I%27m%20interested%20in%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center bg-[#25D366] text-white shadow-lg pointer-events-auto overflow-hidden relative"
        style={{ height: 60 }}
        initial={{ width: 60, borderRadius: 30 }}
        whileHover={{ width: 220, borderRadius: 30 }}
        animate={{
          scale: [1, 1.08, 1],
        }}
        transition={{
          scale: {
            duration: 0.6,
            repeat: Infinity,
            repeatDelay: 10,
            ease: "easeInOut"
          },
          width: {
            type: "spring",
            stiffness: 300,
            damping: 25
          }
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <div className="absolute left-[16px]">
          <WhatsAppIcon />
        </div>
        
        <motion.span
          className="whitespace-nowrap font-bold text-sm ml-12 pr-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.2 }}
        >
          Chat with us
        </motion.span>
      </motion.a>
    </div>
  );
};
