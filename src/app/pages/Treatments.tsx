import React from 'react';
import { TreatmentsHero } from '../components/TreatmentsHero';
import { SpecialtiesGrid } from '../components/home/SpecialtiesGrid';
import { TrustSignals } from '../components/home/TrustSignals';
import { FinalCTA } from '../components/home/FinalCTA';

export function Treatments() {
  return (
    <>
      <TreatmentsHero />
      <SpecialtiesGrid />
      <TrustSignals />
      <FinalCTA />
    </>
  );
}
