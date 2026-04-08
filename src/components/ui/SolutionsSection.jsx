import React from 'react';

const SolutionCard = ({ image, title, description, delay }) => (
  <div className={`flex flex-col bg-white rounded-2xl overflow-hidden shadow-sm transition-all duration-500 hover:shadow-xl hover:-translate-y-2 group cursor-pointer`}>
    <div className="aspect-[4/3] overflow-hidden">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
    </div>
    <div className="p-8 flex flex-col flex-grow bg-white">
      <h3 className="text-3xl font-bold text-[#141E30] mb-4 group-hover:text-brand-primary transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-lg">
        {description}
      </p>
    </div>
  </div>
);

const SolutionsSection = () => {
  const solutions = [
    {
      title: "B2C",
      description: "Outshine competitors with expressive, fast-loading storefronts that convert visitors into loyal customers across all devices.",
      image: "/home/octal/.gemini/antigravity/brain/f880f7a3-5e70-4c85-b137-4acbc19e8218/b2c_commerce_mockup_1774267696321.png"
    },
    {
      title: "B2B",
      description: "Scale your wholesale business globally with customized pricing, catalogs, and checkout experiences designed for business buyers.",
      image: "/home/octal/.gemini/antigravity/brain/f880f7a3-5e70-4c85-b137-4acbc19e8218/b2b_commerce_mockup_1774267717587.png"
    },
    {
      title: "Retail",
      description: "Unify your online and physical stores with a connected POS platform that keeps inventory, customers, and orders in perfect sync.",
      image: "/home/octal/.gemini/antigravity/brain/f880f7a3-5e70-4c85-b137-4acbc19e8218/retail_pos_mockup_1774267735404.png"
    }
  ];

  return (
    <section className="relative bg-transparent">
      {/* 
        This is the inner white container that overlaps the dark background.
        We use rounded-t-[60px] to match the Shopify Enterprise design.
      */}
      <div className="bg-[#fbfcfa] rounded-t-[40px] sm:rounded-t-[60px] relative z-20 px-6 sm:px-12 pt-24 sm:pt-32 pb-10">
        <div className="container mx-auto max-w-[1240px]">
          <div className="max-w-[800px] mb-20 sm:mb-24 px-4">
            <span className="text-[#141E30]/60 text-xs sm:text-sm font-bold tracking-[0.2em] mb-6 block uppercase">
              Solutions
            </span>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#141E30] leading-[1.1] mb-8">
              One platform for every way you sell
            </h2>
            <p className="text-lg sm:text-xl text-[#141E30]/60 leading-relaxed max-w-[650px]">
              Operate your B2C, B2B, and retail markets with software built for customisation, productivity, and revenue growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
            {solutions.map((item, idx) => (
              <SolutionCard
                key={idx}
                title={item.title}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
