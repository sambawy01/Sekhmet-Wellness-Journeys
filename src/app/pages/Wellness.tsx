import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DentalCTA } from '../components/dental/DentalCTA';

const procedures = [
  {
    title: 'Hair Transplant (FUE/DHI)',
    description: 'Restore a full, natural hairline with Follicular Unit Extraction or Direct Hair Implantation — minimally invasive with permanent results.',
    image: 'https://images.unsplash.com/photo-1585747860019-6e5fc4525805?auto=format&fit=crop&q=80&w=800',
    price: 'From $1,500',
    tag: 'Most Popular',
  },
  {
    title: 'Weight Loss Surgery',
    description: 'Gastric sleeve, gastric bypass, and gastric balloon procedures performed by bariatric specialists in accredited hospitals.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=800',
    price: 'From $3,500',
  },
  {
    title: 'Spa & Recovery Packages',
    description: 'Combine your medical procedure with a luxurious Red Sea spa retreat. Therapeutic massages, mineral pools, and holistic wellness.',
    image: 'https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=800',
    price: 'From $500',
  },
  {
    title: 'Physiotherapy & Rehab',
    description: 'Post-surgical rehabilitation and sports injury recovery with experienced physiotherapists using the latest equipment.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    price: 'From $300',
  },
  {
    title: 'Anti-Aging Treatments',
    description: 'Non-surgical rejuvenation including PRP therapy, mesotherapy, dermal fillers, and Botox — look refreshed without going under the knife.',
    image: 'https://images.unsplash.com/photo-1515377905703-c4788e51af15?auto=format&fit=crop&q=80&w=800',
    price: 'From $400',
  },
];

export function Wellness() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1540555700478-4be289fbec6c?auto=format&fit=crop&q=80&w=1920"
            alt="Wellness and spa retreat"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#0F172A]/60" />
        </div>
        <div className="relative h-full container mx-auto px-6 flex flex-col justify-center text-white pt-20">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="flex items-center gap-2 text-sm mb-6 text-[#F9F6F0]/80 font-['Outfit']">
            <Link to="/" className="hover:text-[#C5A059] transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span>Treatments</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#C5A059]">Wellness</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight">
            Wellness <br /><span className="text-[#C5A059]">Renew Body & Mind</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-['Outfit'] text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed">
            From hair restoration to weight loss surgery and luxury spa recovery — invest in yourself with Egypt's finest wellness services.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-['Outfit'] text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                Free Wellness Consultation
              </button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-[#F0F7F4]">
        <div className="container mx-auto px-6 max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6">Your Wellness Journey in Egypt</h2>
              <p className="font-['Outfit'] text-[#5D5D5D] text-lg leading-relaxed mb-8">
                Egypt offers a unique combination of expert medical care, luxury hospitality, and natural healing environments — from Red Sea mineral-rich waters to world-class spa resorts.
              </p>
              <ul className="space-y-4">
                {['Top-rated hair transplant clinics in the MENA region', 'Bariatric surgery centres of excellence', 'Luxury Red Sea recovery resorts', 'Holistic wellness programs with medical oversight'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-['Outfit'] text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">10K+</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Hair Transplants</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">65%</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Cost Savings</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">4.9/5</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Patient Rating</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">Wellness Treatments</h2>
            <div className="w-24 h-1 bg-[#0D9488] mx-auto rounded-full" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {procedures.map((proc, i) => (
              <div key={i} className="group rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-300 bg-[#F0F7F4]">
                <div className="h-64 overflow-hidden relative">
                  <img src={proc.image} alt={proc.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  {proc.tag && <div className="absolute top-4 right-4 bg-[#0F172A] text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">{proc.tag}</div>}
                </div>
                <div className="p-8">
                  <h3 className="font-['Playfair_Display'] text-2xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0D9488] transition-colors">{proc.title}</h3>
                  <p className="font-['Outfit'] text-[#5D5D5D] mb-6 line-clamp-3">{proc.description}</p>
                  <div className="flex items-center justify-between border-t border-[#0F172A]/10 pt-6">
                    <span className="font-['Space_Mono'] font-bold text-[#14B8A6]">{proc.price}</span>
                    <Link to="/consultation" className="text-[#0D9488] text-sm font-bold uppercase tracking-wide group-hover:underline">Get Quote</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DentalCTA />
    </>
  );
}
