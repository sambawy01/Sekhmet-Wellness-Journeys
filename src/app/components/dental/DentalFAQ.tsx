import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "How much can I save on dental treatments in Egypt?",
    answer: "Patients typically save 70-90% compared to UK, US, and European prices. For example, a dental implant that costs £2,500 in the UK starts from just £200 ($250) in Egypt, without compromising on quality or materials."
  },
  {
    question: "Are the dentists in Egypt qualified and experienced?",
    answer: "Yes, our partner dentists are highly qualified, with many holding degrees and certifications from prestigious universities in the UK, US, and Europe. They regularly attend international conferences to stay updated with the latest techniques."
  },
  {
    question: "What brands of implants and veneers do you use?",
    answer: "We only use world-renowned, FDA-approved brands such as Straumann, Nobel Biocare, and Emax. All materials come with a manufacturer's warranty, ensuring long-lasting results."
  },
  {
    question: "Do you offer a guarantee on dental work?",
    answer: "Absolutely. All our dental procedures come with a comprehensive guarantee. Implants typically have a lifetime warranty, while crowns and veneers are guaranteed for 5-10 years, depending on the specific case."
  },
  {
    question: "How long do I need to stay in Egypt?",
    answer: "This depends on the procedure. For implants, two visits are usually required: the first for placement (3-5 days) and the second for the crown fitting (5-7 days) after healing (3-6 months). Veneers and Hollywood Smiles can typically be completed in a single 5-7 day trip."
  },
  {
    question: "Is it safe to travel to Egypt for dental work?",
    answer: "Egypt is a safe and welcoming destination for medical tourists. We provide private airport transfers, accommodation in secure 5-star hotels, and personal assistance throughout your stay to ensure a worry-free experience."
  },
  {
    question: "Do you speak English?",
    answer: "Yes, all our dentists and clinic staff speak fluent English. You will have no trouble communicating your needs and understanding your treatment plan. We also have multilingual coordinators available."
  },
  {
    question: "Can I combine my dental treatment with a holiday?",
    answer: "Definitely! In fact, most of our patients do. We can arrange packages that include visits to the Pyramids in Cairo or a relaxing recovery break by the Red Sea in Hurghada or Sharm El Sheikh."
  },
  {
    question: "What happens if I have a problem after I return home?",
    answer: "We offer continuous aftercare support. You can contact our medical team anytime via WhatsApp or video call. In the rare event of a complication related to the work performed, we will rectify it free of charge."
  },
  {
    question: "How do I get started?",
    answer: "Simply contact us for a free consultation. You can send us your X-rays or photos, and our dental team will provide a preliminary treatment plan and cost estimate within 24 hours."
  }
];

export function DentalFAQ() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-['Playfair_Display'] text-4xl md:text-5xl font-bold text-[#0F1923] mb-4"
          >
            Frequently Asked Questions
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-['DM_Sans'] text-lg text-[#0F1923]/60 max-w-2xl mx-auto"
          >
            Everything you need to know about your dental journey to Egypt.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-[#C5A059]/20 rounded-lg px-6 bg-[#FAF6EF]">
                <AccordionTrigger className="text-left font-['Playfair_Display'] text-lg font-semibold text-[#0F1923] hover:text-[#C5A059] hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-['DM_Sans'] text-[#0F1923]/70 pb-6 text-base leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
