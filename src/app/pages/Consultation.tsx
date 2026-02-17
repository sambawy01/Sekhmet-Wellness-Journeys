import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Upload, Calendar, ArrowRight, ArrowLeft, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

import { useLanguage } from '../context/LanguageContext';
const steps = [
  { id: 1, title: "Treatment" },
  { id: 2, title: "Procedure" },
  { id: 3, title: "Records" },
  { id: 4, title: "Details" },
  { id: 5, title: "Schedule" }
];

const treatments = [
  { id: 'dental', name: 'Dental Care', icon: '🦷' },
  { id: 'vision', name: 'Vision Correction', icon: '👁️' },
  { id: 'cosmetic', name: 'Cosmetic Surgery', icon: '✨' },
  { id: 'checkups', name: 'Health Checkups', icon: '🩺' },
  { id: 'ivf', name: 'IVF & Fertility', icon: '👶' },
];

const procedures = {
  dental: ['Implants', 'Veneers', 'Hollywood Smile', 'Whitening'],
  vision: ['LASIK', 'Cataract', 'Retina', 'Glaucoma'],
  cosmetic: ['Rhinoplasty', 'Liposuction', 'Breast Augmentation', 'Facelift'],
  checkups: ['Full Body', 'Cancer Screening', 'Heart Health', 'Executive Checkup'],
  ivf: ['IVF Cycle', 'Egg Freezing', 'ICSI', 'Genetic Testing'],
};

