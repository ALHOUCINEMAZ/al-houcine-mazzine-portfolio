import React from 'react';
import { Code, Layout, Terminal, PenTool, Database, Users, MessageSquare, BarChart3, Figma, Cpu } from 'lucide-react';

const SkillCard = ({ title, items, icon: Icon, colorClass }: { title: string, items: string[], icon: any, colorClass: string }) => (
  <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
    <div className={`w-12 h-12 rounded-2xl ${colorClass} flex items-center justify-center mb-6`}>
      <Icon size={24} />
    </div>
    <h3 className="text-xl font-bold text-slate-800 mb-4">{title}</h3>
    <div className="flex flex-wrap gap-2">
      {items.map((item, idx) => (
        <span key={idx} className="px-3 py-1 bg-slate-50 text-slate-600 rounded-lg text-sm font-medium border border-slate-100">
          {item}
        </span>
      ))}
    </div>
  </div>
);

const Skills: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50" id="skills">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-purple-600 font-medium tracking-wide uppercase mb-2">My Expertise</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900">Tools & Technologies</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCard 
            title="Technical Skills" 
            items={['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Python', 'SQL', 'TypeScript']}
            icon={Code}
            colorClass="bg-blue-100 text-blue-600"
          />
          <SkillCard 
            title="Tools & Design" 
            items={['Power BI', 'Excel', 'Canva', 'Photoshop', 'Illustrator', 'GitHub', 'Figma', 'Tableau']}
            icon={PenTool}
            colorClass="bg-purple-100 text-purple-600"
          />
          <SkillCard 
            title="Soft Skills" 
            items={['Communication', 'Teamwork', 'Problem-solving', 'Organization', 'Adaptability', 'Empathy']}
            icon={Users}
            colorClass="bg-emerald-100 text-emerald-600"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;