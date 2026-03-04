import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ArrowRight, CheckCircle } from 'lucide-react';
import { IconAnkh } from './EgyptianIcons';
import { submitLead } from '../../lib/supabase';

export const ExitIntentPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasShown, setHasShown] = useState(false);
  const [popupForm, setPopupForm] = useState({ name: '', email: '', treatment: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

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
            className="absolute inset-0 bg-[#0F172A]/60 backdrop-blur-sm"
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
              <div className="w-12 h-12 bg-[#F0F7F4] rounded-full flex items-center justify-center mb-6 text-[#C5A059]">
                <IconAnkh className="w-6 h-6" />
              </div>

              <h2 className="font-playfair text-3xl text-[#0F172A] mb-2">
                Before You Go...
              </h2>
              <p className="text-[#3D3D3D] mb-8 font-sans">
                Get your free personalized quote in 24 hours
              </p>

              {isSubmitted ? (
                <div className="w-full max-w-sm text-center py-4">
                  <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
                  <p className="font-bold text-[#0F172A] mb-1">Quote Request Sent!</p>
                  <p className="text-sm text-gray-500">We'll be in touch within 24 hours.</p>
                </div>
              ) : (
              <form className="w-full max-w-sm space-y-4 text-left" onSubmit={async (e) => {
                e.preventDefault();
                if (!popupForm.name || !popupForm.email) return;
                setIsSubmitting(true);
                try {
                  await submitLead({
                    name: popupForm.name,
                    email: popupForm.email,
                    treatment_interest: popupForm.treatment || undefined,
                    source_form: 'exit-intent',
                  });
                  setIsSubmitted(true);
                  setTimeout(handleClose, 2500);
                } catch {
                  handleClose();
                } finally {
                  setIsSubmitting(false);
                }
              }}>
                <div>
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={popupForm.name}
                    onChange={(e) => setPopupForm({ ...popupForm, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address"
                    value={popupForm.email}
                    onChange={(e) => setPopupForm({ ...popupForm, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all"
                  />
                </div>
                <div>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] outline-none transition-all bg-white text-gray-600"
                    value={popupForm.treatment}
                    onChange={(e) => setPopupForm({ ...popupForm, treatment: e.target.value })}
                  >
                    <option value="">Select Treatment Interest</option>
                    <option value="dental">Dental Care</option>
                    <option value="cosmetic">Cosmetic Surgery</option>
                    <option value="hair">Hair Transplant</option>
                    <option value="vision">Vision Correction</option>
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#C5A059] text-white font-bold py-3 rounded-lg hover:bg-[#B08D4B] transition-colors shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-200 disabled:opacity-60"
                >
                  {isSubmitting ? 'Sending...' : 'Get My Quote'}
                </button>
              </form>
              )}

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
