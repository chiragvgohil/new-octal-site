import React from 'react';
import Button from '../common/Button';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    {
      title: 'Solutions',
      links: [
        { name: 'Ecommerce', href: '#' },
        { name: 'SaaS Platforms', href: '#' },
        { name: 'Mobile Apps', href: '#' },
        { name: 'Cloud Infrastructure', href: '#' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '#' },
        { name: 'Our Work', href: '#' },
        { name: 'Careers', href: '#' },
        { name: 'Contact', href: '#' },
      ]
    },
    {
      title: 'Resources',
      links: [
        { name: 'Case Studies', href: '#' },
        { name: 'Blog', href: '#' },
        { name: 'Documentation', href: '#' },
        { name: 'Brand Assets', href: '#' },
      ]
    }
  ];

  const socialLinks = [
    { name: 'Twitter', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
    ), href: '#' },
    { name: 'LinkedIn', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
    ), href: '#' },
    { name: 'Github', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.416-4.041-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.838 1.237 1.838 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
    ), href: '#' },
    { name: 'Instagram', icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.209-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
    ), href: '#' },
  ];

  return (
    <footer className="footer-container">
      {/* Decorative Blur Backgrounds */}
      <div className="footer-glow footer-glow-1"></div>
      <div className="footer-glow footer-glow-2"></div>

      <div className="footer-content container mx-auto max-w-[1240px]">
        {/* Top Newsletter Section */}
        <div className="footer-newsletter">
          <div className="newsletter-text">
            <h2>Stay in the loop</h2>
            <p>Get the latest insights, updates, and innovations delivered to your inbox.</p>
          </div>
          <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Enter your email" required />
            <Button variant="primary" className="rounded-xl! px-8 py-4 font-bold">
              Subscribe
            </Button>
          </form>
        </div>

        <div className="footer-grid">
          {/* Brand Column */}
          <div className="footer-brand-col">
            <div className="footer-logo">
              <div className="text-white">
                <svg viewBox="0 0 448 512" width="32" height="32" fill="currentColor">
                  <path d="M388.32,104.1c0,0-15.84,1.44-24.48,5.76C355.2,114.18,172.8,245.52,172.8,245.52c0,0-11.52,24.48-3.6,56.88 c7.92,32.4,26.64,59.04,47.52,82.8c20.88,23.76,51.84,49.68,87.12,65.52c35.28,15.84,72,20.16,72,20.16s-20.88-5.76-41.04-20.88 c-20.16-15.12-32.4-38.88-32.4-38.88s46.8,12.24,84.96-10.8c38.16-23.04,50.4-82.08,35.28-132.48 C437.52,217.44,388.32,104.1,388.32,104.1z M265.68,300.24c-12.96,0-23.76-10.8-23.76-23.76s10.8-23.76,23.76-23.76 s23.76,10.8,23.76,23.76S278.64,300.24,265.68,300.24z" />
                </svg>
              </div>
              <span className="logo-text ml-2">octal</span>
            </div>
            <p className="footer-desc">
              Pioneering the next generation of commerce platforms. We build scalable, 
              high-performance solutions for global enterprise brands.
            </p>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a 
                  key={social.name} 
                  href={social.href} 
                  aria-label={social.name}
                  className="social-icon"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Columns */}
          {footerLinks.map((group) => (
            <div key={group.title} className="footer-links-col">
              <h3>{group.title}</h3>
              <ul className="footer-links-list">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <a href={link.href}>{link.name}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="footer-bottom">
          <div className="footer-bottom-info">
            <p>&copy; {currentYear} Octal Inc. All rights reserved.</p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
