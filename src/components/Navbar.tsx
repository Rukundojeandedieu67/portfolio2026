import React, { useState, useEffect } from 'react';
import { 
  Terminal, 
  Layers, 
  FolderGit2, 
  Cpu, 
  Briefcase, 
  Mail, 
  Sun, 
  Moon, 
  Compass, 
  FileText, 
  Menu, 
  X,
  Sparkles
} from 'lucide-react';
import type { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  theme,
  setTheme,
  onOpenCommandPalette,
  onOpenResume,
}) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Architecture', href: '#architecture', icon: Layers },
    { name: 'Projects', href: '#projects', icon: FolderGit2 },
    { name: 'Terminal', href: '#terminal', icon: Terminal },
    { name: 'Stack', href: '#stack', icon: Cpu },
    { name: 'Experience', href: '#experience', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Mail },
  ];

  const cycleTheme = () => {
    if (theme === 'dark') setTheme('midnight');
    else if (theme === 'midnight') setTheme('light');
    else setTheme('dark');
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? 'bg-slate-950/85 backdrop-blur-md border-b border-slate-800/80 shadow-lg shadow-black/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Availability Status */}
          <div className="flex items-center gap-4">
            <a href="#" className="flex items-center gap-2.5 group">
              <img
                src={PERSONAL_INFO.avatarUrl}
                alt={PERSONAL_INFO.name}
                className="w-9 h-9 rounded-xl object-cover border-2 border-cyan-400 shadow-md group-hover:scale-105 transition-transform duration-200"
              />
              <div className="flex flex-col">
                <span className="font-semibold text-white tracking-tight text-sm sm:text-base group-hover:text-cyan-400 transition-colors">
                  {PERSONAL_INFO.name}
                </span>
                <span className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </span>
                  Full-Stack Dev &bull; Rwanda 🇷🇼
                </span>
              </div>
            </a>
          </div>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-slate-900/60 border border-slate-800/80 rounded-full px-4 py-1.5 backdrop-blur-sm">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/60 rounded-full transition-all duration-150"
                >
                  <Icon className="w-3.5 h-3.5" />
                  {link.name}
                </a>
              );
            })}
          </nav>

          {/* Quick Actions (Command Palette, Resume, Theme) */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Quick Command Palette Button */}
            <button
              onClick={onOpenCommandPalette}
              aria-label="Open Command Palette"
              className="hidden lg:flex items-center gap-2 px-3 py-1.5 text-xs font-mono text-slate-400 bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:text-slate-200 rounded-lg transition-all"
            >
              <Compass className="w-3.5 h-3.5 text-cyan-400" />
              <span>Search / Commands</span>
              <kbd className="px-1.5 py-0.5 text-[10px] bg-slate-800 text-slate-300 rounded border border-slate-700">
                Ctrl K
              </kbd>
            </button>

            {/* Resume Button */}
            <button
              onClick={onOpenResume}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-cyan-300 bg-cyan-950/40 border border-cyan-800/60 hover:bg-cyan-900/40 rounded-lg transition-all"
            >
              <FileText className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Resume</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={cycleTheme}
              title={`Theme: ${theme}`}
              aria-label="Toggle Theme"
              className="p-2 rounded-lg text-slate-300 hover:text-white bg-slate-900/80 border border-slate-800 hover:border-slate-700 transition-colors"
            >
              {theme === 'dark' ? (
                <Moon className="w-4 h-4 text-cyan-400" />
              ) : theme === 'midnight' ? (
                <Sparkles className="w-4 h-4 text-purple-400" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400" />
              )}
            </button>

            {/* Mobile Hamburger Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-400 hover:text-white rounded-lg bg-slate-900 border border-slate-800"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-slate-800 bg-slate-950/95 rounded-2xl p-4 shadow-2xl backdrop-blur-xl animate-in fade-in duration-200">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {navLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-900/80 text-sm font-medium text-slate-300 hover:text-cyan-400 hover:bg-slate-800/80"
                  >
                    <Icon className="w-4 h-4 text-cyan-400" />
                    {link.name}
                  </a>
                );
              })}
            </div>
            <div className="pt-2 border-t border-slate-800/80 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenCommandPalette();
                }}
                className="w-full flex items-center justify-between p-2.5 text-xs font-mono text-slate-300 bg-slate-900 rounded-xl border border-slate-800"
              >
                <span className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-cyan-400" />
                  Quick Command Launcher
                </span>
                <span className="text-[10px] bg-slate-800 px-2 py-0.5 rounded text-cyan-300">Ctrl+K</span>
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
