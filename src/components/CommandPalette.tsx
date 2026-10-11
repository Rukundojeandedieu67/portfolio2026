import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Layers, 
  FolderGit2, 
  Terminal, 
  Cpu, 
  Briefcase, 
  Mail, 
  FileText, 
  Copy, 
  Check, 
  Sparkles, 
  ArrowRight,
  Code
} from 'lucide-react';
import type { ThemeMode } from '../types';
import { PERSONAL_INFO } from '../data/portfolioData';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
  setTheme: (theme: ThemeMode) => void;
  onOpenResume: () => void;
}

export const CommandPalette: React.FC<CommandPaletteProps> = ({
  isOpen,
  onClose,
  theme,
  setTheme,
  onOpenResume,
}) => {
  const [query, setQuery] = useState('');
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
      setSelectedIndex(0);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else setSelectedIndex(0);
      }
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1200);
  };

  const commands = [
    {
      id: 'nav-arch',
      category: 'Navigation',
      title: 'Jump to System Architecture',
      subtitle: 'Interactive 4-layer fullstack system visualizer',
      icon: Layers,
      action: () => {
        window.location.hash = '#architecture';
        onClose();
      },
    },
    {
      id: 'nav-projects',
      category: 'Navigation',
      title: 'Jump to Featured Projects',
      subtitle: 'Deep architectural breakdowns & performance metrics',
      icon: FolderGit2,
      action: () => {
        window.location.hash = '#projects';
        onClose();
      },
    },
    {
      id: 'nav-terminal',
      category: 'Navigation',
      title: 'Open Interactive CLI Terminal',
      subtitle: 'Run commands, benchmarks, and API tests',
      icon: Terminal,
      action: () => {
        window.location.hash = '#terminal';
        onClose();
      },
    },
    {
      id: 'nav-stack',
      category: 'Navigation',
      title: 'Inspect Tech Stack & Skills Matrix',
      subtitle: 'Frontend, Backend, Distributed Systems, Cloud',
      icon: Cpu,
      action: () => {
        window.location.hash = '#stack';
        onClose();
      },
    },
    {
      id: 'nav-exp',
      category: 'Navigation',
      title: 'View Career Experience & Metrics',
      subtitle: 'Staff & Senior engineering impact history',
      icon: Briefcase,
      action: () => {
        window.location.hash = '#experience';
        onClose();
      },
    },
    {
      id: 'nav-contact',
      category: 'Navigation',
      title: 'Contact & Project Scope Estimator',
      subtitle: 'Direct email and engagement inquiry form',
      icon: Mail,
      action: () => {
        window.location.hash = '#contact';
        onClose();
      },
    },
    {
      id: 'act-resume',
      category: 'Actions',
      title: 'View & Download Resume',
      subtitle: 'Formatted developer curriculum vitae with accomplishments',
      icon: FileText,
      action: () => {
        onClose();
        onOpenResume();
      },
    },
    {
      id: 'act-email',
      category: 'Actions',
      title: copied ? 'Email Copied!' : `Copy Developer Email (${PERSONAL_INFO.email})`,
      subtitle: 'Copy email address to clipboard',
      icon: copied ? Check : Copy,
      action: copyEmail,
    },
    {
      id: 'act-theme',
      category: 'Actions',
      title: `Toggle Theme (Current: ${theme})`,
      subtitle: 'Switch between Obsidian Dark, Midnight Neon, and Light',
      icon: Sparkles,
      action: () => {
        if (theme === 'dark') setTheme('midnight');
        else if (theme === 'midnight') setTheme('light');
        else setTheme('dark');
        onClose();
      },
    },
    {
      id: 'act-github',
      category: 'Social',
      title: 'Open GitHub Profile',
      subtitle: 'Repositories, open-source commits and stars',
      icon: Code,
      action: () => {
        window.open(PERSONAL_INFO.github, '_blank');
        onClose();
      },
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredCommands[selectedIndex]) {
        filteredCommands[selectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-slate-950/80 backdrop-blur-md animate-in fade-in duration-150">
      <div 
        className="fixed inset-0 -z-10" 
        onClick={onClose} 
        aria-hidden="true" 
      />

      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden shadow-cyan-500/10">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-slate-800 bg-slate-950/40">
          <Search className="w-5 h-5 text-cyan-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command, section name, or project..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            onKeyDown={handleKeyDown}
            className="w-full bg-transparent text-sm text-slate-100 placeholder-slate-500 focus:outline-none"
          />
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-slate-800 rounded border border-slate-700">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="max-h-[380px] overflow-y-auto p-2 space-y-1">
          {filteredCommands.length === 0 ? (
            <div className="py-8 text-center text-sm text-slate-400">
              No matching commands or sections found for "{query}".
            </div>
          ) : (
            filteredCommands.map((command, idx) => {
              const Icon = command.icon;
              const isSelected = idx === selectedIndex;
              return (
                <button
                  key={command.id}
                  onClick={command.action}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-gradient-to-r from-cyan-950/80 to-indigo-950/80 border border-cyan-800/60 text-white'
                      : 'text-slate-300 hover:bg-slate-800/60'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`p-2 rounded-lg ${
                        isSelected
                          ? 'bg-cyan-500/20 text-cyan-300'
                          : 'bg-slate-800 text-slate-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="truncate">
                      <div className="text-xs font-semibold flex items-center gap-2">
                        <span>{command.title}</span>
                        <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400">
                          {command.category}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 truncate">
                        {command.subtitle}
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    className={`w-4 h-4 shrink-0 transition-transform ${
                      isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600 opacity-0'
                    }`}
                  />
                </button>
              );
            })
          )}
        </div>

        {/* Keyboard Footer */}
        <div className="px-4 py-2 bg-slate-950/80 border-t border-slate-800/80 flex items-center justify-between text-[11px] font-mono text-slate-400">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↑↓</kbd> Navigate
            </span>
            <span>
              <kbd className="px-1 py-0.5 bg-slate-800 rounded border border-slate-700">↵</kbd> Select
            </span>
          </div>
          <span className="text-cyan-400">Senior Fullstack Portfolio</span>
        </div>
      </div>
    </div>
  );
};
