import React from 'react';

const PortfolioHero = () => {
  return (
    <section className="relative pt-40 pb-20 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-20 left-1/4 w-[500px] h-[500px] bg-brand-primary/10 blur-[150px] rounded-full pointer-events-none"></div>
      <div className="absolute top-40 right-1/4 w-[400px] h-[400px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-md">
          <span className="w-2 h-2 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="text-white/60 text-xs font-bold tracking-widest uppercase">Our Portfolio</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight leading-[1.1]">
          Transforming Visions <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-brand-primary to-purple-400">Into Reality</span>
        </h1>
        
        <p className="text-white/50 text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          Experience our cutting-edge portfolio where dynamic layouts meet expert precision. 
          We build digital solutions that exceed expectations and deliver results.
        </p>
        
        <div className="flex flex-wrap items-center justify-center gap-6">
          <button className="px-8 py-4 bg-brand-primary text-white rounded-xl font-bold shadow-2xl shadow-brand-primary/20 hover:scale-105 transition-transform duration-300">
            Schedule a Meeting
          </button>
          <button className="px-8 py-4 bg-white/5 text-white border border-white/10 rounded-xl font-bold hover:bg-white/10 transition-colors duration-300">
            Get Pricing
          </button>
        </div>

        {/* Small stats in hero footer */}
        <div className="mt-20 flex flex-wrap justify-center gap-12 text-white/40 font-bold uppercase tracking-widest text-[10px]">
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            Scalable Tech
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            User Centric
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            Innovation
          </div>
          <div className="flex items-center gap-3">
            <span className="w-1 h-1 bg-brand-primary rounded-full"></span>
            Quality First
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioHero;
