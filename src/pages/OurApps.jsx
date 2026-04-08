import AppsLandingHero from '../components/apps/AppsLandingHero';
import AppCaseStudy from '../components/apps/AppCaseStudy';
import AppPricing from '../components/apps/AppPricing';
import FaqSection from '../components/ui/FaqSection';
import CtaSection from '../components/ui/CtaSection';
import GridBackground from '../components/common/GridBackground';

const appSummary = [
  { title: 'Octilo 3D', icon: '🌀' },
  { title: 'Trust Badges', icon: '🛡️' },
  { title: 'AR Viewer', icon: '👓' },
];

const CaseStudyDetails = [
  {
    number: '01',
    title: 'Octilo 3D Product Configurator',
    desc: 'Boost conversions with 3D product customization and real-time AR preview. Enable powerful 3D product interaction, act as a complete product customizer with AR preview, and let customers rotate, explore, and visualize in their environment.',
    image: 'https://youtu.be/OU9e9p9yE9Y?si=2ZZkE_k7vjue9xvY',
    stats: [
      { label: 'Interactive Setup', value: 'No-Code' },
      { label: 'File Export', value: 'PDF Config' },
      { label: 'Visual Engine', value: '3D/AR/VR' },
      { label: 'Platform Support', value: 'Global' }
    ]
  },
  {
    number: '02',
    title: 'Trust Badges & Icons',
    desc: 'Boost trust and increase conversions with professional trust badges and security icons. Integrate automated badges that reflect your store\'s visual identity and build immediate store authority.',
    image: '/home/octal/.gemini/antigravity/brain/c9b3e71a-6734-4ef2-b6f8-e05e3e86fc3c/app_watermark_protection_1775640740774.png',
    reverse: true,
    stats: [
      { label: 'Trust Increase', value: '+35%' },
      { label: 'Badge Options', value: '500+' },
      { label: 'Setup Time', value: '< 2min' },
      { label: 'Mobile Optimized', value: '100%' }
    ]
  },
  {
    number: '03',
    title: '3D AR Viewer',
    desc: 'Visualize products in real-world environments with advanced Augmented Reality. Let your customers place virtual products in their living space with perfect scale and lightning-fast loading.',
    image: '/home/octal/.gemini/antigravity/brain/c9b3e71a-6734-4ef2-b6f8-e05e3e86fc3c/app_bundle_discounts_1775640756985.png',
    stats: [
      { label: 'Engagement', value: '3X Growth' },
      { label: 'Return Reduction', value: '-25%' },
      { label: 'AR Precision', value: 'High-LOD' },
      { label: 'Tech Stack', value: 'WebAR' }
    ]
  }
];

const OurApps = () => {
  return (
    <>
      <GridBackground />
      <main className="min-h-screen bg-brand-dark">
        {/* New Detailed Hero */}
        <AppsLandingHero />

        {/* Small Summary Carousel/Grid */}
        <section className="py-20 bg-brand-dark border-y border-white/5 px-6">
          <div className="container mx-auto max-w-[1240px]">
            <div className="flex flex-wrap items-center justify-between gap-12">
              <div className="flex-1 min-w-[300px]">
                <h3 className="text-2xl font-bold text-white mb-2">Our Ecosystem</h3>
                <p className="text-white/40 text-sm">Everything you need to scale your store.</p>
              </div>
              <div className="flex flex-wrap gap-4">
                {appSummary.map((app, i) => (
                  <div key={i} className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-white/5 border border-white/10 shadow-sm hover:border-brand-primary/30 transition-all cursor-pointer">
                    <span className="text-xl">{app.icon}</span>
                    <span className="font-bold text-white">{app.title}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alternating App Deep Dives */}
        {CaseStudyDetails.map((item, i) => (
          <AppCaseStudy key={i} {...item} />
        ))}

        {/* Pricing Section for the main apps */}
        <AppPricing />

        {/* Global FAQs integrated - Dark mode style */}
        <div className="bg-brand-dark border-t border-white/5">
          <FaqSection />
        </div>

        {/* Final CTA with Brand Primary Blue */}
        <div className="bg-brand-primary px-6 py-32 relative overflow-hidden text-center">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#ffffff10_1px,transparent_1px)] bg-size-[32px_32px]" />
          <div className="container mx-auto max-w-[800px] relative z-20">
            <h2 className="text-4xl md:text-7xl font-black text-white leading-tight mb-10">
              Let's Create <br />
              <span className="text-black/20 italic">Something Amazing</span>
            </h2>
            <div className="flex flex-wrap gap-5 justify-center">
              <button className="px-10 py-5 bg-white text-brand-primary font-black text-sm uppercase rounded-xl shadow-2xl hover:bg-white/90 transition-all">
                Get Started Now
              </button>
              <button className="px-10 py-5 bg-brand-dark text-white font-black text-sm uppercase rounded-xl border border-white/10 hover:bg-brand-dark/90 transition-all">
                Book a meeting
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OurApps;
