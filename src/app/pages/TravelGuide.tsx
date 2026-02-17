import React from 'react';
import { motion } from 'motion/react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Plane, Sun, CloudSun, Moon, ShieldCheck, Phone, Check, ArrowRight, Download, Luggage, Building, Globe } from 'lucide-react';
import { Button } from '../components/ui/button';

import { useLanguage } from '../context/LanguageContext';
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
  const { t, language, direction } = useLanguage();

  return (
    <div className="pt-20 bg-[#FAF6EF] min-h-screen">
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1547116738-ebd9bcf7f2c2?auto=format&fit=crop&q=80&w=1920" 
            alt="Airplane view over Egypt" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F1923]/40 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6EF] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto"
          >
            <div className="inline-block bg-[#C5A059] text-white px-4 py-1 rounded-full text-sm font-bold uppercase tracking-wider mb-6">
              Official Patient Handbook
            </div>
            <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-bold text-white mb-6 drop-shadow-lg">
              Your Travel Guide
            </h1>
            <p className="font-['DM_Sans'] text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md">
              Everything you need to prepare for a seamless medical journey to Egypt.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation / Download */}
      <section className="container mx-auto px-6 -mt-16 relative z-20 mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#0F1923]/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F1923]">Download the Full Guide</h3>
            <p className="text-[#0F1923]/60">Get our comprehensive 40-page PDF with detailed checklists.</p>
          </div>
          <Button className="bg-[#0F1923] hover:bg-[#C5A059] text-white px-8 py-6 rounded-full text-lg transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            Download PDF Guide
          </Button>
        </div>
      </section>

      <div className="container mx-auto px-6 pb-24 space-y-24">
        {/* Visa Information */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-[#C5A059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Globe className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-6">
              Visa Information
            </h2>
            <p className="text-[#0F1923]/70 mb-8 text-lg leading-relaxed">
              Most medical tourists can obtain an e-visa before travel or a visa on arrival. For specific treatments requiring longer stays, we assist with medical entry visas.
            </p>
            <ul className="space-y-4">
              {[
                "Passport valid for at least 6 months",
                "Printed e-Visa or cash for Visa on Arrival ($25 USD)",
                "Medical invitation letter (provided by Sekhmet)",
                "Proof of accommodation (provided by Sekhmet)"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-[#C5A059] mt-1 flex-shrink-0" />
                  <span className="text-[#0F1923] font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#0F1923]/5 rotate-2 hover:rotate-0 transition-transform duration-500">
            <div className="border-2 border-dashed border-[#0F1923]/10 rounded-xl p-6">
              <h3 className="font-bold text-xl mb-4 text-[#0F1923]">E-Visa Application Steps</h3>
              <ol className="space-y-4 list-decimal list-inside text-[#0F1923]/70">
                <li>Visit visa2egypt.gov.eg</li>
                <li>Create an account and fill the application</li>
                <li>Upload passport bio page</li>
                <li>Pay the fee online</li>
                <li>Receive e-Visa via email (usually within 7 days)</li>
              </ol>
            </div>
          </div>
        </section>

        {/* Packing List */}
        <section className="bg-white rounded-3xl p-12 shadow-sm border border-[#0F1923]/5">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3">
              <div className="bg-[#C5A059]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Luggage className="w-8 h-8 text-[#C5A059]" />
              </div>
              <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-4">
                What to Pack
              </h2>
              <p className="text-[#0F1923]/60">
                Besides your usual travel essentials, don't forget these important items for your medical trip.
              </p>
            </div>
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#C5A059]">Medical Essentials</h3>
                <ul className="space-y-3">
                  {["All current medical records", "List of current medications", "Comfortable loose clothing", "Slip-on shoes for easy removal"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#0F1923]/80">
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-bold text-lg mb-4 text-[#C5A059]">Documents</h3>
                <ul className="space-y-3">
                  {["Passport & Visa copies", "Flight tickets", "Insurance policy number", "Emergency contact list"].map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-[#0F1923]/80">
                      <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Weather Guide */}
        <section>
          <div className="text-center mb-12">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-4">
              Weather Guide
            </h2>
            <p className="text-[#0F1923]/60 max-w-2xl mx-auto">
              Egypt enjoys a sunny climate year-round. Use this chart to plan your wardrobe.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#0F1923]/5 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={weatherData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#eee" vertical={false} />
                <XAxis dataKey="name" stroke="#0F1923" tick={{ fill: '#0F1923', opacity: 0.5 }} tickLine={false} axisLine={false} />
                <YAxis stroke="#0F1923" tick={{ fill: '#0F1923', opacity: 0.5 }} tickLine={false} axisLine={false} unit="°C" />
                <Tooltip 
                  contentStyle={{ backgroundColor: '#0F1923', border: 'none', borderRadius: '8px', color: 'white' }}
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
             <div className="bg-white p-6 rounded-xl text-center">
               <Sun className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
               <h4 className="font-bold mb-2">Summer (Jun-Aug)</h4>
               <p className="text-sm text-[#0F1923]/60">Hot & Dry. Pack light cottons, sunscreen, and hats.</p>
             </div>
             <div className="bg-white p-6 rounded-xl text-center">
               <CloudSun className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
               <h4 className="font-bold mb-2">Spring/Autumn</h4>
               <p className="text-sm text-[#0F1923]/60">Perfect weather. Light layers for evenings.</p>
             </div>
             <div className="bg-white p-6 rounded-xl text-center">
               <Moon className="w-8 h-8 text-[#C5A059] mx-auto mb-3" />
               <h4 className="font-bold mb-2">Winter (Dec-Feb)</h4>
               <p className="text-sm text-[#0F1923]/60">Mild days, cool nights. Bring a jacket.</p>
             </div>
          </div>
        </section>

        {/* Arrival Guide */}
        <section className="bg-[#0F1923] text-white rounded-3xl p-12 overflow-hidden relative">
          <div className="relative z-10">
            <h2 className="font-['Playfair_Display'] text-4xl font-bold mb-12 text-center">
              What to Expect on Arrival
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                { title: "Airport Pickup", desc: "Our chauffeur greets you at the gate with a name sign." },
                { title: "Hotel Transfer", desc: "Relax in a luxury vehicle on your way to the hotel." },
                { title: "Check-in", desc: "VIP check-in assistance at your 5-star accommodation." },
                { title: "Welcome Meeting", desc: "Meet your personal coordinator to review your schedule." }
              ].map((step, i) => (
                <div key={i} className="relative">
                  <div className="text-6xl font-['Playfair_Display'] font-bold text-[#C5A059]/20 absolute -top-8 -left-4">
                    {i + 1}
                  </div>
                  <h3 className="text-xl font-bold mb-2 relative z-10 text-[#C5A059]">{step.title}</h3>
                  <p className="text-white/70 relative z-10 text-sm leading-relaxed">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Emergency Contacts */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border-l-4 border-[#C5A059] shadow-sm">
            <h3 className="font-bold text-xl mb-6 flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
              Emergency Numbers
            </h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-[#0F1923]/10 pb-2">
                <span className="text-[#0F1923]/70">Ambulance</span>
                <span className="font-mono font-bold text-[#0F1923]">123</span>
              </div>
              <div className="flex justify-between items-center border-b border-[#0F1923]/10 pb-2">
                <span className="text-[#0F1923]/70">Tourist Police</span>
                <span className="font-mono font-bold text-[#0F1923]">126</span>
              </div>
              <div className="flex justify-between items-center pb-2">
                <span className="text-[#0F1923]/70">General Emergency</span>
                <span className="font-mono font-bold text-[#0F1923]">112</span>
              </div>
            </div>
          </div>

          <div className="bg-[#1B7A6E] p-8 rounded-2xl text-white shadow-lg flex flex-col justify-center">
            <h3 className="font-bold text-xl mb-4 flex items-center gap-3">
              <Phone className="w-6 h-6" />
              Sekhmet 24/7 Hotline
            </h3>
            <p className="text-white/80 mb-6">
              Your personal coordinator is available around the clock for any medical or travel emergencies.
            </p>
            <div className="bg-white/10 p-4 rounded-xl text-center">
              <span className="font-mono text-2xl font-bold tracking-wider">+20 100 888 9999</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
