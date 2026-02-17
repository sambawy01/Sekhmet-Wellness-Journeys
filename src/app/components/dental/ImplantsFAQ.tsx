import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion"
import { motion } from 'motion/react';

const faqs = [
  {
    question: "How long do dental implants last?",
    answer: "With proper care and maintenance, dental implants can last a lifetime. Our implants come with a lifetime warranty for peace of mind."
  },
  {
    question: "Is the procedure painful?",
    answer: "Most patients report very little discomfort. Local anesthesia is used during the procedure, and post-operative pain is typically managed with over-the-counter pain relievers."
  },
  {
    question: "What brands of implants do you use?",
    answer: "We exclusively use premium, FDA-approved brands such as Straumann (Switzerland) and Nobel Biocare (Sweden/USA), known for their high success rates and quality."
  },
  {
    question: "Can I get implants if I have bone loss?",
    answer: "Yes, in many cases. We offer bone grafting and sinus lift procedures to build up the bone structure before placing implants. Our specialists will assess your X-rays to determine the best approach."
  },
  {
    question: "How many trips to Egypt will I need?",
    answer: "Typically, two trips are required. Trip 1 (3-5 days) for implant placement. Trip 2 (5-7 days) about 3-6 months later for the final crown fitting after the jaw has healed."
  }
];

export function ImplantsFAQ() {
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
