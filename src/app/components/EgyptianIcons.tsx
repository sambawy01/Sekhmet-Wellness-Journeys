import React from 'react';
import { Sun, Shield, HeartHandshake, Waves } from 'lucide-react';

import { useLanguage } from '../context/LanguageContext';
// Custom SVG Icons for Egyptian Theme
export const IconAnkh: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2a4 4 0 0 1 4 4c0 2.21-1.79 4-4 4s-4-1.79-4-4a4 4 0 0 1 4-4z" />
    <path d="M12 10v12" />
    <path d="M5 14h14" />
  </svg>
);

export const IconEyeOfHorus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
    <circle cx="12" cy="12" r="3" />
    <path d="M12 19v3" />
    <path d="M20 4l-3 3" />
    <path d="M4 20l5-5" />
  </svg>
);

export const IconPyramid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 2L2 22h20L12 2z" />
    <path d="M12 2v20" />
    <path d="M2 22l10-6 10 6" />
  </svg>
);

export const IconLotus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 22s-8-6-8-12a8 8 0 1 1 16 0c0 6-8 12-8 12z" />
    <path d="M12 22v-8" />
    <path d="M12 14l4-4" />
    <path d="M12 14l-4-4" />
  </svg>
);

export const IconScarab: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="6" />
    <path d="M12 6V2" />
    <path d="M12 18v4" />
    <path d="M6 12H2" />
    <path d="M18 12h4" />
    <path d="M8 8L5 5" />
    <path d="M16 8l3-3" />
    <path d="M8 16l-3 3" />
    <path d="M16 16l3 3" />
  </svg>
);

export const IconPapyrus: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 6h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4" />
    <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <path d="M4 6v14" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M8 18h4" />
  </svg>
);

// Re-export Lucide icons that fit the theme for the others
// Using explicit const exports for better compatibility
export const IconSun = Sun;
export const IconShield = Shield;
export const IconCare = HeartHandshake;
export const IconNile = Waves;
