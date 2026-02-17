import React from 'react';
import { ImplantsHero } from '../components/dental/ImplantsHero';
import { ImplantsKeyFacts } from '../components/dental/ImplantsKeyFacts';
import { ImplantsContent } from '../components/dental/ImplantsContent';
import { ImplantsPriceComparison } from '../components/dental/ImplantsPriceComparison';
import { ImplantsDoctors } from '../components/dental/ImplantsDoctors';
import { BeforeAfterSlider } from '../components/dental/BeforeAfterSlider';
import { ImplantsFAQ } from '../components/dental/ImplantsFAQ';
import { RelatedProcedures } from '../components/dental/RelatedProcedures';
import { DentalCTA } from '../components/dental/DentalCTA';

import { useLanguage } from '../context/LanguageContext';
export function DentalImplants() {
  return (
    <>
      <ImplantsHero />
      <ImplantsKeyFacts />
      <ImplantsContent />
      <ImplantsPriceComparison />
      <ImplantsDoctors />
      <BeforeAfterSlider />
      <ImplantsFAQ />
      <RelatedProcedures />
      <DentalCTA />
    </>
  );
}
