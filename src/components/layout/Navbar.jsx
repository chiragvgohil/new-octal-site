import React, { useState, useEffect } from 'react';
import Button from '../common/Button';

const NavItem = ({ label, hasDropdown = false, isMobile = false }) => (
  <li className={`${isMobile ? 'w-full' : 'flex items-center group'}`}>
    <a
      href={`#${label.toLowerCase()}`}
      className={`text-white/70 flex items-center transition-all duration-300 hover:text-white ${isMobile
        ? 'py-4 text-xl border-b border-white/5 w-full flex justify-between'
        : 'gap-1.5 px-4 py-2 rounded-xl font-medium text-[15px]'
        }`}
    >
      {label}
      {hasDropdown && (
        <svg
          className={`${isMobile ? 'w-5 h-5 opacity-40' : 'w-3 h-3 text-white/30 transition-transform duration-300 group-hover:rotate-180'}`}
          viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      )}
    </a>
  </li>
);

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full z-[1000] px-6 sm:px-12 transition-all duration-500 h-20 sm:h-24 flex items-center ${isScrolled || isMenuOpen ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/5' : 'bg-transparent border-b border-transparent'
        }`}>
        <div className="w-full max-w-[1240px] mx-auto flex justify-between items-center">
          <div className="flex items-center gap-10">
            <a href="/" className="flex items-center gap-2 group">
              <div className="text-white transform transition-transform group-hover:rotate-[10deg]">
                <svg viewBox="0 0 448 512" width="28" height="28" fill="currentColor">
                  <path d="M388.32,104.1c0,0-15.84,1.44-24.48,5.76C355.2,114.18,172.8,245.52,172.8,245.52c0,0-11.52,24.48-3.6,56.88 c7.92,32.4,26.64,59.04,47.52,82.8c20.88,23.76,51.84,49.68,87.12,65.52c35.28,15.84,72,20.16,72,20.16s-20.88-5.76-41.04-20.88 c-20.16-15.12-32.4-38.88-32.4-38.88s46.8,12.24,84.96-10.8c38.16-23.04,50.4-82.08,35.28-132.48 C437.52,217.44,388.32,104.1,388.32,104.1z M265.68,300.24c-12.96,0-23.76-10.8-23.76-23.76s10.8-23.76,23.76-23.76 s23.76,10.8,23.76,23.76S278.64,300.24,265.68,300.24z" />
                </svg>
              </div>
              <span className="text-white text-2xl font-bold tracking-tight lowercase">shopify</span>
            </a>

            {/* Desktop Menu */}
            <ul className="hidden xl:flex items-center gap-4">
              <NavItem label="Solutions" hasDropdown />
              <NavItem label="Customers" hasDropdown />
              <NavItem label="Resources" hasDropdown />
              <NavItem label="Developers" hasDropdown />
            </ul>
          </div>

          <div className="flex items-center gap-4 sm:gap-8">
            <Button variant="primary" className="bg-brand-primary text-white px-6 py-2 border-none font-bold text-sm hidden sm:block hover:bg-white/90 hover:text-brand-dark">
              Get In touch
            </Button>

            {/* Mobile Toggle Button */}
            <button
              className="xl:hidden text-white p-2 focus:outline-none z-[1100]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between overflow-hidden">
                <span className={`w-full h-[2px] bg-white transition-all duration-300 transform ${isMenuOpen ? 'rotate-45 translate-y-[9px]' : ''}`}></span>
                <span className={`w-full h-[2px] bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0 translate-x-10' : ''}`}></span>
                <span className={`w-full h-[2px] bg-white transition-all duration-300 transform ${isMenuOpen ? '-rotate-45 -translate-y-[9px]' : ''}`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[900] bg-brand-dark transition-all duration-500 ease-in-out xl:hidden ${isMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}>
        <div className="pt-32 px-8 flex flex-col h-full">
          <ul className="flex flex-col gap-2 mb-10">
            <NavItem label="Solutions" hasDropdown isMobile />
            <NavItem label="Customers" hasDropdown isMobile />
            <NavItem label="Resources" hasDropdown isMobile />
            <NavItem label="Developers" hasDropdown isMobile />
          </ul>

          <div className="mt-auto pb-12 flex flex-col gap-4">
            <Button variant="primary" className="md:py-4.5 py-3 md:px-12 px-6 text-[17px] font-black flex items-center gap-3 bg-brand-primary shadow-2xl shadow-brand-primary/20">
              Get In touch
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
