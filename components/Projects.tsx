import React, { useState } from 'react';
import { Project } from '../types';
import { ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Analytics Dashboard",
    category: "Data Analysis",
    description: "A comprehensive Power BI report tracking sales performance, customer churn, and inventory levels for a retail client.",
    tags: ["Power BI", "SQL", "Data Viz"],
    imageUrl: "https://picsum.photos/800/600?random=1",
    colorTheme: "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
  },
  {
    id: 2,
    title: "Modern SaaS Landing Page",
    category: "Web Dev",
    description: "A high-conversion landing page built with React and Tailwind, featuring smooth animations and responsive layout.",
    tags: ["React", "Tailwind", "Framer Motion"],
    imageUrl: "https://picsum.photos/800/600?random=2",
    colorTheme: "bg-purple-50 text-purple-700 hover:bg-purple-600 hover:text-white"
  },
  {
    id: 3,
    title: "Brand Identity System",
    category: "Graphic Design",
    description: "Complete visual identity package including logo design, color palette, and typography guidelines for a fintech startup.",
    tags: ["Illustrator", "Branding", "Creative"],
    imageUrl: "https://picsum.photos/800/600?random=3",
    colorTheme: "bg-pink-50 text-pink-700 hover:bg-pink-600 hover:text-white"
  },
  {
    id: 4,
    title: "Inventory Management App",
    category: "Web Dev",
    description: "Full-stack application allowing users to track stock in real-time using Node.js backend and a React frontend.",
    tags: ["Node.js", "Express", "MongoDB"],
    imageUrl: "https://picsum.photos/800/600?random=4",
    colorTheme: "bg-emerald-50 text-emerald-700 hover:bg-emerald-600 hover:text-white"
  }
];

const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Web Dev', 'Data Analysis', 'Graphic Design'];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="py-24 px-4 bg-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-600">
               <span className="text-xl">✦</span>
               <span className="font-medium uppercase tracking-wide">My Work</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900">Selected Projects</h2>
          </div>
          <p className="text-slate-500 max-w-md text-lg">
             A mix of curiosity, strategy, and execution across development, data, and design.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
            {filters.map((filter) => (
                <button
                    key={filter}
                    onClick={() => setActiveFilter(filter)}
                    className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 border ${
                        activeFilter === filter
                            ? 'bg-slate-900 text-white border-slate-900 shadow-lg scale-105'
                            : 'bg-white text-slate-500 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    }`}
                >
                    {filter}
                </button>
            ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 min-h-[400px]">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
            <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id} 
                className="group flex flex-col gap-4"
            >
              <div className="relative overflow-hidden rounded-3xl bg-slate-100 aspect-[4/3] cursor-pointer">
                 <img 
                   src={project.imageUrl} 
                   alt={project.title} 
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                 />
                 <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>
              
              <div className="space-y-3">
                 <div className="flex gap-2 flex-wrap">
                    <span className="px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold uppercase tracking-wider rounded-full">
                      {project.category}
                    </span>
                    {project.tags.map(tag => (
                       <span key={tag} className="px-2 py-1 border border-slate-200 text-slate-500 text-xs rounded-full">
                         {tag}
                       </span>
                    ))}
                 </div>
                 
                 <h3 className="text-2xl font-bold text-slate-900 group-hover:text-purple-600 transition-colors">
                   {project.title}
                 </h3>
                 <p className="text-slate-500 leading-relaxed">
                   {project.description}
                 </p>
                 
                 <button className={`w-full mt-2 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${project.colorTheme}`}>
                    View Case Study <ArrowRight size={18} />
                 </button>
              </div>
            </motion.div>
          ))}
          </AnimatePresence>
          
          {filteredProjects.length === 0 && (
             <div className="col-span-full flex items-center justify-center py-20 text-slate-400">
                No projects found in this category.
             </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;