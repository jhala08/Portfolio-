import React, { useState } from 'react';

type FilterType = 'all' | 'web' | 'design' | 'video';

interface PortfolioItem {
  id: number;
  title: string;
  description: string;
  category: 'web' | 'design' | 'video';
  image: string;
  alt: string;
}

const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'Responsive online store with modern UI',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Modern e-commerce website interface'
  },
  {
    id: 2,
    title: 'Creative Portfolio',
    description: 'Interactive portfolio with smooth animations',
    category: 'web',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Creative portfolio website design'
  },
  {
    id: 3,
    title: 'Brand Identity',
    description: 'Complete branding package with logo design',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Brand identity design showcase'
  },
  {
    id: 4,
    title: 'Social Media Pack',
    description: 'Instagram templates and graphics suite',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Social media graphics templates'
  },
  {
    id: 5,
    title: 'Print Design',
    description: 'Brochures and marketing materials',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Print design materials and brochures'
  },
  {
    id: 6,
    title: 'UI/UX Design',
    description: 'Mobile app interface design',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Mobile app UI/UX design mockups'
  },
  {
    id: 7,
    title: 'Web Mockups',
    description: 'Website design prototypes',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Website design mockups and prototypes'
  },
  {
    id: 8,
    title: 'Digital Art',
    description: 'Custom illustrations and artwork',
    category: 'design',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Digital artwork and custom illustrations'
  },
  {
    id: 9,
    title: 'Promotional Video',
    description: 'Brand promotional content creation',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Video editing workspace for promotional content'
  },
  {
    id: 10,
    title: 'Social Content',
    description: 'Short-form video for social platforms',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Social media video content creation'
  },
  {
    id: 11,
    title: 'Motion Graphics',
    description: 'Animated graphics and transitions',
    category: 'video',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    alt: 'Motion graphics and animation work'
  }
];

const Portfolio: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => item.category === activeFilter);

  const handleFilterClick = (filter: FilterType) => {
    setActiveFilter(filter);
  };

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text" data-testid="section-title-portfolio">Portfolio</span>
        </h2>
        
        <div className="flex justify-center mb-12">
          <div className="glass rounded-full p-2">
            <button 
              onClick={() => handleFilterClick('all')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === 'all' 
                  ? 'bg-primary text-white' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/10'
              }`}
              data-testid="filter-all"
            >
              All Work
            </button>
            <button 
              onClick={() => handleFilterClick('web')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === 'web' 
                  ? 'bg-primary text-white' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/10'
              }`}
              data-testid="filter-web"
            >
              Web Dev
            </button>
            <button 
              onClick={() => handleFilterClick('design')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === 'design' 
                  ? 'bg-primary text-white' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/10'
              }`}
              data-testid="filter-design"
            >
              Design
            </button>
            <button 
              onClick={() => handleFilterClick('video')}
              className={`px-6 py-3 rounded-full transition-all ${
                activeFilter === 'video' 
                  ? 'bg-primary text-white' 
                  : 'text-slate-700 dark:text-slate-300 hover:bg-white/10'
              }`}
              data-testid="filter-video"
            >
              Video
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" data-testid="portfolio-grid">
          {filteredItems.map((item) => (
            <div 
              key={item.id}
              className="portfolio-item glass rounded-3xl overflow-hidden hover:scale-105 transition-transform duration-300"
              data-testid={`portfolio-item-${item.id}`}
            >
              <img 
                src={item.image} 
                alt={item.alt}
                className="w-full h-48 object-cover" 
                data-testid={`portfolio-img-${item.id}`}
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-2" data-testid={`portfolio-title-${item.id}`}>
                  {item.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm" data-testid={`portfolio-desc-${item.id}`}>
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
