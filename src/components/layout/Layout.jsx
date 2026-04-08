import React from 'react';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <div className="relative flex flex-col min-h-screen bg-brand-dark overflow-x-hidden">
      <Navbar />
      <main className="flex-grow bg-brand-dark">
        {children}
      </main>
      {/* Footer can be added later */}
    </div>
  );
};

export default Layout;
