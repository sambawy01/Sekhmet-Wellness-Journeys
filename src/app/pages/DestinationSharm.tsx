import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { cn } from '../../lib/utils';

export function DestinationSharm() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true, margin: '-100px' },
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
    viewport: { once: true, margin: '-100px' },
  };

  const staggerItem = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
  };

  return (
    <div className="bg-[#F0F7F4]" style={{ direction: isRTL ? 'rtl' : 'ltr' }}>
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1705765280828-074feefd8aee?auto=format&fit=crop&q=80&w=1920')`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />

        <div className="relative h-full flex items-center justify-start px-6 md:px-12 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-12 bg-[#0D9488]" />
              <span className="text-[#0D9488] font-sans font-semibold text-sm tracking-widest uppercase">
                {t('dest.sharm.badgeLocation')}
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-sans font-bold text-white mb-4 leading-tight">
              {t('dest.sharm.title')}
            </h1>

            <p className="text-2xl md:text-3xl text-white/90 font-sans font-light mb-6">
              {t('dest.sharm.subtitle')}
            </p>

            <p className="text-lg text-white/80 font-sans max-w-xl mb-8 leading-relaxed">
              {t('dest.sharm.tagline')}
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white font-sans text-sm">
                  {t('dest.sharm.sunnyDays')}
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20">
                <p className="text-white font-sans text-sm">
                  {t('dest.sharm.bayCities')}
                </p>
              </div>
            </div>

            <Link to="/consultation">
              <Button className="bg-[#0D9488] hover:bg-[#0a7468] text-white font-sans px-8 py-3 rounded-lg transition-colors">
                {t('dest.sharm.exploreCTA')}
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <p className="text-lg text-[#1A2332] font-sans leading-relaxed mb-12">
            {t('dest.sharm.overviewText')}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={staggerItem} className="text-center">
              <p className="text-4xl font-bold text-[#0D9488] font-sans mb-2">
                {t('dest.sharm.stat1Number')}
              </p>
              <p className="text-[#1A2332] font-sans">
                {t('dest.sharm.stat1Label')}
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <p className="text-4xl font-bold text-[#0D9488] font-sans mb-2">
                {t('dest.sharm.stat2Number')}
              </p>
              <p className="text-[#1A2332] font-sans">
                {t('dest.sharm.stat2Label')}
              </p>
            </motion.div>

            <motion.div variants={staggerItem} className="text-center">
              <p className="text-4xl font-bold text-[#0D9488] font-sans mb-2">
                {t('dest.sharm.stat3Number')}
              </p>
              <p className="text-[#1A2332] font-sans">
                {t('dest.sharm.stat3Label')}
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Area Highlights Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#1A2332] mb-4">
            {t('dest.sharm.areasTitle')}
          </h2>
          <div className="h-1 w-20 bg-[#0D9488]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {/* Naama Bay */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-[#F0F7F4] to-white border border-[#0D9488]/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-sans text-[#1A2332] mb-2">
                {t('dest.sharm.naamaBayTitle')}
              </h3>
              <p className="text-[#0D9488] font-sans font-semibold text-sm mb-4">
                {t('dest.sharm.naamaBaySubtitle')}
              </p>
              <ul className="space-y-3 text-[#1A2332] font-sans text-sm leading-relaxed">
                <li>• {t('dest.sharm.naamaBay1')}</li>
                <li>• {t('dest.sharm.naamaBay2')}</li>
                <li>• {t('dest.sharm.naamaBay3')}</li>
                <li>• {t('dest.sharm.naamaBay4')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Sharks Bay */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-[#F0F7F4] to-white border border-[#0D9488]/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-sans text-[#1A2332] mb-2">
                {t('dest.sharm.sharksBayTitle')}
              </h3>
              <p className="text-[#0D9488] font-sans font-semibold text-sm mb-4">
                {t('dest.sharm.sharksBaySubtitle')}
              </p>
              <ul className="space-y-3 text-[#1A2332] font-sans text-sm leading-relaxed">
                <li>• {t('dest.sharm.sharksBay1')}</li>
                <li>• {t('dest.sharm.sharksBay2')}</li>
                <li>• {t('dest.sharm.sharksBay3')}</li>
                <li>• {t('dest.sharm.sharksBay4')}</li>
              </ul>
            </div>
          </motion.div>

          {/* Nabq Bay */}
          <motion.div
            variants={staggerItem}
            className="bg-gradient-to-br from-[#F0F7F4] to-white border border-[#0D9488]/20 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
          >
            <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
            <div className="p-8">
              <h3 className="text-2xl font-bold font-sans text-[#1A2332] mb-2">
                {t('dest.sharm.nabqBayTitle')}
              </h3>
              <p className="text-[#0D9488] font-sans font-semibold text-sm mb-4">
                {t('dest.sharm.nabqBaySubtitle')}
              </p>
              <ul className="space-y-3 text-[#1A2332] font-sans text-sm leading-relaxed">
                <li>• {t('dest.sharm.nabqBay1')}</li>
                <li>• {t('dest.sharm.nabqBay2')}</li>
                <li>• {t('dest.sharm.nabqBay3')}</li>
                <li>• {t('dest.sharm.nabqBay4')}</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* Activities & Excursions Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#1A2332] mb-4">
            {t('dest.sharm.activitiesTitle')}
          </h2>
          <div className="h-1 w-20 bg-[#0D9488]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {[
            'rasmohammedDiving',
            'thistlegormWreck',
            'tiranIslandReef',
            'blueHoleDahab',
            'mountSinaiSunrise',
            'stCatherinesMonastery',
            'coloredCanyon',
            'bedouinSafari',
            'desertQuadBiking',
            'snorkelingExperience',
            'glassBottomBoats',
            'parasailing',
          ].map((activity) => (
            <motion.div
              key={activity}
              variants={staggerItem}
              className="bg-white border border-[#0D9488]/20 rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <div className="h-32 bg-gradient-to-br from-[#0D9488] to-[#086860] rounded-lg mb-4" />
              <h3 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                {t(`dest.sharm.activity${activity.charAt(0).toUpperCase() + activity.slice(1)}Title`)}
              </h3>
              <p className="text-sm text-[#1A2332]/70 font-sans">
                {t(`dest.sharm.activity${activity.charAt(0).toUpperCase() + activity.slice(1)}Desc`)}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Dining & Nightlife Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#1A2332] mb-4">
            {t('dest.sharm.diningTitle')}
          </h2>
          <div className="h-1 w-20 bg-[#0D9488]" />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto"
        >
          <motion.div variants={staggerItem} className="bg-[#F0F7F4] rounded-lg p-8 border border-[#0D9488]/20">
            <h3 className="text-2xl font-bold font-sans text-[#1A2332] mb-4">
              {t('dest.sharm.sohoSquareTitle')}
            </h3>
            <ul className="space-y-2 text-[#1A2332] font-sans text-sm">
              <li>• {t('dest.sharm.sohoVenue1')}</li>
              <li>• {t('dest.sharm.sohoVenue2')}</li>
              <li>• {t('dest.sharm.sohoVenue3')}</li>
              <li>• {t('dest.sharm.sohoVenue4')}</li>
            </ul>
          </motion.div>

          <motion.div variants={staggerItem} className="bg-[#F0F7F4] rounded-lg p-8 border border-[#0D9488]/20">
            <h3 className="text-2xl font-bold font-sans text-[#1A2332] mb-4">
              {t('dest.sharm.fineResortDiningTitle')}
            </h3>
            <p className="text-[#1A2332] font-sans text-sm mb-4">
              {t('dest.sharm.fourSeasonsDiningDesc')}
            </p>
            <ul className="space-y-2 text-[#1A2332] font-sans text-sm">
              <li>• {t('dest.sharm.resortDiningDetail1')}</li>
              <li>• {t('dest.sharm.resortDiningDetail2')}</li>
            </ul>
          </motion.div>
        </motion.div>
      </section>

      {/* Luxury Hotels Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold font-sans text-[#1A2332] mb-4">
            {t('dest.sharm.hotelsTitle')}
          </h2>
          <div className="h-1 w-20 bg-[#0D9488]" />
        </motion.div>

        {/* Sharks Bay Hotels */}
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold font-sans text-[#0D9488] mb-6">
            {t('dest.sharm.sharksBayHotels')}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12"
          >
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-xl font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.fourSeasonsProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.6</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <ul className="space-y-2 text-sm text-[#1A2332] font-sans">
                  <li>• {t('dest.sharm.fourSeasonsFeature1')}</li>
                  <li>• {t('dest.sharm.fourSeasonsFeature2')}</li>
                  <li>• {t('dest.sharm.fourSeasonsFeature3')}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-xl font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.royalSavoyProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.5</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <ul className="space-y-2 text-sm text-[#1A2332] font-sans">
                  <li>• {t('dest.sharm.royalSavoyFeature1')}</li>
                  <li>• {t('dest.sharm.royalSavoyFeature2')}</li>
                  <li>• {t('dest.sharm.royalSavoyFeature3')}</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Nabq Bay Hotels */}
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto mb-12">
          <h3 className="text-2xl font-bold font-sans text-[#0D9488] mb-6">
            {t('dest.sharm.nabqBayHotels')}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          >
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.rixosSeagateProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.4</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <p className="text-xs text-[#1A2332]/70 font-sans">
                  {t('dest.sharm.rixosSeagateDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.rixosProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.7</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <p className="text-xs text-[#1A2332]/70 font-sans">
                  {t('dest.sharm.rixosDesc')}
                </p>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.steigenbergerProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.6</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <p className="text-xs text-[#1A2332]/70 font-sans">
                  {t('dest.sharm.steigenbergerDesc')}
                </p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Naama Bay Hotels */}
        <motion.div {...fadeInUp} className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold font-sans text-[#0D9488] mb-6">
            {t('dest.sharm.naamaBayHotels')}
          </h3>
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.novotelProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.1</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <ul className="space-y-2 text-xs text-[#1A2332]/70 font-sans">
                  <li>• {t('dest.sharm.novotelFeature1')}</li>
                  <li>• {t('dest.sharm.novotelFeature2')}</li>
                </ul>
              </div>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-white rounded-lg overflow-hidden border border-[#0D9488]/20 hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-[#0D9488] to-[#086860]" />
              <div className="p-6">
                <h4 className="text-lg font-bold font-sans text-[#1A2332] mb-2">
                  {t('dest.sharm.swissotelProp')}
                </h4>
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-[#0D9488] font-sans font-semibold">9.3</span>
                  <span className="text-sm text-[#1A2332]/70">★★★★★</span>
                </div>
                <ul className="space-y-2 text-xs text-[#1A2332]/70 font-sans">
                  <li>• {t('dest.sharm.swissotelFeature1')}</li>
                  <li>• {t('dest.sharm.swissotelFeature2')}</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Medical Facilities Section - Subtle */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-white">
        <motion.div {...fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold font-sans text-[#1A2332] mb-4">
            {t('dest.sharm.medicalTitle')}
          </h2>
          <div className="h-1 w-20 bg-[#0D9488] mb-8" />

          <p className="text-[#1A2332]/80 font-sans leading-relaxed mb-8">
            {t('dest.sharm.medicalIntro')}
          </p>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <motion.div
              variants={staggerItem}
              className="bg-[#F0F7F4] rounded-lg p-8 border border-[#0D9488]/20"
            >
              <h3 className="text-xl font-bold font-sans text-[#1A2332] mb-3">
                {t('dest.sharm.hospital1Name')}
              </h3>
              <ul className="space-y-2 text-sm text-[#1A2332]/70 font-sans">
                <li>• {t('dest.sharm.hospital1Feature1')}</li>
                <li>• {t('dest.sharm.hospital1Feature2')}</li>
                <li>• {t('dest.sharm.hospital1Feature3')}</li>
              </ul>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="bg-[#F0F7F4] rounded-lg p-8 border border-[#0D9488]/20"
            >
              <h3 className="text-xl font-bold font-sans text-[#1A2332] mb-3">
                {t('dest.sharm.hospital2Name')}
              </h3>
              <ul className="space-y-2 text-sm text-[#1A2332]/70 font-sans">
                <li>• {t('dest.sharm.hospital2Feature1')}</li>
                <li>• {t('dest.sharm.hospital2Feature2')}</li>
                <li>• {t('dest.sharm.hospital2Feature3')}</li>
              </ul>
            </motion.div>
          </motion.div>

          <p className="text-[#1A2332]/70 font-sans text-sm mt-8 italic">
            {t('dest.sharm.medicalFootnote')}
          </p>
        </motion.div>
      </section>

      {/* Final CTA Section */}
      <section className="px-6 md:px-12 lg:px-20 py-20 bg-gradient-to-r from-[#0D9488] to-[#086860]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-sans text-white mb-6">
            {t('dest.sharm.finalCTATitle')}
          </h2>
          <p className="text-white/90 font-sans text-lg mb-8">
            {t('dest.sharm.finalCTAText')}
          </p>
          <Link to="/consultation">
            <Button className="bg-white hover:bg-white/90 text-[#0D9488] font-sans px-8 py-3 rounded-lg transition-colors font-semibold">
              {t('dest.sharm.getQuoteButton')}
            </Button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
