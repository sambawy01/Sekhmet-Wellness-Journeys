import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'src');
let totalReplacements = 0;

function replaceInFile(relPath, replacements) {
  const filePath = path.join(SRC, relPath);
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  ${relPath} not found`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  for (const [search, replace] of replacements) {
    if (content.includes(search)) {
      content = content.replaceAll(search, replace);
      count++;
    }
  }
  if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    totalReplacements += count;
    console.log(`  ✅ ${relPath} — ${count} replacements`);
  } else {
    console.log(`  ⏭  ${relPath} — no matches`);
  }
}

// Helper: ensure useLanguage import exists and hook is called
function ensureI18n(relPath) {
  const filePath = path.join(SRC, relPath);
  if (!fs.existsSync(filePath)) return;
  let content = fs.readFileSync(filePath, 'utf-8');
  let changed = false;

  // Add import if missing
  if (!content.includes('useLanguage')) {
    const fileDir = path.dirname(filePath);
    const contextDir = path.join(SRC, 'app', 'context');
    let importPath = path.relative(fileDir, contextDir).replace(/\\/g, '/');
    if (!importPath.startsWith('.')) importPath = './' + importPath;
    importPath += '/LanguageContext';
    
    const lastImport = content.lastIndexOf("import ");
    const endOfLastImport = content.indexOf('\n', content.indexOf(';', lastImport));
    content = content.slice(0, endOfLastImport + 1) +
      `import { useLanguage } from '${importPath}';\n` +
      content.slice(endOfLastImport + 1);
    changed = true;
  }

  // Add hook call if missing
  if (!content.includes('useLanguage()') && content.includes('useLanguage')) {
    // Find the first "return (" after a function/const declaration
    const returnIdx = content.indexOf('return (');
    if (returnIdx > 0) {
      // Find the line before return
      const beforeReturn = content.lastIndexOf('\n', returnIdx);
      content = content.slice(0, beforeReturn + 1) +
        '  const { t, language, direction } = useLanguage();\n\n' +
        content.slice(beforeReturn + 1);
      changed = true;
    }
  }

  if (changed) {
    fs.writeFileSync(filePath, content, 'utf-8');
  }
}

console.log('🌍 Phase 1: Ensuring all files have useLanguage imports...\n');

const allFiles = [
  'app/pages/About.tsx',
  'app/pages/FAQ.tsx',
  'app/pages/Contact.tsx',
  'app/pages/Consultation.tsx',
  'app/pages/HowItWorks.tsx',
  'app/pages/OurDoctors.tsx',
  'app/pages/PatientStories.tsx',
  'app/pages/Pricing.tsx',
  'app/pages/TravelGuide.tsx',
  'app/pages/DentalCare.tsx',
  'app/pages/DentalImplants.tsx',
  'app/pages/HollywoodSmile.tsx',
  'app/pages/Fertility.tsx',
  'app/pages/BlogListing.tsx',
  'app/pages/BlogArticle.tsx',
  'app/pages/Treatments.tsx',
  'app/pages/Home.tsx',
  'app/components/Footer.tsx',
  'app/components/TreatmentsHero.tsx',
  'app/components/TreatmentCard.tsx',
  'app/components/TestimonialCard.tsx',
  'app/components/DoctorCard.tsx',
  'app/components/PackageCard.tsx',
  'app/components/CostCalculatorWidget.tsx',
  'app/components/MobileStickyCTA.tsx',
  'app/components/ExitIntentPopup.tsx',
  'app/components/SocialProofToast.tsx',
  'app/components/TrustBar.tsx',
  'app/components/home/Hero.tsx',
  'app/components/home/FinalCTA.tsx',
  'app/components/home/TrustSignals.tsx',
  'app/components/home/SpecialtiesGrid.tsx',
  'app/components/how-it-works/StepCard.tsx',
  'app/components/pricing/GetFreeQuotes.tsx',
  'app/components/pricing/TreatmentsAccordion.tsx',
  'app/components/pricing/ViewAllPrices.tsx',
  'app/components/dental/DentalHero.tsx',
];

for (const f of allFiles) {
  ensureI18n(f);
}

console.log('\n🌍 Phase 2: Converting hardcoded strings to t() calls...\n');

// ===== FAQ.tsx =====
// The FAQ has hardcoded arrays - we need to convert them to use t()
const faqPath = path.join(SRC, 'app/pages/FAQ.tsx');
if (fs.existsSync(faqPath)) {
  let faq = fs.readFileSync(faqPath, 'utf-8');
  
  // Replace the static faqCategories array with t() calls
  faq = faq.replace(
    /const faqCategories = \[[\s\S]*?\];/,
    `const faqCategories = [
    t("faq.categories.general"),
    t("faq.categories.travel"),
    t("faq.categories.medical"),
    t("faq.categories.pricing"),
    t("faq.categories.aftercare")
  ];`
  );
  
  // Replace the static faqs array with t() calls
  faq = faq.replace(
    /const faqs = \[[\s\S]*?\n\];/,
    `const faqs = [
    {
      category: t("faq.categories.general"),
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      category: t("faq.categories.general"),
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      category: t("faq.categories.travel"),
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      category: t("faq.categories.travel"),
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
    {
      category: t("faq.categories.medical"),
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      category: t("faq.categories.pricing"),
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      category: t("faq.categories.pricing"),
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      category: t("faq.categories.aftercare"),
      question: t("faq.q6"),
      answer: t("faq.a6"),
    },
  ];`
  );

  // Replace hardcoded JSX strings
  faq = faq.replace(/>Frequently Asked Questions</g, `>{t("faq.title")}<`);
  faq = faq.replace(/Get answers to common questions about medical tourism in Egypt/g, `{t("faq.description")}`);
  faq = faq.replace(/"Search FAQ\.\.\."/g, `t("nav.searchPlaceholder")`);
  faq = faq.replace(/>Still have questions\?</g, `>{t("faq.stillHaveQuestions")}<`);
  faq = faq.replace(/>Contact Our Team</g, `>{t("faq.contactUs")}<`);
  faq = faq.replace(/>Schedule a Call</g, `>{t("cta.scheduleCall")}<`);
  faq = faq.replace(/>WhatsApp Us</g, `>{t("common.whatsapp")}<`);
  faq = faq.replace(/>Email Us</g, `>{t("common.email")}<`);
  faq = faq.replace(/>Book Free Consultation</g, `>{t("cta.bookConsultation")}<`);
  faq = faq.replace(/No results found/g, `{t("blog.noResults")}`);
  faq = faq.replace(/"All"/g, `t("faq.categories.general")`);
  
  fs.writeFileSync(faqPath, faq, 'utf-8');
  console.log('  ✅ FAQ.tsx — data arrays + JSX converted');
  totalReplacements += 10;
}

// ===== About.tsx =====
replaceInFile('app/pages/About.tsx', [
  ['>About Sekhmet Wellness Journeys<', `>{t("about.title")}<`],
  ['>Your Trusted Partner in Medical Tourism<', `>{t("about.subtitle")}<`],
  ['>Our Mission<', `>{t("about.mission.title")}<`],
  ['>Our Vision<', `>{t("about.vision.title")}<`],
  ['>Why Choose Us<', `>{t("about.whyUs.title")}<`],
  ['>Our Story<', `>{t("about.story.title")}<`],
  ['>Our Team<', `>{t("about.team.title")}<`],
  ['>Our Values<', `>{t("about.values.title")}<`],
  ['>JCI Accredited Hospitals<', `>{t("about.whyUs.accredited")}<`],
  ['>Expert Doctors<', `>{t("about.whyUs.doctors")}<`],
  ['>24/7 Patient Support<', `>{t("about.whyUs.support")}<`],
  ['>Complete Travel Assistance<', `>{t("about.whyUs.travel")}<`],
  ['>Multilingual Team<', `>{t("about.whyUs.language")}<`],
  ['>Up to 85% Savings<', `>{t("about.whyUs.savings")}<`],
  ['Save up to 85%', `{t("about.whyUs.savings")}`],
  ['>Quality<', `>{t("about.values.quality")}<`],
  ['>Trust<', `>{t("about.values.trust")}<`],
  ['>Care<', `>{t("about.values.care")}<`],
  ['>Transparency<', `>{t("about.values.transparency")}<`],
  ['>Get Started Today<', `>{t("cta.getStartedToday")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Free Consultation<', `>{t("trust.freeConsultation")}<`],
]);

// ===== Contact.tsx =====
replaceInFile('app/pages/Contact.tsx', [
  ['>Contact Us<', `>{t("contact.title")}<`],
  ['"We\'re Here to Help"', `t("contact.subtitle")`],
  [`>We're Here to Help<`, `>{t("contact.subtitle")}<`],
  ['>Send Message<', `>{t("contact.form.send")}<`],
  ['"Your Name"', `t("contact.form.name")`],
  ['"Your Email"', `t("contact.form.email")`],
  ['"Subject"', `t("contact.form.subject")`],
  ['"Your Message"', `t("contact.form.message")`],
  ['>Follow Us<', `>{t("contact.followUs")}<`],
  ['>Phone<', `>{t("contact.info.phone")}<`],
  ['>Email<', `>{t("contact.info.email")}<`],
  ['>Address<', `>{t("contact.info.address")}<`],
  ['>Working Hours<', `>{t("contact.info.hours")}<`],
  ['>WhatsApp<', `>{t("contact.info.whatsapp")}<`],
  ['>Get in Touch<', `>{t("contact.title")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
]);

// ===== Consultation.tsx =====
replaceInFile('app/pages/Consultation.tsx', [
  ['>Free Consultation<', `>{t("consultation.title")}<`],
  ['>Get Your Personalized Treatment Plan<', `>{t("consultation.subtitle")}<`],
  ['>Submit Consultation Request<', `>{t("consultation.form.submit")}<`],
  ['"Full Name"', `t("consultation.form.name")`],
  ['"Email Address"', `t("consultation.form.email")`],
  ['"Phone Number"', `t("consultation.form.phone")`],
  ['"Country"', `t("consultation.form.country")`],
  ['"Tell us about your medical needs"', `t("consultation.form.message")`],
  ['>What You\'ll Receive<', `>{t("consultation.benefits.title")}<`],
  [`>What You'll Receive<`, `>{t("consultation.benefits.title")}<`],
  ['>Personalized Treatment Plan<', `>{t("consultation.benefits.plan")}<`],
  ['>Detailed Cost Breakdown<', `>{t("consultation.benefits.pricing")}<`],
  ['>Treatment Timeline<', `>{t("consultation.benefits.timeline")}<`],
  ['>Doctor Recommendations<', `>{t("consultation.benefits.doctor")}<`],
  ['We typically respond within 24 hours', `{t("consultation.response")}`],
  ['Your information is confidential', `{t("consultation.form.privacy")}`],
]);

// ===== HowItWorks.tsx =====
replaceInFile('app/pages/HowItWorks.tsx', [
  ['>How It Works<', `>{t("howItWorks.title")}<`],
  ['>Your Journey in 4 Simple Steps<', `>{t("howItWorks.subtitle")}<`],
  [`"Free Consultation"`, `t("howItWorks.step1.title")`],
  [`"Plan Your Trip"`, `t("howItWorks.step2.title")`],
  [`"Receive Treatment"`, `t("howItWorks.step3.title")`],
  [`"Recovery & Follow-Up"`, `t("howItWorks.step4.title")`],
  ['>Start Your Journey Today<', `>{t("howItWorks.cta")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Get Started Today<', `>{t("cta.getStartedToday")}<`],
  ['>Our Guarantee<', `>{t("howItWorks.guarantee.title")}<`],
]);

// ===== OurDoctors.tsx =====
replaceInFile('app/pages/OurDoctors.tsx', [
  ['>Our Doctors<', `>{t("doctors.title")}<`],
  [`"Meet Egypt's Leading Medical Specialists"`, `t("doctors.subtitle")`],
  [`>Meet Egypt's Leading Medical Specialists<`, `>{t("doctors.subtitle")}<`],
  ['>Meet Egypt\'s Leading Medical Specialists<', `>{t("doctors.subtitle")}<`],
  ['>Book Consultation<', `>{t("doctors.bookConsultation")}<`],
  ['>View Profile<', `>{t("doctors.viewProfile")}<`],
  ['"Years of Experience"', `t("doctors.experience")`],
  ['"Specialties"', `t("doctors.specialties")`],
  ['"Certifications"', `t("doctors.certifications")`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
]);

// ===== PatientStories.tsx =====
replaceInFile('app/pages/PatientStories.tsx', [
  ['>Patient Stories<', `>{t("stories.title")}<`],
  ['>Real Results from Real Patients<', `>{t("stories.subtitle")}<`],
  ['>Share Your Story<', `>{t("stories.shareYourStory")}<`],
  ['>Read Full Story<', `>{t("stories.readStory")}<`],
  ['Verified Patient', `{t("stories.verified")}`],
  ['>Before & After<', `>{t("stories.beforeAfter")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
]);

// ===== Pricing.tsx =====
replaceInFile('app/pages/Pricing.tsx', [
  ['>Treatment Pricing<', `>{t("pricing.title")}<`],
  ['Transparent Pricing, No Hidden Fees', `{t("pricing.subtitle")}`],
  ['>Transparent Pricing, No Hidden Fees<', `>{t("pricing.subtitle")}<`],
  ['>View All Prices<', `>{t("pricing.viewAll")}<`],
  ['>Get Personalized Quote<', `>{t("pricing.getQuote")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
  ['"Dental"', `t("pricing.categories.dental")`],
  ['"Hair Transplant"', `t("pricing.categories.hair")`],
  ['"Cosmetic Surgery"', `t("pricing.categories.cosmetic")`],
  ['"Eye Surgery"', `t("pricing.categories.eye")`],
  ['"Bariatric Surgery"', `t("pricing.categories.bariatric")`],
  ['"Skin & Aesthetics"', `t("pricing.categories.skin")`],
  ['Egypt Price', `{t("pricing.egyptPrice")}`],
  ['US Price', `{t("pricing.usPrice")}`],
  ['>Savings<', `>{t("pricing.savings")}<`],
  ['>Procedure<', `>{t("pricing.procedure")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
]);

// ===== TravelGuide.tsx =====
replaceInFile('app/pages/TravelGuide.tsx', [
  ['>Egypt Travel Guide<', `>{t("travelGuide.title")}<`],
  ['Everything You Need for Your Medical Trip', `{t("travelGuide.subtitle")}`],
  ['>Everything You Need for Your Medical Trip<', `>{t("travelGuide.subtitle")}<`],
  ['>Visa Information<', `>{t("travelGuide.visa.title")}<`],
  ['>Getting There<', `>{t("travelGuide.flights.title")}<`],
  ['>Accommodation<', `>{t("travelGuide.accommodation.title")}<`],
  ['>Climate & Weather<', `>{t("travelGuide.weather.title")}<`],
  ['>Currency & Payments<', `>{t("travelGuide.currency.title")}<`],
  ['>Safety & Security<', `>{t("travelGuide.safety.title")}<`],
  ['>Culture & Attractions<', `>{t("travelGuide.culture.title")}<`],
  ['>Travel Tips<', `>{t("travelGuide.tips.title")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
]);

// ===== DentalCare.tsx =====
replaceInFile('app/pages/DentalCare.tsx', [
  ['>Dental Care in Egypt<', `>{t("dentalCare.title")}<`],
  ['World-Class Dental Treatments at Affordable Prices', `{t("dentalCare.subtitle")}`],
  ['>World-Class Dental Treatments at Affordable Prices<', `>{t("dentalCare.subtitle")}<`],
  ['>Why Choose Egypt for Dental Care?<', `>{t("dentalCare.whyEgypt")}<`],
  ['>Our Dental Services<', `>{t("dentalCare.services")}<`],
  ['>Dental Implants<', `>{t("dentalCare.implants")}<`],
  ['>Porcelain Veneers<', `>{t("dentalCare.veneers")}<`],
  ['>Crowns & Bridges<', `>{t("dentalCare.crowns")}<`],
  ['>Teeth Whitening<', `>{t("dentalCare.whitening")}<`],
  ['>Root Canal Treatment<', `>{t("dentalCare.rootCanal")}<`],
  ['>Orthodontics<', `>{t("dentalCare.orthodontics")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
]);

// ===== DentalImplants.tsx =====
replaceInFile('app/pages/DentalImplants.tsx', [
  ['>Dental Implants in Egypt<', `>{t("dentalImplants.title")}<`],
  ['Premium Implants at 75-88% Less Than US Prices', `{t("dentalImplants.subtitle")}`],
  ['>Why Dental Implants?<', `>{t("dentalImplants.benefits.title")}<`],
  ['>The Implant Process<', `>{t("dentalImplants.process.title")}<`],
  ['>Implant Pricing<', `>{t("dentalImplants.pricing.title")}<`],
  ['>Permanent Solution<', `>{t("dentalImplants.benefits.permanent")}<`],
  ['>Natural Look & Feel<', `>{t("dentalImplants.benefits.natural")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
]);

// ===== HollywoodSmile.tsx =====
replaceInFile('app/pages/HollywoodSmile.tsx', [
  ['>Hollywood Smile in Egypt<', `>{t("hollywoodSmile.title")}<`],
  ['Transform Your Smile with World-Class Veneers', `{t("hollywoodSmile.subtitle")}`],
  ['>What is a Hollywood Smile?<', `>{t("hollywoodSmile.whatIs")}<`],
  ['>Your Smile Journey<', `>{t("hollywoodSmile.process.title")}<`],
  ['>Benefits<', `>{t("hollywoodSmile.benefits.title")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
]);

// ===== Fertility.tsx =====
replaceInFile('app/pages/Fertility.tsx', [
  ['>Fertility Treatments in Egypt<', `>{t("fertility.title")}<`],
  ['Advanced Reproductive Medicine at Affordable Prices', `{t("fertility.subtitle")}`],
  ['>Our Fertility Services<', `>{t("fertility.services.title")}<`],
  ['>Why Choose Egypt for Fertility?<', `>{t("fertility.whyEgypt")}<`],
  ['>In Vitro Fertilization (IVF)<', `>{t("fertility.ivf")}<`],
  ['>Intrauterine Insemination (IUI)<', `>{t("fertility.iui")}<`],
  ['>Egg Freezing<', `>{t("fertility.eggFreezing")}<`],
  ['>Genetic Testing<', `>{t("fertility.genetic")}<`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
]);

// ===== BlogListing.tsx =====
replaceInFile('app/pages/BlogListing.tsx', [
  ['>Blog<', `>{t("blog.title")}<`],
  ['Medical Tourism Insights & Tips', `{t("blog.subtitle")}`],
  ['>Recent Posts<', `>{t("blog.recentPosts")}<`],
  ['>All Posts<', `>{t("blog.allPosts")}<`],
  ['min read', `{t("blog.readTime")}`],
  ['>Read More<', `>{t("nav.readMore")}<`],
  ['>Back to Blog<', `>{t("blog.backToBlog")}<`],
]);

// ===== Footer.tsx =====
replaceInFile('app/components/Footer.tsx', [
  ['>Treatments</h4>', `>{t("footer.treatments")}</h4>`],
  ['>Explore</h4>', `>{t("specialties.explore")}</h4>`],
  ['>Contact Us</h4>', `>{t("footer.contactUs")}</h4>`],
  ['Privacy Policy', `{t("footer.privacy")}`],
  ['Terms of Service', `{t("footer.terms")}`],
  ['All Rights Reserved', `{t("footer.copyright")}`],
  ['JCI Accredited Partner', `{t("footer.accredited")}`],
  ['"Heal where history began"', `{t("footer.description")}`],
]);

// ===== Components =====
replaceInFile('app/components/TreatmentsHero.tsx', [
  ['>Our Treatments<', `>{t("treatments.title")}<`],
  ['World-Class Medical Procedures in Egypt', `{t("treatments.subtitle")}`],
]);

replaceInFile('app/components/TreatmentCard.tsx', [
  ['>Learn More<', `>{t("nav.learnMore")}<`],
  ['>View Details<', `>{t("treatments.viewDetails")}<`],
  ['>Get Quote<', `>{t("treatments.getQuote")}<`],
  ['Starting from', `{t("treatments.startingFrom")}`],
  ['Save up to', `{t("treatments.savingsUpTo")}`],
]);

replaceInFile('app/components/DoctorCard.tsx', [
  ['>Book Consultation<', `>{t("doctors.bookConsultation")}<`],
  ['>View Profile<', `>{t("doctors.viewProfile")}<`],
]);

replaceInFile('app/components/TestimonialCard.tsx', [
  ['Verified Patient', `{t("stories.verified")}`],
  ['>Read Full Story<', `>{t("stories.readStory")}<`],
]);

replaceInFile('app/components/PackageCard.tsx', [
  ['>Book Now<', `>{t("nav.bookNow")}<`],
  ['>Learn More<', `>{t("nav.learnMore")}<`],
  ['Starting from', `{t("treatments.startingFrom")}`],
]);

replaceInFile('app/components/MobileStickyCTA.tsx', [
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
  ['>Book Now<', `>{t("nav.bookNow")}<`],
]);

replaceInFile('app/components/ExitIntentPopup.tsx', [
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
  ['Free Consultation', `{t("trust.freeConsultation")}`],
]);

replaceInFile('app/components/CostCalculatorWidget.tsx', [
  ['>Cost Calculator<', `>{t("calculator.title")}<`],
  ['Estimate Your Savings', `{t("calculator.subtitle")}`],
  ['Select Treatment', `{t("calculator.selectTreatment")}`],
  ['You Save', `{t("calculator.youSave")}`],
]);

replaceInFile('app/components/home/FinalCTA.tsx', [
  ['Ready to Start Your Journey?', `{t("cta.readyToStart")}`],
  ['>Ready to Start Your Journey?<', `>{t("cta.readyToStart")}<`],
  ['>Get Your Free Quote<', `>{t("cta.freeQuote")}<`],
  ['>Schedule a Call<', `>{t("cta.scheduleCall")}<`],
  ['No obligation. 100% free.', `{t("cta.noObligation")}`],
  ['Response within 24 hours', `{t("cta.responseTime")}`],
  ['>Book Free Consultation<', `>{t("cta.bookConsultation")}<`],
  ['>Start Saving Today<', `>{t("cta.startSaving")}<`],
  ['>Get Started Today<', `>{t("cta.getStartedToday")}<`],
  ['>Talk to an Expert<', `>{t("cta.talkToExpert")}<`],
]);

replaceInFile('app/components/home/TrustSignals.tsx', [
  ['"JCI Accredited"', `t("trust.jciAccredited")`],
  ['"Patients Served"', `t("trust.patientsServed")`],
  ['"Success Rate"', `t("trust.successRate")`],
  ['"Years Experience"', `t("trust.yearsExperience")`],
  ['"Countries Served"', `t("trust.countriesServed")`],
  ['"Patient Satisfaction"', `t("trust.satisfaction")`],
  ['"24/7 Support"', `t("trust.support247")`],
  ['"No Hidden Fees"', `t("trust.noHiddenFees")`],
  ['"Free Consultation"', `t("trust.freeConsultation")`],
  ['>JCI Accredited<', `>{t("trust.jciAccredited")}<`],
]);

replaceInFile('app/components/home/SpecialtiesGrid.tsx', [
  ['>Our Specialties<', `>{t("specialties.title")}<`],
  ['Comprehensive Medical Care', `{t("specialties.subtitle")}`],
  ['"Dental Care"', `t("nav.dentalCare")`],
  ['"Hair Transplant"', `t("nav.hairTransplant")`],
  ['"Cosmetic Surgery"', `t("nav.cosmetic")`],
  ['"Eye Surgery"', `t("nav.eyeSurgery")`],
  ['"Bariatric Surgery"', `t("nav.bariatric")`],
  ['"Skin & Aesthetics"', `t("nav.skinAesthetics")`],
  ['"Fertility"', `t("nav.fertility")`],
  ['>Explore<', `>{t("specialties.explore")}<`],
]);

// Pricing components
replaceInFile('app/components/pricing/GetFreeQuotes.tsx', [
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
  ['>Get Your Free Quote<', `>{t("cta.freeQuote")}<`],
  ['Free Consultation', `{t("trust.freeConsultation")}`],
]);

replaceInFile('app/components/pricing/TreatmentsAccordion.tsx', [
  ['>View All Prices<', `>{t("pricing.viewAll")}<`],
  ['Starting from', `{t("treatments.startingFrom")}`],
]);

replaceInFile('app/components/pricing/ViewAllPrices.tsx', [
  ['>View All Prices<', `>{t("pricing.viewAll")}<`],
  ['>Get Free Quote<', `>{t("hero.cta.primary")}<`],
]);

// TrustBar
replaceInFile('app/components/TrustBar.tsx', [
  ['"JCI Accredited"', `t("trust.jciAccredited")`],
  ['"Free Consultation"', `t("trust.freeConsultation")`],
  ['"24/7 Support"', `t("trust.support247")`],
  ['"No Hidden Fees"', `t("trust.noHiddenFees")`],
]);

console.log(`\n✅ Done! ${totalReplacements} total replacements across all files.`);
console.log('\nRun: git add . && git commit -m "Full i18n: all pages now use translations" && git push');
