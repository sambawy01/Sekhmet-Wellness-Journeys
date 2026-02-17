import React from 'react';
import { Hero } from '../components/home/Hero';
import { SavingsShockBar } from '../components/home/SavingsShockBar';
import { SpecialtiesGrid } from '../components/home/SpecialtiesGrid';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { DestinationShowcase } from '../components/home/DestinationShowcase';
import { PatientJourney } from '../components/home/PatientJourney';
import { PatientStories } from '../components/home/PatientStories';
import { TrustSignals } from '../components/home/TrustSignals';
import { EgyptEditorial } from '../components/home/EgyptEditorial';
import { FinalCTA } from '../components/home/FinalCTA';

import { useLanguage } from '../context/LanguageContext';
export function Home() {
  const { t, language, direction } = useLanguage();

  return (
    <>
      <Hero />
      <SavingsShockBar />
      <SpecialtiesGrid />
      <WhyChooseUs />
      <DestinationShowcase />
      <PatientJourney />
      <PatientStories />
      <TrustSignals />
      <EgyptEditorial />
      <FinalCTA />
    </>
  );
}
