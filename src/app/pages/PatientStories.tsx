import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play, Star, Quote, CheckCircle, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';

// Mock Data
const stories = [
  {
    id: 1,
    type: 'video',
    name: 'Sarah Jenkins',
    origin: 'UK',
    treatment: 'Dental',
    quote: "I saved over £5,000 on my veneers and had a holiday!",
    image: "https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=800",
    videoUrl: "#",
    flag: "🇬🇧"
  },
  {
    id: 2,
    type: 'written',
    name: 'Ahmed Al-Fayed',
    origin: 'Gulf',
    treatment: 'Vision',
    quote: "The LASIK procedure was painless and the recovery at the resort was amazing.",
    image: "https://images.unsplash.com/photo-1632054227742-67e0e23595b0?auto=format&fit=crop&q=80&w=800",
    flag: "🇦🇪"
  },
  {
    id: 3,
    type: 'written',
    name: 'Elena Rossi',
    origin: 'Europe',
    treatment: 'Cosmetic',
    quote: "Professional surgeons who really care. Highly recommended.",
    image: "https://images.unsplash.com/photo-1646369506164-f8f24d4d6d81?auto=format&fit=crop&q=80&w=800",
    flag: "🇮🇹"
  },
  {
    id: 4,
    type: 'video',
    name: 'Michael & Jane',
    origin: 'UK',
    treatment: 'IVF',
    quote: "Our dream came true thanks to the incredible team in Cairo.",
    image: "https://images.unsplash.com/photo-1709823150602-c93efd6d33cf?auto=format&fit=crop&q=80&w=800",
    videoUrl: "#",
    flag: "🇬🇧"
  },
  {
    id: 5,
    type: 'written',
    name: 'David Chen',
    origin: 'USA',
    treatment: 'Dental',
    quote: "World-class implants at a fraction of the cost.",
    image: "https://images.unsplash.com/photo-1653508310729-7d6d2e2fd6c9?auto=format&fit=crop&q=80&w=800",
    flag: "🇺🇸"
  },
  {
    id: 6,
    type: 'video',
    name: 'Sophie Martin',
    origin: 'Europe',
    treatment: 'Cosmetic',
    quote: "The hospital facilities were better than what I've seen in France.",
    image: "https://images.unsplash.com/photo-1586276872491-ebe740d830f0?auto=format&fit=crop&q=80&w=800",
    videoUrl: "#",
    flag: "🇫🇷"
  },
];

const treatments = ["All", "Dental", "Vision", "Cosmetic", "Checkups", "IVF"];
const origins = ["All", "UK", "Gulf", "Europe", "Africa", "USA"];

