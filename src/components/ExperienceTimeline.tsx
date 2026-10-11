import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, TrendingUp, Layers } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const ExperienceTimeline: React.FC = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="space-y-3 mb-16 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5" />
            CAREER PROGRESSION & LEADERSHIP
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineering Leadership & Track Record
          </h2>
          <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
            Demonstrated history of driving technical roadmaps, architecting high-scale platforms, and accelerating engineering team velocity.
          </p>
        </div>

        {/* Timeline Items */}
        <div className="space-y-12 relative before:absolute before:inset-0 before:left-3.5 sm:before:left-5 before:w-0.5 before:bg-gradient-to-b before:from-cyan-500 before:via-indigo-500 before:to-transparent">
          {EXPERIENCES.map((exp) => (
            <div key={exp.id} className="relative pl-10 sm:pl-14 group">
              
              {/* Timeline Bullet */}
              <div className="absolute left-1 sm:left-2.5 top-1.5 w-6 h-6 rounded-full bg-slate-950 border-2 border-cyan-400 flex items-center justify-center group-hover:scale-125 transition-transform duration-200">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              </div>

              {/* Experience Card */}
              <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 transition-all space-y-5 shadow-xl">
                
                {/* Header Information */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {exp.role}
                      </h3>
                      {exp.badge && (
                        <span className="text-[10px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-cyan-950 border border-cyan-700 text-cyan-300">
                          {exp.badge}
                        </span>
                      )}
                    </div>
                    <div className="text-sm font-semibold text-cyan-400 mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Role Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Measurable Business & Engineering Impact */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                    <TrendingUp className="w-3.5 h-3.5" />
                    <span>Quantifiable Engineering Impact</span>
                  </div>
                  <ul className="grid grid-cols-1 gap-2 text-xs sm:text-sm text-slate-300">
                    {exp.impactMetrics.map((metric, mIdx) => (
                      <li key={mIdx} className="flex items-start gap-2.5 p-2 rounded-lg bg-slate-950/50 border border-slate-800/60">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{metric}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Architectural Highlights */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">
                    <Layers className="w-3.5 h-3.5" />
                    <span>Architectural Highlights</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-300">
                    {exp.architecturalHighlights.map((arch, aIdx) => (
                      <div key={aIdx} className="p-2.5 rounded-lg bg-slate-950/40 border border-slate-800/80">
                        &bull; {arch}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies Used */}
                <div className="pt-2 border-t border-slate-800/80 flex flex-wrap gap-1.5">
                  {exp.keyTechnologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-slate-800 text-slate-300 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
