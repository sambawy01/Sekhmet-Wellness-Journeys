import React from 'react';
import { motion } from 'framer-motion';
// import { toast } from 'sonner';
import { Copy } from 'lucide-react';

const colors = [
  { name: 'Deep Charcoal', hex: '#0F172A', role: 'Primary, Trust' },
  { name: 'Teal Primary', hex: '#0D9488', role: 'CTAs, Accents, Buttons' },
  { name: 'Bright Teal', hex: '#14B8A6', role: 'Links, Highlights' },
  { name: 'Sage Mist', hex: '#F0F7F4', role: 'Section Backgrounds' },
  { name: 'Cool White', hex: '#F8FAFB', role: 'Page Background' },
  { name: 'Slate Dark', hex: '#1A2332', role: 'Headings, Text' },
  { name: 'Slate Gray', hex: '#64748B', role: 'Secondary Text' },
  { name: 'Teal Dark', hex: '#0F766E', role: 'Hover States' },
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
        <h3 className="font-heading font-bold text-xl text-[#0F172A]">{name}</h3>
        <p className="font-heading text-sm text-[#0F172A]/70 uppercase tracking-widest">{hex}</p>
        <p className="font-sans text-xs text-[#0F172A]/60 max-w-[160px] leading-relaxed italic">{role}</p>
      </div>

      {/* Tints */}
      <div className="flex flex-col gap-3 w-full items-center mt-2">
        <div className="text-xs font-heading text-[#0F172A]/30 tracking-widest mb-1">TINTS</div>
        {[0.8, 0.5, 0.2].map((opacity) => (
          <div key={opacity} className="flex items-center gap-4 w-full justify-center group/tint">
             <div 
              className="w-16 h-8 rounded-full shadow-sm ring-1 ring-black/5 transition-transform group-hover/tint:scale-110"
              style={{ backgroundColor: hex, opacity }} 
            />
            <span className="font-heading text-xs text-[#0F172A]/40 w-8 text-left">
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
    <section className="bg-white p-12 rounded-3xl border border-[#0F172A]/10 space-y-12">
      <div className="border-b border-[#0F172A]/10 pb-4 mb-8">
        <h2 className="font-heading text-3xl text-[#0F172A]">Brand Color Palette</h2>
        <p className="font-sans text-[#A89F8E]">Primary, secondary & functional colors</p>
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
