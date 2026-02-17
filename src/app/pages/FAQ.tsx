import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, ChevronDown, MessageCircle, Phone, Calendar } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';
const faqCategories = [
    t("faq.categories.general"),
    t("faq.categories.travel"),
    t("faq.categories.medical"),
    t("faq.categories.pricing"),
    t("faq.categories.aftercare")
  ];

const faqs = [
    {
      category: t("faq.categories.general"),
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      category: t("faq.categories.general"),
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      category: t("faq.categories.travel"),
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      category: t("faq.categories.travel"),
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      category: t("faq.categories.medical"),
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      category: t("faq.categories.pricing"),
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      category: t("faq.categories.pricing"),
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      category: t("faq.categories.aftercare"),
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
  ];

export function FAQ() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFAQs = faqs.filter(faq => {
    const matchesCategory = activeCategory === t("faq.categories.general") || faq.category === activeCategory;
    const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const { t, language, direction } = useLanguage();

  return (
    <div className="pt-20 bg-[#FAF6EF] min-h-screen">
      {/* Hero */}
      <section className="bg-white py-16 border-b border-[#0F1923]/10">
        <div className="container mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 mb-8"
          >
            Everything you need to know before your journey.
          </motion.p>

          <div className="max-w-xl mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[#0F1923]/40 w-5 h-5" />
            <input 
              type="text" 
              placeholder="Search for answers..." 
              className="w-full pl-12 pr-4 py-4 rounded-full border border-[#0F1923]/10 focus:outline-none focus:border-[#C5A059] focus:ring-1 focus:ring-[#C5A059] transition-all shadow-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">
        {/* Main Content */}
        <div className="flex-1">
          {/* Categories */}
          <div className="flex flex-wrap gap-2 mb-8">
            {faqCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setSearchQuery(""); }}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  activeCategory === cat 
                    ? 'bg-[#C5A059] text-white shadow-md' 
                    : 'bg-white text-[#0F1923]/60 hover:bg-[#0F1923]/5'
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
                className="bg-white rounded-xl shadow-sm border border-[#0F1923]/5 overflow-hidden"
              >
                <button 
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-[#FAF6EF]/50 transition-colors"
                >
                  <span className="font-['DM_Sans'] font-bold text-[#0F1923] text-lg pr-4">
                    {faq.question}
                  </span>
                  <motion.div
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ChevronDown className="w-5 h-5 text-[#C5A059]" />
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
                      <div className="px-6 pb-6 text-[#0F1923]/70 font-['DM_Sans'] leading-relaxed border-t border-[#0F1923]/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
            
            {filteredFAQs.length === 0 && (
              <div className="text-center py-12">
                <p className="text-[#0F1923]/50">No questions found matching your search.</p>
              </div>
            )}
          </div>
        </div>

        {/* Sidebar */}
        <div className="w-full lg:w-1/3">
          <div className="sticky top-24 space-y-6">
            <div className="bg-[#0F1923] text-white p-8 rounded-2xl shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C5A059] rounded-full filter blur-3xl opacity-20 -mr-10 -mt-10" />
              
              <h3 className="font-['Playfair_Display'] text-2xl font-bold mb-4 relative z-10">{t("faq.stillHaveQuestions")}</h3>
              <p className="text-white/70 mb-8 relative z-10">
                Can't find the answer you're looking for? Our team is available 24/7.
              </p>
              
              <div className="space-y-4 relative z-10">
                <Button className="w-full bg-[#25D366] hover:bg-[#128C7E] text-white flex items-center justify-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Button>
                <Button variant="outline" className="w-full border-white/20 hover:bg-white/10 text-white flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  +20 123 456 7890
                </Button>
                <Button asChild variant="ghost" className="w-full text-[#C5A059] hover:text-white hover:bg-white/5">
                  <Link to="/consultation" className="flex items-center justify-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Book a Free Call
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
