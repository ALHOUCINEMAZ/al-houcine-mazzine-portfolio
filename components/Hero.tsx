import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, ResponsiveContainer, Cell } from 'recharts';
import { Github, Linkedin, MousePointer2, Database, Palette, Code2 } from 'lucide-react';

const data = [
  { name: 'A', value: 40 },
  { name: 'B', value: 30 },
  { name: 'C', value: 60 },
  { name: 'D', value: 45 },
  { name: 'E', value: 80 },
];

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16 px-4">
      {/* Background Decorative Blobs */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-[10%] right-[-5%] w-[500px] h-[500px] bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-[500px] h-[500px] bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-slate-100 mb-4">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-sm font-medium text-slate-600">Open to Work</span>
          </div>

          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
            Hello, I'm <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Al Houcine
            </span>
          </h1>

          <div className="space-y-2">
            <h2 className="text-xl lg:text-2xl font-semibold text-slate-700">
              Full-Stack Developer | Data Analyst | Graphic Designer
            </h2>
            <p className="text-2xl lg:text-4xl font-light text-slate-500 italic font-serif">
              “Human-centered. Data-informed. Design-driven.”
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center lg:justify-start pt-6">
             <a href="#contact" className="px-8 py-3 bg-slate-900 text-white rounded-full font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
               Hire Me
             </a>
             <a href="#projects" className="px-8 py-3 bg-white text-slate-700 border border-slate-200 rounded-full font-medium hover:bg-slate-50 transition-all shadow-sm">
               View Work
             </a>
             <div className="flex gap-3 items-center ml-4 border-l border-slate-200 pl-4">
               <a href="#" className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
                 <Github className="w-6 h-6" />
               </a>
               <a href="#" className="p-2 text-slate-400 hover:text-blue-700 transition-colors">
                 <Linkedin className="w-6 h-6" />
               </a>
             </div>
          </div>
        </motion.div>

        {/* Visual / Floating Cards Area */}
        <div className="relative h-[500px] w-full hidden lg:block">
           {/* Centerpiece illustration placeholder or conceptual layout */}
           <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-[400px] h-[400px] bg-white/40 backdrop-blur-sm rounded-full border border-white/50 shadow-2xl flex items-center justify-center">
                 <div className="text-center p-8">
                    <p className="text-lg font-medium text-slate-500 mb-2">My Process</p>
                    <h3 className="text-4xl font-bold text-slate-800">
                      Discovery
                      <br />& Design
                    </h3>
                 </div>
              </div>
           </div>

           {/* Floating Card: Data Driven */}
           <motion.div 
             animate={{ y: [0, -15, 0] }}
             transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
             className="absolute top-10 right-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 w-48"
           >
              <div className="flex items-center gap-2 mb-2">
                <div className="p-1.5 bg-purple-100 rounded-lg text-purple-600">
                  <Database size={16} />
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Data Driven</span>
              </div>
              <div className="h-24 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                      {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={index % 2 === 0 ? '#8b5cf6' : '#d8b4fe'} />
                      ))}
                    </Bar>
                  </BarChart>
                </ResponsiveContainer>
              </div>
           </motion.div>

           {/* Floating Card: Design */}
           <motion.div 
             animate={{ y: [0, 15, 0] }}
             transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
             className="absolute bottom-20 left-10 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 w-auto"
           >
              <div className="flex items-center gap-3">
                 <div className="h-12 w-12 bg-pink-50 rounded-full flex items-center justify-center text-pink-500">
                    <Palette size={24} />
                 </div>
                 <div>
                    <p className="text-xs text-slate-400 font-semibold uppercase">Focus</p>
                    <p className="text-slate-800 font-bold">User Experience</p>
                 </div>
              </div>
           </motion.div>

           {/* Floating Card: Development */}
           <motion.div 
             animate={{ x: [0, 10, 0], y: [0, 5, 0] }}
             transition={{ repeat: Infinity, duration: 6, ease: "easeInOut", delay: 0.5 }}
             className="absolute top-40 left-0 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 max-w-[180px]"
           >
              <div className="flex items-center gap-2 mb-3">
                <div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-600">
                  <Code2 size={16} />
                </div>
                <span className="text-xs font-bold text-slate-600 uppercase">Full Stack</span>
              </div>
              <div className="space-y-2">
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-3/4"></div>
                 </div>
                 <div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-400 w-1/2"></div>
                 </div>
              </div>
           </motion.div>

           {/* Floating Badge: Research */}
           <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute top-[60%] right-[20%] bg-indigo-600 text-white px-5 py-3 rounded-tr-2xl rounded-bl-2xl rounded-tl-lg rounded-br-lg shadow-lg shadow-indigo-200"
           >
              <div className="flex items-center gap-2">
                 <MousePointer2 size={18} />
                 <span className="font-semibold">Research</span>
              </div>
           </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;