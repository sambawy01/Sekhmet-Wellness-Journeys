import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Stethoscope, Video, Plane, HeartPulse, Sparkles, PhoneCall } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: "Inquire & Free Consultation",
    description: "Submit your request online or via WhatsApp. Our medical coordinators will gather your initial information and answer your questions within 24 hours.",
    image: "https://images.unsplash.com/photo-1667424505742-0815a44fdf46?auto=format&fit=crop&q=80&w=800",
    icon: PhoneCall
  },
  {
    id: 2,
    title: "Medical Evaluation & Quote",
    description: "Our specialists review your case and provide a comprehensive treatment plan with a transparent, all-inclusive price quote.",
    image: "https://images.unsplash.com/photo-1758691462667-f2fb90a067ff?auto=format&fit=crop&q=80&w=800",
    icon: Stethoscope
  },
  {
    id: 3,
    title: "Doctor Matching & Video Call",
    description: "Meet your assigned specialist via a secure video call to discuss the procedure, ask questions, and build a personal connection before you travel.",
    image: "https://images.unsplash.com/photo-1758691461916-dc7894eb8f94?auto=format&fit=crop&q=80&w=800",
    icon: Video
  },
  {
    id: 4,
    title: "Travel Planning & Coordination",
    description: "We handle your flights, visa assistance, luxury accommodation, and itinerary planning so you can focus entirely on your health.",
    image: "https://images.unsplash.com/photo-1655722725332-9925c96dd627?auto=format&fit=crop&q=80&w=800",
    icon: Plane
  },
  {
    id: 5,
    title: "Treatment & On-Ground Support",
    description: "Arrive in Egypt with VIP airport pickup. Your personal coordinator accompanies you to all appointments in our world-class facilities.",
    image: "https://images.unsplash.com/photo-1720180244462-648c13ee01e5?auto=format&fit=crop&q=80&w=800",
    icon: HeartPulse
  },
  {
    id: 6,
    title: "Recovery & Egyptian Experiences",
    description: "Recover in luxury at a Red Sea resort or explore ancient wonders with our curated, medically-safe tour packages.",
    image: "https://images.unsplash.com/photo-1771150360122-369106431df1?auto=format&fit=crop&q=80&w=800",
    icon: Sparkles
  },
  {
    id: 7,
    title: "Post-Return Follow-Up",
    description: "Your care continues back home with scheduled telemedicine check-ups to ensure your long-term health and satisfaction.",
    image: "https://images.unsplash.com/photo-1653212883766-132e1977a4b1?auto=format&fit=crop&q=80&w=800",
    icon: Calendar
  }
];

export function Timeline() {
  return (
    <section className="py-24 bg-[#FAF6EF] relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-6"
          >
            Your Path to Wellness
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 100 }}
            viewport={{ once: true }}
            className="h-1 bg-[#C5A059] mx-auto"
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
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 text-center md:text-left">
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-start' : 'md:items-end'}`}>
                    <div className="flex items-center gap-4 mb-4 justify-center md:justify-start">
                      <div className="w-12 h-12 rounded-full bg-[#C5A059] text-white flex items-center justify-center font-bold text-xl font-['Space_Mono'] shadow-lg">
                        {step.id}
                      </div>
                      <h3 className="font-['Playfair_Display'] text-2xl md:text-3xl font-bold text-[#0F1923]">
                        {step.title}
                      </h3>
                    </div>
                    
                    <p className={`font-['DM_Sans'] text-lg text-[#0F1923]/70 leading-relaxed max-w-lg ${
                      index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                    }`}>
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Center Dot (Desktop only) */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#C5A059] rounded-full border-4 border-[#FAF6EF] hidden md:block z-10" />

                {/* Image Side */}
                <div className="flex-1 w-full md:w-1/2">
                  <div className="relative group overflow-hidden rounded-2xl shadow-xl aspect-video">
                    <div className="absolute inset-0 bg-[#0F1923]/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <img 
                      src={step.image} 
                      alt={step.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full z-20 text-[#C5A059]">
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
