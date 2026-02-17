#!/usr/bin/env node
/**
 * Auto-i18n: Processes all TSX files to replace hardcoded strings with t() calls
 * Run from project root: node apply-i18n.mjs
 */
import fs from 'fs';
import path from 'path';

const SRC = path.join(process.cwd(), 'src');
let filesModified = 0;
let replacementsMade = 0;

// Map of exact English strings → translation keys
const stringMap = {
  // Footer
  'Heal where history began': 'footer.description',
  'Premium medical tourism agency connecting global patients with Egypt\'s finest surgeons and 5-star recovery experiences.': 'footer.description',
  '>Treatments<': '>footer.treatments<',
  '>Explore<': '>specialties.explore<',
  '>Contact Us<': '>footer.contactUs<',
  'Mon-Sun, 9am – 9pm EST': 'footer.copyright',
  '© 2025 Sekhmet Wellness Journeys': 'footer.copyright',
  '© 2026 Sekhmet Wellness Journeys': 'footer.copyright',
  'All Rights Reserved': 'footer.copyright',
  'JCI Accredited Partner': 'footer.accredited',
  'HIPAA Compliant': 'footer.accredited',
  'Privacy Policy': 'footer.privacy',
  'Terms of Service': 'footer.terms',
};

/**
 * For each TSX file, ensure it has useLanguage import and
 * add const { t, direction } = useLanguage(); if the component uses hardcoded strings
 */
function processFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  const originalContent = content;
  const fileName = path.basename(filePath, '.tsx');
  const relativePath = path.relative(SRC, filePath);
  
  // Skip files that are just re-exports or very small
  if (content.length < 100) return;
  
  // Skip files that already use t() extensively
  const tCallCount = (content.match(/\{t\(/g) || []).length;
  if (tCallCount > 5) {
    console.log(`  ⏭  ${relativePath} - already has ${tCallCount} t() calls, skipping`);
    return;
  }

  // Check if file has useLanguage import
  const hasLanguageImport = content.includes('useLanguage');
  const hasLanguageHook = content.includes('useLanguage()');
  
  // Determine the relative import path for LanguageContext
  const fileDir = path.dirname(filePath);
  const contextDir = path.join(SRC, 'app', 'context');
  let importPath = path.relative(fileDir, contextDir).replace(/\\/g, '/');
  if (!importPath.startsWith('.')) importPath = './' + importPath;
  importPath += '/LanguageContext';
  
  // Add import if missing
  if (!hasLanguageImport) {
    // Find the last import statement
    const importRegex = /^import .+ from .+;?\s*$/gm;
    let lastImportMatch;
    let match;
    while ((match = importRegex.exec(content)) !== null) {
      lastImportMatch = match;
    }
    if (lastImportMatch) {
      const insertPos = lastImportMatch.index + lastImportMatch[0].length;
      content = content.slice(0, insertPos) + 
        `\nimport { useLanguage } from '${importPath}';` +
        content.slice(insertPos);
    }
  }

  // Add the hook call if missing - find the component function body
  if (!hasLanguageHook && content.includes('useLanguage')) {
    // Try to find "return (" and add hook before it
    // Look for patterns like: function ComponentName() { ... return (
    // or: const ComponentName = () => { ... return (
    // or: export default function ... { ... return (
    const funcBodyRegex = /((?:export\s+)?(?:default\s+)?(?:function\s+\w+|const\s+\w+\s*[:=]\s*(?:React\.FC[^=]*=\s*)?\([^)]*\)\s*(?::\s*\w+)?\s*=>)\s*\{)\s*\n/;
    const funcMatch = funcBodyRegex.exec(content);
    if (funcMatch) {
      const insertPos = funcMatch.index + funcMatch[0].length;
      content = content.slice(0, insertPos) +
        '  const { t, direction } = useLanguage();\n' +
        content.slice(insertPos);
    }
  }

  // Now do string replacements based on the file
  // We'll use a targeted approach per file type
  
  if (content !== originalContent) {
    fs.writeFileSync(filePath, content, 'utf-8');
    filesModified++;
    console.log(`  ✅ ${relativePath} - added i18n imports/hooks`);
  } else {
    console.log(`  ⏭  ${relativePath} - no changes needed`);
  }
}

// Process all TSX files
function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file === 'node_modules' || file === '.git' || file === 'dist') continue;
      walkDir(fullPath);
    } else if (file.endsWith('.tsx') && !file.endsWith('.bak')) {
      processFile(fullPath);
    }
  }
}

console.log('🌍 Adding i18n support to all TSX files...\n');
console.log('Phase 1: Adding useLanguage imports and hooks...');
walkDir(path.join(SRC, 'app'));
console.log(`\n✅ Phase 1 complete: ${filesModified} files modified\n`);

