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
    <footer className="relative bg-[#1A2332] text-white pt-20 pb-10 border-t-2 border-[#0D9488] overflow-hidden">
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
              <img src="/logo-icon.svg" alt="Sekhmet" className="w-10 h-10" />
              <div className="flex flex-col leading-none">
                <span className="font-['Outfit'] font-bold text-2xl tracking-wide text-[#C5A059]">
                  SEKHMET
                </span>
                <span className="font-['Outfit'] text-[10px] text-[#C5A059]/60 uppercase tracking-[0.2em]">
                  Wellness Journeys
                </span>
              </div>
            </div>
            
            <p className="font-['Outfit'] italic text-[14px] text-[#F8FAFB]">
              "Heal where history began"
            </p>
            
            <p className="font-['Outfit'] text-[13px] text-[#64748B] leading-relaxed max-w-[280px]">
              Premium medical tourism agency connecting global patients with Egypt's finest surgeons and 5-star recovery experiences.
            </p>
            
            <div className="flex gap-4">
              {[Instagram, IconTikTok, Youtube, Facebook].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-[#0D9488]/40 flex items-center justify-center text-[#0D9488] hover:bg-[#0D9488] hover:text-white hover:border-[#0D9488] transition-all duration-300 group"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Treatments */}
          <div className="space-y-6">
            <h4 className="font-['Outfit'] text-lg text-white font-medium">Treatments</h4>
            <ul className="space-y-3">
              {["Dental Care", "Vision Correction", "Cosmetic Surgery", "Comprehensive Checkups", "IVF & Fertility"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="font-['Outfit'] text-[14px] text-[#64748B] hover:text-[#0D9488] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Explore */}
          <div className="space-y-6">
            <h4 className="font-['Outfit'] text-lg text-white font-medium">Explore</h4>
            <ul className="space-y-3">
              {["Packages", "Destinations", "How It Works", "Patient Stories", "Our Doctors", "Prices", "FAQ", "Blog"].map((item, i) => (
                <li key={i}>
                  <a href="#" className="font-['Outfit'] text-[14px] text-[#64748B] hover:text-[#0D9488] transition-colors flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0D9488] opacity-0 group-hover:opacity-100 transition-opacity" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div className="space-y-6">
            <h4 className="font-['Outfit'] text-lg text-white font-medium">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-[#0D9488] mt-0.5" />
                <div className="flex flex-col">
                  <span className="font-['Outfit'] text-[14px] text-[#F8FAFB]">+20 100 123 4567</span>
                  <span className="font-['Outfit'] text-[12px] text-[#64748B]">Mon-Sun, 9am - 9pm EST</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full border border-[#0D9488] flex items-center justify-center text-[#0D9488] text-[10px] font-bold mt-0.5">W</div>
                <div className="flex flex-col">
                  <span className="font-['Outfit'] text-[14px] text-[#F8FAFB]">+20 122 987 6543</span>
                  <span className="font-['Outfit'] text-[12px] text-[#64748B]">WhatsApp Support</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-[#0D9488] mt-0.5" />
                <a href="mailto:care@sekhmet.com" className="font-['Outfit'] text-[14px] text-[#F8FAFB] hover:text-[#0D9488] transition-colors">
                  care@sekhmet.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#0D9488] mt-0.5" />
                <span className="font-['Outfit'] text-[14px] text-[#64748B]">
                  Grand Egyptian Museum Complex,<br />
                  Giza Governorate, Egypt
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col md:flex-row items-center gap-6 text-[13px] font-['Outfit'] text-[#64748B]">
            <span>&copy; {new Date().getFullYear()} Sekhmet Wellness.</span>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#64748B]/50" />
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <div className="hidden md:block w-1 h-1 rounded-full bg-[#64748B]/50" />
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          <div className="flex items-center gap-6">
            {/* JCI Accreditation Mockup */}
            <div className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
              <div className="w-8 h-8 relative">
                 <div className="absolute inset-0 bg-[#0D9488] rounded-full animate-pulse opacity-20" />
                 <Shield className="w-8 h-8 text-[#0D9488]" fill="currentColor" fillOpacity={0.2} />
              </div>
              <div className="flex flex-col leading-none">
                <span className="text-[10px] font-bold text-[#0D9488] font-['Outfit']">JCI ACCREDITED</span>
                <span className="text-[9px] text-white/60 font-['Outfit']">Global Standard</span>
              </div>
            </div>

            {/* Language Selector */}
            <div className="flex items-center gap-2 border border-white/20 rounded-full px-3 py-1.5 cursor-pointer hover:border-[#0D9488] transition-colors group">
              <Globe className="w-4 h-4 text-[#64748B] group-hover:text-[#0D9488]" />
              <span className="text-[13px] font-medium text-white group-hover:text-[#0D9488]">English (UK)</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
