import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Import Assets
import automotiveImg from '../../assets/projects/automotive.png';
import electronicsImg from '../../assets/projects/electronics.png';
import interiorImg from '../../assets/projects/interior.png';
import energyImg from '../../assets/projects/energy.png';
import aiImg from '../../assets/projects/ai.png';
import aerospaceImg from '../../assets/projects/aerospace.png';

const ProjectCard = ({ image, title, category, description }) => (
  <div className="group relative bg-white/5 backdrop-blur-md rounded-[2.5rem] overflow-hidden border border-white/10 transition-all duration-700 hover:border-brand-primary/50 hover:bg-white/8 flex flex-col h-full">
    {/* Image Container with Overlay */}
    <div className="relative aspect-16/10 overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-linear-to-t from-brand-dark via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

      {/* Category Tag */}
      <div className="absolute top-6 left-6">
        <span className="px-4 py-1.5 rounded-full bg-brand-primary/20 backdrop-blur-xl border border-brand-primary/30 text-brand-primary text-[10px] font-bold tracking-[0.2em] uppercase">
          {category}
        </span>
      </div>
    </div>

    {/* Content */}
    <div className="p-8 sm:p-10 flex flex-col grow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-2xl sm:text-3xl font-bold text-white group-hover:text-brand-primary transition-colors duration-500">
          {title}
        </h3>
        <div className="shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white group-hover:bg-brand-primary group-hover:border-brand-primary group-hover:shadow-[0_0_20px_rgba(63,94,150,0.4)] transition-all duration-500 hover:scale-110">
          <svg className="w-6 h-6 transform group-hover:-rotate-45 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
      <p className="text-white/50 leading-relaxed text-lg font-medium group-hover:text-white/70 transition-colors duration-500">
        {description}
      </p>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Aesthetica Motors",
      category: "Automotive",
      description: "A luxury automotive digital experience with high-performance real-time 3D configuration and global scale.",
      image: automotiveImg
    },
    {
      title: "Aether Global",
      category: "Electronics",
      description: "Next-generation electronics retail with multi-region synchronization and lightning-fast edge performance.",
      image: electronicsImg
    },
    {
      title: "Elara Home",
      category: "Interior Decor",
      description: "Premium home decor marketplace utilizing advanced headless architecture for a seamless, artistic buyer journey.",
      image: interiorImg
    },
    {
      title: "Lumina Dynamics",
      category: "Renewable Energy",
      description: "Smart energy grids and sustainable infrastructure for the next generation of urban living and green technology.",
      image: energyImg
    },
    {
      title: "Synapse AI",
      category: "Technology",
      description: "Revolutionizing data processing with sentient-level artificial intelligence frameworks and neural computing blocks.",
      image: aiImg
    },
    {
      title: "Zenith Aerospace",
      category: "Aerospace",
      description: "Pioneering the future of private space travel with next-generation propulsion systems and luxury spacecraft designs.",
      image: aerospaceImg
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 !pb-0 bg-transparent overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-brand-primary/5 blur-[120px] rounded-full -z-10" />
      <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-brand-primary/10 blur-[100px] rounded-full -z-10" />

      <div className="container mx-auto px-6 sm:px-12 relative z-10 max-w-[1400px]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-8">
          <div className="max-w-[800px]">
            <span className="text-brand-primary text-xs sm:text-sm tracking-[0.3em] mb-6 block uppercase font-black">
              Our Portfolio
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight">
              Enterprise Projects <br />
              <span className="text-white/20">Built for Scale</span>
            </h2>
          </div>
          <div className="lg:max-w-[400px]">
            <p className="text-white/40 text-lg sm:text-xl font-medium leading-relaxed mb-8">
              Explore our latest high-performance deployments across diverse industry verticals.
            </p>
            {/* Custom Navigation */}
            <div className="flex gap-4">
              <button className="project-prev w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
                <svg className="w-6 h-6 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
              <button className="project-next w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-brand-primary hover:border-brand-primary transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="relative group/swiper">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: '.project-prev',
              nextEl: '.project-next',
            }}
            pagination={{
              clickable: true,
              el: '.project-pagination',
              bulletClass: 'swiper-pagination-bullet !bg-white/20 !opacity-100',
              bulletActiveClass: '!bg-brand-primary !w-8 transition-all duration-500'
            }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1280: { slidesPerView: 3 },
            }}
            className="overflow-visible!"
          >
            {projects.map((project, idx) => (
              <SwiperSlide key={idx} className="h-auto pb-16">
                <ProjectCard {...project} />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Pagination Container */}
          <div className="project-pagination flex justify-center mt-12 gap-3" />
        </div>
      </div>

      <style>{`
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          border-radius: 4px;
          transition: all 0.5s ease;
          display: inline-block;
          cursor: pointer;
        }
        .swiper-pagination-bullet-active {
          width: 32px;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
