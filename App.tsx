import React from 'react';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import { Mail, Linkedin, Github, Coffee, Award } from 'lucide-react';

const Certifications = () => (
  <section className="py-12 border-y border-slate-100 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
       <span className="text-slate-400 font-semibold uppercase tracking-widest text-sm">Certified by ALX & Industry Leaders</span>
    </div>
    <div className="relative flex overflow-x-hidden group">
      <div className="py-2 animate-marquee whitespace-nowrap flex items-center gap-16 px-4">
        {["Front-End Development", "Back-End Development", "Data Analysis", "Graphic Design", "Virtual Assistant"].map((cert, i) => (
          <div key={i} className="flex items-center gap-3 text-slate-600 font-bold text-xl opacity-70 hover:opacity-100 transition-opacity">
            <Award className="text-purple-500" />
            <span>{cert} <span className="text-slate-400 font-normal text-base ml-1">- ALX</span></span>
          </div>
        ))}
        {/* Duplicate for infinite loop illusion */}
        {["Front-End Development", "Back-End Development", "Data Analysis", "Graphic Design", "Virtual Assistant"].map((cert, i) => (
          <div key={`dup-${i}`} className="flex items-center gap-3 text-slate-600 font-bold text-xl opacity-70 hover:opacity-100 transition-opacity">
            <Award className="text-purple-500" />
            <span>{cert} <span className="text-slate-400 font-normal text-base ml-1">- ALX</span></span>
          </div>
        ))}
      </div>
    </div>
    <style>{`
      @keyframes marquee {
        0% { transform: translateX(0); }
        100% { transform: translateX(-50%); }
      }
      .animate-marquee {
        animation: marquee 30s linear infinite;
      }
    `}</style>
  </section>
);

const About = () => (
  <section className="py-24 px-4 bg-white" id="about">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16">
       <div className="flex-1 order-2 md:order-1 relative">
         {/* Abstract Line Art Representation */}
         <div className="relative aspect-square max-w-sm mx-auto">
            <div className="absolute inset-0 border-2 border-slate-100 rounded-full animate-[spin_10s_linear_infinite]"></div>
            <div className="absolute inset-4 border-2 border-dashed border-purple-200 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
            <div className="absolute inset-12 bg-slate-50 rounded-full flex items-center justify-center p-8 text-center">
               <div className="space-y-4">
                  <span className="text-4xl">👨‍💻</span>
                  <p className="text-slate-400 text-sm font-medium">Building Digital <br/>Experiences</p>
               </div>
            </div>
            {/* Orbiting icons */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-4 bg-white p-2 rounded-full shadow-md">
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" className="w-8 h-8" alt="react"/>
            </div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-4 bg-white p-2 rounded-full shadow-md">
               <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" className="w-8 h-8" alt="python"/>
            </div>
         </div>
       </div>

       <div className="flex-1 order-1 md:order-2">
         <h2 className="text-3xl font-bold text-slate-900 mb-6">About Me</h2>
         <p className="text-lg text-slate-600 leading-relaxed mb-6">
           Full-stack developer, data analyst, and graphic designer with experience building reliable web applications, dashboards, and digital tools that drive measurable results. 
         </p>
         <p className="text-lg text-slate-600 leading-relaxed mb-8">
           Skilled in front-end and back-end development, data visualization, and user-centered design. Passionate about turning data and user insights into meaningful digital experiences.
         </p>
         <div className="flex gap-4">
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
               <span className="block text-2xl font-bold text-purple-600">1</span>
               <span className="text-sm text-slate-500">Year Exp.</span>
            </div>
            <div className="px-6 py-4 bg-slate-50 rounded-2xl border border-slate-100 text-center">
               <span className="block text-2xl font-bold text-emerald-600">5+</span>
               <span className="text-sm text-slate-500">Projects</span>
            </div>
         </div>
       </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-24 bg-slate-50 px-4">
    <div className="max-w-6xl mx-auto">
       <div className="text-center mb-16">
          <span className="text-purple-600">✦ Testimonials</span>
          <h2 className="text-3xl font-bold text-slate-900 mt-2">What it's like to work with me</h2>
       </div>
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              text: "Al Houcine demonstrated exceptional ability to translate broad requirements into user-friendly designs.",
              name: "Sarah Jenkins",
              role: "Product Manager"
            },
            {
              text: "The data dashboards created were top notch, bringing a positive, proactive attitude to our analytics team.",
              name: "David Chen",
              role: "Lead Analyst"
            },
            {
              text: "A rare mix of design eye and coding capability. Delivered our MVP ahead of schedule.",
              name: "Emily Rost",
              role: "Startup Founder"
            }
          ].map((t, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 relative">
               <span className="text-6xl text-purple-100 absolute top-4 left-6 font-serif">“</span>
               <p className="text-slate-600 relative z-10 mb-6 mt-4 leading-relaxed">
                 {t.text}
               </p>
               <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-200 rounded-full overflow-hidden">
                    <img src={`https://picsum.photos/100/100?random=${i + 10}`} alt="avatar" />
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm">{t.name}</p>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
               </div>
            </div>
          ))}
       </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-white pt-24 pb-12 px-4 border-t border-slate-100" id="contact">
    <div className="max-w-4xl mx-auto text-center">
       <div className="mb-8 flex justify-center">
          <div className="bg-purple-50 p-4 rounded-full">
            <Coffee className="text-purple-600 w-8 h-8" />
          </div>
       </div>
       <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
         Got Questions? Or Wanna Know More?
       </h2>
       <p className="text-slate-500 text-lg mb-10 max-w-2xl mx-auto">
         Thank you for making it this far. Whether you're exploring a new idea, or just in the mood for a good conversation, I'm always open to fresh perspectives.
       </p>
       
       <div className="flex flex-col md:flex-row justify-center gap-4 mb-20">
          <a href="mailto:contact@example.com" className="px-8 py-3 bg-purple-600 text-white rounded-full font-medium hover:bg-purple-700 transition-colors flex items-center justify-center gap-2">
            <Mail size={18} /> Send an Email
          </a>
          <a href="#" className="px-8 py-3 bg-white border border-slate-200 text-slate-700 rounded-full font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2">
            <Linkedin size={18} /> LinkedIn
          </a>
       </div>

       <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-slate-100 text-slate-400 text-sm">
          <p>© {new Date().getFullYear()} Al Houcine Mazzine. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
             <a href="#" className="hover:text-slate-600">Github</a>
             <a href="#" className="hover:text-slate-600">LinkedIn</a>
             <a href="#" className="hover:text-slate-600">Behance</a>
          </div>
       </div>
    </div>
  </footer>
);

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-purple-100 selection:text-purple-900">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
         <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
            <span className="font-bold text-xl tracking-tight">Al.Mazzine</span>
            <div className="hidden md:flex gap-8 text-sm font-medium text-slate-600">
               <a href="#projects" className="hover:text-purple-600 transition-colors">Portfolios</a>
               <a href="#about" className="hover:text-purple-600 transition-colors">About</a>
               <a href="#skills" className="hover:text-purple-600 transition-colors">Skills</a>
            </div>
            <a href="#contact" className="px-5 py-2 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors">
              Hire Me
            </a>
         </div>
      </nav>

      <main>
        <Hero />
        <About />
        <Certifications />
        <Skills />
        <Projects />
        <Testimonials />
      </main>

      <Footer />
    </div>
  );
};

export default App;