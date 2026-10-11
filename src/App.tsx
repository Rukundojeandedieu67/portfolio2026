import React, { useState, useEffect } from 'react';
import type { ThemeMode } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ArchitectureExplorer } from './components/ArchitectureExplorer';
import { ProjectsSection } from './components/ProjectsSection';
import { TerminalPlayground } from './components/TerminalPlayground';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { EngineeringPhilosophy } from './components/EngineeringPhilosophy';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CommandPalette } from './components/CommandPalette';
import { ResumeModal } from './components/ResumeModal';

export const App: React.FC = () => {
  const [theme, setTheme] = useState<ThemeMode>('dark');
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Keyboard shortcut listener for Ctrl+K / Cmd+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandPaletteOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Compute theme background classes
  const getThemeClass = () => {
    switch (theme) {
      case 'midnight':
        return 'bg-[#070b19] text-slate-100 selection:bg-purple-500 selection:text-white';
      case 'light':
        return 'bg-slate-900 text-slate-100 selection:bg-cyan-500 selection:text-slate-950'; // Styled dark variant to preserve rich code aesthetic
      case 'dark':
      default:
        return 'bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-950';
    }
  };

  return (
    <div className={`min-h-screen ${getThemeClass()} transition-colors duration-300 relative selection:bg-cyan-400 selection:text-black`}>
      {/* Background Subtle Tech Grid */}
      <div className="fixed inset-0 grid-bg opacity-40 pointer-events-none -z-20" />
      
      {/* Floating Header */}
      <Navbar
        theme={theme}
        setTheme={setTheme}
        onOpenCommandPalette={() => setIsCommandPaletteOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero onOpenResume={() => setIsResumeOpen(true)} />
        <ArchitectureExplorer />
        <ProjectsSection />
        <TerminalPlayground />
        <SkillsMatrix />
        <ExperienceTimeline />
        <EngineeringPhilosophy />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Command Palette Modal (Ctrl + K) */}
      <CommandPalette
        isOpen={isCommandPaletteOpen}
        onClose={() => setIsCommandPaletteOpen(false)}
        theme={theme}
        setTheme={setTheme}
        onOpenResume={() => setIsResumeOpen(true)}
      />

      {/* Printable / Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
};

export default App;
