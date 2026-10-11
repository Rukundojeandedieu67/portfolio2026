import React from 'react';
import { ArrowUp, Mail, Activity } from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-900 py-16 text-slate-400 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-slate-900">
          
          {/* Brand & Mission */}
          <div className="md:col-span-6 space-y-4 text-left">
            <div className="flex items-center gap-2.5">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-10 h-10 rounded-xl object-cover border-2 border-cyan-400 shadow-md"
              />
              <div>
                <span className="font-bold text-white text-lg tracking-tight block">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-xs text-cyan-400 font-mono">
                  {PERSONAL_INFO.title}
                </span>
              </div>
            </div>
            <p className="text-sm text-slate-400 max-w-md leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-emerald-400">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>Available for Opportunities &bull; Rwanda 🇷🇼</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#architecture" className="hover:text-cyan-400 transition-colors">System Architecture</a></li>
              <li><a href="#projects" className="hover:text-cyan-400 transition-colors">Featured Projects</a></li>
              <li><a href="#terminal" className="hover:text-cyan-400 transition-colors">Interactive CLI Sandbox</a></li>
              <li><a href="#stack" className="hover:text-cyan-400 transition-colors">Tech Stack Matrix</a></li>
              <li><a href="#experience" className="hover:text-cyan-400 transition-colors">Career & Impact</a></li>
              <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact Developer</a></li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-3 text-left">
            <h4 className="text-xs font-mono uppercase text-slate-300 tracking-wider font-semibold">
              Network & Connect
            </h4>
            <div className="flex flex-col gap-2.5 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub (@Rukundojeandedieu67)</span>
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn / Profile</span>
              </a>
              <a
                href={PERSONAL_INFO.twitter}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <TwitterIcon className="w-4 h-4" />
                <span>X / Twitter (@RukundoJD)</span>
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-2 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>{PERSONAL_INFO.email}</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Credits & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} {PERSONAL_INFO.name}. Built with React 19, TypeScript &amp; Tailwind CSS &bull; Made in Rwanda 🇷🇼
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:text-white transition-all shadow-sm"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

      </div>
    </footer>
  );
};
