import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/ui/Hero';
import SolutionsSection from './components/ui/SolutionsSection';
import ProjectsSection from './components/ui/ProjectsSection';
import CtaSection from './components/ui/CtaSection';

import GridBackground from './components/common/GridBackground';

function App() {
  return (
    <Layout>
      <GridBackground />
      <main className="overflow-hidden">
        {/* Prime Hero Section (Fixed dark viewport) */}
        <Hero />

        {/* One platform for every way you sell (Overlapping section) */}
        <SolutionsSection />

        {/* Explore Our Company projects (Case Studies) */}
        <ProjectsSection />

        {/* High-fidelity CTA: Powering enterprise businesses */}
        <CtaSection />
      </main>
    </Layout>
  );
}

export default App;
