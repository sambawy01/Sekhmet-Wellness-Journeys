import React from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { cn } from '../../lib/utils';

export function DestinationHurghada() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  // Hero Section
  const HeroSection = () => (
    <div className="relative h-[70vh] overflow-hidden bg-black">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1671739961405-add4f0ece0c3?auto=format&fit=crop&q=80&w=1920)',
          backgroundAttachment: 'fixed',
        }}
      />
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-4"
        >
          {/* Title */}
          <h1
            className={cn(
              "font-['Outfit'] text-6xl md:text-7xl font-bold text-white tracking-tight",
              isRTL && 'text-right'
            )}
          >
            {t('dest.hurghada.title')}
          </h1>

          {/* Subtitle */}
          <p className="text-2xl md:text-3xl text-[#E8F2F0] font-light">
            {t('dest.hurghada.subtitle')}
          </p>

          {/* Tagline */}
          <p className="text-lg md:text-xl text-[#B8E6E3] font-light max-w-2xl mx-auto mt-6">
            {t('dest.hurghada.tagline')}
          </p>

          {/* Badges */}
          <div className={cn(
            'flex flex-col md:flex-row gap-4 justify-center items-center mt-8',
            isRTL && 'flex-row-reverse'
          )}>
            <div className="px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full">
              <p className="text-white font-medium text-sm">☀️ {t('dest.hurghada.sunnyDays')}</p>
            </div>
            <div className="px-6 py-3 bg-[#0D9488]/20 backdrop-blur-sm border border-[#0D9488]/40 rounded-full">
              <p className="text-[#E8F2F0] font-medium text-sm">
                ✓ {t('dest.hurghada.sèkhmetBadge')}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );

  // Overview Section
  const OverviewSection = () => (
    <section className="bg-[#F0F7F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Main Overview Text */}
          <motion.div variants={itemVariants} className={cn('space-y-6', isRTL && 'text-right')}>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332]">
              {t('dest.hurghada.overviewTitle')}
            </h2>
            <p className="text-lg text-[#4A6B62] leading-relaxed max-w-3xl">
              {t('dest.hurghada.overviewText')}
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'grid grid-cols-1 md:grid-cols-3 gap-8',
              isRTL && 'flex-row-reverse'
            )}
          >
            {[
              { icon: '☀️', label: 'dest.hurghada.stat1Label', value: 'dest.hurghada.stat1Value' },
              { icon: '🌊', label: 'dest.hurghada.stat2Label', value: 'dest.hurghada.stat2Value' },
              { icon: '📅', label: 'dest.hurghada.stat3Label', value: 'dest.hurghada.stat3Value' },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white p-8 rounded-lg shadow-sm border border-[#0D9488]/10 hover:shadow-md transition-shadow"
              >
                <p className="text-4xl mb-3">{stat.icon}</p>
                <p className="text-[#0D9488] font-medium mb-2 text-sm">{t(stat.label)}</p>
                <p className="text-[#1A2332] font-bold text-2xl">{t(stat.value)}</p>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // El Gouna Featured Section
  const ElGounaSection = () => (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Header with Badge */}
          <motion.div variants={itemVariants} className={cn('space-y-4', isRTL && 'text-right')}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-semibold">
                {t('dest.hurghada.recommended')}
              </span>
            </div>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332]">
              {t('dest.hurghada.elGounaTitle')}
            </h2>
            <p className="text-lg text-[#4A6B62] leading-relaxed max-w-2xl">
              {t('dest.hurghada.elGounaDesc')}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&q=80&w=1200&h=500"
              alt="El Gouna Marina"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              isRTL && 'flex-row-reverse'
            )}
          >
            {[
              {
                title: 'dest.hurghada.elGouna.highlight1Title',
                desc: 'dest.hurghada.elGouna.highlight1Desc',
                icon: '⛵',
              },
              {
                title: 'dest.hurghada.elGouna.highlight2Title',
                desc: 'dest.hurghada.elGouna.highlight2Desc',
                icon: '🎭',
              },
              {
                title: 'dest.hurghada.elGouna.highlight3Title',
                desc: 'dest.hurghada.elGouna.highlight3Desc',
                icon: '🏄',
              },
              {
                title: 'dest.hurghada.elGouna.highlight4Title',
                desc: 'dest.hurghada.elGouna.highlight4Desc',
                icon: '⛳',
              },
              {
                title: 'dest.hurghada.elGouna.highlight5Title',
                desc: 'dest.hurghada.elGouna.highlight5Desc',
                icon: '🛶',
              },
              {
                title: 'dest.hurghada.elGouna.highlight6Title',
                desc: 'dest.hurghada.elGouna.highlight6Desc',
                icon: '🌙',
              },
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#F0F7F4] p-6 rounded-lg border border-[#0D9488]/10 hover:shadow-md hover:border-[#0D9488]/30 transition-all"
              >
                <p className="text-3xl mb-3">{highlight.icon}</p>
                <h3 className="font-['Outfit'] text-lg font-semibold text-[#1A2332] mb-2">
                  {t(highlight.title)}
                </h3>
                <p className="text-sm text-[#4A6B62]">{t(highlight.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Soma Bay Featured Section
  const SomaBaySection = () => (
    <section className="bg-[#F0F7F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Header with Badge */}
          <motion.div variants={itemVariants} className={cn('space-y-4', isRTL && 'text-right')}>
            <div className="flex items-center gap-3 flex-wrap">
              <span className="px-4 py-2 bg-[#0D9488]/10 text-[#0D9488] rounded-full text-sm font-semibold">
                {t('dest.hurghada.recommended')}
              </span>
            </div>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332]">
              {t('dest.hurghada.somaBayTitle')}
            </h2>
            <p className="text-lg text-[#4A6B62] leading-relaxed max-w-2xl">
              {t('dest.hurghada.somaBayDesc')}
            </p>
          </motion.div>

          {/* Image */}
          <motion.div variants={itemVariants} className="overflow-hidden rounded-xl shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1611632736579-6b16e2b50449?auto=format&fit=crop&q=80&w=1200&h=500"
              alt="Soma Bay Resort"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Highlights Grid */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-6',
              isRTL && 'flex-row-reverse'
            )}
          >
            {[
              {
                title: 'dest.hurghada.somaBay.highlight1Title',
                desc: 'dest.hurghada.somaBay.highlight1Desc',
                icon: '🧖',
                featured: true,
              },
              {
                title: 'dest.hurghada.somaBay.highlight2Title',
                desc: 'dest.hurghada.somaBay.highlight2Desc',
                icon: '⛳',
              },
              {
                title: 'dest.hurghada.somaBay.highlight3Title',
                desc: 'dest.hurghada.somaBay.highlight3Desc',
                icon: '🏖️',
              },
              {
                title: 'dest.hurghada.somaBay.highlight4Title',
                desc: 'dest.hurghada.somaBay.highlight4Desc',
                icon: '🤿',
              },
            ].map((highlight, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className={cn(
                  'p-6 rounded-lg border transition-all',
                  highlight.featured
                    ? 'bg-white border-[#0D9488]/30 shadow-md'
                    : 'bg-white border-[#0D9488]/10 hover:shadow-md hover:border-[#0D9488]/30'
                )}
              >
                <p className="text-3xl mb-3">{highlight.icon}</p>
                <h3 className="font-['Outfit'] text-lg font-semibold text-[#1A2332] mb-2">
                  {t(highlight.title)}
                </h3>
                <p className="text-sm text-[#4A6B62]">{t(highlight.desc)}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Activities & Excursions Section
  const ActivitiesSection = () => (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className={cn('space-y-4', isRTL && 'text-right')}>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332]">
              {t('dest.hurghada.activitiesTitle')}
            </h2>
            <p className="text-lg text-[#4A6B62] max-w-2xl">
              {t('dest.hurghada.activitiesSubtitle')}
            </p>
          </motion.div>

          {/* Activities Grid */}
          <motion.div
            variants={itemVariants}
            className={cn(
              'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
              isRTL && 'flex-row-reverse'
            )}
          >
            {[
              { title: 'dest.hurghada.activity1', icon: '🤿' },
              { title: 'dest.hurghada.activity2', icon: '🌊' },
              { title: 'dest.hurghada.activity3', icon: '🐢' },
              { title: 'dest.hurghada.activity4', icon: '🚤' },
              { title: 'dest.hurghada.activity5', icon: '🐬' },
              { title: 'dest.hurghada.activity6', icon: '🏜️' },
              { title: 'dest.hurghada.activity7', icon: '🏕️' },
              { title: 'dest.hurghada.activity8', icon: '⭐' },
              { title: 'dest.hurghada.activity9', icon: '🪂' },
            ].map((activity, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="bg-[#F0F7F4] p-6 rounded-lg border border-[#0D9488]/10 hover:border-[#0D9488]/30 hover:shadow-md transition-all cursor-pointer group"
              >
                <p className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                  {activity.icon}
                </p>
                <h3 className="font-['Outfit'] text-lg font-semibold text-[#1A2332]">
                  {t(activity.title)}
                </h3>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Luxury Hotels Section
  const HotelsSection = () => (
    <section className="bg-[#F0F7F4] py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className={cn('space-y-4', isRTL && 'text-right')}>
            <h2 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332]">
              {t('dest.hurghada.hotelsTitle')}
            </h2>
          </motion.div>

          {/* El Gouna Hotels */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className={cn(
              'font-[\'Outfit\'] text-2xl font-semibold text-[#0D9488]',
              isRTL && 'text-right'
            )}>
              {t('dest.hurghada.elGounaHotels')}
            </h3>
            <div className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-6',
              isRTL && 'flex-row-reverse'
            )}>
              {[
                { name: 'dest.hurghada.hotel1', desc: 'dest.hurghada.hotel1Desc' },
                { name: 'dest.hurghada.hotel2', desc: 'dest.hurghada.hotel2Desc' },
                { name: 'dest.hurghada.hotel3', desc: 'dest.hurghada.hotel3Desc' },
                { name: 'dest.hurghada.hotel4', desc: 'dest.hurghada.hotel4Desc' },
                { name: 'dest.hurghada.hotel5', desc: 'dest.hurghada.hotel5Desc' },
              ].map((hotel, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-sm border border-[#0D9488]/10 hover:shadow-md hover:border-[#0D9488]/20 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">✨</span>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h4 className="font-['Outfit'] font-semibold text-[#1A2332]">
                        {t(hotel.name)}
                      </h4>
                      <p className="text-sm text-[#4A6B62] mt-1">{t(hotel.desc)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Soma Bay Hotels */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className={cn(
              'font-[\'Outfit\'] text-2xl font-semibold text-[#0D9488]',
              isRTL && 'text-right'
            )}>
              {t('dest.hurghada.somaBayHotels')}
            </h3>
            <div className={cn(
              'grid grid-cols-1 md:grid-cols-2 gap-6',
              isRTL && 'flex-row-reverse'
            )}>
              {[
                { name: 'dest.hurghada.hotel6', desc: 'dest.hurghada.hotel6Desc' },
                { name: 'dest.hurghada.hotel7', desc: 'dest.hurghada.hotel7Desc' },
                { name: 'dest.hurghada.hotel8', desc: 'dest.hurghada.hotel8Desc' },
                { name: 'dest.hurghada.hotel9', desc: 'dest.hurghada.hotel9Desc' },
              ].map((hotel, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-white p-6 rounded-lg shadow-sm border border-[#0D9488]/10 hover:shadow-md hover:border-[#0D9488]/20 transition-all"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl">✨</span>
                    <div className={isRTL ? 'text-right' : ''}>
                      <h4 className="font-['Outfit'] font-semibold text-[#1A2332]">
                        {t(hotel.name)}
                      </h4>
                      <p className="text-sm text-[#4A6B62] mt-1">{t(hotel.desc)}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Medical Facilities Section (Subtle)
  const MedicalSection = () => (
    <section className="bg-white py-12 md:py-16">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className={cn('space-y-4', isRTL && 'text-right')}>
            <h3 className="font-['Outfit'] text-2xl font-semibold text-[#4A6B62]">
              {t('dest.hurghada.medicalTitle')}
            </h3>
            <p className="text-base text-[#4A6B62] leading-relaxed max-w-2xl">
              {t('dest.hurghada.medicalText')}
            </p>
            <div className="bg-[#F0F7F4] border border-[#0D9488]/20 p-4 rounded-lg mt-4">
              <p className="text-sm text-[#0D9488] font-medium">
                {t('dest.hurghada.medicalFacility')}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // CTA Section
  const CTASection = () => (
    <section className="bg-gradient-to-r from-[#0D9488] to-[#0D9488]/80 py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 md:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-6"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h2 className="font-['Outfit'] text-3xl md:text-4xl font-bold text-white">
              {t('dest.hurghada.ctaTitle')}
            </h2>
            <p className="text-lg text-[#E8F2F0]">
              {t('dest.hurghada.ctaSubtitle')}
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <Link to="/consultation">
              <Button
                className={cn(
                  'bg-white text-[#0D9488] hover:bg-[#E8F2F0] font-semibold px-8 py-6 text-lg',
                  'transition-all duration-300 shadow-lg hover:shadow-xl'
                )}
              >
                {t('dest.hurghada.ctaButton')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );

  // Main Component
  return (
    <div className={cn('bg-[#F0F7F4] min-h-screen', isRTL && 'direction-rtl')}>
      <HeroSection />
      <OverviewSection />
      <ElGounaSection />
      <SomaBaySection />
      <ActivitiesSection />
      <HotelsSection />
      <MedicalSection />
      <CTASection />
    </div>
  );
}
