import React from 'react';
import Hero from '../components/ui/Hero';
import SolutionsSection from '../components/ui/SolutionsSection';
import ProjectsSection from '../components/ui/ProjectsSection';
import FaqSection from '../components/ui/FaqSection';
import CtaSection from '../components/ui/CtaSection';
import GridBackground from '../components/common/GridBackground';

function Home() {
  return (
    <>
      <GridBackground />
      <main className="overflow-hidden">
        {/* Prime Hero Section (Fixed dark viewport) */}
        <Hero />

        {/* One platform for every way you sell (Overlapping section) */}
        <SolutionsSection />

        {/* Explore Our Company projects (Case Studies) */}
        <ProjectsSection />

        {/* FAQ Section */}
        <FaqSection />

        {/* High-fidelity CTA: Powering enterprise businesses */}
        <CtaSection />
      </main>
    </>
  );
}

export default Home;
