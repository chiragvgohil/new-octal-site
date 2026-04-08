import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main className="grow bg-brand-dark">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
