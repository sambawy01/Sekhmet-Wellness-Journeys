import React from 'react';
import { motion } from 'framer-motion';
// import { toast } from 'sonner';
import { Copy } from 'lucide-react';

const colors = [
  { name: 'Deep Nile Navy', hex: '#0F1923', role: 'Primary, Trust' },
  { name: 'Pharaoh Gold', hex: '#C9A84C', role: 'CTAs, Accents, Luxury' },
  { name: 'Sekhmet Teal', hex: '#1B7A6E', role: 'Links, Medical Credibility' },
  { name: 'Desert Sand', hex: '#FAF6EF', role: 'Backgrounds, Warmth' },
  { name: 'Papyrus Cream', hex: '#F5F0E5', role: 'Card Surfaces' },
  { name: 'Obsidian', hex: '#1A1A1A', role: 'Body Text' },
  { name: 'Limestone', hex: '#A89F8E', role: 'Secondary Text' },
  { name: 'Terracotta', hex: '#C84B31', role: 'Savings Badges' },
  { name: 'Success Green', hex: '#2E8B57', role: 'Trust Indicators' },
];

const ColorSwatch: React.FC<{ 
  name: string; 
  hex: string; 
  role: string; 
  index: number 
}> = ({ name, hex, role, index }) => {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success(`Copied ${text}`);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col items-center gap-6 group min-w-[180px]"
    >
      {/* Main Swatch */}
      <button 
        onClick={() => copyToClipboard(hex)}
        className="relative w-32 h-32 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 cursor-pointer flex items-center justify-center overflow-hidden ring-1 ring-black/5"
        style={{ backgroundColor: hex }}
        aria-label={`Copy ${name} hex code`}
      >
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100 duration-300">
          <Copy className="text-white w-6 h-6 drop-shadow-md" />
        </div>
      </button>

      {/* Info */}
      <div className="text-center flex flex-col items-center gap-2 h-[100px]">
        <h3 className="font-['Playfair_Display'] font-bold text-xl text-[#0F1923]">{name}</h3>
        <p className="font-['Space_Mono'] text-sm text-[#0F1923]/70 uppercase tracking-widest">{hex}</p>
        <p className="font-['DM_Sans'] text-xs text-[#0F1923]/60 max-w-[160px] leading-relaxed italic">{role}</p>
      </div>

      {/* Tints */}
      <div className="flex flex-col gap-3 w-full items-center mt-2">
        <div className="text-xs font-['Space_Mono'] text-[#0F1923]/30 tracking-widest mb-1">TINTS</div>
        {[0.8, 0.5, 0.2].map((opacity) => (
          <div key={opacity} className="flex items-center gap-4 w-full justify-center group/tint">
             <div 
              className="w-16 h-8 rounded-full shadow-sm ring-1 ring-black/5 transition-transform group-hover/tint:scale-110"
              style={{ backgroundColor: hex, opacity }} 
            />
            <span className="font-['Space_Mono'] text-xs text-[#0F1923]/40 w-8 text-left">
              {opacity * 100}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const ColorPalette: React.FC = () => {
  return (
    <section className="bg-white p-12 rounded-3xl border border-[#0F1923]/10 space-y-12">
      <div className="border-b border-[#0F1923]/10 pb-4 mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Brand Color Palette</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">Primary, secondary & functional colors</p>
      </div>
      <div className="flex flex-wrap justify-center gap-x-12 gap-y-20">
        {colors.map((color, index) => (
          <ColorSwatch 
            key={color.hex} 
            name={color.name} 
            hex={color.hex} 
            role={color.role}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};
