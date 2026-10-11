import React, { useState } from 'react';
import { 
  FolderGit2, 
  ExternalLink, 
  Star, 
  ChevronDown, 
  ChevronUp, 
  Layers, 
  CheckCircle2, 
  Copy, 
  Check 
} from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { PROJECTS } from '../data/portfolioData';
import type { Project } from '../types';

export const ProjectsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [expandedProjectId, setExpandedProjectId] = useState<string | null>(null);
  const [copiedCloneId, setCopiedCloneId] = useState<string | null>(null);

  const categories = ['All', 'Full-Stack Web & CMS', 'Next.js & Modern Web', 'AI & Data Science'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === selectedCategory);

  const toggleExpand = (id: string) => {
    setExpandedProjectId((prev) => (prev === id ? null : id));
  };

  const handleCopyClone = (project: Project) => {
    navigator.clipboard.writeText(`git clone ${project.githubUrl}.git`);
    setCopiedCloneId(project.id);
    setTimeout(() => setCopiedCloneId(null), 1500);
  };

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-950/60 border border-indigo-800/60 text-indigo-300 text-xs font-mono">
              <FolderGit2 className="w-3.5 h-3.5" />
              FLAGSHIP ARCHITECTURAL CASE STUDIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Selected Production Systems
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              Each project represents an end-to-end fullstack challenge: high throughput backends, complex state machines, and microsecond-optimized browser interactions.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedCategory === cat
                    ? 'bg-cyan-500 text-slate-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'text-slate-400 hover:text-white hover:bg-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {filteredProjects.map((project) => {
            const isExpanded = expandedProjectId === project.id;
            const isCopied = copiedCloneId === project.id;

            return (
              <div
                key={project.id}
                className="rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-slate-700/80 p-6 sm:p-7 space-y-6 shadow-xl transition-all duration-300 hover:shadow-cyan-500/5 group flex flex-col justify-between"
              >
                <div className="space-y-4">
                  
                  {/* Top Bar: Category & Links */}
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-cyan-400 bg-cyan-950/60 border border-cyan-800/60 px-2.5 py-1 rounded-md">
                      {project.category}
                    </span>
                    <div className="flex items-center gap-2">
                      {project.stars && (
                        <span className="flex items-center gap-1 text-xs font-mono text-amber-400 bg-amber-950/40 px-2 py-0.5 rounded border border-amber-800/40">
                          <Star className="w-3 h-3 fill-amber-400" />
                          {project.stars}
                        </span>
                      )}
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
                        title="GitHub Source"
                        aria-label="GitHub Repository"
                      >
                        <GithubIcon className="w-4 h-4" />
                      </a>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-1.5 text-slate-400 hover:text-cyan-400 rounded-lg hover:bg-slate-800 transition-colors"
                          title="Live Demo"
                          aria-label="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Project Screenshot Preview */}
                  {project.imageUrl && (
                    <div className="rounded-xl overflow-hidden border border-slate-800 bg-slate-950 max-h-48 relative group/img">
                      <img
                        src={project.imageUrl}
                        alt={project.title}
                        className="w-full h-40 object-cover object-top group-hover/img:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Title & Tagline */}
                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs sm:text-sm font-medium text-slate-400 font-mono">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quantifiable Metrics Strip */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-950/80 border border-slate-800/80">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="text-center space-y-0.5">
                        <div className="text-xs sm:text-sm font-bold font-mono text-cyan-400">
                          {metric.value}
                        </div>
                        <div className="text-[10px] uppercase font-mono text-slate-400 truncate">
                          {metric.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="space-y-2 pt-1">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Client & Server Stack:
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.frontendStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.backendStack.map((tech) => (
                        <span
                          key={tech}
                          className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-950/60 text-indigo-300 border border-indigo-800/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Expandable Architecture Insights Drawer */}
                  {isExpanded && (
                    <div className="pt-4 border-t border-slate-800/80 space-y-3.5 animate-in fade-in duration-200">
                      <div className="p-3.5 rounded-xl bg-slate-950/90 border border-slate-800 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-mono text-cyan-300 font-bold">
                          <Layers className="w-3.5 h-3.5" />
                          <span>Architecture & Concurrency Design</span>
                        </div>
                        <p className="text-xs text-slate-300 leading-relaxed">
                          {project.architectureSummary}
                        </p>
                      </div>

                      <div className="space-y-1.5">
                        <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                          Key Engineering Highlights:
                        </div>
                        <ul className="space-y-1.5 text-xs text-slate-300">
                          {project.highlights.map((h, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                              <span>{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}

                </div>

                {/* Card Action Footer */}
                <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                  <button
                    onClick={() => toggleExpand(project.id)}
                    className="inline-flex items-center gap-1.5 font-mono text-cyan-400 hover:text-cyan-300 font-medium transition-colors"
                  >
                    <span>{isExpanded ? 'Hide Architecture' : 'Deep Dive Architecture'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>

                  <button
                    onClick={() => handleCopyClone(project)}
                    className="inline-flex items-center gap-1.5 font-mono text-slate-400 hover:text-slate-200 transition-colors"
                    title="Copy Git Clone Command"
                  >
                    {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{isCopied ? 'Copied clone cmd!' : 'clone'}</span>
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
