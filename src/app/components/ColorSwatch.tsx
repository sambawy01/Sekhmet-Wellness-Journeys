import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils'; // Assuming this exists, or I'll implement inline
import { Check, Copy } from 'lucide-react';
// import { toast } from 'sonner';

// Helper for clipboard copy
const copyToClipboard = (text: string) => {
  navigator.clipboard.writeText(text);
  toast.success(`Copied ${text} to clipboard`);
};

interface ColorSwatchProps {
  name: string;
  hex: string;
  role: string;
  delay?: number;
}

export const ColorSwatch: React.FC<ColorSwatchProps> = ({ name, hex, role, delay = 0 }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-6 group"
    >
      {/* Main Swatch */}
      <div className="relative">
        <button 
          onClick={() => copyToClipboard(hex)}
          className="w-32 h-32 rounded-full shadow-lg transition-transform hover:scale-105 cursor-pointer flex items-center justify-center relative overflow-hidden ring-1 ring-black/5"
          style={{ backgroundColor: hex }}
          aria-label={`Copy ${name} hex code`}
        >
          <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
            <Copy className="text-white w-6 h-6 drop-shadow-md" />
          </div>
        </button>
      </div>

      {/* Info */}
      <div className="text-center flex flex-col items-center gap-1 min-h-[80px]">
        <h3 className="font-playfair font-bold text-lg text-[#0F1923]">{name}</h3>
        <p className="font-space-mono text-sm text-[#0F1923]/70 uppercase tracking-wide">{hex}</p>
        <p className="font-dm-sans text-xs text-[#0F1923]/60 max-w-[140px] leading-tight">{role}</p>
      </div>

      {/* Tints */}
      <div className="flex flex-col gap-3 w-full items-center">
        {[0.8, 0.5, 0.2].map((opacity) => (
          <div key={opacity} className="flex items-center gap-3 w-full justify-center">
            <div 
              className="w-12 h-12 rounded-full shadow-sm ring-1 ring-black/5"
              style={{ backgroundColor: hex, opacity }} 
            />
            <span className="font-space-mono text-xs text-[#0F1923]/40 w-8 text-right">
              {opacity * 100}%
            </span>
          </div>
        ))}
      </div>
    </motion.div>
  );
};