export function PatientStories() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const [activeTreatment, setActiveTreatment] = useState("All");
  const [activeOrigin, setActiveOrigin] = useState("All");

  const filteredStories = stories.filter(story => {
    const matchTreatment = activeTreatment === "All" || story.treatment === activeTreatment;
    const matchOrigin = activeOrigin === "All" || story.origin === activeOrigin || (activeOrigin === "USA" && story.origin === "USA");
    return matchTreatment && matchOrigin;
  });

  return (
    <div className={`pt-20 bg-[#F0F7F4] min-h-screen ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      {/* Hero Section */}
      <section className="relative h-[500px] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1586276872491-ebe740d830f0?auto=format&fit=crop&q=80&w=1920" 
            alt="Diverse patients collage" 
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-[#0F172A]/70" />
        </div>
        
        <div className={`relative z-10 text-center px-6 ${isRTL ? 'text-right' : ''}`}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-heading text-5xl md:text-6xl font-bold text-white mb-6"
          >
            {t('patientStories.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-sans text-xl text-white/90 max-w-2xl mx-auto"
          >
            {t('patientStories.subtitle')}
          </motion.p>
        </div>
      </section>

      {/* Featured Story */}
      <section className={`container mx-auto px-6 -mt-20 relative z-20 mb-20 ${isRTL ? 'text-right' : ''}`}>
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className={`bg-white rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row h-auto md:h-[500px] ${isRTL ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="md:w-2/3 relative group cursor-pointer">
            <img 
              src="https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=1200" 
              alt="Featured Patient" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border-2 border-white/50 group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-white fill-white ml-1" />
              </div>
            </div>
            <div className={`absolute top-6 left-6 bg-[#C5A059] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider ${isRTL ? 'left-auto right-6' : ''}`}>
              {t('patientStories.featured')}
            </div>
          </div>
          <div className={`md:w-1/3 p-8 md:p-12 flex flex-col justify-center bg-white ${isRTL ? 'text-right' : ''}`}>
            <div className={`flex items-center gap-2 mb-4 text-[#C5A059] ${isRTL ? 'justify-end' : ''}`}>
              {[1,2,3,4,5].map(i => <Star key={i} className="w-5 h-5 fill-current" />)}
            </div>
            <Quote className={`w-10 h-10 text-[#C5A059]/20 mb-4 ${isRTL ? 'ml-auto' : ''}`} />
            <h3 className={`font-heading text-3xl font-bold text-[#0F172A] mb-4 ${isRTL ? 'text-right' : ''}`}>
              "I never thought dental work could feel like a vacation."
            </h3>
            <p className={`font-sans text-[#0F172A]/60 mb-8 leading-relaxed ${isRTL ? 'text-right' : ''}`}>
              Sarah flew from London for a full smile makeover. Watch her journey from arrival to the final reveal.
            </p>
            <div className={`mt-auto flex items-center gap-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
              <div className={isRTL ? 'text-right' : ''}>
                <p className="font-bold text-[#0F172A] text-lg">Sarah Jenkins</p>
                <div className={`flex items-center gap-2 text-sm text-[#0F172A]/50 ${isRTL ? 'flex-row-reverse justify-end' : ''}`}>
                  <span>🇬🇧 United Kingdom</span>
                  <span>•</span>
                  <span>Dental Implants</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Filter Bar */}
      <section className="container mx-auto px-6 mb-12">
        <div className={`flex flex-col md:flex-row justify-between items-center gap-6 bg-white p-6 rounded-xl shadow-sm border border-[#0F172A]/5 ${isRTL ? 'flex-col-reverse' : ''}`}>
          <div className={`flex flex-wrap gap-2 justify-center ${isRTL ? 'justify-end' : ''}`}>
            <span className={`text-[#0F172A]/40 text-sm font-bold mr-2 uppercase tracking-wide py-2 ${isRTL ? 'order-2' : ''}`}>{t('patientStories.treatment')}:</span>
            {treatments.map(t => (
              <button
                key={t}
                onClick={() => setActiveTreatment(t)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTreatment === t 
                    ? 'bg-[#0F172A] text-white' 
                    : 'bg-[#F0F7F4] text-[#0F172A]/60 hover:bg-[#C5A059]/10 hover:text-[#C5A059]'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className={`w-px h-10 bg-[#0F172A]/10 hidden md:block ${isRTL ? 'order-3' : ''}`} />
          <div className={`flex flex-wrap gap-2 justify-center ${isRTL ? 'justify-end order-1' : ''}`}>
            <span className={`text-[#0F172A]/40 text-sm font-bold mr-2 uppercase tracking-wide py-2`}>{t('patientStories.region')}:</span>
            {origins.map(o => (
              <button
                key={o}
                onClick={() => setActiveOrigin(o)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeOrigin === o 
                    ? 'bg-[#C5A059] text-white' 
                    : 'bg-[#F0F7F4] text-[#0F172A]/60 hover:bg-[#C5A059]/10 hover:text-[#C5A059]'
                }`}
              >
                {o}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid with Tailwind Columns */}
      <section className="container mx-auto px-6 pb-24">
        <div className={`columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 ${isRTL ? 'text-right' : ''}`}>
          {filteredStories.map((story) => (
            <motion.div 
              key={story.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group break-inside-avoid mb-6"
            >
              {/* Card Image/Thumbnail */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img 
                  src={story.image} 
                  alt={story.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {story.type === 'video' && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/30 transition-colors">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/50">
                      <Play className="w-5 h-5 text-white fill-white ml-0.5" />
                    </div>
                  </div>
                )}

                <div className={`absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-bold text-[#0F172A] flex items-center gap-1 ${isRTL ? 'left-4 right-auto' : ''}`}>
                  <CheckCircle className="w-3 h-3 text-[#C5A059]" /> Verified
                </div>
              </div>

              {/* Card Content */}
              <div className={`p-6 ${isRTL ? 'text-right' : ''}`}>
                <div className={`flex items-center gap-1 mb-3 text-[#C5A059] ${isRTL ? 'justify-end' : ''}`}>
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-current" />)}
                </div>
                
                <blockquote className={`font-heading text-lg font-bold text-[#0F172A] mb-4 leading-tight ${isRTL ? 'text-right' : ''}`}>
                  "{story.quote}"
                </blockquote>
                
                <div className={`flex items-center justify-between border-t border-[#0F172A]/10 pt-4 ${isRTL ? 'flex-row-reverse' : ''}`}>
                  <div className={`flex items-center gap-3 ${isRTL ? 'flex-row-reverse' : ''}`}>
                    <div className={isRTL ? 'text-right' : ''}>
                      <span className="font-bold text-sm text-[#0F172A]">{story.name} {story.flag}</span>
                      <span className="text-xs text-[#0F172A]/50 block">{story.treatment}</span>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className={`text-[#C5A059] hover:text-[#B08D55] hover:bg-[#F0F7F4] p-0 h-auto font-bold text-sm ${isRTL ? 'flex-row-reverse' : ''}`}>
                    {story.type === 'video' ? t('patientStories.watchStory') : t('patientStories.readStory')} →
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredStories.length === 0 && (
          <div className={`text-center py-20 ${isRTL ? 'text-right' : ''}`}>
            <h3 className={`text-2xl font-heading text-[#0F172A] mb-2 ${isRTL ? 'text-right' : ''}`}>{t('patientStories.noStories')}</h3>
            <p className={`text-[#0F172A]/60 ${isRTL ? 'text-right' : ''}`}>{t('patientStories.adjustFilters')}</p>
          </div>
        )}
        
        <div className="text-center mt-16">
          <Button variant="outline" className="border-[#0F172A]/20 hover:bg-[#0F172A] hover:text-white px-8 py-6 rounded-full text-lg transition-all">
            {t('patientStories.loadMore')}
          </Button>
        </div>
      </section>
    </div>
  );
}
