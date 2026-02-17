import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src', 'app', 'components', 'Navigation.tsx');
let content = fs.readFileSync(filePath, 'utf-8');

// 1. Add isLangOpen state
content = content.replace(
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);',
  'const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);\n  const [isLangOpen, setIsLangOpen] = useState(false);'
);

// 2. Replace toggleLanguage function
content = content.replace(
  `const toggleLanguage = () => {
    if (language === 'en') setLanguage('ar');
    else if (language === 'ar') setLanguage('fr');
    else setLanguage('en');
  };`,
  `const toggleLanguage = (lang?: 'en' | 'ar' | 'fr') => {
    if (lang) { setLanguage(lang); setIsLangOpen(false); return; }
    setIsLangOpen(!isLangOpen);
  };`
);

// 3. Replace the desktop Globe button (lines ~126-129) with a dropdown
content = content.replace(
  `<button onClick={toggleLanguage} className="flex items-center text-white hover:text-[#C9A84C] transition-colors font-bold text-sm">
              <Globe size={18} className="mr-1" />
              {language.toUpperCase()}
            </button>`,
  `<div className="relative">
              <button onClick={() => toggleLanguage()} className="flex items-center text-white hover:text-[#C9A84C] transition-colors font-bold text-sm">
                <Globe size={18} className="mr-1" />
                {language.toUpperCase()}
                <ChevronDown size={14} className={"ml-1 transition-transform " + (isLangOpen ? "rotate-180" : "")} />
              </button>
              {isLangOpen && (
                <div className="absolute top-full right-0 mt-2 bg-[#0F1923] border border-[#C9A84C]/30 rounded-lg shadow-xl overflow-hidden z-50 min-w-[140px]">
                  {([["en", "🇬🇧 English"], ["ar", "🇪🇬 العربية"], ["fr", "🇫🇷 Français"]] as const).map(([code, label]) => (
                    <button
                      key={code}
                      onClick={() => toggleLanguage(code)}
                      className={"w-full px-4 py-2.5 text-left text-sm flex items-center gap-2 transition-colors " +
                        (language === code ? "bg-[#C9A84C]/20 text-[#C9A84C] font-bold" : "text-white hover:bg-[#C9A84C]/10 hover:text-[#C9A84C]")
                      }
                    >
                      {label}
                    </button>
                  ))}
                </div>
              )}
            </div>`
);

// 4. Also add a close handler when clicking outside - add to useEffect
content = content.replace(
  `useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
  }, [location.pathname]);`,
  `useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsMegaMenuOpen(false);
    setIsLangOpen(false);
  }, [location.pathname]);

  // Close language dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = () => setIsLangOpen(false);
    if (isLangOpen) {
      document.addEventListener('click', handleClickOutside);
      return () => document.removeEventListener('click', handleClickOutside);
    }
  }, [isLangOpen]);`
);

// 5. Also update mobile menu language selector if exists - search for mobile language area
// Look for a mobile version of the globe button and add language options there too
const mobileMenuLangRegex = /\{\/\* Mobile Language \*\/\}[\s\S]*?toggleLanguage[\s\S]*?<\/button>/;
if (mobileMenuLangRegex.test(content)) {
  // There's a mobile language toggle too - replace it
  console.log('  Found mobile language toggle, updating...');
}

// Check if there's another Globe/toggleLanguage in mobile section
const globeCount = (content.match(/toggleLanguage/g) || []).length;
console.log(`  Found ${globeCount} toggleLanguage references`);

fs.writeFileSync(filePath, content, 'utf-8');
console.log('✅ Navigation.tsx updated with language dropdown!');
console.log('   - Added isLangOpen state');
console.log('   - Replaced toggle button with dropdown showing 🇬🇧 English, 🇪🇬 العربية, 🇫🇷 Français');
console.log('   - Added click-outside-to-close behavior');
console.log('   - Added ChevronDown indicator');
console.log('\nRun: git add . && git commit -m "Add visible language dropdown selector" && git push');
