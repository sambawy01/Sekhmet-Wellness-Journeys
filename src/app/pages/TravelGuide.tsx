import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plane, Sun, CloudSun, Moon, ShieldCheck, Phone, Check, ArrowRight, Download, Luggage, Building, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

const weatherData = [
  { name: 'Jan', temp: 19 },
  { name: 'Feb', temp: 20 },
  { name: 'Mar', temp: 24 },
  { name: 'Apr', temp: 28 },
  { name: 'May', temp: 32 },
  { name: 'Jun', temp: 34 },
  { name: 'Jul', temp: 35 },
  { name: 'Aug', temp: 34 },
  { name: 'Sep', temp: 32 },
  { name: 'Oct', temp: 29 },
  { name: 'Nov', temp: 24 },
  { name: 'Dec', temp: 20 },
];

export function TravelGuide() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const visaRequirements = [
    t('travel.visaReq1'),
    t('travel.visaReq2'),
    t('travel.visaReq3'),
    t('travel.visaReq4'),
  ];

  const medicalEssentials = [
    t('travel.medical1'),
    t('travel.medical2'),
    t('travel.medical3'),
    t('travel.medical4'),
  ];

  const documents = [
    t('travel.doc1'),
    t('travel.doc2'),
    t('travel.doc3'),
    t('travel.doc4'),
  ];

  const weatherSeasons = [
    { icon: Sun, titleKey: 'travel.summer', descKey: 'travel.summerDesc' },
    { icon: CloudSun, titleKey: 'travel.springAutumn', descKey: 'travel.springAutumnDesc' },
    { icon: Moon, titleKey: 'travel.winter', descKey: 'travel.winterDesc' },
  ];

  const arrivalSteps = [
    { titleKey: 'travel.airportPickup', descKey: 'travel.airportPickupDesc' },
    { titleKey: 'travel.hotelTransfer', descKey: 'travel.hotelTransferDesc' },
    { titleKey: 'travel.checkIn', descKey: 'travel.checkInDesc' },
    { titleKey: 'travel.welcomeMeeting', descKey: 'travel.welcomeMeetingDesc' },
  ];

  const emergencyContacts = [
    { labelKey: 'travel.ambulance', number: '123' },
    { labelKey: 'travel.touristPolice', number: '126' },
    { labelKey: 'travel.emergencyGeneral', number: '112' },
  ];

  return (
    <div className={cn("pt-20 bg-[#F0F7F4] min-h-screen", isRTL && "rtl")}>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547116738-ebd9bcf7f2c2?auto=format&fit=crop&q=80&w=1920" 
            alt="Airplane view over Egypt" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F0F7F4] via-transparent to-transparent" />
        </div>

        <div className={cn("relative z-10 text-center px-6", isRTL && "text-right")}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-[#C5A059] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              {t('travel.heroLabel')}
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              {t('travel.heroTitle')}
            </h1>
            <p className="font-['Outfit'] text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              {t('travel.heroSubtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation / Download */}
      <section className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div className={cn("bg-white p-8 rounded-2xl shadow-xl border border-[#0F172A]/5 flex flex-col md:flex-row items-center justify-between gap-6", isRTL && "flex-row-reverse text-right")}>
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A]">{t('travel.downloadTitle')}</h3>
            <p className="text-[#0F172A]/60">{t('travel.downloadDesc')}</p>
          </div>
          <a href="/Sekhmet-Egypt-Travel-Wellness-Guide.pdf" download>
            <Button className={cn("bg-[#0F172A] hover:bg-[#C5A059] text-white px-8 py-6 rounded-full text-lg transition-all flex items-center gap-2", isRTL && "flex-row-reverse")}>
              <Download className="w-5 h-5" />
              {t('travel.downloadButton')}
            </Button>
          </a>
        </div>
      </section>

      <div className={cn("container mx-auto px-6 pb-24 space-y-24", isRTL && "text-right")}>
        {/* Visa Information */}
        <section className={cn("grid grid-cols-1 md:grid-cols-2 gap-12 items-center", isRTL && "md:grid-cols-2 md:auto-cols-fr md:[direction:rtl]")}>
          <div className={isRTL ? "md:order-2" : ""}>
            <div className="bg-[#C5A059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-6">
              {t('travel.visaTitle')}
            </h2>
            <p className="text-[#0F172A]/70 mb-6 text-lg leading-relaxed">
              {t('travel.visaDescription')}
            </p>
            <div className="bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-xl p-5 mb-6">
              <h4 className={cn("font-bold text-[#C5A059] mb-2 flex items-center gap-2", isRTL && "flex-row-reverse")}>
                <ArrowRight className="w-4 h-4" />
                {t('travel.visaCountriesTitle')}
              </h4>
              <p className="text-[#0F172A]/70 text-sm leading-relaxed">
                {t('travel.visaCountriesDesc')}
              </p>
            </div>
            <ul className={cn("space-y-4", isRTL && "text-right")}>
              {visaRequirements.map((item, i) => (
                <li key={i} className={cn("flex items-start gap-3", isRTL && "flex-row-reverse")}>
                  <Check className="w-5 h-5 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-[#0F172A] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className={cn("space-y-6", isRTL ? "md:order-1" : "")}>
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#0F172A]/5 rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="border-2 border-dashed border-[#C5A059]/30 rounded-xl p-6">
                <h3 className="font-bold text-xl mb-1 text-[#C5A059]">{t('travel.evisa')}</h3>
                <p className="text-[#0F172A]/50 text-sm mb-4">{t('travel.evisaSubtitle')}</p>
                <ol className={cn("space-y-3 list-decimal list-inside text-[#0F172A]/70", isRTL && "list-none")}>
                  <li>{t('travel.evisaStep1')}</li>
                  <li>{t('travel.evisaStep2')}</li>
                  <li>{t('travel.evisaStep3')}</li>
                  <li>{t('travel.evisaStep4')}</li>
                  <li>{t('travel.evisaStep5')}</li>
                </ol>
              </div>
            </div>
            <div className={cn("bg-[#0F172A] p-6 rounded-2xl text-white -rotate-1 hover:rotate-0 transition-transform duration-500", isRTL && "text-right")}>
              <h3 className="font-bold text-lg mb-2">{t('travel.atAirport')}</h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {t('travel.atAirportDesc')}
              </p>
            </div>
          </div>
        </section>

        {/* Packing List */}
        <section className={cn("bg-white rounded-3xl p-12 shadow-sm border border-[#0F172A]/5", isRTL && "text-right")}>
          <div className={cn("flex flex-col md:flex-row gap-12", isRTL && "flex-row-reverse")}>
            <div className="md:w-1/3">
              <div className="bg-[#C5A059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Luggage className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-4">
                {t('travel.packingTitle')}
              </h2>
              <p className="text-[#0F172A]/60">
                {t('travel.packingDesc')}
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#C5A059]">{t('travel.medicalEssentialsTitle')}</h3>
                <ul className={cn("space-y-3", isRTL && "text-right")}>
                  {medicalEssentials.map((item, i) => (
                    <li key={i} className={cn("flex items-center gap-2", isRTL && "flex-row-reverse justify-end")}>
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#C5A059]">{t('travel.documentsTitle')}</h3>
                <ul className={cn("space-y-3", isRTL && "text-right")}>
                  {documents.map((item, i) => (
                    <li key={i} className={cn("flex items-center gap-2", isRTL && "flex-row-reverse justify-end")}>
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Guide */}
        <section className={isRTL ? "text-right" : ""}>
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-4">
              {t('travel.weatherTitle')}
            </h2>
            <p className="text-[#0F172A]/60 max-w-2xl mx-auto">
              {t('travel.weatherDesc')}
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#0F172A]/5 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                <XAxis dataKey="name" stroke="#0F172A" tick={{ fill: '#0F172A', opacity: 0.5 }} tickLine={false} axisLine={false} />
                <YAxis stroke="#0F172A" tick={{ fill: '#0F172A', opacity: 0.5 }} tickLine={false} axisLine={false} unit="°C" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F172A', border: 'none', borderRadius: '8px', color: 'white' }}
                  itemStyle={{ color: '#C5A059' }}
                />
                <Line 
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#C5A059" 
                  strokeWidth={4} 
                  dot={{ r: 4, fill: '#C5A059', strokeWidth: 2, stroke: '#fff' }} 
                  activeDot={{ r: 8 }} 
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
             {weatherSeasons.map((season, idx) => {
               const IconComponent = season.icon;
               return (
                 <div key={idx} className={cn("bg-white p-6 rounded-xl text-center", isRTL && "text-right")}>
                   <IconComponent className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
                   <h4 className="font-bold mb-2">{t(season.titleKey)}</h4>
                   <p className="text-sm text-[#0F172A]/60">{t(season.descKey)}</p>
                 </div>
               );
             })}
          </div>
        </section>

        {/* Arrival Guide */}
        <section className={cn("bg-[#0F172A] text-white rounded-3xl p-12 overflow-hidden relative", isRTL && "text-right")}>
          <div className="relative z-10">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-12 text-center">
              {t('travel.arrivalTitle')}
            </h2>
            
            <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-8", isRTL && "md:grid-cols-4")}>
              {arrivalSteps.map((step, i) => (
                <div key={i} className={cn("relative", isRTL && "text-right")}>
                  <div className={cn("text-6xl font-['Playfair_Display'] font-bold text-[#C5A059]/20 absolute -top-8 -left-4", isRTL && "-top-8 -right-4 -left-auto")}>
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 relative z-10 text-[#C5A059]">{t(step.titleKey)}</h3>
                  <p className="text-white/70 relative z-10 text-sm leading-relaxed">{t(step.descKey)}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className={cn("grid grid-cols-1 md:grid-cols-2 gap-8", isRTL && "md:grid-cols-2")}>
          <div className={cn("bg-white p-8 rounded-2xl border-l-4 border-[#C5A059] shadow-sm", isRTL && "border-l-0 border-r-4 text-right")}>
            <h3 className={cn("font-bold text-xl mb-6 flex items-center gap-3", isRTL && "flex-row-reverse justify-end")}>
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              {t('travel.emergencyTitle')}
            </h3>
            <div className="space-y-4">
              {emergencyContacts.map((contact, idx) => (
                <div key={idx} className={cn("flex justify-between items-center border-b border-[#0F172A]/10 pb-2", isRTL && "flex-row-reverse")}>
                  <span className="text-[#0F172A]/70">{t(contact.labelKey)}</span>
                  <span className="font-mono font-bold text-[#0F172A]">{contact.number}</span>
                </div>
              ))}
            </div>
          </div>

          <div className={cn("bg-[#14B8A6] p-8 rounded-2xl text-white shadow-lg flex flex-col justify-center", isRTL && "text-right")}>
            <h3 className={cn("font-bold text-xl mb-4 flex items-center gap-3", isRTL && "flex-row-reverse justify-end")}>
              <Phone className="w-6 h-6" />
              {t('travel.hotlineTitle')}
            </h3>
            <p className="text-white/80 mb-6">
              {t('travel.hotlineDesc')}
            </p>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <span className="font-mono text-2xl font-bold tracking-wider">+44 798 855 9541</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