// Phase 2: Now we need to do the actual string replacements
// This is file-specific, so we handle each file individually
console.log('Phase 2: Replacing hardcoded strings with t() calls...\n');

function replaceStrings(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`  ⚠️  ${path.basename(filePath)} not found, skipping`);
    return;
  }
  let content = fs.readFileSync(filePath, 'utf-8');
  let count = 0;
  
  for (const [search, replace] of replacements) {
    if (content.includes(search)) {
      content = content.replace(search, replace);
      count++;
    }
  }
  
  if (count > 0) {
    fs.writeFileSync(filePath, content, 'utf-8');
    replacementsMade += count;
    console.log(`  ✅ ${path.basename(filePath)} - ${count} replacements`);
  } else {
    console.log(`  ⏭  ${path.basename(filePath)} - no matching strings`);
  }
}

// Footer.tsx replacements
replaceStrings(path.join(SRC, 'app/components/Footer.tsx'), [
  ['"Heal where history began"', '{t("footer.description")}'],
  ['Premium medical tourism agency connecting global patients with Egypt\'s finest surgeons and 5-star recovery experiences.', '{t("footer.description")}'],
  ['>Treatments</h4>', '>{t("footer.treatments")}</h4>'],
  ['>Explore</h4>', '>{t("specialties.explore")}</h4>'],
  ['>Contact Us</h4>', '>{t("footer.contactUs")}</h4>'],
  ['"Dental Care", "Vision Correction", "Cosmetic Surgery", "Comprehensive Checkups", "IVF & Fertility"', 't("treatments.dental.title"), t("treatments.eye.title"), t("treatments.cosmetic.title"), t("dentalCare.services"), t("treatments.fertility.title")'],
  ['"Packages", "Destinations", "How It Works", "Patient Stories", "Our Doctors", "Prices", "FAQ", "Blog"', 't("pricing.allInclusive"), t("travelGuide.title"), t("nav.howItWorks"), t("stories.title"), t("doctors.title"), t("nav.pricing"), t("nav.faq"), t("nav.blog")'],
  ['>Privacy Policy<', '>{t("footer.privacy")}<'],
  ['>Terms of Service<', '>{t("footer.terms")}<'],
  ['All Rights Reserved', '{t("footer.copyright")}'],
]);

// Navigation.tsx replacements - already has useLanguage but may need more t() calls
replaceStrings(path.join(SRC, 'app/components/Navigation.tsx'), [
  ['"Search treatments..."', '{t("nav.searchPlaceholder")}'],
  ['>Free Consultation<', '>{t("nav.freeConsultation")}<'],
  ['>Get Started<', '>{t("nav.getStarted")}<'],
]);

// Home page components
replaceStrings(path.join(SRC, 'app/components/home/FinalCTA.tsx'), [
  ['Ready to Start Your Journey?', '{t("cta.readyToStart")}'],
  ['Get Your Free Quote', '{t("cta.freeQuote")}'],
  ['Schedule a Call', '{t("cta.scheduleCall")}'],
  ['No obligation. 100% free.', '{t("cta.noObligation")}'],
  ['Response within 24 hours', '{t("cta.responseTime")}'],
  ['>Book Free Consultation<', '>{t("cta.bookConsultation")}<'],
  ['>Start Saving Today<', '>{t("cta.startSaving")}<'],
  ['>Get Started Today<', '>{t("cta.getStartedToday")}<'],
  ['>Talk to an Expert<', '>{t("cta.talkToExpert")}<'],
]);

replaceStrings(path.join(SRC, 'app/components/home/TrustSignals.tsx'), [
  ['JCI Accredited', 't("trust.jciAccredited")'],
  ['Patients Served', 't("trust.patientsServed")'],
  ['Success Rate', 't("trust.successRate")'],
  ['Years Experience', 't("trust.yearsExperience")'],
  ['Countries Served', 't("trust.countriesServed")'],
  ['Patient Satisfaction', 't("trust.satisfaction")'],
  ['"24/7 Support"', 't("trust.support247")'],
  ['No Hidden Fees', 't("trust.noHiddenFees")'],
  ['Free Consultation', 't("trust.freeConsultation")'],
]);

replaceStrings(path.join(SRC, 'app/components/home/SpecialtiesGrid.tsx'), [
  ['>Our Specialties<', '>{t("specialties.title")}<'],
  ['Comprehensive Medical Care', '{t("specialties.subtitle")}'],
  ['"Dental Care"', 't("nav.dentalCare")'],
  ['"Hair Transplant"', 't("nav.hairTransplant")'],
  ['"Cosmetic Surgery"', 't("nav.cosmetic")'],
  ['"Eye Surgery"', 't("nav.eyeSurgery")'],
  ['"Bariatric Surgery"', 't("nav.bariatric")'],
  ['"Skin & Aesthetics"', 't("nav.skinAesthetics")'],
  ['"Fertility"', 't("nav.fertility")'],
]);

