import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, MessageCircle, Calendar, X, Clock, User, Phone as PhoneIcon, Mail } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { submitLead } from '../../lib/supabase';

const faqCategories = [
  "General",
  "Travel & Logistics",
  "Medical",
  "Financial",
  "Post-Treatment"
];

const faqs = [
  {
    category: "General",
    question: "Why should I choose Egypt for medical treatment?",
    answer: "Egypt has a long history of medical excellence with highly trained specialists, many of whom are board-certified in the UK, US, or Europe. Additionally, you can save up to 70% compared to Western prices while enjoying a luxury recovery vacation."
  },
  {
    category: "General",
    question: "Is it safe to travel to Egypt for surgery?",
    answer: "Yes. We only partner with JCI-accredited hospitals and clinics located in safe, tourist-friendly areas. Your personal coordinator and chauffeur ensure your safety and comfort throughout your entire stay."
  },
  {
    category: "Travel & Logistics",
    question: "Do I need a visa for medical travel?",
    answer: "Most visitors can obtain an e-visa or a visa on arrival. For specific medical treatments, we can assist in obtaining a medical entry visa if required. Our team handles all the paperwork guidance."
  },
  {
    category: "Travel & Logistics",
    question: "Will someone meet me at the airport?",
    answer: "Absolutely. A Sekhmet representative will meet you at the gate, assist with luggage and customs, and drive you to your hotel in a private luxury vehicle."
  },
  {
    category: "Medical",
    question: "How do I know the doctors are qualified?",
    answer: "We rigorously vet all our specialists. They must have at least 10 years of experience and international fellowship or board certification. You can view their full profiles and credentials before booking."
  },
  {
    category: "Medical",
    question: "Can I speak with the doctor before traveling?",
    answer: "Yes, we arrange a comprehensive video consultation with your assigned specialist to discuss your case, treatment plan, and answer any medical questions you may have."
  },
  {
    category: "Financial",
    question: "Are there hidden costs?",
    answer: "No. We provide a transparent, all-inclusive quote that covers treatment, medication, accommodation, airport transfers, and your personal coordinator. Any potential extra costs will be clearly outlined upfront."
  },
  {
    category: "Financial",
    question: "Do you offer financing plans?",
    answer: "We partner with several international medical financing institutions. Please contact our financial coordinators to discuss the available installment plans for your region."
  },
  {
    category: "Post-Treatment",
    question: "What happens if I have complications after returning home?",
    answer: "Your care doesn't end when you leave. We provide 12 months of telemedicine follow-up. If any corrective procedure is needed due to medical error, it is covered under our corrective treatment guarantee."
  },
  {
    category: "Post-Treatment",
    question: "Can I enjoy a vacation during my recovery?",
    answer: "Yes! Depending on your procedure, we can curate a relaxing itinerary. For example, dental patients often visit the Pyramids, while recovery from minor cosmetic procedures is perfect for a Red Sea resort stay."
  }
];

