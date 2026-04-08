import React from 'react';
import GridBackground from '../../components/common/GridBackground';

const WebDevelopment = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <GridBackground />
      
      {/* Hero with Gradient Background */}
      <section className="relative pt-40 pb-32 px-6 sm:px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-primary/10 blur-[150px] rounded-full -translate-y-1/2 translate-x-1/3 pointer-events-none" />
        
        <div className="container mx-auto max-w-[1240px] relative z-10">
          <div className="lg:flex items-center gap-24">
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8 backdrop-blur-sm">
                <span className="text-brand-primary text-[10px] font-black tracking-widest uppercase">Custom Web Solutions</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.95] mb-8 tracking-tighter">
                Performant <br />
                <span className="bg-linear-to-r from-brand-primary to-blue-400 bg-clip-text text-transparent">Digital Units.</span>
              </h1>
              <p className="text-xl text-white/50 leading-relaxed mb-12 max-w-[600px] mx-auto lg:mx-0">
                Architecting high-speed, SEO-centric, and scalable web applications that redefine user experience through modern engineering.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                 <button className="px-10 py-4 bg-brand-primary text-white font-black text-xs uppercase rounded-xl shadow-2xl shadow-brand-primary/30 hover:scale-105 transition-all">Start Your Project</button>
                 <button className="px-10 py-4 bg-white/5 text-white border border-white/10 font-black text-xs uppercase rounded-xl hover:bg-white/10 transition-all">Case Studies</button>
              </div>
            </div>
            
            <div className="flex-1 mt-16 lg:mt-0 relative group">
                <div className="absolute -inset-1 bg-linear-to-r from-brand-primary to-blue-600 rounded-[3rem] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                <div className="relative bg-[#0A0F1A] border border-white/10 rounded-[3rem] p-12 overflow-hidden aspect-square flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                        <div className="text-5xl">⚡</div>
                        <div className="px-4 py-2 rounded-full bg-brand-primary/20 text-brand-primary text-[10px] font-black tracking-widest uppercase">99+ Google Score</div>
                    </div>
                    <div>
                        <div className="text-white font-black text-4xl mb-4 leading-tight">Lightning <br />Ready Frontends</div>
                        <div className="text-white/30 text-sm leading-relaxed">Built with the world's most performant frameworks for instant interaction.</div>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack / Languages - New Detailed Section */}
      <section className="py-24 bg-white/2 border-y border-white/5 relative z-20">
        <div className="container mx-auto px-6 max-w-[1240px]">
            <div className="text-center mb-20">
                <h2 className="text-white/20 text-[10px] font-black tracking-[0.5em] uppercase mb-4">Our Technology Core</h2>
                <h3 className="text-3xl md:text-5xl font-black text-white px-10 tracking-tight">Modern Stack for <br />Modern Commerce</h3>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {[
                    { name: 'JavaScript', icon: 'JS', color: 'bg-[#F7DF1E]/10 border-[#F7DF1E]/20 text-[#F7DF1E]' },
                    { name: 'React', icon: 'RE', color: 'bg-[#61DAFB]/10 border-[#61DAFB]/20 text-[#61DAFB]' },
                    { name: 'Next.js', icon: 'NX', color: 'bg-white/10 border-white/20 text-white' },
                    { name: 'Node.js', icon: 'ND', color: 'bg-[#339933]/10 border-[#339933]/20 text-[#339933]' },
                    { name: 'Tailwind', icon: 'TW', color: 'bg-[#06B6D4]/10 border-[#06B6D4]/20 text-[#06B6D4]' },
                    { name: 'TypeScript', icon: 'TS', color: 'bg-[#3178C6]/10 border-[#3178C6]/20 text-[#3178C6]' },
                    { name: 'PHP/Laravel', icon: 'LV', color: 'bg-[#FF2D20]/10 border-[#FF2D20]/20 text-[#FF2D20]' },
                    { name: 'Python', icon: 'PY', color: 'bg-[#3776AB]/10 border-[#3776AB]/20 text-[#3776AB]' },
                    { name: 'GraphQL', icon: 'GQ', color: 'bg-[#E10098]/10 border-[#E10098]/20 text-[#E10098]' },
                    { name: 'PostgreSQL', icon: 'PS', color: 'bg-[#4169E1]/10 border-[#4169E1]/20 text-[#4169E1]' },
                    { name: 'Docker', icon: 'DK', color: 'bg-[#2496ED]/10 border-[#2496ED]/20 text-[#2496ED]' },
                    { name: 'HTML5/CSS3', icon: 'HC', color: 'bg-[#E34F26]/10 border-[#E34F26]/20 text-[#E34F26]' }
                ].map((tech, i) => (
                    <div key={i} className={`p-8 rounded-3xl border ${tech.color} flex flex-col items-center justify-center gap-4 group hover:scale-105 transition-all cursor-default`}>
                        <div className="text-2xl font-black tracking-tighter opacity-80 group-hover:opacity-100">{tech.icon}</div>
                        <div className="text-[10px] font-black tracking-widest uppercase opacity-60 group-hover:opacity-100">{tech.name}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Benchmarks / Capabilities */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1240px]">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                    { label: 'SEO Efficiency', value: '100', icon: '📈' },
                    { label: 'Core Web Vitals', value: 'Pass', icon: '✅' },
                    { label: 'Mobile Fidelity', value: 'Perfect', icon: '📱' },
                    { label: 'Global TTL', value: '<20ms', icon: '⚡' }
                ].map((m, i) => (
                    <div key={i} className="p-10 rounded-4xl bg-white/2 border border-white/5 flex flex-col items-center text-center group">
                        <div className="text-3xl mb-4 transform group-hover:scale-125 transition-all">{m.icon}</div>
                        <div className="text-3xl font-black text-white mb-2">{m.value}</div>
                        <div className="text-white/20 text-[10px] font-black tracking-widest uppercase">{m.label}</div>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Deep Expertise grid */}
      <section className="py-32 bg-[#fbfcfa]/2 border-t border-white/5">
        <div className="container mx-auto px-6 max-w-[1000px]">
            <div className="grid md:grid-cols-2 gap-x-20 gap-y-16">
                {[
                    { title: 'Serverless Edge Logic', desc: 'Deploying logic at the edge to ensure zero latency for global users regardless of location.' },
                    { title: 'API-First Architecture', desc: 'Building modular systems that integrate perfectly with any ERP, CRM, or external data source.' },
                    { title: 'Progressive Web Apps', desc: 'Bringing the power of native mobile applications to the desktop browser experience.' },
                    { title: 'Enterprise Security', desc: 'Hardened codebases designed to handle high-volume transactions with military-grade encryption.' }
                ].map((c, i) => (
                    <div key={i}>
                        <h3 className="text-xl font-black text-white mb-4 flex items-center gap-4">
                            <span className="w-2 h-2 rounded-full bg-brand-primary" />
                            {c.title}
                        </h3>
                        <p className="text-white/40 leading-relaxed text-[15px]">{c.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;
