import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// import { Toaster } from 'sonner';
import { useEffect } from 'react';

import { LanguageProvider } from './context/LanguageContext';

// Components
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
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
import { VisionCorrection } from './pages/VisionCorrection';
import { CosmeticSurgery } from './pages/CosmeticSurgery';
import { Wellness } from './pages/Wellness';
import { HealthCheckups } from './pages/HealthCheckups';
import { Pricing } from './pages/Pricing';
import { Treatments } from './pages/Treatments';

// Admin CRM Components
import AdminLogin from './components/admin/AdminLogin';
import AdminLayout from './components/admin/AdminLayout';
import Dashboard from './components/admin/Dashboard';
import LeadsList from './components/admin/LeadsList';
import LeadDetail from './components/admin/LeadDetail';
import AdminSettings from './components/admin/AdminSettings';
import ProtectedRoute from './components/admin/ProtectedRoute';

// ScrollToTop component to reset scroll on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// Website layout wrapper (with Navigation + Footer)
function WebsiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F8FAFB] text-[#1A2332] font-['Outfit'] transition-all duration-300">
      <Navigation />
      <main>{children}</main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <LanguageProvider>
        <ScrollToTop />
        <Routes>
          {/* Admin CRM Routes - No Navigation/Footer */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin" element={<ProtectedRoute><AdminLayout /></ProtectedRoute>}>
            <Route index element={<Dashboard />} />
            <Route path="leads" element={<LeadsList />} />
            <Route path="leads/:id" element={<LeadDetail />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* Website Routes - With Navigation + Footer */}
          <Route path="/" element={<WebsiteLayout><Home /></WebsiteLayout>} />
          <Route path="/treatments" element={<WebsiteLayout><Treatments /></WebsiteLayout>} />
          <Route path="/treatments/dental" element={<WebsiteLayout><DentalCare /></WebsiteLayout>} />
          <Route path="/treatments/dental/implants" element={<WebsiteLayout><DentalImplants /></WebsiteLayout>} />
          <Route path="/treatments/dental/hollywood-smile" element={<WebsiteLayout><HollywoodSmile /></WebsiteLayout>} />
          <Route path="/treatments/fertility" element={<WebsiteLayout><Fertility /></WebsiteLayout>} />
          <Route path="/treatments/vision" element={<WebsiteLayout><VisionCorrection /></WebsiteLayout>} />
          <Route path="/treatments/cosmetic" element={<WebsiteLayout><CosmeticSurgery /></WebsiteLayout>} />
          <Route path="/treatments/wellness" element={<WebsiteLayout><Wellness /></WebsiteLayout>} />
          <Route path="/treatments/checkups" element={<WebsiteLayout><HealthCheckups /></WebsiteLayout>} />
          <Route path="/pricing" element={<WebsiteLayout><Pricing /></WebsiteLayout>} />
          <Route path="/how-it-works" element={<WebsiteLayout><HowItWorks /></WebsiteLayout>} />
          <Route path="/patient-stories" element={<WebsiteLayout><PatientStories /></WebsiteLayout>} />
          {/* <Route path="/doctors" element={<WebsiteLayout><OurDoctors /></WebsiteLayout>} /> */}{/* Hidden until real doctor agreements are in place */}
          <Route path="/consultation" element={<WebsiteLayout><Consultation /></WebsiteLayout>} />
          <Route path="/faq" element={<WebsiteLayout><FAQ /></WebsiteLayout>} />
          <Route path="/travel-guide" element={<WebsiteLayout><TravelGuide /></WebsiteLayout>} />
          <Route path="/blog" element={<WebsiteLayout><BlogListing /></WebsiteLayout>} />
          <Route path="/blog/:slug" element={<WebsiteLayout><BlogArticle /></WebsiteLayout>} />
          <Route path="/about" element={<WebsiteLayout><About /></WebsiteLayout>} />
          <Route path="/contact" element={<WebsiteLayout><Contact /></WebsiteLayout>} />
        </Routes>
      </LanguageProvider>
    </HashRouter>
  );
}
