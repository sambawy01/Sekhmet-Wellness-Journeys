import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock, Share2, ChevronRight, Facebook, Twitter, Linkedin, Check } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { CostCalculatorWidget } from '../components/CostCalculatorWidget';

export const BlogArticle = () => {
  const { slug } = useParams(); // In a real app, use slug to fetch data
  const [activeSection, setActiveSection] = useState('');

  // Scroll spy for TOC
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, { threshold: 0.5 });

    document.querySelectorAll('h2[id]').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#F5F0E5]">
      {/* Article Hero */}
      <div className="w-full h-[60vh] relative">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1600" 
          alt="Dental Implants" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 text-center text-white">
            <span className="inline-block px-4 py-1.5 bg-[#C5A059] text-black font-bold text-sm tracking-wider uppercase rounded-full mb-6">
              Cost Guide
            </span>
            <h1 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Dental Implants in Egypt: Complete 2026 Cost Guide
            </h1>
            <div className="flex items-center justify-center space-x-6 text-sm md:text-base">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden border-2 border-white">
                  <img src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=100" alt="Author" />
                </div>
                <span className="font-medium">Dr. Ahmed Hassan</span>
              </div>
              <span className="flex items-center gap-1 opacity-80"><Calendar size={16} /> Feb 14, 2026</span>
              <span className="flex items-center gap-1 opacity-80"><Clock size={16} /> 8 min read</span>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-[1440px] mx-auto px-4 md:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <article className="lg:col-span-8 lg:col-start-2 max-w-none prose prose-lg prose-slate prose-headings:font-playfair prose-headings:text-[#0F1923]">
            <p className="lead text-xl text-gray-600 font-sans mb-8">
              Egypt has rapidly emerged as a premier destination for dental tourism, offering world-class care at a fraction of Western prices. In this guide, we break down the costs, procedures, and what to expect when choosing Egypt for your dental implants.
            </p>

            <h2 id="why-egypt" className="text-3xl font-bold text-[#0F1923] mt-12 mb-6 scroll-mt-24">Why Choose Egypt for Dental Implants?</h2>
            <p className="text-[#3D3D3D] leading-relaxed mb-6 font-sans">
              For decades, Egypt has been known for its rich history, but today it is making history in the medical field. With state-of-the-art clinics in Cairo and Sharm El Sheikh, international patients are discovering they can combine a luxury holiday with essential dental work.
            </p>

            <blockquote className="border-l-4 border-[#C5A059] pl-6 italic text-2xl font-playfair text-gray-700 my-10 bg-white/50 py-4 pr-4 rounded-r-lg">
              "The standard of care I received in Cairo was superior to my local clinic in Manchester, and I saved enough to pay for a 2-week vacation for my entire family."
            </blockquote>

            <h2 id="cost-comparison" className="text-3xl font-bold text-[#0F1923] mt-12 mb-6 scroll-mt-24">Cost Breakdown: Egypt vs. UK & US</h2>
            <p className="text-[#3D3D3D] leading-relaxed mb-6 font-sans">
              The primary driver for dental tourism is cost savings. Below is a detailed comparison of average prices for dental implant procedures in 2026.
            </p>

            <div className="overflow-x-auto my-8 rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left border-collapse bg-white">
                <thead>
                  <tr className="bg-[#0F1923] text-white">
                    <th className="p-4 font-playfair">Procedure</th>
                    <th className="p-4 font-playfair">Egypt (Avg.)</th>
                    <th className="p-4 font-playfair">UK (Avg.)</th>
                    <th className="p-4 font-playfair">US (Avg.)</th>
                    <th className="p-4 font-playfair">Savings</th>
                  </tr>
                </thead>
                <tbody className="font-sans text-sm md:text-base">
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-[#0F1923]">Single Titanium Implant</td>
                    <td className="p-4 font-bold text-[#115E59]">$450</td>
                    <td className="p-4 text-gray-500">$2,500</td>
                    <td className="p-4 text-gray-500">$3,500</td>
                    <td className="p-4 font-bold text-[#C84B31]">85%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-[#0F1923]">Zirconia Crown</td>
                    <td className="p-4 font-bold text-[#115E59]">$250</td>
                    <td className="p-4 text-gray-500">$900</td>
                    <td className="p-4 text-gray-500">$1,500</td>
                    <td className="p-4 font-bold text-[#C84B31]">78%</td>
                  </tr>
                  <tr className="border-b border-gray-100 hover:bg-gray-50">
                    <td className="p-4 font-medium text-[#0F1923]">All-on-4 (Per Jaw)</td>
                    <td className="p-4 font-bold text-[#115E59]">$4,500</td>
                    <td className="p-4 text-gray-500">$16,000</td>
                    <td className="p-4 text-gray-500">$24,000</td>
                    <td className="p-4 font-bold text-[#C84B31]">75%</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 id="procedure-steps" className="text-3xl font-bold text-[#0F1923] mt-12 mb-6 scroll-mt-24">The Procedure: Step-by-Step</h2>
            <div className="bg-[#115E59]/5 border-l-4 border-[#115E59] p-6 rounded-r-lg my-8">
              <h4 className="font-bold text-[#115E59] text-lg mb-2 flex items-center gap-2">
                <Check size={20} /> Clinical Note
              </h4>
              <p className="text-[#115E59]/80 text-sm">
                Most implant procedures require two visits: one for the implant placement (3-5 days) and a second visit 3-6 months later for the permanent crown fitting (5-7 days).
              </p>
            </div>

            <p className="text-[#3D3D3D] leading-relaxed mb-6 font-sans">
              Modern dental implant surgery is minimally invasive. Our partner clinics utilize 3D CT scanning and computer-guided surgery to ensure precision and reduce recovery time.
            </p>

            <figure className="my-10">
              <img 
                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern dental clinic in Cairo" 
                className="w-full rounded-xl shadow-lg mb-4"
              />
              <figcaption className="text-center text-sm text-gray-500 italic font-sans">
                State-of-the-art dental facilities in New Cairo meet international safety standards.
              </figcaption>
            </figure>

            <h2 id="recovery" className="text-3xl font-bold text-[#0F1923] mt-12 mb-6 scroll-mt-24">Recovery & Aftercare</h2>
            <p className="text-[#3D3D3D] leading-relaxed mb-6 font-sans">
              One of the unique benefits of medical tourism in Egypt is the recovery environment. Instead of recovering at home while trying to work, you can relax by the Red Sea or the Nile.
            </p>

            {/* Author Bio */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 mt-16 flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <img 
                src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=200" 
                alt="Dr. Ahmed Hassan" 
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-50"
              />
              <div>
                <h3 className="font-playfair text-xl font-bold text-[#0F1923] mb-2">About Dr. Ahmed Hassan</h3>
                <p className="text-sm text-gray-600 mb-4 font-sans">
                  Dr. Hassan is a Senior Implantologist with over 15 years of experience in restorative dentistry. He has performed over 3,000 successful implant surgeries and specializes in complex rehabilitation cases.
                </p>
                <div className="flex gap-3 justify-center md:justify-start">
                  <a href="#" className="text-gray-400 hover:text-[#C5A059]"><Linkedin size={20} /></a>
                  <a href="#" className="text-gray-400 hover:text-[#C5A059]"><Twitter size={20} /></a>
                </div>
              </div>
            </div>

          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-3 lg:col-start-11 hidden lg:block space-y-8 sticky top-24 h-fit">
             {/* Table of Contents */}
             <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
               <h3 className="font-playfair text-lg font-bold mb-4 border-b border-gray-100 pb-2">Contents</h3>
               <nav className="space-y-2">
                 {[
                   { id: 'why-egypt', label: 'Why Choose Egypt' },
                   { id: 'cost-comparison', label: 'Cost Comparison' },
                   { id: 'procedure-steps', label: 'Procedure Steps' },
                   { id: 'recovery', label: 'Recovery & Aftercare' }
                 ].map(item => (
                   <a 
                     key={item.id} 
                     href={`#${item.id}`}
                     className={`block text-sm font-sans transition-colors ${
                       activeSection === item.id 
                         ? 'text-[#C5A059] font-bold border-l-2 border-[#C5A059] pl-3' 
                         : 'text-gray-600 hover:text-[#0F1923] pl-3 border-l-2 border-transparent'
                     }`}
                   >
                     {item.label}
                   </a>
                 ))}
               </nav>
             </div>

             {/* CTA Card */}
             <div className="bg-[#0F1923] text-white p-6 rounded-xl shadow-lg text-center relative overflow-hidden">
               <div className="absolute top-0 right-0 w-20 h-20 bg-[#C5A059] opacity-10 rounded-bl-full -mr-6 -mt-6" />
               <h4 className="font-playfair text-xl mb-2 relative z-10">Ready to restore your smile?</h4>
               <p className="text-sm text-gray-400 mb-6 relative z-10">Get a free personalized quote and treatment plan today.</p>
               <button className="w-full bg-[#C5A059] text-white font-bold py-2.5 rounded-lg hover:bg-[#B08D4B] transition-colors mb-3">
                 Get Free Quote
               </button>
               <a href="https://wa.me/201000000000" className="flex items-center justify-center gap-2 text-[#25D366] text-sm hover:underline">
                 <span className="w-2 h-2 rounded-full bg-[#25D366]"></span> WhatsApp Us
               </a>
             </div>

             {/* Related Articles */}
             <div>
               <h3 className="font-playfair text-lg font-bold mb-4">Related Articles</h3>
               <div className="space-y-4">
                 {[1, 2, 3].map(i => (
                   <div key={i} className="group cursor-pointer">
                     <div className="h-24 rounded-lg overflow-hidden mb-2">
                       <img 
                         src={`https://images.unsplash.com/photo-${i === 1 ? '1606811841689-23dfddce3e95' : i === 2 ? '1588776816478-956639c7a220' : '1544550581-5f7ceaf7f992'}?auto=format&fit=crop&q=80&w=400`} 
                         className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                         alt="Related"
                       />
                     </div>
                     <h4 className="font-bold text-sm text-[#0F1923] group-hover:text-[#C5A059] transition-colors line-clamp-2">
                       {i === 1 ? "Hollywood Smile Costs Explained" : i === 2 ? "Best Dental Clinics in Cairo" : "Luxury Recovery Hotels"}
                     </h4>
                   </div>
                 ))}
               </div>
             </div>
          </aside>
        </div>

        {/* Calculator Widget Mobile/Tablet - shown below content on small screens */}
        <div className="lg:hidden mt-12">
          <CostCalculatorWidget />
        </div>
      </div>

      {/* Related Articles Mobile Grid */}
      <div className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <h2 className="font-playfair text-3xl text-[#0F1923] mb-8 text-center">More from the Journal</h2>
          <div className="grid md:grid-cols-3 gap-8">
             {[1, 2, 3].map(i => (
               <div key={i} className="group">
                 <div className="h-48 rounded-xl overflow-hidden mb-4 relative">
                   <img 
                     src={`https://images.unsplash.com/photo-${i === 1 ? '1606811841689-23dfddce3e95' : i === 2 ? '1588776816478-956639c7a220' : '1544550581-5f7ceaf7f992'}?auto=format&fit=crop&q=80&w=600`} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                     alt="Related"
                   />
                   <span className="absolute top-3 left-3 bg-white/90 backdrop-blur text-xs font-bold px-2 py-1 rounded text-[#0F1923]">
                     {i === 1 ? "Patient Stories" : "Guides"}
                   </span>
                 </div>
                 <h3 className="font-playfair text-xl font-bold text-[#0F1923] group-hover:text-[#C5A059] transition-colors mb-2">
                   {i === 1 ? "Hollywood Smile Costs Explained" : i === 2 ? "Best Dental Clinics in Cairo" : "Luxury Recovery Hotels"}
                 </h3>
                 <a href="#" className="text-[#C5A059] text-sm font-bold flex items-center hover:underline">Read More <ArrowRight size={14} className="ml-1" /></a>
               </div>
             ))}
          </div>
        </div>
      </div>
    </div>
  );
};
