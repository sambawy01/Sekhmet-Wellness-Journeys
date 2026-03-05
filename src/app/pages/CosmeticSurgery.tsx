import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DentalCTA } from '../components/dental/DentalCTA';

const procedures = [
  {
    title: 'Rhinoplasty',
    description: 'Reshape and refine your nose for better harmony with your facial features. Egypt\'s top surgeons deliver natural-looking results.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=800',
    price: 'From $2,500',
    tag: 'Most Popular',
  },
  {
    title: 'Breast Augmentation',
    description: 'Enhance your figure with premium silicone or saline implants. Board-certified surgeons with decades of experience.',
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=800',
    price: 'From $3,000',
  },
  {
    title: 'Breast Reduction & Lift',
    description: 'Relieve discomfort and achieve a more proportionate silhouette with breast reduction and lifting procedures.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800',
    price: 'From $2,800',
  },
  {
    title: 'Liposuction',
    description: 'Remove stubborn fat deposits with advanced techniques including VASER and laser-assisted liposuction.',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800',
    price: 'From $2,000',
  },
  {
    title: 'Tummy Tuck',
    description: 'Flatten and tighten your abdomen by removing excess skin and fat. Ideal after weight loss or pregnancy.',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=800',
    price: 'From $3,200',
  },
  {
    title: 'Facelift',
    description: 'Turn back the clock with a surgical facelift that smooths wrinkles, tightens sagging skin, and restores youthful contours.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?auto=format&fit=crop&q=80&w=800',
    price: 'From $3,500',
  },
  {
    title: 'Eyelid Surgery',
    description: 'Blepharoplasty removes excess skin and fat from upper and lower eyelids for a refreshed, alert appearance.',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&q=80&w=800',
    price: 'From $1,500',
  },
  {
    title: 'Brazilian Butt Lift (BBL)',
    description: 'Enhance your curves naturally using your own fat transferred to the buttocks for a fuller, rounder shape.',
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&q=80&w=800',
    price: 'From $3,500',
  },
  {
    title: 'Mommy Makeover',
    description: 'A comprehensive combination of procedures — typically tummy tuck, breast lift, and liposuction — to restore your pre-pregnancy body.',
    image: 'https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?auto=format&fit=crop&q=80&w=800',
    price: 'From $5,000',
  },
];

export function CosmeticSurgery() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1920"
            alt="Modern cosmetic surgery clinic"
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
            <span className="text-[#C5A059]">Cosmetic Surgery</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight">
            Cosmetic Surgery <br /><span className="text-[#C5A059]">Confidence Redefined</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-['Outfit'] text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed">
            Board-certified plastic surgeons delivering natural, beautiful results in world-class Egyptian facilities — with luxury recovery built in.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-['Outfit'] text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                Free Cosmetic Consultation
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
              <h2 className="font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6">Why Choose Egypt for Cosmetic Surgery?</h2>
              <p className="font-['Outfit'] text-[#5D5D5D] text-lg leading-relaxed mb-8">
                Egypt's top plastic surgeons train internationally and perform thousands of procedures annually. Combined with significantly lower costs and luxury recovery options, it's the smart choice for cosmetic transformation.
              </p>
              <ul className="space-y-4">
                {['Board-certified surgeons with international training', 'Up to 60% savings vs. UK, US & Gulf prices', 'Private luxury recovery suites', 'Combine your procedure with a Red Sea retreat'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-['Outfit'] text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">5,000+</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Procedures/Year</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">60%</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Cost Savings</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">98%</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Patient Satisfaction</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">Cosmetic Procedures</h2>
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
