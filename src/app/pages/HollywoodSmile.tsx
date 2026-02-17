import React from 'react';
import { HollywoodHero } from '../components/dental/HollywoodHero';
import { HollywoodKeyFacts } from '../components/dental/HollywoodKeyFacts';
import { HollywoodContent } from '../components/dental/HollywoodContent';
import { HollywoodPriceComparison } from '../components/dental/HollywoodPriceComparison';
import { HollywoodDoctors } from '../components/dental/HollywoodDoctors';
import { HollywoodFAQ } from '../components/dental/HollywoodFAQ';
import { BeforeAfterSlider } from '../components/dental/BeforeAfterSlider';
import { RelatedProcedures } from '../components/dental/RelatedProcedures';
import { DentalCTA } from '../components/dental/DentalCTA';
import { MobileStickyCTA } from '../components/MobileStickyCTA';

import { useLanguage } from '../context/LanguageContext';
export function HollywoodSmile() {
  const { t, language, direction } = useLanguage();

  return (
    <>
      <HollywoodHero />
      <HollywoodKeyFacts />
      <HollywoodContent />
      <HollywoodPriceComparison />
      <HollywoodDoctors />
      <BeforeAfterSlider />
      <HollywoodFAQ />
      <RelatedProcedures />
      <DentalCTA />
      <MobileStickyCTA />
    </>
  );
}
