import React from 'react';

const AppPricing = () => {
  const plans = [
    {
      name: 'Free Plan',
      price: 'Free',
      features: [
        '2 products with 3D product customization',
        'Upload & Manage 3D Product Models',
        '3D product configurator & customizer',
        'Real-time 3D viewer with AR preview',
        'Download product configuration as PDF',
        'Integration support'
      ]
    },
    {
      name: 'Premium Plan',
      price: '$49.99',
      period: '/ month',
      popular: true,
      features: [
        'Unlimited products with 3D customization',
        'Upload and manage unlimited 3D models',
        '3D product configurator & customizer',
        'Real-time 3D viewer with AR preview',
        'Download product configuration as PDF',
        'Priority support and integration support'
      ]
    }
  ];

  return (
    <section className="py-24 bg-brand-dark px-6 border-t border-white/5">
      <div className="container mx-auto max-w-[1000px]">
        <h2 className="text-3xl font-black text-white mb-12 text-center lg:text-left tracking-tight">Pricing</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {plans.map((plan, i) => (
            <div key={i} className={`p-10 rounded-[2.5rem] bg-white/5 border ${plan.popular ? 'border-brand-primary' : 'border-white/10'} relative overflow-hidden group hover:scale-[1.02] transition-all duration-500`}>
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-brand-primary text-white text-[10px] font-black px-6 py-2 rounded-bl-2xl uppercase tracking-widest">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-white/40 text-xs font-black tracking-widest uppercase mb-4">{plan.name}</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-black text-white">{plan.price}</span>
                  {plan.period && <span className="text-white/40 text-sm">{plan.period}</span>}
                </div>
              </div>

              <div className="space-y-4">
                <p className="text-white/20 text-[10px] font-black tracking-widest uppercase mb-4">Features</p>
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-primary shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    <span className="text-white/60 text-sm leading-relaxed">{feature}</span>
                  </div>
                ))}
              </div>

              <button className={`w-full mt-10 py-4 rounded-xl font-black text-sm uppercase tracking-tight transition-all ${plan.popular ? 'bg-brand-primary text-white shadow-xl shadow-brand-primary/20' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                Get Started
              </button>
            </div>
          ))}
        </div>
        
        <p className="mt-12 text-white/20 text-xs text-center leading-relaxed max-w-[600px] mx-auto">
          All charges are billed in USD. Recurring and usage-based charges are billed every 30 days.
        </p>
      </div>
    </section>
  );
};

export default AppPricing;
