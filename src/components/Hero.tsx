import React, { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Terminal, 
  FileText,
  Activity,
  Globe,
  Award,
  CheckCircle2
} from 'lucide-react';
import { GithubIcon, LinkedinIcon, TwitterIcon } from './SocialIcons';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
}

const ROLES = [
  'Full-Stack Web Developer',
  'Business Information Technology (BIT) Scholar',
  'University of Rwanda — Huye Campus',
  'Next.js & React UI Builder',
  'PHP & MySQL Database Developer',
  'Python Data Science Practitioner (DTP Certified)'
];

export const Hero: React.FC<HeroProps> = ({ onOpenResume }) => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [liveLatency, setLiveLatency] = useState(42);

  useEffect(() => {
    const roleInterval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3200);

    const telemetryInterval = setInterval(() => {
      setLiveLatency(Math.floor(38 + Math.random() * 10));
    }, 2800);

    return () => {
      clearInterval(roleInterval);
      clearInterval(telemetryInterval);
    };
  }, []);

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      {/* Background ambient gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-cyan-500/15 via-indigo-600/15 to-purple-600/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -top-24 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Headline, Bio & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Status Pill with Avatar thumbnail */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-slate-900/90 border border-slate-800 text-xs text-slate-300 font-mono shadow-inner">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-5 h-5 rounded-full object-cover border border-cyan-400"
              />
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>{PERSONAL_INFO.availability}</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-tight">
                Hi, I'm <br className="hidden sm:block" />
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400 bg-clip-text text-transparent">
                  {PERSONAL_INFO.name}
                </span>
              </h1>
              
              {/* Tagline */}
              <p className="text-base sm:text-lg font-medium text-cyan-300 font-mono">
                {PERSONAL_INFO.tagline}
              </p>

              {/* Animated Role Cycler */}
              <div className="h-8 flex items-center pt-1">
                <span className="text-slate-400 text-sm sm:text-base font-mono mr-2">focus:</span>
                <span className="text-cyan-400 font-mono text-sm sm:text-base font-semibold tracking-wide transition-all duration-300">
                  {ROLES[roleIndex]}
                </span>
              </div>
            </div>

            {/* Subtext Paragraph */}
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>

            {/* Quick Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-semibold text-sm shadow-lg shadow-cyan-500/25 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <span>Explore Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                target="_blank"
                rel="noreferrer"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700/80 font-mono text-sm transition-all duration-200 hover:border-cyan-500/50"
              >
                <FileText className="w-4 h-4 text-cyan-400" />
                <span>Download CV (PDF)</span>
              </a>

              <a
                href="#terminal"
                className="inline-flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-slate-300 border border-slate-800 font-medium text-sm transition-all"
              >
                <Terminal className="w-4 h-4 text-slate-400" />
                <span>Interactive CLI</span>
              </a>
            </div>

            {/* Social Links & Location */}
            <div className="flex items-center gap-6 pt-4 text-xs font-mono text-slate-400 border-t border-slate-800/80">
              <span className="flex items-center gap-1.5 text-slate-300">
                <Globe className="w-3.5 h-3.5 text-cyan-400" />
                {PERSONAL_INFO.location}
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                  aria-label="Twitter Profile"
                >
                  <TwitterIcon className="w-4 h-4" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Prominent Owner Profile Photo Card & Real Telemetry */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-7 shadow-2xl backdrop-blur-xl space-y-6">
              
              {/* Chrome Top Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  <span className="text-xs font-mono text-slate-400 ml-2">rukundo-profile.rjd</span>
                </div>
                <div className="flex items-center gap-1 text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-800/60">
                  <Activity className="w-3 h-3 animate-pulse" />
                  <span>ONLINE &bull; {liveLatency}ms</span>
                </div>
              </div>

              {/* Owner Portrait Photo with Glow & Verified Frame */}
              <div className="relative group mx-auto max-w-[280px] sm:max-w-[320px]">
                {/* Glow ring behind photo */}
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-tr from-cyan-500 via-indigo-500 to-purple-600 opacity-40 blur-lg group-hover:opacity-70 transition-opacity duration-300" />
                
                <div className="relative rounded-2xl overflow-hidden border-2 border-cyan-400/60 bg-slate-950 shadow-2xl">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt={PERSONAL_INFO.name}
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  
                  {/* Bottom gradient overlay with name and country */}
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-white tracking-tight">
                        {PERSONAL_INFO.name}
                      </span>
                      <span className="text-xs">🇷🇼</span>
                    </div>
                    <div className="text-[11px] font-mono text-cyan-300 flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                      <span>Business Information Technology (BIT)</span>
                    </div>
                  </div>
                </div>

                {/* Floating Verified Chip */}
                <div className="absolute -bottom-3 -right-2 px-3 py-1 rounded-full bg-slate-900 border border-cyan-500/80 text-[10px] font-mono text-cyan-300 shadow-xl flex items-center gap-1.5">
                  <Award className="w-3 h-3 text-amber-400" />
                  <span>DTP Certified</span>
                </div>
              </div>

              {/* Quick Credentials Summary Strip */}
              <div className="grid grid-cols-2 gap-2 pt-2 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-left">
                  <div className="text-[10px] uppercase text-slate-400">Faculty & Campus</div>
                  <div className="text-xs font-semibold text-slate-200 truncate">BIT @ UR Huye Campus</div>
                  <div className="text-[10px] text-cyan-400">A-Level MEG Graduate</div>
                </div>

                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-1 text-left">
                  <div className="text-[10px] uppercase text-slate-400">Core Stack</div>
                  <div className="text-xs font-semibold text-slate-200">React &bull; Next.js &bull; PHP</div>
                  <div className="text-[10px] text-emerald-400">MySQL &bull; Python</div>
                </div>
              </div>

              {/* Bottom CV download trigger */}
              <div className="pt-2 flex items-center justify-between text-xs font-mono text-slate-400 border-t border-slate-800/80">
                <span>Huye, Rwanda</span>
                <button
                  onClick={onOpenResume}
                  className="text-cyan-400 hover:text-cyan-300 underline font-semibold flex items-center gap-1"
                >
                  View Full CV &rarr;
                </button>
              </div>

            </div>
          </div>

        </div>

        {/* Quantifiable Stats Strip */}
        <div className="mt-16 pt-8 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6">
          {PERSONAL_INFO.stats.map((stat, i) => (
            <div key={i} className="text-left space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold font-mono text-white tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-xs font-semibold uppercase tracking-wider text-cyan-400">
                {stat.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {stat.subtext}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
