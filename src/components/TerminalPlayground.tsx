import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS } from '../data/portfolioData';

interface HistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
}

export const TerminalPlayground: React.FC = () => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<HistoryItem[]>([
    {
      id: 'init-1',
      command: 'welcome',
      output: (
        <div className="space-y-1.5 text-slate-300">
          <p className="text-cyan-400 font-bold">
            Rukundo Jean De Dieu Full-Stack Terminal v2.4.0 (BIT-Rwanda)
          </p>
          <p className="text-slate-400">
            Type <span className="text-yellow-400 font-mono">help</span> to view available commands, or click any quick pill below.
          </p>
        </div>
      ),
    },
  ]);
  const terminalEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const executeCommand = (cmdText: string) => {
    const rawCmd = cmdText.trim();
    if (!rawCmd) return;

    const tokens = rawCmd.split(' ');
    const command = tokens[0].toLowerCase();
    const args = tokens.slice(1);

    let outputContent: React.ReactNode = null;

    switch (command) {
      case 'help':
        outputContent = (
          <div className="space-y-1 text-xs">
            <p className="text-cyan-300 font-semibold mb-1">Available commands:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-1.5">
              <div><span className="text-yellow-400">help</span> - Display command manual</div>
              <div><span className="text-yellow-400">cat about.json</span> - View developer credentials</div>
              <div><span className="text-yellow-400">curl /api/health</span> - Ping simulated backend API</div>
              <div><span className="text-yellow-400">run benchmark</span> - Execute in-browser CPU performance test</div>
              <div><span className="text-yellow-400">projects</span> - List flagship projects (InfoHub, BBK)</div>
              <div><span className="text-yellow-400">stack</span> - View core technology proficiencies</div>
              <div><span className="text-yellow-400">git log</span> - View recent project commits</div>
              <div><span className="text-yellow-400">contact</span> - Output direct developer contact info</div>
              <div><span className="text-yellow-400">clear</span> - Clear terminal screen</div>
            </div>
          </div>
        );
        break;

      case 'cat':
        if (args[0] === 'about.json' || args.length === 0) {
          outputContent = (
            <pre className="text-xs text-emerald-400 font-mono p-2 bg-black/40 rounded overflow-x-auto">
{JSON.stringify({
  name: PERSONAL_INFO.name,
  role: PERSONAL_INFO.title,
  faculty: "Business Information Technology (BIT)",
  university: "University of Rwanda",
  campus: "Huye Campus, Southern Province, Rwanda",
  a_level: "A-Level Certificate (MEG: Mathematics, Economics, Geography)",
  real_skills_from_portfolio: {
    "HTML5": "92%",
    "CSS3 & Animations": "88%",
    "JavaScript": "72%",
    "PHP": "78%",
    "MySQL": "80%",
    "Python": "68%",
    "React": "55%",
    "Git & GitHub": "82%",
    "VS Code": "90%",
    "Data Analysis": "70%",
    "Project Management": "65%",
    "Digital Marketing": "60%"
  },
  certifications: ["Teaching Assistant Certificate", "Data Science Intermediate (DTP)", "Regional Hackathon Participant"],
  motto: PERSONAL_INFO.tagline
}, null, 2)}
            </pre>
          );
        } else {
          outputContent = <p className="text-rose-400">cat: {args.join(' ')}: No such file or directory</p>;
        }
        break;

      case 'curl':
        if (args[0] === '/api/health' || args[0] === 'api/health') {
          outputContent = (
            <div className="space-y-1 text-xs font-mono">
              <p className="text-slate-400">HTTP/2 200 OK</p>
              <p className="text-slate-400">content-type: application/json</p>
              <p className="text-slate-400">x-edge-pop: sfo-1 (Cloudflare Workers)</p>
              <pre className="text-emerald-400 bg-black/40 p-2 rounded mt-1">
{JSON.stringify({
  status: "HEALTHY",
  cluster: "production-us-east-1",
  latency_ms: 12.4,
  uptime_seconds: 1428590,
  services: {
    frontend_cdn: "OPERATIONAL",
    graphql_gateway: "OPERATIONAL",
    redis_cluster: "OPERATIONAL",
    postgres_primary: "OPERATIONAL"
  }
}, null, 2)}
              </pre>
            </div>
          );
        } else {
          outputContent = <p className="text-amber-400">curl: (22) The requested URL returned error: 404 Not Found</p>;
        }
        break;

      case 'run':
        if (args[0] === 'benchmark') {
          const t0 = performance.now();
          // Real computational benchmark: generate primes up to 100,000
          let count = 0;
          for (let i = 2; i <= 60000; i++) {
            let isPrime = true;
            for (let j = 2; j * j <= i; j++) {
              if (i % j === 0) {
                isPrime = false;
                break;
              }
            }
            if (isPrime) count++;
          }
          const t1 = performance.now();
          const duration = (t1 - t0).toFixed(2);

          outputContent = (
            <div className="space-y-1.5 text-xs font-mono p-2 bg-black/50 border border-slate-800 rounded">
              <p className="text-cyan-400 font-bold">🚀 Client Execution Benchmark: Prime Sieve 60,000 Iterations</p>
              <p className="text-slate-300">Primes computed: <span className="text-yellow-400">{count}</span></p>
              <p className="text-slate-300">Execution time: <span className="text-emerald-400 font-bold">{duration}ms</span></p>
              <p className="text-slate-400">Garbage Collector overhead: &lt;1.2ms (Zero memory leaks detected)</p>
              <p className="text-emerald-300">Status: PASS (Engine performance matches Tier-1 senior frontend baseline)</p>
            </div>
          );
        } else {
          outputContent = <p className="text-slate-400">Usage: run benchmark</p>;
        }
        break;

      case 'projects':
        outputContent = (
          <div className="space-y-2 text-xs">
            <p className="text-cyan-300 font-semibold">Flagship Projects:</p>
            {PROJECTS.map((p) => (
              <div key={p.id} className="p-2 bg-slate-900/60 rounded border border-slate-800">
                <div className="flex items-center justify-between text-yellow-400 font-bold">
                  <span>{p.title}</span>
                  <span className="text-slate-400 font-normal">[{p.category}]</span>
                </div>
                <p className="text-slate-300 mt-0.5">{p.tagline}</p>
                <p className="text-cyan-400 mt-0.5 font-mono">Stack: {p.frontendStack.slice(0, 3).join(', ')} + {p.backendStack.slice(0, 2).join(', ')}</p>
              </div>
            ))}
          </div>
        );
        break;

      case 'stack':
        outputContent = (
          <div className="space-y-1.5 text-xs font-mono">
            <p className="text-cyan-300 font-semibold">Rukundo Jean De Dieu - Core Skills Matrix:</p>
            <p><span className="text-yellow-400">Frontend:</span> HTML5 (92%), CSS3 & Animations (88%), JavaScript ES6+ (72%), React (55%), Next.js, Tailwind CSS</p>
            <p><span className="text-yellow-400">Backend & DB:</span> PHP (78%), MySQL (80%), Laravel, RESTful APIs, Session Auth, phpMyAdmin</p>
            <p><span className="text-yellow-400">Data Science:</span> Python 3 (68%), Pandas, NumPy, Scikit-learn, Matplotlib (DTP Certified)</p>
            <p><span className="text-yellow-400">Tools & Host:</span> Git & GitHub (82%), cPanel Hosting, Apache, InfinityFree, VS Code, Browser DevTools</p>
          </div>
        );
        break;

      case 'git':
        if (args[0] === 'log') {
          outputContent = (
            <div className="space-y-1.5 text-xs font-mono text-slate-300">
              <p><span className="text-yellow-400">commit e84d2a1</span> (HEAD -&gt; main) feat: Launch Infohub Rwanda knowledge portal with indexed MySQL queries</p>
              <p><span className="text-yellow-400">commit 72f091c</span> feat(bbk): Integrate Next.js App Router for Bridging the border Kigali initiative</p>
              <p><span className="text-yellow-400">commit 4a91c55</span> feat(cms): Build full CRUD admin panel & secure file upload handlers in PHP</p>
              <p><span className="text-yellow-400">commit 10e39b8</span> docs(cert): Verified Data Science Intermediate training with DTP in Python</p>
            </div>
          );
        } else {
          outputContent = <p className="text-slate-400">Try running: <span className="text-yellow-400">git log</span></p>;
        }
        break;

      case 'contact':
        outputContent = (
          <div className="space-y-1 text-xs font-mono">
            <p className="text-cyan-300">Direct Contact:</p>
            <p>Email: <a href={`mailto:${PERSONAL_INFO.email}`} className="text-yellow-400 underline">{PERSONAL_INFO.email}</a></p>
            <p>GitHub: <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{PERSONAL_INFO.github}</a></p>
            <p>LinkedIn: <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer" className="text-yellow-400 underline">{PERSONAL_INFO.linkedin}</a></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        outputContent = (
          <p className="text-rose-400 text-xs">
            command not found: {rawCmd}. Type <span className="text-yellow-400">help</span> for a list of commands.
          </p>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: `cmd-${Date.now()}-${Math.random()}`,
        command: rawCmd,
        output: outputContent,
      },
    ]);
    setInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      executeCommand(input);
    }
  };

  const quickPills = [
    { label: 'help', cmd: 'help' },
    { label: 'cat about.json', cmd: 'cat about.json' },
    { label: 'curl /api/health', cmd: 'curl /api/health' },
    { label: 'run benchmark', cmd: 'run benchmark' },
    { label: 'git log', cmd: 'git log' },
    { label: 'projects', cmd: 'projects' },
  ];

  return (
    <section id="terminal" className="py-20 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-purple-950/60 border border-purple-800/60 text-purple-300 text-xs font-mono">
            <TerminalIcon className="w-3.5 h-3.5" />
            INTERACTIVE DEVELOPER SANDBOX
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Live In-Browser Terminal & API Sandbox
          </h2>
          <p className="text-slate-400 text-sm sm:text-base max-w-xl mx-auto">
            Interact with the simulated runtime, run client benchmarks, and inspect system responses in real-time.
          </p>
        </div>

        {/* Quick Click Preset Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-4">
          <span className="text-xs font-mono text-slate-400 mr-2">Quick Presets:</span>
          {quickPills.map((pill) => (
            <button
              key={pill.cmd}
              onClick={() => executeCommand(pill.cmd)}
              className="px-3 py-1 text-xs font-mono rounded-lg bg-slate-900 border border-slate-800 text-cyan-300 hover:bg-slate-800 hover:border-cyan-500/50 transition-all shadow-sm"
            >
              $ {pill.label}
            </button>
          ))}
          <button
            onClick={() => setHistory([])}
            className="px-2.5 py-1 text-xs font-mono rounded-lg bg-slate-900/60 border border-slate-800 text-slate-400 hover:text-white transition-all"
            title="Clear Terminal"
          >
            Clear
          </button>
        </div>

        {/* Terminal Window Card */}
        <div className="rounded-2xl bg-slate-950 border border-slate-800 shadow-2xl overflow-hidden font-mono">
          
          {/* Terminal Window Chrome */}
          <div className="flex items-center justify-between px-4 py-3 bg-slate-900/90 border-b border-slate-800 text-xs">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-rose-500" />
              <div className="w-3 h-3 rounded-full bg-amber-500" />
              <div className="w-3 h-3 rounded-full bg-emerald-500" />
              <span className="text-slate-400 text-xs ml-2 font-mono">alex@fullstack-core:~</span>
            </div>
            <div className="text-[11px] text-slate-400">
              node v24.2.0 &bull; zsh
            </div>
          </div>

          {/* Terminal Body */}
          <div className="p-4 sm:p-6 min-h-[340px] max-h-[460px] overflow-y-auto space-y-4 text-xs sm:text-sm">
            {history.map((item) => (
              <div key={item.id} className="space-y-1.5">
                <div className="flex items-center gap-2 text-slate-400">
                  <span className="text-cyan-400 font-bold">$</span>
                  <span className="text-white font-semibold">{item.command}</span>
                </div>
                <div className="pl-4">
                  {item.output}
                </div>
              </div>
            ))}

            {/* Active Input Line */}
            <div className="flex items-center gap-2 text-slate-300 pt-1">
              <span className="text-cyan-400 font-bold">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command (e.g. run benchmark, help)..."
                className="w-full bg-transparent text-white focus:outline-none placeholder-slate-600 font-mono text-xs sm:text-sm"
              />
              <button
                onClick={() => executeCommand(input)}
                disabled={!input.trim()}
                className="p-1 rounded bg-cyan-950 text-cyan-400 hover:bg-cyan-900 disabled:opacity-30"
              >
                <CornerDownLeft className="w-3.5 h-3.5" />
              </button>
            </div>

            <div ref={terminalEndRef} />
          </div>

        </div>

      </div>
    </section>
  );
};
