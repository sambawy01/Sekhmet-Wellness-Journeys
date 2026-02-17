import React from 'react';
import { Facebook, Instagram, Youtube, Phone, Mail, MapPin, Globe, Shield } from 'lucide-react';
import { IconAnkh } from './EgyptianIcons';

// Custom TikTok Icon since it's not in standard Lucide set usually, or just in case
const IconTikTok: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    stroke="none"
    {...props}
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="relative bg-[#0F1923] text-white pt-20 pb-10 border-t-2 border-[#C9A84C] overflow-hidden">
      {/* Background Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-[0.05] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />

      <div className="container mx-auto px-6 max-w-[1400px] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="text-[#C9A84C] w-10 h-10 flex items-center justify-center border-2 border-[#C9A84C] rounded-full p-2">
                <IconAnkh className="w-full h-full" />
              </div>
              <span className="font-['Playfair_Display'] font-bold text-2xl tracking-wide text-white">
                SEKHMET
              </span>
            </div>
            
            <p className="font-['Playfair_Display'] italic text-[14px] text-[#F5F0E5]">
              "Heal where history began"
            </p>
            
            <p className="font-['DM_Sans'] text-[13px] text-[#A89F8E] leading-relaxed max-w-[280px]">
              Premium medical tourism agency connecting global patients with Egypt's finest surgeons and 5-star recovery experiences.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, IconTikTok, Youtube, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0F1923] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Treatments */}
          <div className="space-y-6">
            <h4 className="font-['Playfair_Display'] text-lg text-white font-medium">Treatments</h4>
            <ul className="space-y-3">
              {["Dental Care", "Vision Correction", "Cosmetic Surgery", "Comprehensive Checkups", "IVF & Fertility"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="font-['DM_Sans'] text-[14px] text-[#A89F8E] hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
            <h4 className="font-['Playfair_Display'] text-lg text-white font-medium">Explore</h4>
            <ul className="space-y-3">
              {["Packages", "Destinations", "How It Works", "Patient Stories", "Our Doctors", "Prices", "FAQ", "Blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="font-['DM_Sans'] text-[14px] text-[#A89F8E] hover:text-[#C9A84C] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C9A84C] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-['Playfair_Display'] text-lg text-white font-medium">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#C9A84C] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-['DM_Sans'] text-[14px] text-[#F5F0E5]">+20 100 123 4567</span>
                  <span className="font-['DM_Sans'] text-[12px] text-[#A89F8E]">Mon-Sun, 9am - 9pm EST</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-[#C9A84C] flex items-center justify-center text-[#C9A84C] text-[10px] font-bold mt-0.5">W</div>
                <div className="flex flex-col">
                  <span className="font-['DM_Sans'] text-[14px] text-[#F5F0E5]">+20 122 987 6543</span>
                  <span className="font-['DM_Sans'] text-[12px] text-[#A89F8E]">WhatsApp Support</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#C9A84C] mt-0.5" />
                <a href="mailto:care@sekhmet.com" className="font-['DM_Sans'] text-[14px] text-[#F5F0E5] hover:text-[#C9A84C] transition-colors">
                  care@sekhmet.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#C9A84C] mt-0.5" />
                <span className="font-['DM_Sans'] text-[14px] text-[#A89F8E]">
                  Grand Egyptian Museum Complex,<br />
                  Giza Governorate, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] font-['DM_Sans'] text-[#A89F8E]">
            <span>&copy; {new Date().getFullYear()} Sekhmet Wellness.</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#A89F8E]/50" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#A89F8E]/50" />
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-6">
            {/* JCI Accreditation Mockup */}
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 relative">
                 <div className="absolute inset-0 bg-[#C9A84C] rounded-full animate-pulse opacity-20" />
                 <Shield className="w-8 h-8 text-[#C9A84C]" fill="currentColor" fillOpacity={0.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-[#C9A84C] font-['DM_Sans']">JCI ACCREDITED</span>
                <span className="text-[9px] text-white/60 font-['DM_Sans']">Global Standard</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:border-[#C9A84C] transition-colors group">
              <Globe className="w-4 h-4 text-[#A89F8E] group-hover:text-[#C9A84C]" />
              <span className="text-[13px] font-medium text-white group-hover:text-[#C9A84C]">English (UK)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
