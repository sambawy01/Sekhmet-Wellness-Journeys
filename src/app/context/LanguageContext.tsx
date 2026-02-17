import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'ar' | 'fr';
type Direction = 'ltr' | 'rtl';

interface LanguageContextType {
  language: Language;
  direction: Direction;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    "nav.treatments": "Treatments",
    "nav.howItWorks": "How It Works",
    "nav.doctors": "Doctors",
    "nav.stories": "Stories",
    "nav.travelGuide": "Travel Guide",
    "nav.faq": "FAQ",
    "nav.freeConsultation": "Free Consultation",
    "hero.title": "Save Up to 85%",
    "hero.subtitle": "on World-Class Medical Care",
    "hero.cta.primary": "Get Free Quote",
    "hero.cta.secondary": "View Treatments",
    "hero.trust": "JCI Accredited Hospitals",
    // Add more as needed for the specific RTL demo
  },
  ar: {
    "nav.treatments": "العلاجات",
    "nav.howItWorks": "كيف نعمل",
    "nav.doctors": "الأطباء",
    "nav.stories": "قصص النجاح",
    "nav.travelGuide": "دليل السفر",
    "nav.faq": "الأسئلة الشائعة",
    "nav.freeConsultation": "استشارة مجانية",
    "hero.title": "وفّر حتى 85%",
    "hero.subtitle": "على رعاية طبية عالمية",
    "hero.cta.primary": "احصل على عرض سعر",
    "hero.cta.secondary": "عرض العلاجات",
    "hero.trust": "مستشفيات معتمدة دولياً",
  },
  fr: {
    "nav.treatments": "Traitements",
    "nav.howItWorks": "Comment ça marche",
    "nav.doctors": "Médecins",
    "nav.stories": "Témoignages",
    "nav.travelGuide": "Guide de Voyage",
    "nav.faq": "FAQ",
    "nav.freeConsultation": "Consultation Gratuite",
    "hero.title": "Économisez jusqu'à 85%",
    "hero.subtitle": "sur des soins médicaux de classe mondiale",
    "hero.cta.primary": "Devis Gratuit",
    "hero.cta.secondary": "Voir les Traitements",
    "hero.trust": "Hôpitaux Accrédités JCI",
  }
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');
  const [direction, setDirection] = useState<Direction>('ltr');

  useEffect(() => {
    const newDir = language === 'ar' ? 'rtl' : 'ltr';
    setDirection(newDir);
    document.documentElement.dir = newDir;
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, direction, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
