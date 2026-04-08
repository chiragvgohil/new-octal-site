import React from 'react';

const steps = [
  {
    number: "01",
    title: "Discovery",
    description: "We dive deep to understand your goals, target audience, and technical requirements to build a solid foundation.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    )
  },
  {
    number: "02",
    title: "Design",
    description: "Creating intuitive wireframes and pixel-perfect UI/UX designs that resonate with your brand and delight users.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    )
  },
  {
    number: "03",
    title: "Development",
    description: "Engineering scalable, high-performance applications using modern frameworks and industry-best coding practices.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    )
  },
  {
    number: "04",
    title: "Launch",
    description: "Rigorous testing and optimization followed by a seamless deployment and continuous post-launch support.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.63 8.41a14.97 14.97 0 00-5.26 5.96m11.22-3.12l-1.12-1.12m1.12 1.12l1.12 1.12m-6.74 6.74l1.12 1.12m-1.12-1.12l-1.12-1.12" />
      </svg>
    )
  }
];

const ProcessSection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-transparent overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto px-6 sm:px-12 relative z-10 max-w-[1400px]">
        {/* Header */}
        <div className="text-center mb-24">
          <span className="text-brand-primary text-xs sm:text-sm tracking-[0.4em] mb-4 block uppercase font-black">
            Process
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight">
            How We <span className="text-brand-primary">Work</span>
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[60px] left-[15%] right-[15%] h-[2px] bg-linear-to-r from-transparent via-brand-primary/30 to-transparent">
            {/* Animated Flow Effect */}
            <div className="absolute inset-0 bg-linear-to-r from-transparent via-brand-primary to-transparent w-full animate-flow-line opacity-50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, idx) => (
              <div 
                key={idx} 
                className="group relative flex flex-col items-center text-center px-4"
              >
                {/* Icon Container */}
                <div className="relative mb-8">
                  <div className="w-28 h-28 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl flex items-center justify-center text-brand-primary transition-all duration-500 group-hover:scale-110 group-hover:bg-brand-primary/10 group-hover:border-brand-primary/40 group-hover:shadow-[0_0_40px_rgba(63,94,150,0.2)]">
                    {step.icon}
                  </div>
                  
                  {/* Step Number Badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-brand-primary border-4 border-brand-dark flex items-center justify-center text-white text-xs font-black shadow-lg">
                    {step.number}
                  </div>

                  {/* Connecting Pulse Glow */}
                  <div className="absolute inset-0 rounded-3xl bg-brand-primary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors duration-300">
                  {step.title}
                </h3>
                <p className="text-white/40 leading-relaxed font-medium group-hover:text-white/60 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes flow-line {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .animate-flow-line {
          animation: flow-line 3s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default ProcessSection;
