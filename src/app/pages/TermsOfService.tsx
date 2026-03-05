import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { FileText } from 'lucide-react';

export const TermsOfService: React.FC = () => {
  const { direction } = useLanguage();
  const isRTL = direction === 'rtl';

  return (
    <div className={`min-h-screen bg-[#F8FAFB] pt-12 pb-20 ${isRTL ? 'rtl' : 'ltr'}`} dir={direction}>
      <div className="max-w-4xl mx-auto px-4 md:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="w-16 h-16 bg-[#0D9488]/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <FileText className="w-8 h-8 text-[#0D9488]" />
          </div>
          <h1 className="font-['Outfit'] text-4xl md:text-5xl font-bold text-[#1A2332] mb-4">Terms of Service</h1>
          <p className="font-['Outfit'] text-[#64748B]">Last updated: March 2026</p>
        </div>

        <div className={`bg-white rounded-2xl shadow-lg p-8 md:p-12 space-y-8 font-['Outfit'] text-[#3D3D3D] leading-relaxed ${isRTL ? 'text-right' : ''}`}>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">1. Agreement to Terms</h2>
            <p>
              By accessing or using the website sekhmetwellness.com and the services provided by Sekhmet Wellness Journeys ("we," "our," or "us"), a company registered at IFZA Free Zone, Dubai, UAE, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">2. Our Services</h2>
            <p className="mb-3">
              Sekhmet Wellness Journeys is a medical tourism facilitation company. We connect international patients with accredited medical facilities and healthcare providers. Our services include:
            </p>
            <p className="mb-2">Treatment consultation and planning assistance.</p>
            <p className="mb-2">Coordination with hospitals, clinics, and medical professionals.</p>
            <p className="mb-2">Travel logistics including accommodation arrangements, airport transfers, and visa guidance.</p>
            <p>Dedicated patient coordination throughout the treatment journey.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">3. Medical Disclaimer</h2>
            <p className="mb-3">
              <strong>Important:</strong> Sekhmet Wellness Journeys is a medical tourism facilitator, not a healthcare provider. We do not practice medicine, provide medical diagnoses, or deliver medical treatment.
            </p>
            <p className="mb-2">All medical treatments are performed by independent, licensed healthcare professionals at accredited medical facilities.</p>
            <p className="mb-2">Treatment outcomes vary by individual and are not guaranteed. We do not make any guarantees regarding the success, results, or outcomes of any medical procedure.</p>
            <p>
              You are responsible for making your own informed decisions about your healthcare in consultation with qualified medical professionals. We strongly recommend obtaining a second opinion and discussing all risks with your treating physician before proceeding with any medical treatment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">4. Patient Responsibilities</h2>
            <p className="mb-3">As a patient using our services, you agree to:</p>
            <p className="mb-2">Provide accurate and complete medical history and personal information.</p>
            <p className="mb-2">Disclose all relevant health conditions, medications, and allergies to your treating physicians.</p>
            <p className="mb-2">Follow pre-treatment and post-treatment instructions provided by your medical team.</p>
            <p className="mb-2">Obtain appropriate travel insurance covering medical treatment abroad.</p>
            <p>Ensure you have a valid passport and any necessary travel documents and visas.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">5. Pricing and Payments</h2>
            <p className="mb-2">All prices displayed on our website are approximate and provided for general guidance only. Final treatment costs will be confirmed after medical consultation and assessment.</p>
            <p className="mb-2">Prices may vary depending on the complexity of the procedure, facility chosen, and individual patient requirements.</p>
            <p className="mb-2">Payment terms, methods, and refund policies will be detailed in your individual treatment agreement provided before any financial commitment is made.</p>
            <p>Additional costs may arise for unforeseen medical requirements, extended stays, or changes to the treatment plan.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">6. Cancellation and Refunds</h2>
            <p className="mb-2">Cancellation policies vary depending on the medical facility and services booked. Specific cancellation terms will be outlined in your individual service agreement.</p>
            <p className="mb-2">We recommend purchasing comprehensive travel and medical insurance that covers trip cancellation.</p>
            <p>
              Refund requests will be handled on a case-by-case basis in accordance with the terms of your service agreement and the policies of the involved medical facilities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">7. Limitation of Liability</h2>
            <p className="mb-2">
              To the maximum extent permitted by applicable law, Sekhmet Wellness Journeys shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
            </p>
            <p className="mb-2">We are not liable for the actions, omissions, or negligence of third-party medical providers, hospitals, airlines, hotels, or other service providers.</p>
            <p>
              Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">8. Intellectual Property</h2>
            <p>
              All content on the sekhmetwellness.com website, including text, graphics, logos, images, and software, is the property of Sekhmet Wellness Journeys and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content on our website without our express written permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">9. Website Content</h2>
            <p className="mb-2">
              The information provided on our website is for general informational purposes only and does not constitute medical advice. While we strive to keep the content accurate and up to date, we make no warranties about the completeness, reliability, or accuracy of this information.
            </p>
            <p>
              Patient testimonials and reviews represent individual experiences and do not guarantee similar results. Before and after images are for illustrative purposes and individual results may vary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">10. Governing Law</h2>
            <p>
              These Terms of Service are governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising from these terms or your use of our services shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">11. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after any changes constitutes acceptance of the updated terms. We encourage you to review these terms periodically.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-[#1A2332] mb-4">12. Contact Us</h2>
            <p>
              If you have any questions about these Terms of Service, please contact us:
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
