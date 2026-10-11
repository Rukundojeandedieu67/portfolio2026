import React from 'react';
import { Sparkles, CheckCircle2 } from 'lucide-react';
import { ENGINEERING_PHILOSOPHIES } from '../data/portfolioData';

export const EngineeringPhilosophy: React.FC = () => {
  return (
    <section className="py-24 bg-slate-950/60 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5" />
            CORE ENGINEERING VALUES
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            How I Build Software
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base">
            Architectural principles honed through a decade of building high-concurrency systems, mission-critical applications, and scalable frontends.
          </p>
        </div>

        {/* Philosophy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ENGINEERING_PHILOSOPHIES.map((item) => (
            <div
              key={item.number}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-cyan-500/40 transition-all space-y-5 shadow-xl relative overflow-hidden group"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl font-mono font-extrabold text-cyan-500/80 group-hover:text-cyan-400 transition-colors">
                  {item.number}
                </span>
                <span className="text-xs font-mono uppercase px-2.5 py-1 rounded-full bg-slate-950 border border-slate-800 text-slate-400">
                  Standard
                </span>
              </div>

              <h3 className="text-xl font-bold text-white tracking-tight">
                {item.title}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed">
                {item.description}
              </p>

              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                {item.bullets.map((bullet, bIdx) => (
                  <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
