import React, { useState, useEffect } from 'react';
import Button from '../common/Button';

const AnimatedWord = ({ words }) => {
  const [index, setIndex] = useState(0);
  const [isFilling, setIsFilling] = useState(false);
  const [isExiting, setIsExiting] = useState(false);

  useEffect(() => {
    const startCycle = async () => {
      await new Promise(r => setTimeout(r, 600));
      setIsFilling(true);
      await new Promise(r => setTimeout(r, 1500));
      setIsExiting(true);
      await new Promise(r => setTimeout(r, 400));
      setIndex((prev) => (prev + 1) % words.length);
      setIsFilling(false);
      setIsExiting(false);
    };

    const interval = setInterval(startCycle, 4000);
    startCycle();
    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <span className="relative inline-flex items-center overflow-hidden align-middle h-[1.2em] px-2">
      <span 
        key={index}
        className={`relative inline-flex items-center ${isExiting ? 'animate-slide-up-out' : 'animate-slide-up-in'}`}
      >
        <span className="text-white whitespace-nowrap inline-block">
          {words[index]}
        </span>
        <span 
          className="absolute top-0 left-0 h-full text-brand-primary overflow-hidden transition-all duration-1000 ease-in-out whitespace-nowrap inline-flex items-center"
          style={{ width: isFilling ? '100%' : '0%' }}
        >
          {words[index]}
        </span>
      </span>
    </span>
  );
};

const Hero = () => {
  const brandLogos = [
    'staples', 'DOLLAR SHAVE CLUB', 'EVERLANE', 'Glossier.', 'JB HI-FI', 'MATTEL', 'QUIKSILVER'
  ];

  return (
    <section className="relative min-h-screen bg-transparent flex flex-col pt-24 overflow-hidden">
      {/* Soft overlay glow to match the image's atmosphere */}
      <div className="absolute top-0 left-0 w-full h-full bg-brand-primary/10 blur-[180px] rounded-full pointer-events-none z-0"></div>
      
      <div className="flex-grow flex items-center justify-start z-10 px-6 sm:px-12">
        <div className="container mx-auto max-w-[1240px]">
          <div className="max-w-[1100px]">
            <span className="text-white/40 text-xs sm:text-sm tracking-[0.2em] mb-10 block uppercase font-bold">
              Shopify for enterprise
            </span>
            <h1 className="text-5xl lg:text-6xl leading-[1.05] tracking-tight mb-10 font-medium">
              <div className="md:flex-row flex flex-col md:items-center lg:gap-2 gap-0">
                The world's most
                <AnimatedWord words={['innovative', 'scaled']} />
              </div>
              <span className="block sm:inline">commerce platform</span>
            </h1>
            <p className="text-xl sm:text-xl text-white/90 leading-relaxed mb-14 max-w-[750px] font-medium">
              Unlock unprecedented growth on the platform that keeps enterprises ahead with our most advanced and scalable architecture.
            </p>
            <div className="flex flex-wrap gap-5 items-center md:justify-start justify-center md:mb-0 mb-10">
              <Button variant="primary" className="md:py-4.5 py-3 md:px-12 px-6 text-[17px] font-black flex items-center gap-3 bg-brand-primary shadow-2xl shadow-brand-primary/20">
                Get in touch
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14m-7-7 7 7-7 7" />
                </svg>
              </Button>
              <Button variant="outline" className="md:py-4.5 py-3 md:px-12 px-6 text-[17px] font-bold border-brand-primary/50 text-white">
                Try Shopify
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 w-full md:py-20 py-10 bg-black/30 border-t border-white/5 mt-auto backdrop-blur-sm">
        <div className="mx-auto px-6 overflow-hidden">
          <div className="flex overflow-hidden group">
            <div className="animate-marquee flex md:gap-28 gap-10 items-center">
              {brandLogos.map((logo, i) => (
                <span key={i} className="text-2xl sm:text-5xl font-black italic tracking-tighter text-white/20 uppercase whitespace-nowrap px-8 transition-all duration-700 hover:text-white hover:opacity-100">
                  {logo}
                </span>
              ))}
              {brandLogos.map((logo, i) => (
                <span key={`dup-${i}`} className="text-2xl sm:text-5xl font-black italic tracking-tighter text-white/20 uppercase whitespace-nowrap px-8 transition-all duration-700 hover:text-white hover:opacity-100">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Local Animations for Headline words */}
      <style>{`
        @keyframes slideInFromBottom {
          0% { transform: translateY(100%); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        @keyframes slideOutToTop {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(-100%); opacity: 0; }
        }
        .animate-slide-up-in {
          animation: slideInFromBottom 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-slide-up-out {
          animation: slideOutToTop 0.5s cubic-bezier(0.7, 0, 0.84, 0) forwards;
        }
      `}</style>
    </section>
  );
};

export default Hero;