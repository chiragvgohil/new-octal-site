import React from 'react';
import PortfolioHero from '../components/portfolio/PortfolioHero';
import ProjectGrid from '../components/portfolio/ProjectGrid';
import SuccessMetrics from '../components/portfolio/SuccessMetrics';
import CtaSection from '../components/ui/CtaSection';
import GridBackground from '../components/common/GridBackground';

const Portfolio = () => {
  return (
    <>
      <GridBackground />
      <main className="overflow-hidden bg-brand-dark">
        <PortfolioHero />
        <ProjectGrid />
        <SuccessMetrics />
        <CtaSection />
      </main>
    </>
  );
};

export default Portfolio;
