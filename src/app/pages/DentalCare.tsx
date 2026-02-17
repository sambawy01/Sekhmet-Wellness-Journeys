import React from 'react';
import { DentalHero } from '../components/dental/DentalHero';
import { DentalStats } from '../components/dental/DentalStats';
import { ProceduresGrid } from '../components/dental/ProceduresGrid';
import { PriceComparison } from '../components/dental/PriceComparison';
import { FeaturedDoctors } from '../components/dental/FeaturedDoctors';
import { BeforeAfterSlider } from '../components/dental/BeforeAfterSlider';
import { DentalTestimonials } from '../components/dental/DentalTestimonials';
import { DentalFAQ } from '../components/dental/DentalFAQ';
import { DentalCTA } from '../components/dental/DentalCTA';

import { useLanguage } from '../context/LanguageContext';
export function DentalCare() {
  const { t, language, direction } = useLanguage();

  return (
    <>
      <DentalHero />
      <DentalStats />
      <ProceduresGrid />
      <PriceComparison />
      <FeaturedDoctors />
      <BeforeAfterSlider />
      <DentalTestimonials />
      <DentalFAQ />
      <DentalCTA />
    </>
  );
}
