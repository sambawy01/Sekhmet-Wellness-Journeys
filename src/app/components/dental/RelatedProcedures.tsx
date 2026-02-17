import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Smile, ScanFace } from 'lucide-react';
import { Button } from '../ui/button';

export function RelatedProcedures() {
  const related = [
    {
      icon: Smile,
      title: "Hollywood Smile",
      price: "$2,500",
      desc: "Complete smile makeover.",
      link: "/treatments/dental/hollywood-smile"
    },
    {
      icon: ScanFace,
      title: "Veneers",
      price: "$180",
      desc: "Custom-made shells per tooth.",
      link: "/treatments/dental/veneers"
    }
  ];

  return (
    <section className="py-16 bg-[#F5F0E5]">
      <div className="container mx-auto px-6">
        <h2 className="font-['Playfair_Display'] text-3xl font-bold text-[#0F1923] mb-8 text-center">Related Procedures</h2>
        <div className="flex justify-center gap-6 flex-wrap">
          {related.map((proc, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow-md w-full max-w-sm border border-[#C5A059]/20 hover:border-[#C5A059] transition-all">
              <div className="w-12 h-12 bg-[#FAF6EF] rounded-full flex items-center justify-center mb-4 text-[#C5A059]">
                <proc.icon className="w-6 h-6" />
              </div>
              <h3 className="font-['Playfair_Display'] text-xl font-bold text-[#0F1923] mb-2">{proc.title}</h3>
              <p className="font-['Space_Mono'] text-[#1B7A6E] font-bold mb-2">From {proc.price}</p>
              <p className="text-sm text-[#0F1923]/60 mb-4">{proc.desc}</p>
              <Button asChild variant="ghost" className="w-full justify-between hover:bg-[#FAF6EF] hover:text-[#C5A059]">
                <Link to={proc.link}>Learn More <ArrowRight className="w-4 h-4" /></Link>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
