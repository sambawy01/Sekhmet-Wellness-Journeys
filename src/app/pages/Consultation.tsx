import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Check, Upload, Calendar, ArrowRight, ArrowLeft, Star, ShieldCheck, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { submitLead } from '../../lib/supabase';
import { useLanguage } from '../context/LanguageContext';
import { cn } from '../../lib/utils';

const steps = [
  { id: 1, key: 'consultation.step.treatment' },
  { id: 2, key: 'consultation.step.procedure' },
  { id: 3, key: 'consultation.step.records' },
  { id: 4, key: 'consultation.step.details' },
  { id: 5, key: 'consultation.step.schedule' }
];

const treatmentIds = [
  { id: 'dental', icon: '🦷', key: 'consultation.treatment.dental' },
  { id: 'vision', icon: '👁️', key: 'consultation.treatment.vision' },
  { id: 'fertility', icon: '👶', key: 'consultation.treatment.fertility' },
  { id: 'cosmetic', icon: '✨', key: 'consultation.treatment.cosmetic' },
  { id: 'wellness', icon: '🌿', key: 'consultation.treatment.wellness' },
  { id: 'checkups', icon: '🩺', key: 'consultation.treatment.checkups' },
];

const procedures: Record<string, string[]> = {
  dental: ['hollywaySmile', 'dentalImplants', 'veneers', 'allOn4', 'crowns', 'rootCanal', 'whitening', 'fullMouth', 'wisdomTooth', 'gumTreatment'],
  vision: ['lasik', 'prk', 'cataract', 'lensImplant', 'glaucoma', 'retina', 'cornealCross'],
  fertility: ['ivf', 'icsi', 'eggFreezing', 'embryoFreezing', 'iui', 'maleInfertility', 'geneticScreening', 'donorPrograms'],
  cosmetic: ['rhinoplasty', 'breastAugmentation', 'breastReduction', 'liposuction', 'tummyTuck', 'facelift', 'eyelidSurgery', 'bbl', 'mommyMakeover', 'otoplasty'],
  wellness: ['hairTransplant', 'weightLossSurgery', 'spaRecovery', 'physiotherapy', 'antiAging'],
  checkups: ['fullBodyCheckup', 'executiveHealth', 'cancerScreening', 'cardiacCheckup', 'womensHealth', 'mensHealth'],
};

const procedureKeyMap: Record<string, Record<string, string>> = {
  dental: {
    'hollywaySmile': 'consultation.procedure.dental.hollywaySmile',
    'dentalImplants': 'consultation.procedure.dental.dentalImplants',
    'veneers': 'consultation.procedure.dental.veneers',
    'allOn4': 'consultation.procedure.dental.allOn4',
    'crowns': 'consultation.procedure.dental.crowns',
    'rootCanal': 'consultation.procedure.dental.rootCanal',
    'whitening': 'consultation.procedure.dental.whitening',
    'fullMouth': 'consultation.procedure.dental.fullMouth',
    'wisdomTooth': 'consultation.procedure.dental.wisdomTooth',
    'gumTreatment': 'consultation.procedure.dental.gumTreatment',
  },
  vision: {
    'lasik': 'consultation.procedure.vision.lasik',
    'prk': 'consultation.procedure.vision.prk',
    'cataract': 'consultation.procedure.vision.cataract',
    'lensImplant': 'consultation.procedure.vision.lensImplant',
    'glaucoma': 'consultation.procedure.vision.glaucoma',
    'retina': 'consultation.procedure.vision.retina',
    'cornealCross': 'consultation.procedure.vision.cornealCross',
  },
  fertility: {
    'ivf': 'consultation.procedure.fertility.ivf',
    'icsi': 'consultation.procedure.fertility.icsi',
    'eggFreezing': 'consultation.procedure.fertility.eggFreezing',
    'embryoFreezing': 'consultation.procedure.fertility.embryoFreezing',
    'iui': 'consultation.procedure.fertility.iui',
    'maleInfertility': 'consultation.procedure.fertility.maleInfertility',
    'geneticScreening': 'consultation.procedure.fertility.geneticScreening',
    'donorPrograms': 'consultation.procedure.fertility.donorPrograms',
  },
  cosmetic: {
    'rhinoplasty': 'consultation.procedure.cosmetic.rhinoplasty',
    'breastAugmentation': 'consultation.procedure.cosmetic.breastAugmentation',
    'breastReduction': 'consultation.procedure.cosmetic.breastReduction',
    'liposuction': 'consultation.procedure.cosmetic.liposuction',
    'tummyTuck': 'consultation.procedure.cosmetic.tummyTuck',
    'facelift': 'consultation.procedure.cosmetic.facelift',
    'eyelidSurgery': 'consultation.procedure.cosmetic.eyelidSurgery',
    'bbl': 'consultation.procedure.cosmetic.bbl',
    'mommyMakeover': 'consultation.procedure.cosmetic.mommyMakeover',
    'otoplasty': 'consultation.procedure.cosmetic.otoplasty',
  },
  wellness: {
    'hairTransplant': 'consultation.procedure.wellness.hairTransplant',
    'weightLossSurgery': 'consultation.procedure.wellness.weightLossSurgery',
    'spaRecovery': 'consultation.procedure.wellness.spaRecovery',
    'physiotherapy': 'consultation.procedure.wellness.physiotherapy',
    'antiAging': 'consultation.procedure.wellness.antiAging',
  },
  checkups: {
    'fullBodyCheckup': 'consultation.procedure.checkups.fullBodyCheckup',
    'executiveHealth': 'consultation.procedure.checkups.executiveHealth',
    'cancerScreening': 'consultation.procedure.checkups.cancerScreening',
    'cardiacCheckup': 'consultation.procedure.checkups.cardiacCheckup',
    'womensHealth': 'consultation.procedure.checkups.womensHealth',
    'mensHealth': 'consultation.procedure.checkups.mensHealth',
  },
};

