import React from 'react';
import Button from '../common/Button';

const CtaSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-transparent overflow-hidden">

      <div className="container mx-auto px-6 sm:px-12 relative z-10 text-center">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-8">
            Powering enterprise businesses
          </h2>
          <p className="text-lg sm:text-xl text-white/50 leading-relaxed mb-12 max-w-[600px] mx-auto font-medium">
            Speak with our enterprise team on how to bring Shopify into your tech stack.
          </p>
          <div className="flex flex-wrap gap-5 justify-center items-center">
            <Button variant="primary" className="py-4 px-10 text-[16px] font-black flex items-center gap-2 bg-brand-primary">
              Get in touch
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14m-7-7 7 7-7 7" />
              </svg>
            </Button>
            <Button variant="outline" className="py-4 px-10 text-[16px] font-bold border-brand-primary/60 text-white">
              Try Shopify
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
