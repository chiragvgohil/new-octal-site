import React, { useState } from 'react';

// Import Assets
import automotiveImg from '../../assets/projects/automotive.png';
import electronicsImg from '../../assets/projects/electronics.png';
import interiorImg from '../../assets/projects/interior.png';
import energyImg from '../../assets/projects/energy.png';
import aiImg from '../../assets/projects/ai.png';
import aerospaceImg from '../../assets/projects/aerospace.png';

const projects = [
  {
    id: 1,
    title: 'Aesthetica Motors',
    category: 'Technology',
    year: '2024',
    platforms: ['React', 'NodeJS', 'AWS'],
    description: 'A luxury automotive digital experience with high-performance real-time 3D configuration.',
    tags: ['Automotive', 'SaaS', 'High-Scale'],
    image: automotiveImg
  },
  {
    id: 2,
    title: 'QUBS ERP',
    category: 'Digital Solution',
    year: '2023',
    platforms: ['Flutter', 'Firebase'],
    description: 'Enterprise resource planning system for manufacturing units with real-time tracking.',
    tags: ['ERP', 'Manufacturing', 'Admin'],
    image: electronicsImg
  },
  {
    id: 3,
    title: 'Stock Market Pro',
    category: 'Marketplace',
    year: '2024',
    platforms: ['Next.js', 'PostgreSQL'],
    description: 'Advanced stock analysis and marketplace platform for institutional traders.',
    tags: ['Finance', 'Marketplace', 'Real-time'],
    image: energyImg
  },
  {
    id: 4,
    title: 'Text Craft Pro',
    category: 'Technology',
    year: '2023',
    platforms: ['Python', 'React'],
    description: 'AI-powered content creation tool for marketing agencies and copywriters.',
    tags: ['AI', 'CaaS', 'Editor'],
    image: aiImg
  },
  {
    id: 5,
    title: 'Concierge Curator',
    category: 'Digital Solution',
    year: '2024',
    platforms: ['Shopify', 'Hydrogen'],
    description: 'Luxury travel and concierge management platform for high-net-worth individuals.',
    tags: ['Luxury', 'Travel', 'Booking'],
    image: interiorImg
  },
  {
    id: 6,
    title: 'Maitri Wellness',
    category: 'Digital Solution',
    year: '2023',
    platforms: ['React Native'],
    description: 'A holistic wellness and meditation app focusing on mental health and community.',
    tags: ['Health', 'Mental Wellness', 'Social'],
    image: aerospaceImg
  }
];

const ProjectGrid = () => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Technology', 'Digital Solution', 'Marketplace', 'Ecommerce'];

  const filteredProjects = activeTab === 'All' 
    ? projects 
    : projects.filter(p => p.category === activeTab);

  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-[1240px]">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-6">
            Filters
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-12">
            Featured <span className="text-brand-primary">Projects</span>
          </h2>

          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${activeTab === tab 
                  ? 'bg-brand-primary text-white shadow-lg shadow-brand-primary/30' 
                  : 'bg-white/5 text-white/50 border border-white/10 hover:bg-white/10'}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="group relative bg-[#1a2333] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-brand-primary/30 transition-all duration-500">
              {/* Image */}
              <div className="relative aspect-16/10 overflow-hidden m-4 rounded-4xl">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              </div>

              {/* Content */}
              <div className="p-8 pt-0">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                    <p className="text-white/30 text-xs font-bold">{project.year} • {project.category}</p>
                  </div>
                  <div className="flex gap-2">
                    {/* Placeholder Platform Icons */}
                    <div className="w-6 h-6 rounded-full bg-white/5 flex items-center justify-center">
                      <div className="w-3 h-3 bg-brand-primary rounded-full" />
                    </div>
                  </div>
                </div>

                <p className="text-white/40 text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-white/5 border border-white/5 text-white/30 text-[10px] uppercase tracking-wider font-bold">
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="w-full py-4 bg-white/5 text-white/80 border border-white/10 rounded-xl font-bold hover:bg-brand-primary hover:border-brand-primary hover:text-white transition-all duration-300">
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
