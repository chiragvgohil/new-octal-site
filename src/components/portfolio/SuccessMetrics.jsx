import React from 'react';

const SuccessMetrics = () => {
  const metrics = [
    { value: '99%', label: 'Client Satisfaction', desc: 'Rated by 500+ global brands' },
    { value: '100+', label: 'Projects Completed', desc: 'Enterprise & startup solutions' },
    { value: '100%', label: 'On-time Delivery', desc: 'Strict adherence to timelines' },
    { value: '24/7', label: 'Expert Support', desc: 'Always here to help you' },
  ];

  return (
    <section className="py-24 bg-[#0d141f] relative overflow-hidden">
      {/* Decorative center glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-primary/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-[1240px] relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Our Impact
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Project <span className="text-brand-primary">Success</span> Metrics
          </h2>
          <p className="mt-4 text-white/40 font-medium">Delivering measurable results for our clients.</p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {metrics.map((metric, i) => (
            <div key={i} className="text-center group">
              <div className="text-5xl md:text-6xl font-extrabold text-white mb-4 group-hover:text-brand-primary transition-colors duration-500">
                {metric.value}
              </div>
              <div className="text-lg font-bold text-white/80 mb-2 uppercase tracking-wide">
                {metric.label}
              </div>
              <p className="text-white/30 text-sm max-w-[180px] mx-auto">
                {metric.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;
