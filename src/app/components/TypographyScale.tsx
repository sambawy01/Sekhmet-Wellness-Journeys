import React from 'react';

export const TypographyScale: React.FC = () => {
  return (
    <section className="bg-[#FAF6EF] p-12 rounded-3xl space-y-12">
      <div className="border-b border-[#0F1923]/10 pb-4 mb-8">
        <h2 className="font-['Playfair_Display'] text-3xl text-[#0F1923]">Typography Scale</h2>
        <p className="font-['DM_Sans'] text-[#A89F8E]">System font hierarchy</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        {/* H1 */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          H1 Headline • 56px
        </div>
        <div className="md:col-span-9">
          <h1 className="font-['Playfair_Display'] font-bold text-[56px] leading-[1.1] text-[#0F1923]">
            Ancient Wisdom, Modern Care
          </h1>
        </div>

        {/* H2 */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          H2 Title • 36px
        </div>
        <div className="md:col-span-9">
          <h2 className="font-['Playfair_Display'] font-bold text-[36px] leading-[1.2] text-[#0F1923]">
            Curated Wellness Journeys
          </h2>
        </div>

        {/* H3 */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          H3 Subtitle • 28px
        </div>
        <div className="md:col-span-9">
          <h3 className="font-['Playfair_Display'] font-semibold text-[28px] leading-[1.3] text-[#0F1923]">
            Premium Dental Restoration
          </h3>
        </div>

        {/* H4 */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          H4 Accent • 22px
        </div>
        <div className="md:col-span-9">
          <h4 className="font-['Playfair_Display'] font-medium text-[22px] leading-[1.4] text-[#C9A84C]">
            Exclusive Member Benefits
          </h4>
        </div>

        {/* Body */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          Body • 16px
        </div>
        <div className="md:col-span-9">
          <p className="font-['DM_Sans'] text-[16px] leading-relaxed text-[#3D3D3D] max-w-2xl">
            Experience world-class medical treatments in the heart of Egypt. 
            Our concierge service handles every detail of your journey, blending 
            cutting-edge healthcare with cultural immersion.
          </p>
        </div>

        {/* Small */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          Small • 14px
        </div>
        <div className="md:col-span-9">
          <p className="font-['DM_Sans'] text-[14px] leading-relaxed text-[#A89F8E]">
            *Consultation required prior to booking confirmation. Terms apply.
          </p>
        </div>

        {/* Caption */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          Caption • 12px
        </div>
        <div className="md:col-span-9">
          <p className="font-['DM_Sans'] text-[12px] leading-tight text-[#A89F8E] uppercase tracking-wide">
            Fig 1.2 — Treatment Facility Interior
          </p>
        </div>

        {/* Button Text */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          Button • 15px
        </div>
        <div className="md:col-span-9">
          <div className="inline-block bg-[#0F1923] text-white px-6 py-3 rounded">
            <span className="font-['DM_Sans'] font-bold text-[15px] uppercase tracking-wider">
              Book Consultation
            </span>
          </div>
        </div>

        {/* Price Display */}
        <div className="md:col-span-3 font-['Space_Mono'] text-xs text-[#A89F8E] uppercase tracking-widest">
          Price Display • 32px
        </div>
        <div className="md:col-span-9">
          <p className="font-['Space_Mono'] font-bold text-[32px] text-[#1B7A6E]">
            $2,450
          </p>
        </div>
      </div>
    </section>
  );
};