export function Consultation() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    treatment: '',
    procedure: '',
    files: [],
    name: '',
    email: '',
    phone: '',
    country: '',
    contactMethod: 'whatsapp',
    dateRange: '',
    notes: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = (e) => {
  const { t, direction } = useLanguage();
    e.preventDefault();
    setIsSubmitted(true);
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F5F0E5] flex items-center justify-center p-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-2xl shadow-xl max-w-2xl text-center border-t-4 border-[#C5A059]"
        >
          <div className="w-24 h-24 bg-[#1B7A6E]/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle className="w-12 h-12 text-[#1B7A6E]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F1923] mb-4">Request Received!</h2>
          <p className="font-['DM_Sans'] text-xl text-[#0F1923]/70 mb-8">
            Thank you, {formData.name}. Your personal medical coordinator will contact you within 24 hours via {formData.contactMethod}.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-4">
              <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                Chat on WhatsApp Now
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#0F1923]/20 rounded-full px-8 py-4">
              <Link to="/">Back to Home</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F5F0E5] pt-20 flex flex-col md:flex-row">
      {/* Left Side - Form */}
      <div className="w-full md:w-3/5 p-6 md:p-12 lg:p-16 flex flex-col">
        <div className="mb-8">
          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F1923] mb-2">
            Start Your Journey
          </h1>
          <p className="font-['DM_Sans'] text-[#0F1923]/60">
            Tell us about your needs and get a personalized quote.
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`text-xs font-bold uppercase tracking-wider ${
                  step.id <= currentStep ? 'text-[#C5A059]' : 'text-[#0F1923]/20'
                }`}
              >
                {step.title}
              </div>
            ))}
          </div>
          <div className="h-1 bg-[#0F1923]/10 w-full rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-[#C5A059]"
              initial={{ width: 0 }}
              animate={{ width: `${(currentStep / 5) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Form Steps */}
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            {currentStep === 1 && (
              <motion.div 
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid grid-cols-2 gap-4"
              >
                {treatments.map((t) => (
                  <button
                    key={t.id}
                    onClick={() => {
                      updateForm('treatment', t.id);
                      nextStep();
                    }}
                    className={`p-6 rounded-xl border-2 text-left transition-all hover:shadow-md ${
                      formData.treatment === t.id 
                        ? 'border-[#C5A059] bg-[#FAF6EF]' 
                        : 'border-[#0F1923]/10 bg-white hover:border-[#C5A059]/50'
                    }`}
                  >
                    <span className="text-3xl mb-2 block">{t.icon}</span>
                    <span className="font-bold text-[#0F1923]">{t.name}</span>
                  </button>
                ))}
              </motion.div>
            )}

            {currentStep === 2 && (
              <motion.div 
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-4"
              >
                <h3 className="text-xl font-bold mb-4">Select Procedure for {formData.treatment}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {procedures[formData.treatment as keyof typeof procedures]?.map((proc) => (
                    <button
                      key={proc}
                      onClick={() => {
                        updateForm('procedure', proc);
                        nextStep();
                      }}
                      className={`p-4 rounded-xl border-2 text-left transition-all ${
                        formData.procedure === proc 
                          ? 'border-[#C5A059] bg-[#FAF6EF]' 
                          : 'border-[#0F1923]/10 bg-white hover:border-[#C5A059]/50'
                      }`}
                    >
                      <span className="font-medium text-[#0F1923]">{proc}</span>
                    </button>
                  ))}
                </div>
                <button onClick={prevStep} className="text-[#0F1923]/50 hover:text-[#0F1923] mt-4 flex items-center gap-2">
                  <ArrowLeft className="w-4 h-4" /> Back
                </button>
              </motion.div>
            )}

            {currentStep === 3 && (
              <motion.div 
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <div className="border-2 border-dashed border-[#C5A059]/50 rounded-xl p-10 text-center bg-[#FAF6EF] hover:bg-[#F5F0E5] transition-colors cursor-pointer group">
                  <Upload className="w-10 h-10 text-[#C5A059] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-[#0F1923] mb-2">Upload Medical Records or Photos</p>
                  <p className="text-[#0F1923]/50 text-sm mb-6">Drag and drop files here, or click to browse (Optional)</p>
                  <Button variant="outline" className="border-[#C5A059] text-[#C5A059]">Choose Files</Button>
                </div>
                
                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={prevStep}>Back</Button>
                  <Button onClick={nextStep} className="bg-[#0F1923] text-white">Skip / Continue</Button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F1923]">Full Name</label>
                  <input 
                    type="text" 
                    className="w-full p-4 rounded-xl border border-[#0F1923]/10 bg-white focus:outline-none focus:border-[#C5A059]"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F1923]">Email</label>
                    <input 
                      type="email" 
                      className="w-full p-4 rounded-xl border border-[#0F1923]/10 bg-white focus:outline-none focus:border-[#C5A059]"
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-[#0F1923]">Phone</label>
                    <input 
                      type="tel" 
                      className="w-full p-4 rounded-xl border border-[#0F1923]/10 bg-white focus:outline-none focus:border-[#C5A059]"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className="text-sm font-bold text-[#0F1923]">Preferred Contact Method</label>
                   <div className="flex gap-2">
                     {['whatsapp', 'email', 'phone'].map((method) => (
                       <label 
                         key={method} 
                         className={`flex-1 flex items-center justify-center gap-2 cursor-pointer py-3 px-4 rounded-full border transition-all ${
                           formData.contactMethod === method 
                             ? 'bg-[#0F1923] text-white border-[#0F1923]' 
                             : 'bg-white text-[#0F1923] border-[#0F1923]/10 hover:border-[#C5A059]'
                         }`}
                       >
                         <input 
                           type="radio" 
                           name="contact" 
                           value={method}
                           checked={formData.contactMethod === method}
                           onChange={(e) => updateForm('contactMethod', e.target.value)}
                           className="hidden"
                         />
                         <span className="capitalize font-bold text-sm">{method}</span>
                       </label>
                     ))}
                   </div>
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={prevStep}>Back</Button>
                  <Button 
                    onClick={nextStep} 
                    className="bg-[#0F1923] text-white"
                    disabled={!formData.name || !formData.email}
                  >
                    Continue
                  </Button>
                </div>
              </motion.div>
            )}

            {currentStep === 5 && (
              <motion.div 
                key="step5"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F1923]">Preferred Travel Dates</label>
                  <input 
                    type="date" 
                    className="w-full p-4 rounded-xl border border-[#0F1923]/10 bg-white focus:outline-none focus:border-[#C5A059]"
                    value={formData.dateRange}
                    onChange={(e) => updateForm('dateRange', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="text-sm font-bold text-[#0F1923]">Additional Notes</label>
                  <textarea 
                    className="w-full p-4 rounded-xl border border-[#0F1923]/10 bg-white h-32 focus:outline-none focus:border-[#C5A059]"
                    placeholder="Tell us about your medical history or specific requirements..."
                    value={formData.notes}
                    onChange={(e) => updateForm('notes', e.target.value)}
                  />
                </div>

                <div className="flex justify-between mt-8">
                  <Button variant="ghost" onClick={prevStep}>Back</Button>
                  <Button 
                    onClick={handleSubmit} 
                    className="bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all"
                  >
                    Get My Free Quote
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Trust Content */}
      <div className="hidden md:block w-2/5 bg-[#0F1923] text-white p-12 lg:p-16 relative overflow-hidden">
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className="relative z-10 h-full flex flex-col justify-between">
          <div>
            <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-8">Why 10,000+ Patients Choose Sekhmet</h3>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Internationally Accredited</h4>
                  <p className="text-white/60 text-sm">All our partner hospitals are JCI accredited and ISO certified.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <Clock className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">24-Hour Response Guarantee</h4>
                  <p className="text-white/60 text-sm">Receive a personalized treatment plan and quote within one day.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <Star className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">Luxury Experience</h4>
                  <p className="text-white/60 text-sm">5-star accommodation and VIP airport transfers included.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-12">
            <div className="flex items-center gap-1 text-[#C5A059] mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-white/90 italic mb-4">
              "The team at Sekhmet handled everything. I just showed up and focused on my recovery. Truly a world-class experience."
            </p>
            <div className="flex items-center gap-3">
              <img 
                src="https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=100" 
                alt="Patient" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-sm">Emily Roberts</p>
                <p className="text-xs text-white/50">Dental Implant Patient, UK</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
