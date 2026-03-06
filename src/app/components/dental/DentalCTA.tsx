import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { cn } from '../../../lib/utils';
import { Button } from '../ui/button';

export function DentalCTA() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <section className="py-24 bg-[#0F172A] relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-[#C5A059] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-t from-[#0F172A] to-transparent"></div>
      </div>

      <div className={cn("container mx-auto px-6 relative z-10 text-center", isRTL && "text-right")}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-[#F9F6F0] mb-6"
        >
          {t('dentalCta.title')}
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-sans text-xl text-[#F9F6F0]/80 max-w-2xl mx-auto mb-10"
        >
          {t('dentalCta.description')}
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn("flex flex-col sm:flex-row justify-center gap-4", isRTL && "flex-col-reverse sm:flex-row-reverse")}
        >
          <Button
            asChild
            size="lg"
            className="bg-[#C5A059] hover:bg-[#B08D45] text-white font-sans text-lg px-8 py-6 rounded-full"
          >
            <Link to="/consultation">
              {t('dentalCta.getFreeQuote')} <ArrowRight className={cn("ml-2 w-5 h-5", isRTL && "ml-0 mr-2")} />
            </Link>
          </Button>

          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 text-white hover:bg-white/10 hover:text-white font-sans text-lg px-8 py-6 rounded-full"
          >
            <a href="https://wa.me/447988559541?text=Hi%2C%20I%27m%20interested%20in%20dental%20treatment%20in%20Egypt" target="_blank" rel="noopener noreferrer">
              <MessageCircle className={cn("mr-2 w-5 h-5", isRTL && "mr-0 ml-2")} /> {t('dentalCta.whatsappUs')}
            </a>
          </Button>
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-sm text-[#F9F6F0]/40 font-sans"
        >
          {t('dentalCta.noCommitment')}
        </motion.p>
      </div>
    </section>
  );
}
