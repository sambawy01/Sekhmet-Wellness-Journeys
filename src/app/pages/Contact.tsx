import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconAnkh } from '../components/EgyptianIcons';
import { submitLead } from '../../lib/supabase';

export const Contact = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitLead({
        name: formState.name,
        email: formState.email,
        phone: formState.phone || undefined,
        treatment_interest: formState.interest || undefined,
        message: formState.message || undefined,
        source_form: 'contact',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || t('common.error'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className={`min-h-screen bg-[#F0F7F4] pt-12 pb-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      <div className="max-w-7xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="font-playfair text-4xl md:text-5xl text-[#0F172A] mb-4">{t('contact.title')}</h1>
          <div className={`flex items-center justify-center gap-2 text-[#C5A059] font-medium font-sans ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Clock size={18} />
            <span>{t('contact.responseTime')}</span>
          </div>
        </div>

        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-start ${isRTL ? 'lg:flex-row-reverse' : ''}`}>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-[#C5A059]"
          >
            {isSubmitted ? (
              <div className="text-center py-20">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 text-green-600">
                  <CheckCircle size={40} />
                </div>
                <h3 className="font-playfair text-3xl text-[#0F172A] mb-4">{t('contact.messageSent')}</h3>
                <p className={`text-gray-600 mb-8 font-sans ${isRTL ? 'text-right' : ''}`}>
                  {t('contact.thankYou')}
                </p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="text-[#C5A059] font-bold hover:underline"
                >
                  {t('contact.sendAnother')}
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className={`block text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide ${isRTL ? 'text-right' : ''}`}>{t('contact.fullName')}</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formState.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.enterName')}
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className={`block text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide ${isRTL ? 'text-right' : ''}`}>{t('contact.email')}</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formState.email}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all ${isRTL ? 'text-right' : ''}`}
                      placeholder="john@example.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className={`block text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide ${isRTL ? 'text-right' : ''}`}>{t('contact.phone')}</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formState.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all ${isRTL ? 'text-right' : ''}`}
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="interest" className={`block text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide ${isRTL ? 'text-right' : ''}`}>{t('contact.interest')}</label>
                  <select
                    id="interest"
                    name="interest"
                    value={formState.interest}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all cursor-pointer ${isRTL ? 'text-right' : ''}`}
                  >
                    <option value="">{t('contact.selectTreatment')}</option>
                    <option value="dental">{t('contact.dental')}</option>
                    <option value="cosmetic">{t('contact.cosmetic')}</option>
                    <option value="hair">{t('contact.hair')}</option>
                    <option value="vision">{t('contact.vision')}</option>
                    <option value="checkup">{t('contact.checkup')}</option>
                    <option value="other">{t('contact.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className={`block text-sm font-bold text-[#0F172A] mb-2 uppercase tracking-wide ${isRTL ? 'text-right' : ''}`}>{t('contact.message')}</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formState.message}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all resize-none ${isRTL ? 'text-right' : ''}`}
                    placeholder={t('contact.messagePlaceholder')}
                  />
                </div>

                {error && (
                  <div className={`p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm ${isRTL ? 'text-right' : ''}`}>
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[#C5A059] text-white font-bold py-4 rounded-lg hover:bg-[#B08D4B] transition-colors shadow-lg flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  {isSubmitting ? t('contact.sending') : t('contact.sendMessage')} {!isSubmitting && <Send size={18} className="group-hover:translate-x-1 transition-transform" />}
                </button>
              </form>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -20 : 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`space-y-8 ${isRTL ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className="bg-[#0F172A] p-8 md:p-10 rounded-2xl shadow-xl text-white relative overflow-hidden">
               <div className="absolute top-0 right-0 w-40 h-40 bg-[#C5A059] opacity-5 rounded-bl-full -mr-10 -mt-10" />
               <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#115E59] opacity-10 rounded-tr-full -ml-6 -mb-6" />

               <div className="relative z-10 space-y-8">
                 <div>
                   <h3 className={`font-playfair text-2xl text-[#C5A059] mb-6 ${isRTL ? 'text-right' : ''}`}>{t('contact.information')}</h3>
                   <div className={`space-y-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                     <a href="tel:+447988559541" className={`flex items-start gap-4 hover:text-[#C5A059] transition-colors group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-white transition-colors flex-shrink-0">
                         <Phone size={20} />
                       </div>
                       <div>
                         <p className={`text-sm text-gray-400 uppercase tracking-wide mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.callUs')}</p>
                         <p className="font-mono text-lg">+44 798 855 9541</p>
                       </div>
                     </a>

                     <a href="mailto:info@sekhmetwellness.com" className={`flex items-start gap-4 hover:text-[#C5A059] transition-colors group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#C5A059] group-hover:text-white transition-colors flex-shrink-0">
                         <Mail size={20} />
                       </div>
                       <div>
                         <p className={`text-sm text-gray-400 uppercase tracking-wide mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.emailUs')}</p>
                         <p className="font-sans text-lg">info@sekhmetwellness.com</p>
                       </div>
                     </a>

                     <div className={`flex items-start gap-4 group ${isRTL ? 'flex-row-reverse text-right' : ''}`}>
                       <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                         <MapPin size={20} />
                       </div>
                       <div>
                         <p className={`text-sm text-gray-400 uppercase tracking-wide mb-1 ${isRTL ? 'text-right' : ''}`}>{t('contact.visitUs')}</p>
                         <p className="font-sans text-lg">
                           IFZA Free Zone,<br />
                           Dubai, UAE
                         </p>
                       </div>
                     </div>
                   </div>
                 </div>

                 {/* Map Preview */}
                 <a
                   href="https://www.google.com/maps/search/IFZA+Free+Zone+Dubai"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="block rounded-xl overflow-hidden h-48 relative border border-white/10 group cursor-pointer"
                 >
                   <img
                     src="https://images.unsplash.com/photo-1572252009289-9d53c6d99a47?auto=format&fit=crop&q=80&w=800"
                     alt="Map location"
                     className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                   />
                   <div className="absolute inset-0 flex items-center justify-center">
                     <span className="bg-white/90 text-[#0F172A] px-4 py-2 rounded-lg font-bold text-sm shadow-lg group-hover:bg-white transition-colors">
                       {t('contact.openMap')}
                     </span>
                   </div>
                 </a>
               </div>
            </div>

            {/* FAQ Shortcuts */}
            <div className={`bg-white p-6 rounded-xl shadow-sm border border-gray-100 ${isRTL ? 'text-right' : ''}`}>
              <h3 className={`font-playfair text-lg font-bold mb-4 flex items-center gap-2 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                <IconAnkh className="w-5 h-5 text-[#C5A059]" /> {t('contact.commonQuestions')}
              </h3>
              <div className="space-y-3">
                <Link to="/faq" className={`block p-3 rounded-lg hover:bg-[#F0F7F4] text-sm font-medium text-[#0F172A] transition-colors flex justify-between items-center group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('contact.question1')}
                  <ArrowRight size={16} className={`text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link to="/faq" className={`block p-3 rounded-lg hover:bg-[#F0F7F4] text-sm font-medium text-[#0F172A] transition-colors flex justify-between items-center group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('contact.question2')}
                  <ArrowRight size={16} className={`text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
                <Link to="/faq" className={`block p-3 rounded-lg hover:bg-[#F0F7F4] text-sm font-medium text-[#0F172A] transition-colors flex justify-between items-center group ${isRTL ? 'flex-row-reverse' : ''}`}>
                  {t('contact.question3')}
                  <ArrowRight size={16} className={`text-[#C5A059] opacity-0 group-hover:opacity-100 transition-opacity ${isRTL ? 'rotate-180' : ''}`} />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