export function FAQ() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [showCallForm, setShowCallForm] = useState(false);
  const [callFormData, setCallFormData] = useState({ name: '', email: '', phone: '', preferredDate: '', preferredTime: '' });
  const [callFormStatus, setCallFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleCallFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setCallFormStatus('submitting');
    try {
      await submitLead({
        name: callFormData.name,
        email: callFormData.email,
        phone: callFormData.phone,
        message: `Call request – Date: ${callFormData.preferredDate || 'ASAP'}, Time: ${callFormData.preferredTime}`,
        source_form: 'faq-book-call',
      });
      setCallFormStatus('success');
      setTimeout(() => {
        setShowCallForm(false);
        setCallFormStatus('idle');
        setCallFormData({ name: '', email: '', phone: '', preferredDate: '', preferredTime: '' });
      }, 2500);
    } catch {
      setCallFormStatus('error');
    }
  };

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className={`pt-20 bg-[#F0F7F4] min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      {/* Hero */}
      <section className="bg-white py-16 border-b border-[#0F172A]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F172A] mb-4"
          >
            {t('faq.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className={`font-['Outfit'] text-lg text-[#0F172A]/60 mb-8 ${isRTL ? 'text-right' : ''}`}
          >
            {t('faq.subtitle')}
          </motion.p>

          <div className="max-w-xl mx-auto relative">
            <Search className={`absolute ${isRTL ? 'right-4' : 'left-4'} top-1/2 -translate-y-1/2 text-[#0F172A]/40 w-5 h-5`} />
            <input 
              type="text" 
              placeholder={t('faq.searchPlaceholder')} 
              className={`w-full ${isRTL ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-4 rounded-full border border-[#0F172A]/10 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all shadow-sm`}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className={`container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12 ${isRTL ? 'flex-col-reverse' : ''}`}>
        {/* Main Content */}
        <div className="flex-1">
          {/* Categories */}
          <div className={`flex flex-wrap gap-2 mb-8 ${isRTL ? 'justify-end' : ''}`}>
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#C5A059] text-white shadow-md' 
                    : 'bg-white text-[#0F172A]/60 hover:bg-[#0F172A]/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion */}
          <div className="space-y-4">
            {filteredFAQs.map((faq, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-[#0F172A]/5 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className={`w-full flex items-center justify-between p-6 text-left hover:bg-[#F0F7F4]/50 transition-colors ${isRTL ? 'flex-row-reverse' : ''}`}
                >
                  <span className={`font-['Outfit'] font-bold text-[#0F172A] text-lg ${isRTL ? 'text-right pr-4' : 'pl-4'}`}>
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#C5A059] flex-shrink-0" />
                  </motion.div>
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className={`px-6 pb-6 text-[#0F172A]/70 font-['Outfit'] leading-relaxed border-t border-[#0F172A]/5 pt-4 ${isRTL ? 'text-right' : ''}`}>
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className={`text-center py-12 ${isRTL ? 'text-right' : ''}`}>
                <p className="text-[#0F172A]/50">{t('faq.noResults')}</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-[#0F172A] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10" />
              
              <h3 className={`font-['Playfair_Display'] text-2xl font-bold mb-4 relative z-10 ${isRTL ? 'text-right' : ''}`}>{t('faq.stillHaveQuestions')}</h3>
              <p className={`text-white/70 mb-8 relative z-10 ${isRTL ? 'text-right' : ''}`}>
                {t('faq.cannotFind')}
              </p>
              
              <div className="space-y-4 relative z-10">
                <Button asChild className={`w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <a href="https://wa.me/447988559541" target="_blank" rel="noopener noreferrer" className={`flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <MessageCircle className="w-5 h-5" />
                    {t('faq.chatWhatsApp')}
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className={`w-full border-[#C5A059]/40 hover:bg-[#C5A059]/10 text-[#C5A059] hover:text-white flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse' : ''}`}
                  onClick={() => setShowCallForm(true)}
                >
                  <Calendar className="w-5 h-5" />
                  {t('faq.bookCall')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Book a Call Modal */}
      <AnimatePresence>
        {showCallForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 z-[100] flex items-center justify-center p-4"
            onClick={() => setShowCallForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#0F172A] p-6 flex items-center justify-between">
                <div>
                  <h3 className={`font-['Playfair_Display'] text-xl font-bold text-white ${isRTL ? 'text-right' : ''}`}>
                    {t('faq.bookCall')}
                  </h3>
                  <p className={`text-white/60 text-sm mt-1 font-['Outfit'] ${isRTL ? 'text-right' : ''}`}>
                    {t('faq.callFormSubtitle')}
                  </p>
                </div>
                <button onClick={() => setShowCallForm(false)} className="text-white/60 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                {callFormStatus === 'success' ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Calendar className="w-8 h-8 text-[#0D9488]" />
                    </div>
                    <h4 className="font-['Outfit'] font-bold text-lg text-[#0F172A] mb-2">{t('faq.callFormSuccess')}</h4>
                    <p className="text-[#0F172A]/60 font-['Outfit'] text-sm">{t('faq.callFormSuccessMsg')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleCallFormSubmit} className="space-y-4" dir={direction}>
                    {/* Name */}
                    <div>
                      <label className={`block text-sm font-['Outfit'] font-semibold text-[#0F172A] mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                        {t('faq.callFormName')}
                      </label>
                      <div className="relative">
                        <User className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#0F172A]/30 w-4 h-4`} />
                        <input
                          type="text"
                          required
                          value={callFormData.name}
                          onChange={(e) => setCallFormData({ ...callFormData, name: e.target.value })}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-[#0F172A]/10 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-all font-['Outfit'] text-sm`}
                          placeholder={t('faq.callFormNamePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className={`block text-sm font-['Outfit'] font-semibold text-[#0F172A] mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                        {t('faq.callFormEmail')}
                      </label>
                      <div className="relative">
                        <Mail className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#0F172A]/30 w-4 h-4`} />
                        <input
                          type="email"
                          required
                          value={callFormData.email}
                          onChange={(e) => setCallFormData({ ...callFormData, email: e.target.value })}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-[#0F172A]/10 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-all font-['Outfit'] text-sm`}
                          placeholder={t('faq.callFormEmailPlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className={`block text-sm font-['Outfit'] font-semibold text-[#0F172A] mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                        {t('faq.callFormPhone')}
                      </label>
                      <div className="relative">
                        <PhoneIcon className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#0F172A]/30 w-4 h-4`} />
                        <input
                          type="tel"
                          required
                          value={callFormData.phone}
                          onChange={(e) => setCallFormData({ ...callFormData, phone: e.target.value })}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-[#0F172A]/10 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-all font-['Outfit'] text-sm`}
                          placeholder={t('faq.callFormPhonePlaceholder')}
                        />
                      </div>
                    </div>

                    {/* Preferred Date */}
                    <div>
                      <label className={`block text-sm font-['Outfit'] font-semibold text-[#0F172A] mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                        {t('faq.callFormDate')}
                      </label>
                      <div className="relative">
                        <Calendar className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#0F172A]/30 w-4 h-4 pointer-events-none`} />
                        <input
                          type="date"
                          value={callFormData.preferredDate}
                          onChange={(e) => setCallFormData({ ...callFormData, preferredDate: e.target.value })}
                          min={new Date().toISOString().split('T')[0]}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-[#0F172A]/10 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-all font-['Outfit'] text-sm`}
                          placeholder={t('faq.callFormDatePlaceholder')}
                        />
                      </div>
                      <p className={`text-xs text-[#0F172A]/40 mt-1 font-['Outfit'] ${isRTL ? 'text-right' : ''}`}>{t('faq.callFormDateHint')}</p>
                    </div>

                    {/* Preferred Time */}
                    <div>
                      <label className={`block text-sm font-['Outfit'] font-semibold text-[#0F172A] mb-1.5 ${isRTL ? 'text-right' : ''}`}>
                        {t('faq.callFormTime')}
                      </label>
                      <div className="relative">
                        <Clock className={`absolute ${isRTL ? 'right-3' : 'left-3'} top-1/2 -translate-y-1/2 text-[#0F172A]/30 w-4 h-4`} />
                        <select
                          required
                          value={callFormData.preferredTime}
                          onChange={(e) => setCallFormData({ ...callFormData, preferredTime: e.target.value })}
                          className={`w-full ${isRTL ? 'pr-10 pl-4' : 'pl-10 pr-4'} py-3 rounded-lg border border-[#0F172A]/10 focus:border-[#0D9488] focus:ring-1 focus:ring-[#0D9488] transition-all font-['Outfit'] text-sm appearance-none bg-white`}
                        >
                          <option value="">{t('faq.callFormTimePlaceholder')}</option>
                          <option value="asap">{t('faq.callTimeASAP')}</option>
                          <option value="morning">{t('faq.callTimeMorning')}</option>
                          <option value="afternoon">{t('faq.callTimeAfternoon')}</option>
                          <option value="evening">{t('faq.callTimeEvening')}</option>
                        </select>
                      </div>
                    </div>

                    {callFormStatus === 'error' && (
                      <p className="text-red-500 text-sm font-['Outfit']">{t('faq.callFormError')}</p>
                    )}

                    <button
                      type="submit"
                      disabled={callFormStatus === 'submitting'}
                      className="w-full bg-[#0D9488] text-white py-3 rounded-lg font-['Outfit'] font-bold hover:bg-[#0F766E] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {callFormStatus === 'submitting' ? t('faq.callFormSubmitting') : t('faq.callFormSubmit')}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
