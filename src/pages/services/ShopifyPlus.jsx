import React from 'react';
import GridBackground from '../../components/common/GridBackground';
import Button from '../../components/common/Button';

const ShopifyPlus = () => {
  return (
    <div className="min-h-screen bg-brand-dark">
      <GridBackground />

      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-6 sm:px-12 text-center">
        <div className="container mx-auto max-w-[1000px]">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 mb-8">
            <span className="text-brand-primary text-xs font-black tracking-widest uppercase">Enterprise Solutions</span>
          </div>

          <h1 className="text-6xl md:text-9xl font-black text-white leading-[0.9] mb-8 tracking-tighter">
            Shopify Plus <br />
            <span className="text-brand-primary">At Scale</span>
          </h1>

          <p className="text-xl text-white/50 max-w-[700px] mx-auto leading-relaxed mb-12">
            Elevating high-growth brands with robust, automated, and high-converting Shopify Plus stores tailored for the enterprise.
          </p>

          <div className="flex justify-center gap-6">
            <Button variant="primary" className="bg-brand-primary px-10 py-4">Scale Your Store</Button>
            <Button variant="outline" className="border-white/10 text-white px-10 py-4">Migration Guide</Button>
          </div>
        </div>
      </section>

      {/* Feature Grid - Enterprise Style */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="container mx-auto max-w-[1240px]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Workflow Automation', desc: 'Reduce manual tasks by 80% with Shopify Flow and customized logic chains.' },
              { title: 'Global Expansion', desc: 'Multi-currency and multi-language setups localized for every market.' },
              { title: 'Checkout Extensibility', desc: 'Customized high-volume checkouts built with the latest Shopify UI components.' }
            ].map((f, i) => (
              <div key={i} className="p-10 rounded-4xl bg-white/5 border border-white/10 hover:border-brand-primary/40 transition-all group">
                <div className="text-3xl mb-6">💎</div>
                <h3 className="text-xl font-bold text-white mb-4">{f.title}</h3>
                <p className="text-white/40 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Migration Section */}
      <section className="py-32 px-6">
        <div className="container mx-auto max-w-[1240px]">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="flex-1">
              <h2 className="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">Smooth <br />Migrations.</h2>
              <p className="text-white/50 mb-10 leading-relaxed text-lg italic">"We handle the complexity so you can focus on the growth."</p>
              <ul className="space-y-4">
                {['Data Integrity Check', 'SEO Redirection mapping', 'Theme Optimization', 'App Ecosystem Audit'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white font-bold">
                    <div className="w-2 h-2 rounded-full bg-brand-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex-1 w-full aspect-video rounded-4xl bg-linear-to-tr from-brand-primary/20 to-transparent border border-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="text-8xl animate-pulse">🚀</div>
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff05_1px,transparent_1px)] bg-size-[24px_24px]" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShopifyPlus;
