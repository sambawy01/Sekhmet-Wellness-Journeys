import React, { useEffect, useState } from 'react';
// import { toast } from 'sonner';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Eye } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
// This component doesn't render anything itself, it just manages the toasts
export const SocialProofManager = () => {
  const { t, direction } = useLanguage();
  useEffect(() => {
    // Initial delay before first toast
    const initialTimer = setTimeout(() => {
      triggerRandomToast();
    }, 5000);

    // Set up interval for subsequent toasts
    const interval = setInterval(() => {
      triggerRandomToast();
    }, 45000); // Every 45 seconds

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  const triggerRandomToast = () => {
    const variants = ['booking', 'viewing'];
    const variant = variants[Math.floor(Math.random() * variants.length)];
    
    if (variant === 'booking') {
      const names = ['Sarah', 'James', 'Emma', 'Michael', 'Sophie', 'David'];
      const cities = ['London', 'Manchester', 'Dubai', 'Riyadh', 'Berlin', 'Paris'];
      const treatments = ['dental consultation', 'LASIK consultation', 'hair transplant query', 'veneer quote'];
      
      const name = names[Math.floor(Math.random() * names.length)];
      const city = cities[Math.floor(Math.random() * cities.length)];
      const treatment = treatments[Math.floor(Math.random() * treatments.length)];
      const time = Math.floor(Math.random() * 5) + 1; // 1-6 hours ago

      showBookingToast(name, city, treatment, time);
    } else {
      const count = Math.floor(Math.random() * 12) + 8; // 8-20 people
      const page = ['LASIK', 'Dental Implant', 'Veneer', 'Hair Transplant'][Math.floor(Math.random() * 4)];
      
      showViewingToast(count, page);
    }
  };

  const showBookingToast = (name: string, city: string, treatment: string, time: number) => {
    toast.custom((id) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-[320px] bg-white rounded-xl shadow-lg border-l-[3px] border-[#C5A059] p-3 flex items-center gap-3 relative overflow-hidden pointer-events-auto"
      >
        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
           {/* Placeholder avatar */}
           <span className="text-xs font-bold text-[#0F1923]">{name[0]}</span>
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#0F1923] truncate">
            {name} from {city}
          </p>
          <p className="text-xs text-gray-500 truncate">
            booked a {treatment} — {time}h ago
          </p>
        </div>
        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600">
          <Check size={14} strokeWidth={3} />
        </div>
        <button 
          onClick={() => toast.dismiss(id)}
          className="absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0"
          aria-label="Dismiss notification"
        />
      </motion.div>
    ), {
      duration: 5000,
      position: 'bottom-left',
    });
  };

  const showViewingToast = (count: number, page: string) => {
    toast.custom((id) => (
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="w-[320px] bg-white rounded-xl shadow-lg border-l-[3px] border-[#C5A059] p-3 flex items-center gap-3 relative overflow-hidden pointer-events-auto"
      >
        <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center shrink-0 text-[#115E59]">
           <Eye size={16} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-bold text-[#0F1923]">
            Popular right now
          </p>
          <p className="text-xs text-gray-500 truncate">
            {count} people are viewing {page} packages
          </p>
        </div>
        <button 
          onClick={() => toast.dismiss(id)}
          className="absolute inset-0 w-full h-full cursor-pointer z-10 opacity-0"
          aria-label="Dismiss notification"
        />
      </motion.div>
    ), {
      duration: 5000,
      position: 'bottom-left',
    });
  };

  return null;
};