// TreatmentsHero.tsx
replaceStrings(path.join(SRC, 'app/components/TreatmentsHero.tsx'), [
  ['>Our Treatments<', '>{t("treatments.title")}<'],
  ['World-Class Medical Procedures in Egypt', '{t("treatments.subtitle")}'],
]);

// CostCalculatorWidget.tsx
replaceStrings(path.join(SRC, 'app/components/CostCalculatorWidget.tsx'), [
  ['Cost Calculator', 't("calculator.title")'],
  ['Estimate Your Savings', 't("calculator.subtitle")'],
  ['Select Treatment', 't("calculator.selectTreatment")'],
  ['You Save', 't("calculator.youSave")'],
]);

// DoctorCard.tsx
replaceStrings(path.join(SRC, 'app/components/DoctorCard.tsx'), [
  ['>Book Consultation<', '>{t("doctors.bookConsultation")}<'],
  ['>View Profile<', '>{t("doctors.viewProfile")}<'],
  ['Years of Experience', 't("doctors.experience")'],
  ['Specialties', 't("doctors.specialties")'],
]);

// TestimonialCard.tsx
replaceStrings(path.join(SRC, 'app/components/TestimonialCard.tsx'), [
  ['Verified Patient', '{t("stories.verified")}'],
  ['>Read Full Story<', '>{t("stories.readStory")}<'],
]);

// Page files - About.tsx
replaceStrings(path.join(SRC, 'app/pages/About.tsx'), [
  ['>About Sekhmet Wellness Journeys<', '>{t("about.title")}<'],
  ['>Your Trusted Partner in Medical Tourism<', '>{t("about.subtitle")}<'],
  ['>Our Mission<', '>{t("about.mission.title")}<'],
  ['>Our Vision<', '>{t("about.vision.title")}<'],
  ['>Why Choose Us<', '>{t("about.whyUs.title")}<'],
  ['>Our Story<', '>{t("about.story.title")}<'],
  ['>Our Team<', '>{t("about.team.title")}<'],
  ['>Our Values<', '>{t("about.values.title")}<'],
]);

// FAQ.tsx
replaceStrings(path.join(SRC, 'app/pages/FAQ.tsx'), [
  ['>Frequently Asked Questions<', '>{t("faq.title")}<'],
  ['>Everything You Need to Know<', '>{t("faq.subtitle")}<'],
  ['Still Have Questions?', '{t("faq.stillHaveQuestions")}'],
  ['Contact us for personalized answers', '{t("faq.contactUs")}'],
]);

// Contact.tsx
replaceStrings(path.join(SRC, 'app/pages/Contact.tsx'), [
  ['>Contact Us<', '>{t("contact.title")}<'],
  ['"We\'re Here to Help"', 't("contact.subtitle")'],
  ['>Send Message<', '>{t("contact.form.send")}<'],
  ['"Your Name"', 't("contact.form.name")'],
  ['"Your Email"', 't("contact.form.email")'],
  ['"Subject"', 't("contact.form.subject")'],
  ['"Your Message"', 't("contact.form.message")'],
  ['>Follow Us<', '>{t("contact.followUs")}<'],
]);

// Consultation.tsx
replaceStrings(path.join(SRC, 'app/pages/Consultation.tsx'), [
  ['>Free Consultation<', '>{t("consultation.title")}<'],
  ['>Get Your Personalized Treatment Plan<', '>{t("consultation.subtitle")}<'],
  ['>Submit Consultation Request<', '>{t("consultation.form.submit")}<'],
  ['"Full Name"', 't("consultation.form.name")'],
  ['"Email Address"', 't("consultation.form.email")'],
  ['"Phone Number"', 't("consultation.form.phone")'],
  ['"Country"', 't("consultation.form.country")'],
]);

// HowItWorks.tsx
replaceStrings(path.join(SRC, 'app/pages/HowItWorks.tsx'), [
  ['>How It Works<', '>{t("howItWorks.title")}<'],
  ['>Your Journey in 4 Simple Steps<', '>{t("howItWorks.subtitle")}<'],
  ['Free Consultation', 't("howItWorks.step1.title")'],
  ['Plan Your Trip', 't("howItWorks.step2.title")'],
  ['Receive Treatment', 't("howItWorks.step3.title")'],
  ['Recovery & Follow-Up', 't("howItWorks.step4.title")'],
]);

// OurDoctors.tsx
replaceStrings(path.join(SRC, 'app/pages/OurDoctors.tsx'), [
  ['>Our Doctors<', '>{t("doctors.title")}<'],
  ['"Meet Egypt\'s Leading Medical Specialists"', 't("doctors.subtitle")'],
]);

