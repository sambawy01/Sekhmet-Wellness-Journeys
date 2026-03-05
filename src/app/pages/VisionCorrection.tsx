import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { DentalCTA } from '../components/dental/DentalCTA';

const procedures = [
  {
    title: 'LASIK Eye Surgery',
    description: 'Reshape your cornea with a precision laser for clear, glasses-free vision. Quick recovery and life-changing results.',
    image: 'https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=800',
    price: 'From $800',
    tag: 'Most Popular',
  },
  {
    title: 'PRK / LASEK',
    description: 'Surface-based laser correction ideal for patients with thin corneas. A proven alternative to LASIK with excellent outcomes.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    price: 'From $700',
  },
  {
    title: 'Cataract Surgery',
    description: 'Remove clouded lenses and replace them with premium intraocular lenses for restored clarity and colour vision.',
    image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&q=80&w=800',
    price: 'From $1,200',
  },
  {
    title: 'Lens Implant (ICL)',
    description: 'Implantable contact lenses placed inside the eye for high-prescription patients who are not LASIK candidates.',
    image: 'https://images.unsplash.com/photo-1583912267550-d974311a9a6e?auto=format&fit=crop&q=80&w=800',
    price: 'From $2,000',
  },
  {
    title: 'Glaucoma Treatment',
    description: 'Advanced laser and surgical treatments to lower eye pressure and preserve your vision long-term.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
    price: 'From $1,500',
  },
  {
    title: 'Retina Treatment',
    description: 'Surgical and injection-based therapies for retinal detachment, macular degeneration, and diabetic retinopathy.',
    image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?auto=format&fit=crop&q=80&w=800',
    price: 'From $1,800',
  },
];

export function VisionCorrection() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?auto=format&fit=crop&q=80&w=1920"
            alt="Eye examination with advanced equipment"
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
            <span className="text-[#C5A059]">Vision Correction</span>
          </motion.div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="font-['Playfair_Display'] text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6 leading-tight">
            Vision Correction <br /><span className="text-[#C5A059]">See the World Clearly</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="font-['Outfit'] text-lg md:text-xl text-[#F9F6F0]/90 max-w-2xl mb-8 leading-relaxed">
            Advanced laser and surgical eye treatments performed by Egypt's top ophthalmologists using the latest technology — at a fraction of Western prices.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Link to="/consultation">
              <button className="bg-[#0D9488] text-[#0F172A] px-8 py-4 rounded-full font-['Outfit'] text-base font-bold uppercase tracking-wider hover:bg-[#0F766E] transition-colors shadow-lg">
                Free Eye Assessment
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
              <h2 className="font-['Playfair_Display'] text-4xl text-[#0F172A] font-bold mb-6">Why Choose Egypt for Eye Surgery?</h2>
              <p className="font-['Outfit'] text-[#5D5D5D] text-lg leading-relaxed mb-8">
                Egypt is home to world-renowned ophthalmology centres equipped with the latest excimer lasers and diagnostic equipment, offering outstanding outcomes at significantly lower costs.
              </p>
              <ul className="space-y-4">
                {['FDA-approved LASIK technology', 'Surgeons with 10,000+ procedures each', 'Up to 70% savings vs. UK & US prices', '24-hour post-operative care included'].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-[#0D9488]/20 flex items-center justify-center text-[#0D9488] flex-shrink-0 mt-0.5"><Check size={14} strokeWidth={3} /></div>
                    <span className="font-['Outfit'] text-[#0F172A]">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0D9488] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">98%</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">LASIK Success</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#14B8A6] text-center">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">70%</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Cost Savings</span>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#0F172A] text-center col-span-2">
                <span className="block font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-2">15,000+</span>
                <span className="font-['Outfit'] text-sm text-[#5D5D5D] uppercase tracking-wide">Eyes Treated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Procedures Grid */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-[1400px]">
          <div className="text-center mb-16">
            <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl text-[#0F172A] font-bold mb-4">Vision Treatments</h2>
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
