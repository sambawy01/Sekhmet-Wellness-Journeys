import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';
import { cn } from '../../lib/utils';

import { useLanguage } from '../context/LanguageContext';
type ButtonVariant = 'primary' | 'secondary' | 'whatsapp' | 'link' | 'dark';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  children, 
  className, 
  icon,
  disabled,
  ...props 
}) => {
  const { t, direction } = useLanguage();
  const baseStyles = "relative inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase tracking-wider transition-all duration-200 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-[#C9A84C] text-[#0F1923] hover:bg-[#B8983B] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm",
    secondary: "bg-transparent border-2 border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C]/10 active:bg-[#C9A84C]/20",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20BD5A] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm",
    link: "bg-transparent text-[#1B7A6E] px-0 py-2 hover:text-[#C9A84C] underline decoration-2 underline-offset-4 hover:decoration-[#C9A84C] transition-colors duration-200",
    dark: "bg-[#0F1923] text-white hover:bg-[#1A2632] hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:shadow-sm"
  };

  // Text Link shouldn't have the same padding/radius if it's just a link, 
  // but the prompt says "All buttons: rounded corners 8px, padding 16px 32px". 
  // However, "Text Link" usually implies... text. 
  // Prompt says "(4) Text Link: teal #1B7A6E underline. Hover: gold."
  // I will interpret this as a text link style, possibly overriding the default button padding for this specific variant 
  // or keeping it button-like if that's the intention. 
  // "Design a complete button component set... (4) Text Link". 
  // Usually a text link doesn't have 16px 32px padding in a button set context unless it's a "ghost" button. 
  // But description says "teal underline". I will style it as a text link with minimal padding, 
  // but let's see if I should wrap it in a container to show alignment.
  // I'll stick to the visual description: "teal underline".

  const isLink = variant === 'link';
  const finalClassName = cn(
    baseStyles, 
    variants[variant], 
    isLink && "px-0 py-0 h-auto rounded-none hover:-translate-y-0 shadow-none hover:shadow-none bg-transparent tracking-normal normal-case font-medium",
    className
  );

  return (
    <button className={finalClassName} disabled={disabled} {...props}>
      {icon && <span className="mr-1">{icon}</span>}
      {children}
    </button>
  );
};

export const ButtonSet: React.FC = () => {
  return (
    <section className="bg-white p-12 rounded-3xl border border-[#0F1923]/10 space-y-12">
      <div className="border-b border-[#0F1923]/10 pb-4 mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Button Components</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">Interactive elements & states</p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="border-b border-[#0F1923]/10">
              <th className="py-4 px-6 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest w-1/4">Type</th>
              <th className="py-4 px-6 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest w-1/4">Default</th>
              <th className="py-4 px-6 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest w-1/4">Hover State (Demo)</th>
              <th className="py-4 px-6 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest w-1/4">Disabled</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[#0F1923]/5">
            {/* Primary */}
            <tr>
              <td className="py-8 px-6 font-['DM_Sans'] font-medium text-[#0F1923]">Primary Action</td>
              <td className="py-8 px-6"><Button>Book Now</Button></td>
              <td className="py-8 px-6">
                {/* Forced hover state simulation visually or just interactive */}
                <div className="bg-[#B8983B] text-[#0F1923] inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase tracking-wider shadow-lg transform -translate-y-0.5 pointer-events-none">
                  Book Now
                </div>
              </td>
              <td className="py-8 px-6"><Button disabled>Book Now</Button></td>
            </tr>

            {/* Secondary */}
            <tr>
              <td className="py-8 px-6 font-['DM_Sans'] font-medium text-[#0F1923]">Secondary / Ghost</td>
              <td className="py-8 px-6"><Button variant="secondary">View Details</Button></td>
              <td className="py-8 px-6">
                 <div className="bg-[#C9A84C]/10 border-2 border-[#C9A84C] text-[#C9A84C] inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase tracking-wider pointer-events-none">
                  View Details
                </div>
              </td>
              <td className="py-8 px-6"><Button variant="secondary" disabled>View Details</Button></td>
            </tr>

            {/* WhatsApp */}
            <tr>
              <td className="py-8 px-6 font-['DM_Sans'] font-medium text-[#0F1923]">WhatsApp CTA</td>
              <td className="py-8 px-6"><Button variant="whatsapp" icon={<MessageCircle size={18} />}>Chat With Us</Button></td>
              <td className="py-8 px-6">
                <div className="bg-[#20BD5A] text-white inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase tracking-wider shadow-lg transform -translate-y-0.5 pointer-events-none">
                  <span className="mr-1"><MessageCircle size={18} /></span> Chat With Us
                </div>
              </td>
              <td className="py-8 px-6"><Button variant="whatsapp" disabled icon={<MessageCircle size={18} />}>Chat With Us</Button></td>
            </tr>

            {/* Dark */}
            <tr>
              <td className="py-8 px-6 font-['DM_Sans'] font-medium text-[#0F1923]">Dark / Footer</td>
              <td className="py-8 px-6"><Button variant="dark">My Account</Button></td>
              <td className="py-8 px-6">
                 <div className="bg-[#1A2632] text-white inline-flex items-center justify-center gap-2 rounded-lg px-8 py-4 font-['DM_Sans'] text-[15px] font-bold uppercase tracking-wider shadow-lg transform -translate-y-0.5 pointer-events-none">
                  My Account
                </div>
              </td>
              <td className="py-8 px-6"><Button variant="dark" disabled>My Account</Button></td>
            </tr>

            {/* Text Link */}
            <tr>
              <td className="py-8 px-6 font-['DM_Sans'] font-medium text-[#0F1923]">Text Link</td>
              <td className="py-8 px-6"><Button variant="link">Read Full Story</Button></td>
              <td className="py-8 px-6">
                <span className="text-[#C9A84C] underline decoration-2 underline-offset-4 decoration-[#C9A84C] font-['DM_Sans'] font-medium cursor-pointer">
                  Read Full Story
                </span>
              </td>
              <td className="py-8 px-6"><Button variant="link" disabled>Read Full Story</Button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};