// PatientStories.tsx
replaceStrings(path.join(SRC, 'app/pages/PatientStories.tsx'), [
  ['>Patient Stories<', '>{t("stories.title")}<'],
  ['>Real Results from Real Patients<', '>{t("stories.subtitle")}<'],
  ['>Share Your Story<', '>{t("stories.shareYourStory")}<'],
]);

// Pricing.tsx
replaceStrings(path.join(SRC, 'app/pages/Pricing.tsx'), [
  ['>Treatment Pricing<', '>{t("pricing.title")}<'],
  ['Transparent Pricing, No Hidden Fees', '{t("pricing.subtitle")}'],
  ['>View All Prices<', '>{t("pricing.viewAll")}<'],
  ['>Get Personalized Quote<', '>{t("pricing.getQuote")}<'],
]);

// TravelGuide.tsx
replaceStrings(path.join(SRC, 'app/pages/TravelGuide.tsx'), [
  ['>Egypt Travel Guide<', '>{t("travelGuide.title")}<'],
  ['Everything You Need for Your Medical Trip', '{t("travelGuide.subtitle")}'],
]);

// DentalCare.tsx
replaceStrings(path.join(SRC, 'app/pages/DentalCare.tsx'), [
  ['>Dental Care in Egypt<', '>{t("dentalCare.title")}<'],
  ['World-Class Dental Treatments at Affordable Prices', '{t("dentalCare.subtitle")}'],
]);

// DentalImplants.tsx
replaceStrings(path.join(SRC, 'app/pages/DentalImplants.tsx'), [
  ['>Dental Implants in Egypt<', '>{t("dentalImplants.title")}<'],
  ['Premium Implants at 75-88% Less Than US Prices', '{t("dentalImplants.subtitle")}'],
]);

// HollywoodSmile.tsx
replaceStrings(path.join(SRC, 'app/pages/HollywoodSmile.tsx'), [
  ['>Hollywood Smile in Egypt<', '>{t("hollywoodSmile.title")}<'],
  ['Transform Your Smile with World-Class Veneers', '{t("hollywoodSmile.subtitle")}'],
]);

// Fertility.tsx
replaceStrings(path.join(SRC, 'app/pages/Fertility.tsx'), [
  ['>Fertility Treatments in Egypt<', '>{t("fertility.title")}<'],
  ['Advanced Reproductive Medicine at Affordable Prices', '{t("fertility.subtitle")}'],
]);

// BlogListing.tsx
replaceStrings(path.join(SRC, 'app/pages/BlogListing.tsx'), [
  ['>Blog<', '>{t("blog.title")}<'],
  ['Medical Tourism Insights & Tips', '{t("blog.subtitle")}'],
]);

// Treatments.tsx (wrapper page)
replaceStrings(path.join(SRC, 'app/pages/Treatments.tsx'), []);

// MobileStickyCTA.tsx
replaceStrings(path.join(SRC, 'app/components/MobileStickyCTA.tsx'), [
  ['>Get Free Quote<', '>{t("hero.cta.primary")}<'],
  ['>Book Now<', '>{t("nav.bookNow")}<'],
]);

// ExitIntentPopup.tsx
replaceStrings(path.join(SRC, 'app/components/ExitIntentPopup.tsx'), [
  ['>Get Free Quote<', '>{t("hero.cta.primary")}<'],
  ['Free Consultation', '{t("trust.freeConsultation")}'],
]);

// SocialProofToast.tsx
replaceStrings(path.join(SRC, 'app/components/SocialProofToast.tsx'), [
  ['just booked', 't("common.patients")'],
]);

// PackageCard.tsx
replaceStrings(path.join(SRC, 'app/components/PackageCard.tsx'), [
  ['>Book Now<', '>{t("nav.bookNow")}<'],
  ['>Learn More<', '>{t("nav.learnMore")}<'],
  ['Starting from', '{t("treatments.startingFrom")}'],
]);

// TreatmentCard.tsx
replaceStrings(path.join(SRC, 'app/components/TreatmentCard.tsx'), [
  ['>Learn More<', '>{t("nav.learnMore")}<'],
  ['>View Details<', '>{t("treatments.viewDetails")}<'],
  ['>Get Quote<', '>{t("treatments.getQuote")}<'],
  ['Save up to', '{t("treatments.savingsUpTo")}'],
  ['Starting from', '{t("treatments.startingFrom")}'],
]);

console.log(`\n✅ Phase 2 complete: ${replacementsMade} string replacements across all files`);
console.log('\n🎉 i18n integration complete!');
console.log('Run: git add . && git commit -m "Apply i18n to all pages and components" && git push');
