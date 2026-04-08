import React from 'react';
import { motion } from 'framer-motion';

const apps = [
  {
    title: '3D Product Configurator',
    description: 'Customize products in real-time with interactive 3D.',
    icon: '📦',
  },
  {
    title: 'Trust Badges & Icons',
    description: 'Boost trust and increase conversions using badges.',
    icon: '🛡️',
  },
  {
    title: '3D AR Viewer',
    description: 'Visualize products in real-world environments with AR.',
    icon: '👓',
  }
];

const MegaMenu = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute top-full w-[900px] bg-brand-dark/95 backdrop-blur-3xl border border-white/10 rounded-4xl p-4 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-1100 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="grid grid-cols-3 gap-4">
        {apps.map((app, i) => (
          <div key={i} className="group cursor-pointer p-8 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-primary/30 transition-all text-center">
            <div className="w-16 h-16 mx-auto rounded-xl bg-white/5 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform">
              {app.icon}
            </div>
            <h4 className="text-white font-bold text-lg mb-3 group-hover:text-brand-primary transition-colors leading-tight">
              {app.title}
            </h4>
            <p className="text-white/40 text-sm leading-relaxed max-w-[200px] mx-auto">
              {app.description}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-4 px-6 py-4 border-t border-white/5 flex justify-between items-center bg-white/2 rounded-b-3xl">
        <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Select an app to learn more</span>
        <a href="/apps" className="text-brand-primary text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
          Explore Ecosystem
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default MegaMenu;
