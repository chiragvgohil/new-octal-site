import React from 'react';
import GridBackground from '../../components/common/GridBackground';

const AppDevelopment = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <GridBackground />
      
      {/* Hero */}
      <section className="relative pt-40 pb-20 px-6 sm:px-12">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="text-brand-primary font-black text-sm tracking-widest uppercase mb-4">Development</div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-tight mb-8">
                Custom <br />Apps <span className="text-brand-primary">&</span> <br />Logic.
              </h1>
              <p className="text-white/40 text-lg leading-relaxed max-w-[500px]">
                Building mission-critical Shopify applications that solve complex business challenges through elegant code and modern architecture.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
               {[
                 { label: 'Public Apps', count: '10+' },
                 { label: 'Private APIs', count: '50+' },
                 { label: 'Response Time', count: '< 50ms' },
                 { label: 'Security', count: '100%' }
               ].map((s, i) => (
                 <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/5 text-center">
                   <div className="text-3xl font-black text-white mb-1 font-mono">{s.count}</div>
                   <div className="text-white/20 text-[10px] font-black tracking-widest uppercase">{s.label}</div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Horizontal Scroll/Grid */}
      <section className="py-24 bg-white/[0.02] border-y border-white/5">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-white/20 text-xs font-black tracking-[0.4em] uppercase mb-16 underline decoration-brand-primary/40 underline-offset-8">Our Tech Stack</h2>
            <div className="flex flex-wrap justify-center gap-12 sm:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
                {['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Shopify Functions'].map((tech, i) => (
                    <div key={i} className="text-2xl font-black text-white tracking-tighter">{tech}</div>
                ))}
            </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1000px]">
            <div className="space-y-12">
                {[
                    { step: '01', icon: '📝', title: 'Scope & Architect', desc: 'Detailed requirements gathering and logic mapping before a single line of code is written.' },
                    { step: '02', icon: '🔨', title: 'Develop & Iterate', desc: 'Secure, scalable development with continuous integration and real-time updates.' },
                    { step: '03', icon: '🚀', title: 'Launch & Optimize', desc: 'Deployment on high-performance infrastructure with ongoing performance monitoring.' }
                ].map((p, i) => (
                    <div key={i} className="flex gap-8 group">
                        <div className="text-5xl font-black text-white/10 group-hover:text-brand-primary/40 transition-colors uppercase">{p.step}</div>
                        <div>
                            <h3 className="text-2xl font-black text-white mb-2">{p.title}</h3>
                            <p className="text-white/40 leading-relaxed max-w-[600px]">{p.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;
