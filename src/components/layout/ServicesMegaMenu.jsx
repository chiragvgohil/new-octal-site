import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Shopify Plus',
    description: 'Scalable Shopify Plus stores for high-growth brands',
    href: '/services/shopify-plus',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  },
  {
    title: 'App Development',
    description: 'Custom Shopify apps & integrations',
    href: '/services/app-development',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="14" height="20" x="5" y="2" rx="2" ry="2" />
        <path d="M12 18h.01" />
      </svg>
    )
  },
  {
    title: 'Web Development',
    description: 'Full-stack web development with modern frameworks',
    href: '/services/web-development',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    )
  },
  {
    title: '3D Experiences',
    description: 'Immersive 3D product experiences',
    href: '/services/3d-experiences',
    icon: (
      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.29 7 12 12 20.71 7" />
        <line x1="12" y1="22" x2="12" y2="12" />
      </svg>
    )
  }
];

const ServicesMegaMenu = ({ isOpen }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : 15 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`absolute top-full w-[800px] bg-brand-dark/95 backdrop-blur-3xl border border-white/10 rounded-4xl p-6 shadow-[0_30px_60px_rgba(0,0,0,0.5)] z-1100 ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
    >
      <div className="grid grid-cols-2 gap-4">
        {services.map((service, i) => (
          <Link key={i} to={service.href} className="group cursor-pointer p-5 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-brand-primary/30 transition-all flex items-start gap-5">
            <div className="w-14 h-14 shrink-0 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-white transition-all shadow-lg shadow-black/20">
              {service.icon}
            </div>
            <div>
              <h4 className="text-white font-bold text-[15px] mb-1 group-hover:text-brand-primary transition-colors">
                {service.title}
              </h4>
              <p className="text-white/40 text-[13px] leading-tight max-w-[200px]">
                {service.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-6 px-6 py-4 border-t border-white/5 flex justify-between items-center bg-white/2 rounded-b-3xl">
        <span className="text-white/20 text-[10px] font-bold tracking-widest uppercase">Expert solutions tailored for you</span>
        <a href="#services" className="text-brand-primary text-xs font-bold flex items-center gap-2 hover:gap-3 transition-all">
          View All Services
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14m-7-7 7 7-7 7" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default ServicesMegaMenu;
