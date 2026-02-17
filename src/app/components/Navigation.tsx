import React, { useState, useEffect } from 'react';
import { ChevronDown, Search, ArrowRight, Menu, X, Globe, Phone, Mail, MapPin } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '../../lib/utils';
import { IconAnkh, IconEyeOfHorus, IconLotus, IconScarab, IconCare, IconSun } from './EgyptianIcons';
import { useLanguage } from '../context/LanguageContext';

interface NavItemProps {
  label: string;
  hasDropdown?: boolean;
  isActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({ label, hasDropdown, isActive }) => (
  <div className="relative group h-full flex items-center cursor-pointer">
    <span className={cn(
      "font-['DM_Sans'] text-[15px] transition-colors duration-300 relative pb-1",
      isActive ? "text-[#C9A84C]" : "text-white group-hover:text-[#C9A84C]"
    )}>
      {label}
      <span className={cn(
        "absolute bottom-0 left-0 w-full h-[2px] bg-[#C9A84C] transform origin-left transition-transform duration-300",
        isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
      )} />
    </span>
    {hasDropdown && (
      <ChevronDown size={14} className="ml-1 transition-transform group-hover:rotate-180 text-[#C9A84C]" />
    )}
  </div>
);

const MobileNavLink = ({ to, label, delay, onClick }: { to: string, label: string, delay: number, onClick: () => void }) => (
  <div
    className={cn(
      "transform transition-all duration-500 ease-out",
      "translate-x-0 opacity-100"
    )}
    style={{ transitionDelay: `${delay}s` }}
  >
    <Link 
      to={to} 
      onClick={onClick}
      className="block font-playfair text-3xl text-white hover:text-[#C9A84C] transition-colors py-2"
    >
      {label}
    </Link>
  </div>
);

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);

  const toggleLanguage = () => {
    if (language === 'en') setLanguage('ar');
    else if (language === 'ar') setLanguage('fr');
    else setLanguage('en');
  };

  return (
    <>
      <header 
        className={cn(
          "fixed top-0 left-0 w-full z-40 transition-all duration-300",
          isScrolled 
            ? "bg-[#0F1923] shadow-lg border-b border-[#C9A84C]/30 py-3" 
            : "bg-transparent py-6"
        )}
      >
        <div className="container mx-auto px-6 max-w-[1400px] flex justify-between items-center h-[60px]">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 z-50">
            <div className="text-[#C9A84C] w-10 h-10 flex items-center justify-center border-2 border-[#C9A84C] rounded-full p-2">
              <IconAnkh className="w-full h-full" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-['Playfair_Display'] font-bold text-[22px] text-white tracking-wide">
                SEKHMET
              </span>
              <span className="font-['DM_Sans'] text-[10px] text-[#A89F8E] uppercase tracking-[0.2em] ml-1">
                Wellness Journeys
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-10 h-full" onMouseLeave={() => setIsMegaMenuOpen(false)}>
            <div 
              className="h-full flex items-center"
              onMouseEnter={() => setIsMegaMenuOpen(true)}
            >
              <Link to="/consultation" className="h-full flex items-center">
                <NavItem label={t("nav.treatments")} hasDropdown isActive={isMegaMenuOpen} />
              </Link>
            </div>
            <Link to="/how-it-works" className="h-full flex items-center"><NavItem label={t("nav.howItWorks")} /></Link>
            <Link to="/pricing" className="h-full flex items-center"><NavItem label="Pricing" /></Link>
            <Link to="/doctors" className="h-full flex items-center"><NavItem label={t("nav.doctors")} /></Link>
            <Link to="/patient-stories" className="h-full flex items-center"><NavItem label={t("nav.stories")} /></Link>
            <Link to="/travel-guide" className="h-full flex items-center"><NavItem label={t("nav.travelGuide")} /></Link>
            <Link to="/faq" className="h-full flex items-center"><NavItem label={t("nav.faq")} /></Link>
          </nav>

          {/* CTA & Actions */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-4 border-r border-white/20 pr-6">
              <Search className="text-white w-5 h-5 cursor-pointer hover:text-[#C9A84C] transition-colors" />
              <button onClick={toggleLanguage} className="flex items-center text-white hover:text-[#C9A84C] transition-colors font-bold text-sm">
                 <Globe size={18} className="mr-1" />
                 {language.toUpperCase()}
              </button>
            </div>
            <Link to="/consultation">
              <button className="bg-[#C9A84C] text-[#0F1923] px-6 py-2.5 rounded-full font-['DM_Sans'] text-[14px] font-bold uppercase tracking-wider hover:bg-[#B8983B] transition-colors shadow-lg hover:shadow-[#C9A84C]/20">
                {t("nav.freeConsultation")}
              </button>
            </Link>
          </div>

          {/* Mobile Header Controls */}
          <div className="flex items-center gap-4 md:hidden z-50">
             <a href="https://wa.me/201000000000" className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shadow-lg">
                <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
             </a>
             <button 
               onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
               className="text-[#C9A84C] hover:text-white transition-colors"
             >
               {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
             </button>
          </div>
        </div>

        {/* Mega Menu Dropdown */}
        <div 
          className={cn(
            "absolute top-full left-0 w-full bg-white shadow-2xl border-t-[3px] border-[#C9A84C] py-12 z-30 hidden md:block transition-all duration-300 ease-in-out origin-top",
            isMegaMenuOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-4 scale-y-95 pointer-events-none"
          )}
          onMouseEnter={() => setIsMegaMenuOpen(true)}
          onMouseLeave={() => setIsMegaMenuOpen(false)}
        >
          <div className="container mx-auto px-6 max-w-[1400px] grid grid-cols-6 gap-8">
            {/* Column 1: Dental */}
            <div className="space-y-4 border-r border-[#0F1923]/10 pr-6 group/col">
              <Link to="/treatments/dental" className="flex items-center gap-3 text-[#0F1923] mb-2 group-hover/col:text-[#C9A84C] transition-colors">
                <IconLotus className="w-8 h-8" />
                <h3 className="font-['Playfair_Display'] font-bold text-lg">Dental Care</h3>
              </Link>
              <ul className="space-y-3">
                {[
                  { name: "Hollywood Smile", path: "/treatments/dental/hollywood-smile" },
                  { name: "Dental Implants", path: "/treatments/dental/implants" },
                  { name: "Veneers", path: "/treatments/dental/hollywood-smile" },
                  { name: "Full Mouth Rehab", path: "/treatments/dental" }
                ].map((item, i) => (
                  <li key={i} className="font-['DM_Sans'] text-[14px] text-[#3D3D3D] hover:text-[#1B7A6E] cursor-pointer transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/treatments/dental" className="text-[#1B7A6E] text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Column 2: Vision */}
            <div className="space-y-4 border-r border-[#0F1923]/10 pr-6 group/col">
              <div className="flex items-center gap-3 text-[#0F1923] mb-2 group-hover/col:text-[#C9A84C] transition-colors">
                <IconEyeOfHorus className="w-8 h-8" />
                <h3 className="font-['Playfair_Display'] font-bold text-lg">Vision</h3>
              </div>
              <ul className="space-y-3">
                {["LASIK Eye Surgery", "Cataract Removal", "Lens Implant", "Glaucoma"].map((item, i) => (
                  <li key={i} className="font-['DM_Sans'] text-[14px] text-[#3D3D3D] hover:text-[#1B7A6E] cursor-pointer transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-[#1B7A6E] text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={10} />
                </span>
              </div>
            </div>

            {/* Column 3: Fertility - NEW VERTICAL */}
            <div className="space-y-4 border-r border-[#0F1923]/10 pr-6 group/col">
              <Link to="/treatments/fertility" className="flex items-center gap-3 text-[#0F1923] mb-2 group-hover/col:text-[#C9A84C] transition-colors">
                <IconSun className="w-8 h-8" />
                <h3 className="font-['Playfair_Display'] font-bold text-lg">Fertility</h3>
              </Link>
              <ul className="space-y-3">
                {[
                  { name: "IVF Treatment", path: "/treatments/fertility" }, 
                  { name: "Egg Freezing", path: "/treatments/fertility" },
                  { name: "Male Infertility", path: "/treatments/fertility" },
                  { name: "Genetic Screening", path: "/treatments/fertility" }
                ].map((item, i) => (
                  <li key={i} className="font-['DM_Sans'] text-[14px] text-[#3D3D3D] hover:text-[#1B7A6E] cursor-pointer transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    <Link to={item.path}>{item.name}</Link>
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <Link to="/treatments/fertility" className="text-[#1B7A6E] text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={10} />
                </Link>
              </div>
            </div>

            {/* Column 4: Cosmetic */}
            <div className="space-y-4 border-r border-[#0F1923]/10 pr-6 group/col">
              <div className="flex items-center gap-3 text-[#0F1923] mb-2 group-hover/col:text-[#C9A84C] transition-colors">
                <IconScarab className="w-8 h-8" />
                <h3 className="font-['Playfair_Display'] font-bold text-lg">Cosmetic</h3>
              </div>
              <ul className="space-y-3">
                {["Rhinoplasty", "Breast Augmentation", "Liposuction", "Facelift"].map((item, i) => (
                  <li key={i} className="font-['DM_Sans'] text-[14px] text-[#3D3D3D] hover:text-[#1B7A6E] cursor-pointer transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-[#1B7A6E] text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={10} />
                </span>
              </div>
            </div>

            {/* Column 5: Wellness */}
            <div className="space-y-4 border-r border-[#0F1923]/10 pr-6 group/col">
              <div className="flex items-center gap-3 text-[#0F1923] mb-2 group-hover/col:text-[#C9A84C] transition-colors">
                <IconCare className="w-8 h-8" />
                <h3 className="font-['Playfair_Display'] font-bold text-lg">Wellness</h3>
              </div>
              <ul className="space-y-3">
                {["Weight Loss", "Hair Transplant", "Checkups", "Spa & Recovery"].map((item, i) => (
                  <li key={i} className="font-['DM_Sans'] text-[14px] text-[#3D3D3D] hover:text-[#1B7A6E] cursor-pointer transition-colors flex items-center gap-2 group/item">
                    <span className="w-1 h-1 bg-[#C9A84C] rounded-full opacity-0 group-hover/item:opacity-100 transition-opacity" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="pt-2">
                <span className="text-[#1B7A6E] text-xs font-bold uppercase tracking-wide cursor-pointer flex items-center gap-1 hover:gap-2 transition-all">
                  View All <ArrowRight size={10} />
                </span>
              </div>
            </div>

            {/* Column 6: Featured */}
            <div className="bg-[#FAF6EF] p-6 rounded-xl relative overflow-hidden group/card cursor-pointer">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#C9A84C]/10 rounded-full -mr-8 -mt-8" />
              <span className="bg-[#0F1923] text-white px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-full mb-4 inline-block">
                New Package
              </span>
              <h4 className="font-['Playfair_Display'] font-bold text-xl text-[#0F1923] mb-2 leading-tight">
                Cairo Executive Checkup
              </h4>
              <p className="font-['DM_Sans'] text-sm text-[#A89F8E] mb-6">
                Full body MRI + 5-Star Nile View Suite.
              </p>
              <div className="mt-auto">
                <span className="font-['Space_Mono'] font-bold text-[#1B7A6E] text-lg block mb-1">
                  $1,250
                </span>
                <span className="text-[#C9A84C] text-xs font-bold uppercase tracking-wide flex items-center gap-1 group-hover/card:gap-2 transition-all">
                  Learn More <ArrowRight size={10} />
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Full Screen Menu */}
        <div
          className={cn(
            "fixed inset-0 bg-[#0F1923]/95 backdrop-blur-md z-40 flex flex-col pt-24 px-8 pb-8 md:hidden overflow-y-auto transition-transform duration-300 ease-in-out",
            isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <nav className="flex flex-col gap-6 mb-12">
            <div className="flex flex-col gap-3">
               <h4 className="text-[#A89F8E] font-['DM_Sans'] text-xs font-bold uppercase tracking-widest pl-1">Treatments</h4>
               <MobileNavLink to="/treatments/dental" label="Dental Care" delay={0.1} onClick={() => setIsMobileMenuOpen(false)} />
               <MobileNavLink to="/treatments/fertility" label="IVF & Fertility" delay={0.12} onClick={() => setIsMobileMenuOpen(false)} />
               <MobileNavLink to="/treatments/dental" label="Vision Correction" delay={0.14} onClick={() => setIsMobileMenuOpen(false)} />
            </div>
            
            <div className="h-px bg-white/10 my-1" />

            <MobileNavLink to="/how-it-works" label={t("nav.howItWorks")} delay={0.15} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/pricing" label="Pricing" delay={0.17} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/doctors" label={t("nav.doctors")} delay={0.2} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/patient-stories" label={t("nav.stories")} delay={0.25} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/travel-guide" label={t("nav.travelGuide")} delay={0.3} onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavLink to="/faq" label={t("nav.faq")} delay={0.35} onClick={() => setIsMobileMenuOpen(false)} />
          </nav>

          <div className="mt-auto space-y-6">
            <Link to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="w-full bg-[#C9A84C] text-[#0F1923] py-4 rounded-lg font-['DM_Sans'] text-lg font-bold uppercase tracking-wider hover:bg-[#B8983B] transition-colors shadow-lg">
                {t("nav.freeConsultation")}
              </button>
            </Link>

            <div className="flex flex-col items-center gap-6 pt-6 border-t border-white/10">
              <div className="flex gap-4">
                <button 
                  onClick={() => setLanguage('en')} 
                  className={cn("px-4 py-2 rounded-full border text-sm font-bold", language === 'en' ? "bg-white text-[#0F1923]" : "border-white/20 text-white")}
                >
                  EN
                </button>
                <button 
                  onClick={() => setLanguage('ar')} 
                  className={cn("px-4 py-2 rounded-full border text-sm font-bold", language === 'ar' ? "bg-white text-[#0F1923]" : "border-white/20 text-white")}
                >
                  AR
                </button>
                <button 
                  onClick={() => setLanguage('fr')} 
                  className={cn("px-4 py-2 rounded-full border text-sm font-bold", language === 'fr' ? "bg-white text-[#0F1923]" : "border-white/20 text-white")}
                >
                  FR
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
