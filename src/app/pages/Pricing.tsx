import React, { useEffect } from 'react';
import { GetFreeQuotes } from '../components/pricing/GetFreeQuotes';
import { TreatmentsAccordion } from '../components/pricing/TreatmentsAccordion';
import { ViewAllPrices } from '../components/pricing/ViewAllPrices';
import { useLanguage } from '../context/LanguageContext';

export function Pricing() {
  const { t } = useLanguage();

  useEffect(() => {
    document.title = t('pricing.title') + " | Sekhmet Wellness Journeys";
  }, [t]);

  return (
    <div className="pt-20">
      <GetFreeQuotes />
      <TreatmentsAccordion />
      <ViewAllPrices />
    </div>
  );
}
