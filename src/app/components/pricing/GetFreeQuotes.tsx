import React from 'react';
import { Check, Star, Shield, ArrowRight } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';
export function GetFreeQuotes() {
  const { t, language, direction } = useLanguage();

  return (
    <section className="relative w-full py-16 md:py-24 bg-[#F5F0E5] overflow-hidden" id="get-quote">
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
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Panel: Trust Signals */}
          <div className="flex-1 lg:pt-8">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1A5276] mb-6 leading-tight">
              Get Your Free Quote <br className="hidden md:block" />
              in Under 60 Seconds
            </h2>
            <p className="text-lg text-[#0F1923]/80 mb-8 max-w-xl font-sans">
              Compare prices from top-rated clinics. No hidden fees. No obligation.
              Receive a personalized treatment plan from our medical experts.
            </p>

            <div className="space-y-4 mb-10">
              {[
                "10,000+ patients served successfully",
                "300+ verified clinics across Egypt",
                "Avg. 60% savings vs US/UK prices",
                "JCI-accredited partner hospitals"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="bg-[#27AE60]/10 p-1 rounded-full">
                    <Check className="w-5 h-5 text-[#27AE60]" />
                  </div>
                  <span className="text-[#0F1923] font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-[#1A5276]/10 mb-8 max-w-md">
              <div className="flex gap-4 items-start">
                <img 
                  src="https://images.unsplash.com/photo-1659353888906-adb3e0041693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmcmllbmRseSUyMGZlbWFsZSUyMGRvY3RvciUyMHBvcnRyYWl0JTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc3MTMwNTk1OHww&ixlib=rb-4.1.0&q=80&w=100" 
                  alt="Patient Testimonial" 
                  className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <div className="flex gap-1 mb-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} className="w-4 h-4 fill-[#D4AF37] text-[#D4AF37]" />
                    ))}
                  </div>
                  <p className="text-sm text-[#0F1923]/80 italic mb-2">
                    "The process was incredibly smooth. I saved over $12,000 on my dental implants and the quality is outstanding."
                  </p>
                  <p className="text-xs font-bold text-[#1A5276] uppercase tracking-wide">
                    — Sarah Jenkins, UK
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-[#0F1923]/60">
              <Shield className="w-4 h-4 text-[#1A5276]" />
              <span>Your information is 100% secure and never shared without consent.</span>
            </div>
          </div>

          {/* Right Panel: Form */}
          <div className="w-full lg:w-[500px] bg-white rounded-3xl shadow-xl shadow-[#1A5276]/5 p-6 md:p-8 border border-[#1A5276]/10">
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium text-gray-700">Full Name</label>
                  <input 
                    id="firstName" 
                    placeholder="Enter your name" 
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                <div className="flex gap-2">
                  <select 
                    className="w-[110px] px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors appearance-none"
                    defaultValue="us"
                  >
                    <option value="us">🇺🇸 +1</option>
                    <option value="uk">🇬🇧 +44</option>
                    <option value="eu">🇪🇺 +33</option>
                    <option value="de">🇩🇪 +49</option>
                    <option value="ae">🇦🇪 +971</option>
                  </select>
                  <input 
                    id="phone" 
                    type="tel" 
                    placeholder="Phone number" 
                    className="flex-1 px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="treatment" className="text-sm font-medium text-gray-700">Treatment Type</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Select a treatment</option>
                    <option value="implants">Dental Implants</option>
                    <option value="veneers">Dental Veneers</option>
                    <option value="hair">Hair Transplant</option>
                    <option value="rhinoplasty">Rhinoplasty</option>
                    <option value="lasik">LASIK / Eye Surgery</option>
                    <option value="tummy">Tummy Tuck</option>
                    <option value="breast">Breast Augmentation</option>
                    <option value="bariatric">Gastric Sleeve</option>
                    <option value="liposuction">Liposuction</option>
                    <option value="smile">Hollywood Smile</option>
                    <option value="checkup">Full Health Checkup</option>
                    <option value="other">Other / Not Listed</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="destination" className="text-sm font-medium text-gray-700">Preferred Destination</label>
                <div className="relative">
                  <select 
                    className="w-full px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors appearance-none"
                    defaultValue=""
                  >
                    <option value="" disabled>Choose a location</option>
                    <option value="cairo">Cairo (Historical & Medical Hub)</option>
                    <option value="hurghada">Hurghada (Red Sea Resort)</option>
                    <option value="sharm">Sharm El Sheikh (Luxury & Wellness)</option>
                    <option value="alexandria">Alexandria (Mediterranean)</option>
                    <option value="any">No Preference / Recommend Best</option>
                  </select>
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="notes" className="text-sm font-medium text-gray-700">Brief Description (Optional)</label>
                <textarea 
                  id="notes" 
                  placeholder="Tell us about your needs or any questions you have..." 
                  className="w-full min-h-[80px] px-3 py-2 rounded-lg bg-[#F5F0E5]/30 border border-[#1A5276]/10 focus:border-[#1A5276] outline-none transition-colors resize-none" 
                />
              </div>

              <button type="submit" className="w-full bg-[#E85D4A] hover:bg-[#D44C3A] text-white font-bold py-4 text-lg rounded-xl shadow-lg shadow-[#E85D4A]/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                Get My Free Quote
                <ArrowRight className="w-5 h-5" />
              </button>

              <p className="text-xs text-center text-[#0F1923]/50 mt-4">
                By submitting this form, you agree to our privacy policy. We respect your data.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
