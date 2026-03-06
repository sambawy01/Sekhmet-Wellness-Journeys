import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Stethoscope, Video, Plane, HeartPulse, Sparkles, PhoneCall } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const steps = [
  {
    id: 1,
    titleKey: "hiw.timeline.step1.title",
    descriptionKey: "hiw.timeline.step1.description",
    image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&q=80&w=800",
    icon: PhoneCall
  },
  {
    id: 2,
    titleKey: "hiw.timeline.step2.title",
    descriptionKey: "hiw.timeline.step2.description",
    image: "https://images.unsplash.com/photo-1758691462667-f2fb90a067ff?auto=format&fit=crop&q=80&w=800",
    icon: Stethoscope
  },
  {
    id: 3,
    titleKey: "hiw.timeline.step3.title",
    descriptionKey: "hiw.timeline.step3.description",
    image: "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?auto=format&fit=crop&q=80&w=800",
    icon: Video
  },
  {
    id: 4,
    titleKey: "hiw.timeline.step4.title",
    descriptionKey: "hiw.timeline.step4.description",
    image: "https://images.unsplash.com/photo-1655722725332-9925c96dd627?auto=format&fit=crop&q=80&w=800",
    icon: Plane
  },
  {
    id: 5,
    titleKey: "hiw.timeline.step5.title",
    descriptionKey: "hiw.timeline.step5.description",
    image: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=800",
    icon: HeartPulse
  },
  {
    id: 6,
    titleKey: "hiw.timeline.step6.title",
    descriptionKey: "hiw.timeline.step6.description",
    image: "https://images.unsplash.com/photo-1771150360122-369106431df1?auto=format&fit=crop&q=80&w=800",
    icon: Sparkles
  },
  {
    id: 7,
    titleKey: "hiw.timeline.step7.title",
    descriptionKey: "hiw.timeline.step7.description",
    image: "https://images.unsplash.com/photo-1653212883766-132e1977a4b1?auto=format&fit=crop&q=80&w=800",
    icon: Calendar
  }
];

export function Timeline() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section id="process-timeline" className="py-24 bg-[#F0F7F4] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center mb-20 ${isRTL ? 'text-right' : ''}`}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-4xl md:text-5xl font-bold text-[#0F172A] mb-6"
          >
            {t('hiw.timeline.heading')}
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className={`h-1 bg-[#C5A059] ${isRTL ? 'ml-auto' : 'mx-auto'}`}
          />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-[#C5A059]/30 hidden md:block" />

          <div className="space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-10 ${
                  index % 2 === 0 ? (isRTL ? '' : 'md:flex-row-reverse') : (isRTL ? 'md:flex-row-reverse' : '')
                }`}
              >
                {/* Content Side */}
                <div className={`flex-1 w-full md:w-1/2 text-center ${isRTL ? 'md:text-right' : 'md:text-left'}`}>
                  <div className={`flex flex-col ${
                    index % 2 === 0
                      ? (isRTL ? 'md:items-end' : 'md:items-start')
                      : (isRTL ? 'md:items-start' : 'md:items-end')
                  }`}>
                    <div className={`flex items-center gap-4 mb-4 justify-center ${
                      index % 2 === 0
                        ? (isRTL ? 'md:justify-end' : 'md:justify-start')
                        : (isRTL ? 'md:justify-start' : 'md:justify-end')
                    } ${isRTL ? 'flex-row-reverse' : ''}`}>
                      <div className="w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-xl font-heading shadow-lg">
                        {step.id}
                      </div>
                      <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#0F172A]">
                        {t(step.titleKey)}
                      </h3>
                    </div>

                    <p className={`font-sans text-lg text-[#0F172A]/70 leading-relaxed max-w-lg ${
                      index % 2 === 0
                        ? (isRTL ? 'md:text-right' : 'md:text-left')
                        : (isRTL ? 'md:text-left' : 'md:text-right')
                    }`}>
                      {t(step.descriptionKey)}
                    </p>
                  </div>
                </div>

                {/* Center Dot (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#C5A059] rounded-full border-4 border-[#F0F7F4] hidden md:block z-10" />

                {/* Image Side */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-video">
                    <div className="absolute inset-0 bg-[#0F172A]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img
                      src={step.image}
                      alt={t(step.titleKey)}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className={`absolute bottom-4 ${isRTL ? 'left-4' : 'right-4'} bg-white/90 backdrop-blur-sm p-3 rounded-full z-20 text-[#C5A059]`}>
                      <step.icon className="w-6 h-6" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
