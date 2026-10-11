import React, { useState } from 'react';
import { 
  Cpu, 
  Search, 
  Layout, 
  Server, 
  Briefcase, 
  Cloud, 
  Clock,
  Sparkles
} from 'lucide-react';
import { SKILL_CATEGORIES, SOFT_SKILLS } from '../data/portfolioData';

export const SkillsMatrix: React.FC = () => {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Layout':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Server':
        return <Server className="w-5 h-5 text-indigo-400" />;
      case 'Briefcase':
        return <Briefcase className="w-5 h-5 text-purple-400" />;
      case 'Cloud':
        return <Cloud className="w-5 h-5 text-pink-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const currentCategory = SKILL_CATEGORIES[activeCategoryIndex];

  // Global search filtering across all categories or current category
  const filteredSkills = currentCategory.skills.filter(
    (skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      skill.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <section id="stack" className="py-24 bg-slate-950/40 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
              <Cpu className="w-3.5 h-3.5" />
              TECHNICAL PROFILE & PROFICIENCY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Skills & Business IT Matrix
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Real proficiencies combining full-stack development, database architecture, and Business Information Technology (BIT) from University of Rwanda, Huye Campus.
            </p>
          </div>

          {/* Real-time search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills, languages, tools..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 border border-slate-800 rounded-xl pl-9 pr-4 py-2 text-xs font-mono text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Category Selector Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-10">
          {SKILL_CATEGORIES.map((cat, idx) => {
            const isActive = activeCategoryIndex === idx;
            return (
              <button
                key={cat.title}
                onClick={() => {
                  setActiveCategoryIndex(idx);
                  setSearchQuery('');
                }}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  isActive
                    ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                    : 'bg-slate-900/40 border-slate-800 hover:bg-slate-900/80 hover:border-slate-700'
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className={`p-2 rounded-xl ${isActive ? 'bg-slate-800' : 'bg-slate-950'}`}>
                    {getCategoryIcon(cat.iconName)}
                  </div>
                  <span className={`text-xs font-mono uppercase tracking-wider ${isActive ? 'text-cyan-400 font-bold' : 'text-slate-400'}`}>
                    Category 0{idx + 1}
                  </span>
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight truncate">
                  {cat.title}
                </h3>
              </button>
            );
          })}
        </div>

        {/* Category Description Banner */}
        <div className="p-4 rounded-xl bg-slate-900/70 border border-slate-800/80 mb-8 flex items-center justify-between">
          <p className="text-xs sm:text-sm text-slate-300">
            {currentCategory.description}
          </p>
          <span className="text-xs font-mono text-cyan-400 shrink-0 ml-4">
            {filteredSkills.length} competencies listed
          </span>
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.length === 0 ? (
            <div className="col-span-full py-12 text-center text-sm text-slate-400 font-mono">
              No matching technologies found for "{searchQuery}".
            </div>
          ) : (
            filteredSkills.map((skill) => (
              <div
                key={skill.name}
                className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-4 shadow-md hover:shadow-cyan-500/5 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {skill.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="flex items-center gap-1 text-[11px] font-mono text-slate-400">
                        <Clock className="w-3 h-3 text-cyan-400" />
                        {skill.years}y
                      </span>
                      <span
                        className={`text-[10px] uppercase font-mono px-2 py-0.5 rounded font-bold ${
                          skill.level === 'Expert'
                            ? 'bg-emerald-950/80 text-emerald-300 border border-emerald-800/60'
                            : 'bg-indigo-950/80 text-indigo-300 border border-indigo-800/60'
                        }`}
                      >
                        {skill.level}
                      </span>
                    </div>
                  </div>

                  {/* Real Proficiency Bar from skills.php */}
                  {skill.pct !== undefined && (
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between items-center text-[11px] font-mono">
                        <span className="text-slate-400">Mastery Level</span>
                        <span className="text-cyan-300 font-bold">{skill.pct}%</span>
                      </div>
                      <div className="w-full bg-slate-950 h-2 rounded-full overflow-hidden border border-slate-800/80">
                        <div
                          className="bg-gradient-to-r from-cyan-500 via-sky-400 to-indigo-500 h-full rounded-full transition-all duration-500"
                          style={{ width: `${skill.pct}%` }}
                        />
                      </div>
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-xs text-slate-300 leading-relaxed min-h-[36px]">
                    {skill.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-3 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Dedicated Soft Skills / Personal Attributes from skills.php */}
        <div className="mt-20 pt-12 border-t border-slate-800/80">
          <div className="text-center space-y-2 mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono">
              <Sparkles className="w-3.5 h-3.5" />
              PROFESSIONAL WORK ETHIC
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Personal Attributes &amp; Soft Skills
            </h3>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              Cultivated through academic leadership at University of Rwanda, teaching assistant mentorship, and collaborative hackathons.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {SOFT_SKILLS.map((item) => (
              <div
                key={item.title}
                className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-purple-500/40 transition-all text-center space-y-2.5 shadow-md"
              >
                <div className="text-3xl">{item.icon}</div>
                <h4 className="text-sm font-bold text-white tracking-tight">
                  {item.title}
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
