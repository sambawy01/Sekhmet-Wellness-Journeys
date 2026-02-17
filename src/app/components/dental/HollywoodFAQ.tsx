import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"

const faqs = [
  {
    question: "How long do porcelain veneers last?",
    answer: "High-quality Emax or porcelain veneers typically last 10–15 years, and often longer with good oral hygiene. We offer a 5-year guarantee on all veneer treatments."
  },
  {
    question: "Do you need to shave my natural teeth?",
    answer: "It depends on the type of veneer and your dental condition. Traditional veneers require minimal preparation (0.5mm) to ensure a natural look without bulkiness. We also offer 'No-Prep' Lumineers for suitable candidates."
  },
  {
    question: "Is the procedure painful?",
    answer: "The procedure is minimally invasive and performed under local anesthesia, so you won't feel pain. Some sensitivity may occur for a few days after the final fitting, which is normal."
  },
  {
    question: "Can I choose the shape and color of my new smile?",
    answer: "Absolutely. With Digital Smile Design (DSD), we design your smile together. You can select the shade (from natural white to Hollywood white) and shape that best fits your face."
  },
  {
    question: "How many days do I need to stay in Egypt?",
    answer: "A complete smile makeover typically takes 5–7 days. The first visit involves preparation and temporary veneers, and the final visit (usually 3-5 days later) is for bonding the permanent veneers."
  }
];

export function HollywoodFAQ() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border border-[#C5A059]/20 rounded-lg px-6 bg-[#FAF6EF]">
              <AccordionTrigger className="text-left font-semibold text-[#0F1923] hover:text-[#C5A059] py-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-[#0F1923]/70 pb-4 text-base leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
