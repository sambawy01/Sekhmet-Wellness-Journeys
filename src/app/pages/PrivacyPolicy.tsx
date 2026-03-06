import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Shield } from 'lucide-react';

export const PrivacyPolicy: React.FC = () => {
  const { direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div className={`min-h-screen bg-[#F8FAFB] pt-12 pb-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#0D9488]" />
          </div>
          <h1 className="font-sans text-4xl md:text-5xl font-bold text-[#1A2332] mb-4">Privacy Policy</h1>
          <p className="font-sans text-[#64748B]">Last updated: March 2026</p>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 font-sans text-[#3D3D3D] leading-relaxed ${isRTL ? 'text-right' : ''}`}>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">1. Introduction</h2>
            <p>
              Sekhmet Wellness Journeys ("we," "our," or "us") is a medical tourism facilitation company registered at IFZA Free Zone, Dubai, UAE. We are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website sekhmetwellness.com or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">2. Information We Collect</h2>
            <p className="mb-3">We may collect the following types of personal information:</p>
            <p className="mb-2">
              <strong>Personal Identification Information:</strong> Full name, email address, phone number, date of birth, nationality, and passport details when necessary for travel and medical coordination.
            </p>
            <p className="mb-2">
              <strong>Health Information:</strong> Medical history, treatment preferences, diagnostic reports, and other health-related information you provide for treatment planning and coordination with medical facilities.
            </p>
            <p className="mb-2">
              <strong>Communication Data:</strong> Records of correspondence including emails, WhatsApp messages, and phone calls related to your inquiry or treatment journey.
            </p>
            <p>
              <strong>Website Usage Data:</strong> IP address, browser type, pages visited, and other analytical data collected through cookies and similar technologies to improve our website and services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">3. How We Use Your Information</h2>
            <p className="mb-3">We use the information we collect for the following purposes:</p>
            <p className="mb-2">To coordinate and facilitate your medical treatment, including communicating with hospitals, clinics, and medical professionals on your behalf.</p>
            <p className="mb-2">To arrange travel logistics including accommodation, airport transfers, and visa assistance.</p>
            <p className="mb-2">To respond to your inquiries and provide customer support.</p>
            <p className="mb-2">To send you relevant information about our services, treatment updates, and follow-up care communications.</p>
            <p>To improve our website, services, and overall patient experience.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">4. Information Sharing</h2>
            <p className="mb-3">We may share your personal information with the following parties, strictly for the purpose of delivering our services:</p>
            <p className="mb-2">
              <strong>Medical Facilities:</strong> Partner hospitals, clinics, and healthcare providers involved in your treatment.
            </p>
            <p className="mb-2">
              <strong>Travel Partners:</strong> Hotels, transportation providers, and visa processing services as needed for your travel arrangements.
            </p>
            <p className="mb-2">
              <strong>Service Providers:</strong> Third-party companies that assist us in operating our website, conducting our business, or serving you, provided they agree to keep your information confidential.
            </p>
            <p>
              We will never sell, trade, or rent your personal information to third parties for marketing purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">5. Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. This includes encrypted data transmission, secure server infrastructure, and restricted access to personal data. However, no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">6. Data Retention</h2>
            <p>
              We retain your personal information only for as long as necessary to fulfill the purposes for which it was collected, including to satisfy any legal, accounting, or reporting requirements. Medical records and treatment information may be retained for a longer period in accordance with applicable healthcare regulations and for continuity of care purposes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">7. Your Rights</h2>
            <p className="mb-3">Depending on your jurisdiction, you may have the following rights regarding your personal data:</p>
            <p className="mb-2">The right to access the personal information we hold about you.</p>
            <p className="mb-2">The right to request correction of inaccurate or incomplete data.</p>
            <p className="mb-2">The right to request deletion of your personal data, subject to legal retention requirements.</p>
            <p className="mb-2">The right to withdraw consent for data processing at any time.</p>
            <p>
              To exercise any of these rights, please contact us at <a href="mailto:info@sekhmetwellness.com" className="text-[#0D9488] hover:underline">info@sekhmetwellness.com</a>.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">8. Cookies</h2>
            <p>
              Our website uses cookies to enhance your browsing experience. Cookies are small data files stored on your device. We use essential cookies for website functionality and analytics cookies to understand how visitors interact with our site. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">9. International Data Transfers</h2>
            <p>
              As a medical tourism company, your information may be transferred to and processed in countries outside your country of residence, including the UAE and countries where our partner medical facilities are located. We take appropriate safeguards to ensure your data is protected in accordance with this Privacy Policy during such transfers.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this policy periodically to stay informed about how we protect your information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">11. Contact Us</h2>
            <p>
              If you have any questions about this Privacy Policy or our data practices, please contact us:
            </p>
            <div className="mt-4 p-6 bg-[#F0F7F4] rounded-xl">
              <p className="font-bold text-[#1A2332]">Sekhmet Wellness Journeys</p>
              <p>IFZA Free Zone, Dubai, UAE</p>
              <p>Email: <a href="mailto:info@sekhmetwellness.com" className="text-[#0D9488] hover:underline">info@sekhmetwellness.com</a></p>
              <p>Phone: <a href="tel:+447988559541" className="text-[#0D9488] hover:underline">+44 798 855 9541</a></p>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
};
