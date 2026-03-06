import React, { useState, useRef, useEffect } from 'react';
import { Check, Star, Shield, ArrowRight, CheckCircle, ChevronDown } from 'lucide-react';
import { submitLead } from '../../../lib/supabase';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';

export function GetFreeQuotes() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', countryCode: '+1', treatment: '', destination: '', notes: '',
  });
  const [showCountryDropdown, setShowCountryDropdown] = useState(false);
  const [countrySearch, setCountrySearch] = useState('🇺🇸 +1');
  const countryRef = useRef<HTMLDivElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setIsSubmitting(true);
    setError('');
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone ? `${formData.countryCode} ${formData.phone}` : undefined,
        treatment_interest: formData.treatment || undefined,
        message: [formData.destination ? `Destination: ${formData.destination}` : '', formData.notes].filter(Boolean).join('\n') || undefined,
        source_form: 'get-free-quote',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || t('quotes.errorMessage'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const trustSignals = [
    t('quotes.trustSignal1'),
    t('quotes.trustSignal2'),
    t('quotes.trustSignal3'),
    t('quotes.trustSignal4'),
  ];

  const treatments = [
    { value: 'implants', label: t('quotes.treatment.implants') },
    { value: 'veneers', label: t('quotes.treatment.veneers') },
    { value: 'smile', label: t('quotes.treatment.smile') },
    { value: 'wisdom', label: t('quotes.treatment.wisdom') },
    { value: 'whitening', label: t('quotes.treatment.whitening') },
    { value: 'lasik', label: t('quotes.treatment.lasik') },
    { value: 'ivf', label: t('quotes.treatment.ivf') },
    { value: 'eggFreezing', label: t('quotes.treatment.eggFreezing') },
    { value: 'iui', label: t('quotes.treatment.iui') },
    { value: 'rhinoplasty', label: t('quotes.treatment.rhinoplasty') },
    { value: 'facelift', label: t('quotes.treatment.facelift') },
    { value: 'breast', label: t('quotes.treatment.breast') },
    { value: 'tummy', label: t('quotes.treatment.tummy') },
    { value: 'liposuction', label: t('quotes.treatment.liposuction') },
    { value: 'bbl', label: t('quotes.treatment.bbl') },
    { value: 'hair', label: t('quotes.treatment.hair') },
    { value: 'bariatric', label: t('quotes.treatment.bariatric') },
    { value: 'checkup', label: t('quotes.treatment.checkup') },
    { value: 'other', label: t('quotes.treatment.other') },
  ];

  const destinations = [
    { value: 'cairo', label: t('quotes.destination.cairo') },
    { value: 'hurghada', label: t('quotes.destination.hurghada') },
    { value: 'sharm', label: t('quotes.destination.sharm') },
    { value: 'alexandria', label: t('quotes.destination.alexandria') },
    { value: 'any', label: t('quotes.destination.any') },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryRef.current && !countryRef.current.contains(event.target as Node)) {
        setShowCountryDropdown(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const countryOptions = [
    { flag: '🇺🇸', code: '+1', country: 'us' },
    { flag: '🇬🇧', code: '+44', country: 'gb' },
    { flag: '🇦🇪', code: '+971', country: 'ae' },
    { flag: '🇸🇦', code: '+966', country: 'sa' },
    { flag: '🇰🇼', code: '+965', country: 'kw' },
    { flag: '🇶🇦', code: '+974', country: 'qa' },
    { flag: '🇧🇭', code: '+973', country: 'bh' },
    { flag: '🇴🇲', code: '+968', country: 'om' },
    { flag: '🇯🇴', code: '+962', country: 'jo' },
    { flag: '🇱🇧', code: '+961', country: 'lb' },
    { flag: '🇮🇶', code: '+964', country: 'iq' },
    { flag: '🇪🇬', code: '+20', country: 'eg' },
    { flag: '🇲🇦', code: '+212', country: 'ma' },
    { flag: '🇹🇳', code: '+216', country: 'tn' },
    { flag: '🇩🇿', code: '+213', country: 'dz' },
    { flag: '🇱🇾', code: '+218', country: 'ly' },
    { flag: '🇫🇷', code: '+33', country: 'fr' },
    { flag: '🇩🇪', code: '+49', country: 'de' },
    { flag: '🇮🇹', code: '+39', country: 'it' },
    { flag: '🇪🇸', code: '+34', country: 'es' },
    { flag: '🇳🇱', code: '+31', country: 'nl' },
    { flag: '🇧🇪', code: '+32', country: 'be' },
    { flag: '🇨🇭', code: '+41', country: 'ch' },
    { flag: '🇦🇹', code: '+43', country: 'at' },
    { flag: '🇸🇪', code: '+46', country: 'se' },
    { flag: '🇳🇴', code: '+47', country: 'no' },
    { flag: '🇩🇰', code: '+45', country: 'dk' },
    { flag: '🇫🇮', code: '+358', country: 'fi' },
    { flag: '🇮🇪', code: '+353', country: 'ie' },
    { flag: '🇵🇹', code: '+351', country: 'pt' },
    { flag: '🇬🇷', code: '+30', country: 'gr' },
    { flag: '🇵🇱', code: '+48', country: 'pl' },
    { flag: '🇷🇴', code: '+40', country: 'ro' },
    { flag: '🇨🇿', code: '+420', country: 'cz' },
    { flag: '🇭🇺', code: '+36', country: 'hu' },
    { flag: '🇷🇺', code: '+7', country: 'ru' },
    { flag: '🇺🇦', code: '+380', country: 'ua' },
    { flag: '🇹🇷', code: '+90', country: 'tr' },
    { flag: '🇮🇳', code: '+91', country: 'in' },
    { flag: '🇵🇰', code: '+92', country: 'pk' },
    { flag: '🇧🇩', code: '+880', country: 'bd' },
    { flag: '🇱🇰', code: '+94', country: 'lk' },
    { flag: '🇨🇳', code: '+86', country: 'cn' },
    { flag: '🇯🇵', code: '+81', country: 'jp' },
    { flag: '🇰🇷', code: '+82', country: 'kr' },
    { flag: '🇲🇾', code: '+60', country: 'my' },
    { flag: '🇸🇬', code: '+65', country: 'sg' },
    { flag: '🇮🇩', code: '+62', country: 'id' },
    { flag: '🇵🇭', code: '+63', country: 'ph' },
    { flag: '🇹🇭', code: '+66', country: 'th' },
    { flag: '🇻🇳', code: '+84', country: 'vn' },
    { flag: '🇦🇺', code: '+61', country: 'au' },
    { flag: '🇳🇿', code: '+64', country: 'nz' },
    { flag: '🇨🇦', code: '+1', country: 'ca' },
    { flag: '🇲🇽', code: '+52', country: 'mx' },
    { flag: '🇧🇷', code: '+55', country: 'br' },
    { flag: '🇦🇷', code: '+54', country: 'ar' },
    { flag: '🇨🇴', code: '+57', country: 'co' },
    { flag: '🇨🇱', code: '+56', country: 'cl' },
    { flag: '🇿🇦', code: '+27', country: 'za' },
    { flag: '🇳🇬', code: '+234', country: 'ng' },
    { flag: '🇰🇪', code: '+254', country: 'ke' },
    { flag: '🇬🇭', code: '+233', country: 'gh' },
    { flag: '🇸🇳', code: '+221', country: 'sn' },
    { flag: '🇨🇮', code: '+225', country: 'ci' },
    { flag: '🇨🇲', code: '+237', country: 'cm' },
    { flag: '🇸🇩', code: '+249', country: 'sd' },
    { flag: '🇪🇹', code: '+251', country: 'et' },
    { flag: '🇮🇱', code: '+972', country: 'il' },
    { flag: '🇬🇪', code: '+995', country: 'ge' },
    { flag: '🇦🇿', code: '+994', country: 'az' },
    { flag: '🇰🇿', code: '+7', country: 'kz' },
    { flag: '🇺🇿', code: '+998', country: 'uz' },
  ];

  const filteredCountryOptions = countryOptions.filter((option) => {
    const search = countrySearch.toLowerCase().replace(/[^\w+]/g, '');
    if (!search) return true;
    return (
      option.code.toLowerCase().includes(search) ||
      option.country.toLowerCase().includes(search)
    );
  });

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F0F7F4] overflow-hidden" id="get-quote">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
            <circle cx="2" cy="2" r="1" fill="#1A5276" />
          </pattern>
          <rect width="100%" height="100%" fill="url(#pattern-circles)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={cn("flex flex-col lg:flex-row gap-12 lg:gap-16 items-start", isRTL && "flex-row-reverse")}>
          
          {/* Left Panel: Trust Signals */}
          <div className="flex-1 lg:pt-8">
            <h2 className={cn("text-4xl md:text-5xl font-heading font-bold text-[#1A5276] mb-6 leading-tight uppercase tracking-[0.2em]", isRTL && "text-right")}>
              {t('quotes.mainHeading')}
              <br className="hidden md:block" />
              {t('quotes.mainSubheading')}
            </h2>
            <p className={cn("text-lg text-[#0F172A]/80 mb-8 max-w-xl font-sans", isRTL && "text-right")}>
              {t('quotes.description')}
            </p>

            <div className="space-y-4 mb-10">
              {trustSignals.map((item, i) => (
                <div key={i} className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
                  <div className="bg-[#27AE60]/10 p-1 rounded-full flex-shrink-0">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <span className={cn("text-[#0F172A] font-medium", isRTL && "text-right")}>{item}</span>
                </div>
              ))}
            </div>

            <div className={cn("bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#1A5276]/10 mb-8 max-w-md", isRTL && "text-right")}>
              <div className={cn("flex gap-4 items-start", isRTL && "flex-row-reverse")}>
                <img 
                  src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGZlbWFsZSUyMGRvY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMwNTk1OHww&ixlib=rb-4.1.0&q=80&w=100" 
                  alt="Patient Testimonial" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm flex-shrink-0"
                />
                <div>
                  <div className={cn("flex gap-1 mb-1", isRTL && "flex-row-reverse justify-end")}>
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className={cn("text-sm text-[#0F172A]/80 italic mb-2", isRTL && "text-right")}>
                    {t('quotes.testimonial')}
                  </p>
                  <p className={cn("text-xs font-bold text-[#1A5276] uppercase tracking-wide", isRTL && "text-right")}>
                    {t('quotes.testimonialAuthor')}
                  </p>
                </div>
              </div>
            </div>

            <div className={cn("flex items-center gap-2 text-sm text-[#0F172A]/60", isRTL && "flex-row-reverse text-right")}>
              <Shield className="w-4 h-4 text-[#1A5276] flex-shrink-0" />
              <span>{t('quotes.privacyStatement')}</span>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className={cn("w-full lg:w-[500px] bg-white rounded-3xl shadow-xl shadow-[#1A5276]/5 p-6 md:p-8 border border-[#1A5276]/10", isRTL && "text-right")}>
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-[#1A5276] mb-2">{t('quotes.successTitle')}</h3>
                <p className="text-[#0F172A]/60 mb-6">{t('quotes.successMessage')}</p>
                <button onClick={() => { setIsSubmitted(false); setFormData({ name: '', email: '', phone: '', countryCode: '+1', treatment: '', destination: '', notes: '' }); setCountrySearch('🇺🇸 +1'); }} className="text-[#1A5276] font-bold hover:underline">
                  {t('quotes.submitAnother')}
                </button>
              </div>
            ) : (
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelName')}</label>
                  <input
                    id="firstName"
                    placeholder={t('quotes.placeholderName')}
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={cn("w-full px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors", isRTL && "text-right")}
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelEmail')}</label>
                  <input
                    id="email"
                    type="email"
                    required
                    placeholder={t('quotes.placeholderEmail')}
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className={cn("w-full px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors", isRTL && "text-right")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelPhone')}</label>
                <div className={cn("flex gap-2", isRTL && "flex-row-reverse")}>
                  {/* Writable + Selectable Country Code Combobox */}
                  <div className="relative" ref={countryRef}>
                    <div className={cn("flex items-center w-[120px] rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus-within:border-[#1A5276] transition-colors", isRTL && "flex-row-reverse")}>
                      <input
                        type="text"
                        value={countrySearch}
                        onChange={(e) => {
                          setCountrySearch(e.target.value);
                          setShowCountryDropdown(true);
                          // If user types a valid dial code, update formData
                          const typed = e.target.value.trim();
                          const match = countryOptions.find(o => `${o.flag} ${o.code}` === typed || o.code === typed);
                          if (match) {
                            setFormData(prev => ({ ...prev, countryCode: match.code }));
                          } else if (typed.startsWith('+')) {
                            setFormData(prev => ({ ...prev, countryCode: typed }));
                          }
                        }}
                        onFocus={() => setShowCountryDropdown(true)}
                        className={cn("w-full px-2 py-2 bg-transparent outline-none text-sm", isRTL && "text-right")}
                        placeholder="+1"
                      />
                      <button
                        type="button"
                        onClick={() => setShowCountryDropdown(!showCountryDropdown)}
                        className="px-1 py-2 text-gray-400 hover:text-gray-600 flex-shrink-0"
                      >
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                    {showCountryDropdown && (
                      <div className={cn("absolute top-full mt-1 w-[200px] max-h-[200px] overflow-y-auto bg-white border border-[#1A5276]/10 rounded-lg shadow-lg z-50", isRTL ? "right-0" : "left-0")}>
                        {filteredCountryOptions.length > 0 ? (
                          filteredCountryOptions.map((option) => (
                            <button
                              key={option.country}
                              type="button"
                              className={cn("w-full px-3 py-2 text-left text-sm hover:bg-[#F0F7F4] transition-colors flex items-center gap-2", isRTL && "flex-row-reverse text-right")}
                              onClick={() => {
                                setCountrySearch(`${option.flag} ${option.code}`);
                                setFormData(prev => ({ ...prev, countryCode: option.code }));
                                setShowCountryDropdown(false);
                              }}
                            >
                              <span>{option.flag}</span>
                              <span className="font-medium">{option.code}</span>
                              <span className="text-gray-400 uppercase text-xs">{option.country}</span>
                            </button>
                          ))
                        ) : (
                          <div className="px-3 py-2 text-sm text-gray-400">No match</div>
                        )}
                      </div>
                    )}
                  </div>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={t('quotes.placeholderPhone')}
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={cn("flex-1 px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors", isRTL && "text-right")}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="treatment" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelTreatment')}</label>
                <div className="relative">
                  <select
                    className={cn("w-full px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors appearance-none", isRTL && "text-right")}
                    value={formData.treatment}
                    onChange={(e) => setFormData({ ...formData, treatment: e.target.value })}
                  >
                    <option value="" disabled>{t('quotes.selectTreatment')}</option>
                    {treatments.map((t) => (
                      <option key={t.value} value={t.value}>{t.label}</option>
                    ))}
                  </select>
                  <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", isRTL && "right-auto left-3")}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="destination" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelDestination')}</label>
                <div className="relative">
                  <select
                    className={cn("w-full px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors appearance-none", isRTL && "text-right")}
                    value={formData.destination}
                    onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  >
                    <option value="" disabled>{t('quotes.selectDestination')}</option>
                    {destinations.map((d) => (
                      <option key={d.value} value={d.value}>{d.label}</option>
                    ))}
                  </select>
                  <div className={cn("absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400", isRTL && "right-auto left-3")}>
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className={cn("text-sm font-medium text-gray-700", isRTL && "text-right block")}>{t('quotes.labelNotes')}</label>
                <textarea
                  id="notes"
                  placeholder={t('quotes.placeholderNotes')}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className={cn("w-full min-h-[80px] px-3 py-2 rounded-lg bg-[#F0F7F4]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors resize-none", isRTL && "text-right")}
                />
              </div>

              {error && (
                <div className={cn("p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm", isRTL && "text-right")}>
                  {error}
                </div>
              )}

              <button type="submit" disabled={isSubmitting} className={cn("w-full bg-[#E85D4A] hover:bg-[#D44C3A] text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-[#E85D4A]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:hover:scale-100", isRTL && "flex-row-reverse")}>
                {isSubmitting ? t('quotes.submitting') : t('quotes.submitButton')}
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>

              <p className={cn("text-xs text-center text-[#0F172A]/50 mt-4", isRTL && "text-right")}>
                {t('quotes.privacyNotice')}
              </p>
            </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