export function Consultation() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const nextStep = () => setCurrentStep(prev => Math.min(prev + 1, 5));
  const prevStep = () => setCurrentStep(prev => Math.max(prev - 1, 1));

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      await submitLead({
        name: formData.name,
        email: formData.email,
        phone: formData.phone || undefined,
        treatment_interest: formData.treatment ? `${formData.treatment}${formData.procedure ? ' - ' + formData.procedure : ''}` : undefined,
        message: formData.notes || undefined,
        preferred_dates: formData.dateRange || undefined,
        passport_country: formData.country || undefined,
        source_form: 'consultation',
      });
      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || t('consultation.errorGeneric'));
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateForm = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#F0F7F4] flex items-center justify-center p-6 pt-24">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className={cn("bg-white p-12 rounded-2xl shadow-xl max-w-2xl text-center border-t-4 border-[#C5A059]", isRTL && "rtl")}
        >
          <div className="w-24 h-24 bg-[#14B8A6]/10 rounded-full flex items-center justify-center mx-auto mb-6">
             <CheckCircle className="w-12 h-12 text-[#14B8A6]" />
          </div>
          <h2 className="font-['Playfair_Display'] text-4xl font-bold text-[#0F172A] mb-4">{t('consultation.requestReceived')}</h2>
          <p className={cn("font-sans text-xl text-[#0F172A]/70 mb-8", isRTL && "text-right")}>
            {t('consultation.thankYou').replace('{name}', formData.name).replace('{method}', formData.contactMethod)}
          </p>
          <div className={cn("flex flex-col sm:flex-row justify-center gap-4", isRTL && "flex-row-reverse")}>
            <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-4">
              <a href="https://wa.me/447988559541" target="_blank" rel="noopener noreferrer" className={cn("flex items-center gap-2", isRTL && "flex-row-reverse")}>
                {t('consultation.chatWhatsApp')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
            <Button asChild variant="outline" className="border-[#0F172A]/20 rounded-full px-8 py-4">
              <Link to="/">{t('consultation.backToHome')}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className={cn("min-h-screen bg-[#F0F7F4] pt-20 flex flex-col md:flex-row", isRTL && "rtl")}>
      {/* Left Side - Form */}
      <div className={cn("w-full md:w-3/5 p-6 md:p-12 lg:p-16 flex flex-col", isRTL && "text-right")}>
        <div className="mb-8">
          <h1 className="font-['Playfair_Display'] text-3xl md:text-4xl font-bold text-[#0F172A] mb-2">
            {t('consultation.startJourney')}
          </h1>
          <p className="font-sans text-[#0F172A]/60">
            {t('consultation.tellUsNeeds')}
          </p>
        </div>

        {/* Progress Bar */}
        <div className="mb-10">
          <div className={cn("flex justify-between mb-2", isRTL && "flex-row-reverse")}>
            {steps.map((step) => (
              <div 
                key={step.id}
                className={`text-xs font-bold uppercase tracking-wider ${
                  step.id <= currentStep ? 'text-[#C5A059]' : 'text-[#0F172A]/20'
                }`}
              >
                {t(step.key)}
              </div>
            ))}
          </div>
          <div className="h-1 bg-[#0F172A]/10 w-full rounded-full overflow-hidden">
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
                className={cn("grid grid-cols-2 gap-4", isRTL && "flex-row-reverse")}
              >
                {treatmentIds.map((treatment) => (
                  <button
                    key={treatment.id}
                    onClick={() => {
                      updateForm('treatment', treatment.id);
                      nextStep();
                    }}
                    className={cn("p-6 rounded-xl border-2 text-left transition-all hover:shadow-md", 
                      isRTL && "text-right",
                      formData.treatment === treatment.id 
                        ? 'border-[#C5A059] bg-[#F0F7F4]' 
                        : 'border-[#0F172A]/10 bg-white hover:border-[#C5A059]/50'
                    )}
                  >
                    <span className="text-3xl mb-2 block">{treatment.icon}</span>
                    <span className="font-bold text-[#0F172A]">{t(treatment.key)}</span>
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
                <h3 className={cn("text-xl font-bold mb-4", isRTL && "text-right")}>
                  {t('consultation.selectProcedure')} {t(`consultation.treatment.${formData.treatment}`)}
                </h3>
                <div className={cn("grid grid-cols-1 md:grid-cols-2 gap-4", isRTL && "flex-row-reverse")}>
                  {procedures[formData.treatment as keyof typeof procedures]?.map((procedureKey) => {
                    const translationKey = procedureKeyMap[formData.treatment as keyof typeof procedureKeyMap]?.[procedureKey] || '';
                    return (
                      <button
                        key={procedureKey}
                        onClick={() => {
                          updateForm('procedure', procedureKey);
                          nextStep();
                        }}
                        className={cn("p-4 rounded-xl border-2 text-left transition-all", 
                          isRTL && "text-right",
                          formData.procedure === procedureKey 
                            ? 'border-[#C5A059] bg-[#F0F7F4]' 
                            : 'border-[#0F172A]/10 bg-white hover:border-[#C5A059]/50'
                        )}
                      >
                        <span className="font-medium text-[#0F172A]">{t(translationKey)}</span>
                      </button>
                    );
                  })}
                </div>
                <button 
                  onClick={prevStep} 
                  className={cn("text-[#0F172A]/50 hover:text-[#0F172A] mt-4 flex items-center gap-2", isRTL && "flex-row-reverse")}
                >
                  <ArrowLeft className="w-4 h-4" /> {t('consultation.back')}
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
                <div className="border-2 border-dashed border-[#C5A059]/50 rounded-xl p-10 text-center bg-[#F0F7F4] hover:bg-[#F0F7F4] transition-colors cursor-pointer group">
                  <Upload className="w-10 h-10 text-[#C5A059] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <p className="font-bold text-[#0F172A] mb-2">{t('consultation.uploadTitle')}</p>
                  <p className="text-[#0F172A]/50 text-sm mb-6">{t('consultation.uploadDesc')}</p>
                  <Button variant="outline" className="border-[#C5A059] text-[#C5A059]">{t('consultation.chooseFiles')}</Button>
                </div>
                
                <div className={cn("flex justify-between mt-8", isRTL && "flex-row-reverse")}>
                  <Button variant="ghost" onClick={prevStep}>{t('consultation.back')}</Button>
                  <Button onClick={nextStep} className="bg-[#0F172A] text-white">{t('consultation.skipContinue')}</Button>
                </div>
              </motion.div>
            )}

            {currentStep === 4 && (
              <motion.div 
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className={cn("space-y-6", isRTL && "text-right")}
              >
                <div className="space-y-2">
                  <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.form.name')}</label>
                  <input 
                    type="text" 
                    className={cn("w-full p-4 rounded-xl border border-[#0F172A]/10 bg-white focus:outline-none focus:border-[#C5A059]", isRTL && "text-right")}
                    placeholder={t('consultation.enterName')}
                    value={formData.name}
                    onChange={(e) => updateForm('name', e.target.value)}
                  />
                </div>
                <div className={cn("grid grid-cols-2 gap-4", isRTL && "flex-row-reverse")}>
                  <div className="space-y-2">
                    <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.form.email')}</label>
                    <input 
                      type="email" 
                      className={cn("w-full p-4 rounded-xl border border-[#0F172A]/10 bg-white focus:outline-none focus:border-[#C5A059]", isRTL && "text-right")}
                      placeholder="name@example.com"
                      value={formData.email}
                      onChange={(e) => updateForm('email', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.form.phone')}</label>
                    <input 
                      type="tel" 
                      className={cn("w-full p-4 rounded-xl border border-[#0F172A]/10 bg-white focus:outline-none focus:border-[#C5A059]", isRTL && "text-right")}
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => updateForm('phone', e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                   <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.preferredContact')}</label>
                   <div className={cn("flex gap-2", isRTL && "flex-row-reverse")}>
                     {['whatsapp', 'email', 'phone'].map((method) => (
                       <label 
                         key={method} 
                         className={cn("flex-1 flex items-center justify-center gap-2 cursor-pointer py-3 px-4 rounded-full border transition-all", 
                           isRTL && "flex-row-reverse",
                           formData.contactMethod === method 
                             ? 'bg-[#0F172A] text-white border-[#0F172A]' 
                             : 'bg-white text-[#0F172A] border-[#0F172A]/10 hover:border-[#C5A059]'
                         )}
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

                <div className={cn("flex justify-between mt-8", isRTL && "flex-row-reverse")}>
                  <Button variant="ghost" onClick={prevStep}>{t('consultation.back')}</Button>
                  <Button 
                    onClick={nextStep} 
                    className="bg-[#0F172A] text-white"
                    disabled={!formData.name || !formData.email}
                  >
                    {t('consultation.continue')}
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
                className={cn("space-y-6", isRTL && "text-right")}
              >
                <div className="space-y-2">
                  <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.preferredDates')}</label>
                  <input 
                    type="date" 
                    className={cn("w-full p-4 rounded-xl border border-[#0F172A]/10 bg-white focus:outline-none focus:border-[#C5A059]", isRTL && "text-right")}
                    value={formData.dateRange}
                    onChange={(e) => updateForm('dateRange', e.target.value)}
                  />
                </div>
                
                <div className="space-y-2">
                  <label className={cn("text-sm font-bold text-[#0F172A]", isRTL && "block text-right")}>{t('consultation.additionalNotes')}</label>
                  <textarea 
                    className={cn("w-full p-4 rounded-xl border border-[#0F172A]/10 bg-white h-32 focus:outline-none focus:border-[#C5A059]", isRTL && "text-right")}
                    placeholder={t('consultation.notesPlaceholder')}
                    value={formData.notes}
                    onChange={(e) => updateForm('notes', e.target.value)}
                  />
                </div>

                {error && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                    {error}
                  </div>
                )}

                <div className={cn("flex justify-between mt-8", isRTL && "flex-row-reverse")}>
                  <Button variant="ghost" onClick={prevStep}>{t('consultation.back')}</Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-[#C5A059] hover:bg-[#B08D55] text-white px-8 py-6 rounded-full text-lg shadow-lg hover:shadow-xl transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? t('consultation.submitting') : t('consultation.getQuote')}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Trust Content */}
      <div className={cn("hidden md:block w-2/5 bg-[#0F172A] text-white p-12 lg:p-16 relative overflow-hidden", isRTL && "rtl")}>
        {/* Decorative Background */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
        
        <div className={cn("relative z-10 h-full flex flex-col justify-between", isRTL && "text-right")}>
          <div>
            <h3 className="font-['Playfair_Display'] text-3xl font-bold mb-8">{t('consultation.whyChoose')}</h3>
            
            <div className="space-y-8">
              <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <ShieldCheck className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <h4 className="font-bold text-lg mb-1">{t('consultation.accredited')}</h4>
                  <p className="text-white/60 text-sm">{t('consultation.accreditedDesc')}</p>
                </div>
              </div>

              <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <Clock className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <h4 className="font-bold text-lg mb-1">{t('consultation.responseGuarantee')}</h4>
                  <p className="text-white/60 text-sm">{t('consultation.responseGuaranteeDesc')}</p>
                </div>
              </div>
              
              <div className={cn("flex gap-4", isRTL && "flex-row-reverse")}>
                <div className="bg-[#C5A059]/20 p-3 rounded-full h-fit">
                  <Star className="w-6 h-6 text-[#C5A059]" />
                </div>
                <div className={isRTL ? "text-right" : ""}>
                  <h4 className="font-bold text-lg mb-1">{t('consultation.luxuryExperience')}</h4>
                  <p className="text-white/60 text-sm">{t('consultation.luxuryExperienceDesc')}</p>
                </div>
              </div>
            </div>
          </div>

          <div className={cn("bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 mt-12", isRTL && "text-right")}>
            <div className={cn("flex items-center gap-1 text-[#C5A059] mb-3", isRTL && "flex-row-reverse justify-end")}>
              {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
            </div>
            <p className="text-white/90 italic mb-4">
              "{t('consultation.testimonial')}"
            </p>
            <div className={cn("flex items-center gap-3", isRTL && "flex-row-reverse")}>
              <img 
                src="https://images.unsplash.com/photo-1544187702-067d81860901?auto=format&fit=crop&q=80&w=100" 
                alt="Patient" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div className={isRTL ? "text-right" : ""}>
                <p className="font-bold text-sm">{t('consultation.testimonialAuthor')}</p>
                <p className="text-xs text-white/50">{t('consultation.testimonialRole')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
