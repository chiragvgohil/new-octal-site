import React from 'react';

const AppCaseStudy = ({ number, title, desc, image, stats, reverse = false }) => {
  return (
    <section className="py-10 sm:py-16 px-6 sm:px-12 bg-brand-dark">
      <div className="container mx-auto max-w-[1240px]">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-16 lg:gap-24`}>

          {/* Visual Preview Side */}
          <div className="flex-1 w-full h-full">
            <div className="relative aspect-square rounded-3xl overflow-hidden shadow-2xl bg-white/5 border border-white/10 group">
              <img src={image} alt={title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              <div className="absolute inset-0 bg-linear-to-tr from-brand-dark/60 to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Content Side */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <span className="text-4xl md:text-5xl font-black text-white/10">{number}</span>
              <span className="px-3 py-1 rounded bg-brand-primary/10 text-brand-primary text-[10px] font-black tracking-widest uppercase border border-brand-primary/20">
                Featured App
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[0.95] tracking-tight mb-8">
              {title}
            </h2>

            <p className="text-lg text-white/50 leading-relaxed mb-10 max-w-[500px]">
              {desc}
            </p>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 gap-4 mb-10">
              {stats.map((stat, i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5">
                  <div className="text-2xl font-black text-white mb-1">{stat.value}</div>
                  <div className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-6 items-center">
              <a href="#" className="text-brand-primary font-black text-xs tracking-[0.2em] uppercase border-b-2 border-brand-primary pb-1 hover:opacity-70 transition-all">
                View Case Study
              </a>
              <a href="#" className="text-white/40 font-black text-xs tracking-[0.2em] uppercase hover:text-white transition-all">
                View Details
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCaseStudy;
