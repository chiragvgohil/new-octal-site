import React from 'react';
import GridBackground from '../../components/common/GridBackground';

const ThreeDExperiences = () => {
  return (
    <div className="min-h-screen bg-brand-dark overflow-hidden">
      <GridBackground />
      
      {/* Immersive Hero */}
      <section className="relative pt-40 pb-32 px-6 sm:px-12 text-center">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-primary/5 blur-[150px] rounded-full pointer-events-none" />
        
        <div className="container mx-auto max-w-[1240px] relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8 blur-sm">
            <span className="text-brand-primary text-xs font-black tracking-widest uppercase">Immersive Reality</span>
          </div>
          
          <h1 className="text-6xl md:text-[10rem] font-black text-white leading-[0.8] mb-12 tracking-tighter mix-blend-difference">
            3D <br />
            <span className="text-brand-primary italic">Visions</span>
          </h1>
          
          <p className="text-xl text-white/50 max-w-[800px] mx-auto leading-relaxed mb-16 font-medium">
            Step into the future of commerce. We create interactive 3D product configurations and Augmented Reality viewers that increase engagement by 400%.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-[900px] mx-auto">
             {['Rotate', 'Scale', 'Customize', 'AR View'].map((f, i) => (
                <div key={i} className="px-6 py-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md text-white font-black text-sm uppercase tracking-widest">{f}</div>
             ))}
          </div>
        </div>
      </section>

      {/* 3D Showcase Section (Conceptual) */}
      <section className="py-24 bg-linear-to-b from-transparent to-brand-primary/5">
        <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-24 items-center">
                <div className="w-full aspect-square rounded-[4rem] bg-white/5 border border-white/5 relative group overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_0.5px,transparent_0.5px)] bg-[size:16px_16px]" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl transform group-hover:scale-125 transition-transform duration-1000">🕶️</div>
                    <div className="absolute bottom-12 left-12 right-12 p-8 rounded-3xl bg-white/5 backdrop-blur-xl border border-white/10">
                        <div className="text-white font-black uppercase text-xs tracking-widest mb-1">WebAR Engine</div>
                        <div className="text-white/40 text-sm">Real-time lighting & shadow simulation</div>
                    </div>
                </div>
                <div>
                    <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">Beyond <br />Static Images.</h2>
                    <p className="text-white/50 text-lg leading-relaxed mb-12">
                        Traditional product photography is limited. Our 3D solutions allow customers to interact with every detail, surface, and color option in real-time.
                    </p>
                    <div className="space-y-6">
                        {[
                            { title: 'Interactive Customizer', desc: 'Real-time color, material, and component swapping.' },
                            { label: 'AR Placement', desc: 'View products in your physical space with a single tap.' },
                            { label: 'Optimized WebGL', desc: 'Lightning fast load times across all browser types.' }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <span className="text-brand-primary text-xl font-black">{i + 1}</span>
                                <p className="text-white/60 text-sm leading-relaxed max-w-[400px]">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default ThreeDExperiences;
