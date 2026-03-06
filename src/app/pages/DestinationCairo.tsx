import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  Building2,
  Landmark,
  Ship,
  ShoppingBag,
  Sparkles,
  Music,
  Sailboat,
  Bike,
  Heart,
  Star,
  MapPin,
  Clock,
  Users,
  Cross,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Button } from '../components/ui/button';
import { cn } from '../../lib/utils';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const fadeUpVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const activities = [
  {
    icon: Building2,
    key: 'activity_museum',
    description: 'dest.cairo.activities.museum',
  },
  {
    icon: Landmark,
    key: 'activity_pyramids',
    description: 'dest.cairo.activities.pyramids',
  },
  {
    icon: Ship,
    key: 'activity_nile',
    description: 'dest.cairo.activities.nile',
  },
  {
    icon: ShoppingBag,
    key: 'activity_bazaar',
    description: 'dest.cairo.activities.bazaar',
  },
  {
    icon: Sparkles,
    key: 'activity_soundlight',
    description: 'dest.cairo.activities.soundlight',
  },
  {
    icon: Music,
    key: 'activity_concerts',
    description: 'dest.cairo.activities.concerts',
  },
  {
    icon: Sailboat,
    key: 'activity_felucca',
    description: 'dest.cairo.activities.felucca',
  },
  {
    icon: Bike,
    key: 'activity_desert',
    description: 'dest.cairo.activities.desert',
  },
  {
    icon: Heart,
    key: 'activity_wellness',
    description: 'dest.cairo.activities.wellness',
  },
];

const restaurants = [
  {
    name: 'dest.cairo.restaurants.crimson',
    location: 'dest.cairo.restaurants.crimsonLocation',
  },
  {
    name: 'dest.cairo.restaurants.saigon',
    location: 'dest.cairo.restaurants.saigonLocation',
  },
  {
    name: 'dest.cairo.restaurants.nox',
    location: 'dest.cairo.restaurants.noxLocation',
  },
  {
    name: 'dest.cairo.restaurants.rooftop',
    location: 'dest.cairo.restaurants.rooftopLocation',
  },
  {
    name: 'dest.cairo.restaurants.jazzclub',
    location: 'dest.cairo.restaurants.jazzclubLocation',
  },
];

const hotels = [
  {
    name: 'dest.cairo.hotels.fourseasons',
    description: 'dest.cairo.hotels.fourseasonsDesc',
    stars: 5,
  },
  {
    name: 'dest.cairo.hotels.menahouse',
    description: 'dest.cairo.hotels.menahouseDesc',
    stars: 5,
  },
  {
    name: 'dest.cairo.hotels.kempinski',
    description: 'dest.cairo.hotels.kempinskiDesc',
    stars: 5,
  },
  {
    name: 'dest.cairo.hotels.fairmont',
    description: 'dest.cairo.hotels.fairmontDesc',
    stars: 5,
  },
  {
    name: 'dest.cairo.hotels.stregis',
    description: 'dest.cairo.hotels.stregisDesc',
    stars: 5,
  },
];

const medicalFacilities = [
  {
    name: 'dest.cairo.medical.asSalam',
    accreditation: 'dest.cairo.medical.asSalamAccred',
  },
  {
    name: 'dest.cairo.medical.darAlFouad',
    accreditation: 'dest.cairo.medical.darAlFouadAccred',
  },
  {
    name: 'dest.cairo.medical.saudiGerman',
    accreditation: 'dest.cairo.medical.saudiGermanAccred',
  },
];

const StatCard = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white/80 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20"
  >
    <div className="text-2xl font-bold text-teal-600 mb-2">{value}</div>
    <div className="text-sm text-gray-600 font-medium">{label}</div>
  </motion.div>
);

const ActivityCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="p-3 bg-gradient-to-br from-teal-50 to-teal-100 rounded-lg">
        <Icon className="w-6 h-6 text-teal-600" />
      </div>
    </div>
    <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const RestaurantCard = ({
  name,
  location,
}: {
  name: string;
  location: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 flex-shrink-0 w-72"
  >
    <h4 className="text-lg font-semibold text-gray-900 mb-1">{name}</h4>
    <p className="text-sm text-gray-600 flex items-center gap-2">
      <MapPin className="w-4 h-4 text-teal-600" />
      {location}
    </p>
  </motion.div>
);

const HotelCard = ({
  name,
  description,
  stars,
}: {
  name: string;
  description: string;
  stars: number;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100 h-full flex flex-col"
  >
    <div className="h-48 bg-gradient-to-br from-teal-100 to-teal-50 flex items-center justify-center">
      <Building2 className="w-16 h-16 text-teal-300 opacity-50" />
    </div>
    <div className="p-6 flex-1 flex flex-col">
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>
      <p className="text-sm text-gray-600 mb-4 flex-1">{description}</p>
      <div className="flex gap-1">
        {Array.from({ length: stars }).map((_, i) => (
          <Star
            key={i}
            className="w-4 h-4 fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>
    </div>
  </motion.div>
);

const MedicalFacilityCard = ({
  name,
  accreditation,
}: {
  name: string;
  accreditation: string;
}) => (
  <motion.div
    variants={itemVariants}
    className="bg-gradient-to-br from-white to-gray-50 rounded-lg p-6 shadow-md border border-gray-200 flex gap-4"
  >
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-teal-100">
        <Cross className="w-6 h-6 text-teal-600" />
      </div>
    </div>
    <div className="flex-1">
      <h4 className="text-base font-semibold text-gray-900">{name}</h4>
      <p className="text-sm text-gray-600 mt-1">{accreditation}</p>
    </div>
  </motion.div>
);

export function DestinationCairo() {
  const { t, direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div className="min-h-screen bg-[#F0F7F4] font-['Outfit']">
      {/* Hero Section */}
      <section className="relative h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1572252009286-268acec5ca0a?auto=format&fit=crop&q=80&w=1920)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        <motion.div
          className="relative h-full flex flex-col items-center justify-center text-center px-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-7xl md:text-8xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {t('dest.cairo.title')}
          </motion.h1>

          <motion.div
            className="w-16 h-1 bg-gradient-to-r from-teal-400 to-teal-600 mb-6"
            initial={{ width: 0 }}
            animate={{ width: 64 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />

          <motion.h2
            className="text-3xl md:text-4xl text-gray-100 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {t('dest.cairo.subtitle')}
          </motion.h2>

          <motion.p
            className="text-lg text-gray-200 max-w-2xl mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {t('dest.cairo.tagline')}
          </motion.p>

          <motion.div
            className="inline-block bg-white/10 backdrop-blur-sm border border-white/30 rounded-full px-6 py-3"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <p className="text-white font-medium flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {t('dest.cairo.weather')}
            </p>
          </motion.div>
        </motion.div>
      </section>

      {/* Overview Section */}
      <section className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={fadeUpVariants}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {t('dest.cairo.overviewTitle')}
            </h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('dest.cairo.overviewP1')}
            </p>
            <p className="text-gray-700 leading-relaxed mb-4">
              {t('dest.cairo.overviewP2')}
            </p>
            <p className="text-gray-700 leading-relaxed">
              {t('dest.cairo.overviewP3')}
            </p>
          </motion.div>

          <motion.div
            variants={fadeUpVariants}
            className="rounded-2xl overflow-hidden shadow-2xl"
          >
            <img
              src="https://images.unsplash.com/photo-1504681869696-d977e27ae4a0?auto=format&fit=crop&q=80&w=800"
              alt="Cairo cityscape"
              className="w-full h-96 object-cover"
            />
          </motion.div>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <StatCard
            label={t('dest.cairo.stat1Label')}
            value={t('dest.cairo.stat1Value')}
          />
          <StatCard
            label={t('dest.cairo.stat2Label')}
            value={t('dest.cairo.stat2Value')}
          />
          <StatCard
            label={t('dest.cairo.stat3Label')}
            value={t('dest.cairo.stat3Value')}
          />
        </motion.div>
      </section>

      {/* Activities Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('dest.cairo.activitiesTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('dest.cairo.activitiesSubtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {activities.map((activity) => (
            <ActivityCard
              key={activity.key}
              icon={activity.icon}
              title={t(`dest.cairo.activities.${activity.key}`)}
              description={t(activity.description)}
            />
          ))}
        </motion.div>
      </section>

      {/* Dining Section */}
      <section className="py-24 px-4 md:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('dest.cairo.diningTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              {t('dest.cairo.diningSubtitle')}
            </p>
          </motion.div>

          <motion.div
            className={cn(
              'flex gap-6 overflow-x-auto pb-4',
              isRTL ? 'flex-row-reverse' : ''
            )}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {restaurants.map((restaurant, idx) => (
              <RestaurantCard
                key={idx}
                name={t(restaurant.name)}
                location={t(restaurant.location)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Hotels Section */}
      <section className="py-24 px-4 md:px-8 max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t('dest.cairo.hotelsTitle')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('dest.cairo.hotelsSubtitle')}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {hotels.map((hotel, idx) => (
            <HotelCard
              key={idx}
              name={t(hotel.name)}
              description={t(hotel.description)}
              stars={hotel.stars}
            />
          ))}
        </motion.div>
      </section>

      {/* Medical Facilities Section */}
      <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-teal-50 to-blue-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="text-center mb-12"
            variants={fadeUpVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {t('dest.cairo.medicalTitle')}
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {t('dest.cairo.medicalIntro')}
            </p>
          </motion.div>

          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {medicalFacilities.map((facility, idx) => (
              <MedicalFacilityCard
                key={idx}
                name={t(facility.name)}
                accreditation={t(facility.accreditation)}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 md:px-8 max-w-4xl mx-auto text-center">
        <motion.div
          variants={fadeUpVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t('dest.cairo.ctaTitle')}
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            {t('dest.cairo.ctaSubtitle')}
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            whileHover={{ scale: 1.02 }}
          >
            <Link to="/consultation">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 rounded-lg font-semibold transition-all">
                {t('dest.cairo.ctaButton')}
              </Button>
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </div>
  );
}
