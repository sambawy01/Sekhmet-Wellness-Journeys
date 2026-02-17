import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Toaster } from 'sonner';
import { useEffect } from 'react';

import { LanguageProvider } from './context/LanguageContext';

// Components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
// import { FloatingWhatsApp } from './components/FloatingWhatsApp';
// import { ExitIntentPopup } from './components/ExitIntentPopup';
// import { SocialProofManager } from './components/SocialProofToast';

// Pages
import { Home } from './pages/Home';
import { DentalCare } from './pages/DentalCare';
import { DentalImplants } from './pages/DentalImplants';
import { HollywoodSmile } from './pages/HollywoodSmile';
import { HowItWorks } from './pages/HowItWorks';
import { PatientStories } from './pages/PatientStories';
import { OurDoctors } from './pages/OurDoctors';
import { Consultation } from './pages/Consultation';
import { FAQ } from './pages/FAQ';
import { TravelGuide } from './pages/TravelGuide';
import { BlogListing } from './pages/BlogListing';
import { BlogArticle } from './pages/BlogArticle';
import { About } from './pages/About';
import { Contact } from './pages/Contact';
import { Fertility } from './pages/Fertility';
import { Pricing } from './pages/Pricing';
import { Treatments } from './pages/Treatments';

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LanguageProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-[#F5F0E5] text-[#0F1923] font-['DM_Sans'] transition-all duration-300">
          {/* <Toaster position="bottom-left" toastOptions={{
            style: { background: 'transparent', border: 'none', boxShadow: 'none' },
          }} /> */}
          {/* <SocialProofManager /> */}
          {/* <FloatingWhatsApp /> */}
          {/* <ExitIntentPopup /> */}
          
          <Navigation />
          
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/treatments" element={<Treatments />} />
              <Route path="/treatments/dental" element={<DentalCare />} />
              <Route path="/treatments/dental/implants" element={<DentalImplants />} />
              <Route path="/treatments/dental/hollywood-smile" element={<HollywoodSmile />} />
              <Route path="/treatments/fertility" element={<Fertility />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/how-it-works" element={<HowItWorks />} />
              <Route path="/patient-stories" element={<PatientStories />} />
              <Route path="/doctors" element={<OurDoctors />} />
              <Route path="/consultation" element={<Consultation />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/travel-guide" element={<TravelGuide />} />
              <Route path="/blog" element={<BlogListing />} />
              <Route path="/blog/:slug" element={<BlogArticle />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          <Footer />
        </div>
      </LanguageProvider>
    </HashRouter>
  );
}
