import React, { useState } from 'react';
import { X, Copy, Check, FileText, Printer, Download, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, EXPERIENCES } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyMarkdownResume = () => {
    const md = `# ${PERSONAL_INFO.name}
**${PERSONAL_INFO.title}**
Email: ${PERSONAL_INFO.email} | Phone: ${PERSONAL_INFO.phone} | Location: ${PERSONAL_INFO.location}
GitHub: ${PERSONAL_INFO.github} | Portfolio: https://portifolio.infinityfree.me/?i=2

## Summary
${PERSONAL_INFO.bio}

## Core Competencies
- Frontend: HTML5 (92%), CSS3 & Animations (88%), JavaScript ES6+ (72%), React & Next.js (55%), Tailwind CSS
- Backend: PHP (78%), MySQL (80%), Laravel, RESTful APIs, Apache / cPanel
- Data Science: Python (68%), Pandas, NumPy, Scikit-learn, Matplotlib (DTP Certified)
- Version Control & Tools: Git & GitHub (82%), phpMyAdmin, VS Code, Browser DevTools

## Professional Experience & Studies
${EXPERIENCES.map((e) => `### ${e.role} — ${e.company} (${e.period})
${e.description}
- ${e.impactMetrics.join('\n- ')}
Technologies: ${e.keyTechnologies.join(', ')}
`).join('\n')}

## Education & Academic Background
- Bachelor of Business Information Technology (BIT) — University of Rwanda, Huye Campus (2023 – Present)
- A-Level Certificate in Mathematics, Economics, and Geography (MEG) — Es Marie Adelaide-Gihara Secondary School (2019 – 2022)
- Ongoing Self-Directed Studies — freeCodeCamp, Coursera, MDN, WorldQuant University

## Verified Certifications
- Teaching Assistant Certificate — School of Excellence
- Data Science Intermediate Certificate — DTP (Data Analysis, Machine Learning, Python)
- Hackathon & Innovation Participation — Rwanda Tech Hub
`;
    navigator.clipboard.writeText(md);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-left">
        
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-950/80">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-cyan-400" />
            <span className="font-bold text-white text-sm sm:text-base">
              Curriculum Vitae &bull; {PERSONAL_INFO.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              target="_blank"
              rel="noreferrer"
              download
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-950/80 border border-cyan-800/80 hover:bg-cyan-900 text-xs font-mono text-cyan-300 transition-colors"
              title="Download Original Resume PDF"
            >
              <Download className="w-3.5 h-3.5 text-cyan-400" />
              <span>Download PDF</span>
            </a>

            <button
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
              title="Print Resume"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>

            <button
              onClick={copyMarkdownResume}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-200 transition-colors"
              title="Copy as Markdown"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-slate-400" />}
              <span>{copied ? 'Copied MD!' : 'Copy MD'}</span>
            </button>

            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body / Printable Resume Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-10 space-y-8 bg-slate-900 text-slate-300 font-sans print:bg-white print:text-black">
          
          {/* Header with Owner Photo */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 border-b border-slate-800 pb-6">
            <img
              src={PERSONAL_INFO.avatarUrl}
              alt={PERSONAL_INFO.name}
              className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl object-cover object-center border-2 border-cyan-400 shadow-xl shrink-0"
            />
            <div className="space-y-1">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </h1>
              <p className="text-cyan-400 font-mono text-xs sm:text-sm font-semibold">
                {PERSONAL_INFO.title}
              </p>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs font-mono text-slate-400 pt-1">
                <span>📍 {PERSONAL_INFO.location}</span>
                <span>📧 {PERSONAL_INFO.email}</span>
                <span>📱 {PERSONAL_INFO.phone}</span>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="underline hover:text-cyan-400 flex items-center gap-1">
                  GitHub <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Executive Summary */}
          <div className="space-y-2">
            <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Profile Summary & Objective
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </div>

          {/* Technical Competencies with Percentages */}
          <div className="space-y-3">
            <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Core Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="font-bold text-cyan-400 block">Frontend Engineering:</span>
                <p className="text-slate-300">HTML5 (92%), CSS3 & Animations (88%), JavaScript ES6+ (72%), React (55%), Next.js, Tailwind CSS, Responsive Web Design.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="font-bold text-indigo-400 block">Backend & Relational DBs:</span>
                <p className="text-slate-300">PHP (78%), MySQL (80%), Laravel, RESTful APIs, Prepared Statements, Session Authentication, phpMyAdmin.</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="font-bold text-purple-400 block">Data Science & Python:</span>
                <p className="text-slate-300">Python 3 (68%), Pandas, NumPy, Scikit-learn, Matplotlib, Exploratory Data Analysis (DTP Certified).</p>
              </div>
              <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-1">
                <span className="font-bold text-pink-400 block">Tools & Hosting:</span>
                <p className="text-slate-300">Git & GitHub (82%), cPanel Hosting, Apache, InfinityFree, VS Code, Browser DevTools.</p>
              </div>
            </div>
          </div>

          {/* Experience & Studies */}
          <div className="space-y-6">
            <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Experience & Academic Practice
            </h2>
            {EXPERIENCES.map((exp) => (
              <div key={exp.id} className="space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                  <div>
                    <span className="font-bold text-white text-sm sm:text-base">{exp.role}</span>
                    <span className="text-cyan-400 font-semibold ml-2">@ {exp.company}</span>
                  </div>
                  <span className="font-mono text-xs text-slate-400">{exp.period}</span>
                </div>
                <p className="text-xs text-slate-300">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-xs text-slate-400">
                  {exp.impactMetrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
                <div className="text-[11px] font-mono text-slate-500">
                  Tech: {exp.keyTechnologies.join(' &bull; ')}
                </div>
              </div>
            ))}
          </div>

          {/* Education & Verified Certifications */}
          <div className="space-y-4 pt-4 border-t border-slate-800">
            <h2 className="text-xs font-mono uppercase text-slate-400 tracking-wider font-bold">
              Education & Verified Certifications
            </h2>
            
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white text-sm sm:text-base">Bachelor of Business Information Technology (BIT)</span>
                  <div className="text-cyan-400 text-xs font-mono">Faculty of Business Information Technology &bull; University of Rwanda, Huye Campus</div>
                </div>
                <span className="font-mono text-xs text-cyan-400">2023 – Present</span>
              </div>

              <div className="flex justify-between items-start">
                <div>
                  <span className="font-bold text-white">A-Level Certificate (MEG: Mathematics, Economics, Geography)</span>
                  <div className="text-slate-400 text-xs">Es Marie Adelaide-Gihara Secondary School — Rwanda</div>
                </div>
                <span className="font-mono text-xs text-slate-400">2019 – 2022</span>
              </div>
            </div>

            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="font-bold text-emerald-400">🎓 Teaching Assistant</div>
                <div className="text-slate-400 text-[11px]">School of Excellence &bull; Verified</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="font-bold text-cyan-400">📊 Data Science Intermediate</div>
                <div className="text-slate-400 text-[11px]">DTP &bull; Python &amp; ML Verified</div>
              </div>
              <div className="p-2.5 rounded-lg bg-slate-950 border border-slate-800">
                <div className="font-bold text-amber-400">🏆 Regional Hackathon</div>
                <div className="text-slate-400 text-[11px]">Rwanda Tech Hub &bull; Innovation</div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
