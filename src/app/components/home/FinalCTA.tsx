import React from 'react';
import { MessageCircle, CalendarCheck, Phone, Mail } from 'lucide-react';
import { IconAnkh } from '../EgyptianIcons';

export const FinalCTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-[#C9A84C] to-[#B3933C] py-24 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230F1923' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Decorative Ankh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.05] pointer-events-none">
        <IconAnkh className="w-[600px] h-[600px] text-[#0F1923]" />
      </div>

      <div className="container mx-auto px-6 max-w-[1440px] relative z-10 text-center">
        <div 
          className="max-w-3xl mx-auto space-y-8 opacity-0 animate-fade-in-up"
          style={{ animationFillMode: 'forwards' }}
        >
          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] leading-tight">
            Your Journey Starts With a Conversation
          </h2>
          
          <p className="font-['DM_Sans'] text-xl text-[#0F1923]/80 leading-relaxed font-medium">
            Get a free, no-obligation consultation and personalized quote within 24 hours. We'll handle the rest.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
            <button className="bg-[#0F1923] text-white px-8 py-4 rounded-full font-['DM_Sans'] font-bold text-lg hover:bg-white hover:text-[#0F1923] transition-all duration-300 shadow-xl flex items-center gap-3 group min-w-[260px] justify-center">
              <CalendarCheck className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book Free Consultation
            </button>
            
            <button className="bg-[#25D366] text-white px-8 py-4 rounded-full font-['DM_Sans'] font-bold text-lg hover:bg-white hover:text-[#25D366] transition-all duration-300 shadow-xl flex items-center gap-3 group min-w-[260px] justify-center">
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              WhatsApp Us Now
            </button>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 pt-8 text-[#0F1923] font-['DM_Sans'] text-sm font-medium">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 opacity-70" />
              <span>+20 100 123 4567</span>
            </div>
            <div className="hidden md:block w-1 h-1 bg-[#0F1923] rounded-full opacity-30" />
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 opacity-70" />
              <span>care@sekhmet.com</span>
            </div>
          </div>

        </div>
      </div>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translate3d(0, 30px, 0);
          }
          to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }
        }
        .animate-fade-in-up {
          animation-name: fadeInUp;
          animation-duration: 0.8s;
          animation-fill-mode: forwards;
        }
      `}</style>
    </section>
  );
};
