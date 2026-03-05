import React from 'react';
import { motion } from 'motion/react';
import { Shield, Users, Heart, Award, ArrowRight, Building, Globe, Smile } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { IconAnkh, IconEyeOfHorus, IconPyramid, IconLotus } from '../components/EgyptianIcons';

const getStats = (t: Function) => [
  { label: t('about.stats.patients'), value: t('about.stats.patientsValue'), icon: Users },
  { label: t('about.stats.hospitals'), value: t('about.stats.hospitalsValue'), icon: Building },
  { label: t('about.stats.countries'), value: t('about.stats.countriesValue'), icon: Globe },
  { label: t('about.stats.satisfaction'), value: t('about.stats.satisfactionValue'), icon: Smile },
];

const getValues = (t: Function) => [
  {
    title: t('about.values.transparency'),
    description: t('about.values.transparencyDesc'),
    icon: IconEyeOfHorus,
  },
  {
    title: t('about.values.care'),
    description: t('about.values.careDesc'),
    icon: Heart,
  },
  {
    title: t('about.values.excellence'),
    description: t('about.values.excellenceDesc'),
    icon: Shield,
  },
  {
    title: t('about.values.bridge'),
    description: t('about.values.bridgeDesc'),
    icon: IconAnkh,
  },
];

export const About = () => {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';
  const stats = getStats(t);
  const values = getValues(t);

  return (
    <div className={`min-h-screen bg-[#F0F7F4] ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1560159752-d6d7634ebd4c?auto=format&fit=crop&q=80&w=1600" 
          alt="Team of Doctors" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-playfair text-5xl md:text-7xl text-white mb-4"
          >
            {t('about.title')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-xl md:text-2xl text-[#C5A059] font-light tracking-wide"
          >
            {t('about.tagline')}
          </motion.p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className={`grid md:grid-cols-2 gap-16 items-center ${isRTL ? 'md:flex-row-reverse' : ''}`}>
          <div className={isRTL ? 'md:order-2' : ''}>
            <span className={`text-[#C5A059] font-bold tracking-widest uppercase text-sm mb-2 block ${isRTL ? 'text-right' : ''}`}>Our Mission</span>
            <h2 className={`font-playfair text-4xl text-[#0F172A] mb-6 leading-tight ${isRTL ? 'text-right' : ''}`}>
              {t('about.mission.title')}
            </h2>
            <p className={`text-[#3D3D3D] text-lg leading-relaxed mb-6 font-sans ${isRTL ? 'text-right' : ''}`}>
              {t('about.mission.text')}
            </p>
            <p className={`text-[#3D3D3D] text-lg leading-relaxed font-sans ${isRTL ? 'text-right' : ''}`}>
              {t('about.mission.text2')}
            </p>
          </div>
          <div className={`relative ${isRTL ? 'md:order-1' : ''}`}>
            <div className={`absolute -top-4 -left-4 w-24 h-24 bg-[#C5A059]/10 rounded-full z-0 ${isRTL ? 'left-auto -right-4' : ''}`} />
            <img 
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800" 
              alt="Doctor talking to patient" 
              className="relative z-10 rounded-2xl shadow-xl w-full"
            />
            <div className={`absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg z-20 max-w-xs hidden md:block border-l-4 border-[#C5A059] ${isRTL ? 'left-auto -left-6 border-l-0 border-r-4' : ''}`}>
              <p className={`font-playfair italic text-[#0F172A] ${isRTL ? 'text-right' : ''}`}>{t('about.quote')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className={`bg-white py-20 px-4 md:px-8 ${isRTL ? 'text-right' : ''}`}>
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className={`font-playfair text-4xl text-[#0F172A] mb-6 ${isRTL ? 'text-right' : ''}`}>{t('about.story.title')}</h2>
          <p className={`text-[#3D3D3D] text-lg leading-relaxed font-sans max-w-2xl mx-auto ${isRTL ? 'text-right' : ''}`}>
            {t('about.story.text')}
          </p>
        </div>
        
        <div className={`grid md:grid-cols-3 gap-8 max-w-6xl mx-auto ${isRTL ? 'text-right' : ''}`}>
           {[1, 2, 3].map((i) => (
             <div key={i} className="text-center group">
               <div className="w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-[#F0F7F4] group-hover:border-[#C5A059] transition-colors duration-300">
                 <img 
                   src={`https://images.unsplash.com/photo-${i === 1 ? '1537368910025-500b5933a75b' : i === 2 ? '1573496359142-b8d87734a5a2' : '1580489944761-15a19d654956'}?auto=format&fit=crop&q=80&w=400`} 
                   alt="Team Member" 
                   className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                 />
               </div>
               <h3 className={`font-playfair text-xl font-bold text-[#0F172A] mb-1 ${isRTL ? 'text-right' : ''}`}>
                 {i === 1 ? t('about.teamMember1') : i === 2 ? t('about.teamMember2') : t('about.teamMember3')}
               </h3>
               <p className={`text-[#C5A059] font-sans text-sm uppercase tracking-wide mb-2 ${isRTL ? 'text-right' : ''}`}>
                 {i === 1 ? t('about.teamRole1') : i === 2 ? t('about.teamRole2') : t('about.teamRole3')}
               </p>
             </div>
           ))}
        </div>
      </div>

      {/* Values */}
      <div className={`py-20 px-4 md:px-8 max-w-7xl mx-auto bg-[#F0F7F4] ${isRTL ? 'text-right' : ''}`}>
        <div className="text-center mb-16">
          <h2 className={`font-playfair text-4xl text-[#0F172A] mb-4 ${isRTL ? 'text-right' : ''}`}>{t('about.values.title')}</h2>
          <div className={`w-24 h-1 bg-[#C5A059] mx-auto rounded-full ${isRTL ? 'mr-auto ml-0' : ''}`} />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div 
              key={index}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm border-t-4 border-[#C5A059] hover:shadow-lg transition-all"
            >
              <div className={`w-14 h-14 bg-[#0F172A] rounded-full flex items-center justify-center text-[#C5A059] mb-6 mx-auto`}>
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className={`font-playfair text-xl font-bold text-[#0F172A] mb-3 text-center ${isRTL ? 'text-right' : ''}`}>{value.title}</h3>
              <p className={`text-gray-600 text-sm text-center font-sans leading-relaxed ${isRTL ? 'text-right' : ''}`}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats */}
      <div className="bg-[#0F172A] text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/arabesque.png')]" />
        <div className={`max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10 ${isRTL ? 'text-right' : ''}`}>
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-[#C5A059] font-playfair text-4xl md:text-5xl font-bold mb-2">
                {stat.value}
              </div>
              <div className={`text-gray-400 font-sans text-sm uppercase tracking-wider flex items-center justify-center gap-2 ${isRTL ? 'flex-row-reverse justify-center' : ''}`}>
                <stat.icon size={16} /> {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Partners & Certifications */}
      <div className={`py-20 px-4 md:px-8 max-w-7xl mx-auto text-center ${isRTL ? 'text-right' : ''}`}>
        <h2 className={`font-playfair text-3xl text-[#0F172A] mb-12 ${isRTL ? 'text-right' : ''}`}>{t('about.partners')}</h2>
        <div className={`flex flex-wrap justify-center items-center gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 ${isRTL ? 'justify-end' : ''}`}>
          {/* Mock Logos */}
          <div className={`flex items-center gap-2 text-xl font-bold text-[#0F172A] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Building size={32} /> {t('about.partners.ministry')}
          </div>
          <div className={`flex items-center gap-2 text-xl font-bold text-[#0F172A] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Shield size={32} /> {t('about.partners.jci')}
          </div>
          <div className={`flex items-center gap-2 text-xl font-bold text-[#0F172A] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Globe size={32} /> {t('about.partners.tourism')}
          </div>
          <div className={`flex items-center gap-2 text-xl font-bold text-[#0F172A] ${isRTL ? 'flex-row-reverse' : ''}`}>
            <Award size={32} /> {t('about.partners.award')}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className={`bg-[#C5A059] py-20 px-4 text-center ${isRTL ? 'text-right' : ''}`}>
        <h2 className={`font-playfair text-4xl text-white mb-6 ${isRTL ? 'text-right' : ''}`}>{t('about.careers.title')}</h2>
        <p className={`text-white/90 text-lg mb-8 max-w-2xl mx-auto font-sans ${isRTL ? 'text-right' : ''}`}>
          {t('about.careers.text')}
        </p>
        <button className="bg-white text-[#C5A059] font-bold py-3 px-8 rounded-lg hover:bg-[#0F172A] hover:text-white transition-colors shadow-lg">
          {t('about.careers.button')}
        </button>
      </div>
    </div>
  );
};
