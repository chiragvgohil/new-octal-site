import React from 'react';
import Button from '../common/Button';

const AppsLandingHero = () => {
  return (
    <section className="relative pt-40 pb-24 px-6 sm:px-12 bg-brand-dark overflow-hidden">
      {/* Background Dots/Grid */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#3F5E96_1.5px,transparent_1.5px)] bg-[size:32px_32px]" />
      </div>

      <div className="container mx-auto max-w-[1240px] text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8">
          <span className="text-brand-primary text-[10px] sm:text-xs font-black tracking-widest uppercase">
            Apps Built for Growth
          </span>
        </div>

        <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] tracking-tight mb-8">
          Next-Gen 3D & <br />
          <span className="text-brand-primary italic">AR Shopify Apps</span>
        </h1>

        <p className="text-xl text-white/50 max-w-[750px] mx-auto leading-relaxed mb-12 font-medium">
          Transform your Shopify store with immersive 3D product customization, real-time AR visualization, and high-impact trust tools designed to skyrocket your conversion rates.
        </p>

        <div className="flex flex-wrap gap-5 justify-center mb-20">
          <Button variant="primary" className="py-4 px-10 text-[15px] font-black bg-brand-primary shadow-[0_10px_30px_rgba(63,94,150,0.2)]">
            Explore Apps
          </Button>
          <Button variant="outline" className="py-4 px-10 text-[15px] font-bold border-white/20 text-white hover:bg-white/10">
            Case Studies
          </Button>
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center gap-8 sm:gap-16 pt-12">
          {[
            { label: 'Apps', value: '25+' },
            { label: 'Downloads', value: '1M+' },
            { label: 'Reviews', value: '2000+' },
            { label: 'Rating', value: '4.9/5' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-4xl font-black text-white mb-1">{stat.value}</div>
              <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AppsLandingHero;
