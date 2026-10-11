import React, { useState } from 'react';
import { 
  Layers, 
  Monitor, 
  ShieldCheck, 
  Cpu, 
  Database, 
  ArrowRight, 
  CheckCircle2, 
  Activity,
  Zap,
  RefreshCw
} from 'lucide-react';
import { SYSTEM_ARCHITECTURE_NODES } from '../data/portfolioData';
import type { ArchitectureNode } from '../types';

export const ArchitectureExplorer: React.FC = () => {
  const [selectedNode, setSelectedNode] = useState<ArchitectureNode>(SYSTEM_ARCHITECTURE_NODES[0]);
  const [simulatedPacket, setSimulatedPacket] = useState<number>(0);

  const triggerPacketSimulation = () => {
    setSimulatedPacket(1);
    const timers = [
      setTimeout(() => setSimulatedPacket(2), 600),
      setTimeout(() => setSimulatedPacket(3), 1200),
      setTimeout(() => setSimulatedPacket(4), 1800),
      setTimeout(() => setSimulatedPacket(0), 2600),
    ];
    return () => timers.forEach(clearTimeout);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-6 h-6 text-cyan-400" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-indigo-400" />;
      case 'Cpu':
        return <Cpu className="w-6 h-6 text-purple-400" />;
      case 'Database':
        return <Database className="w-6 h-6 text-pink-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="architecture" className="py-24 bg-slate-950/60 border-t border-b border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
              <Layers className="w-3.5 h-3.5" />
              SYSTEM DESIGN TOPOLOGY
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Production Full-Stack Architecture
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base">
              A bird's-eye view of how I design, scale, and partition distributed web platforms from the browser viewport down to database write logs.
            </p>
          </div>

          <button
            onClick={triggerPacketSimulation}
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-cyan-900/60 font-mono text-xs shadow-md transition-all self-start md:self-auto hover:border-cyan-500/50"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${simulatedPacket > 0 ? 'animate-spin' : ''}`} />
            <span>Simulate Request Pipeline Trace</span>
          </button>
        </div>

        {/* Interactive Architecture Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Interactive Topology Nodes List */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-slate-400 px-1">
              Architecture Layers (Click to inspect)
            </div>

            {SYSTEM_ARCHITECTURE_NODES.map((node, index) => {
              const isSelected = selectedNode.id === node.id;
              const isPacketHere = simulatedPacket === index + 1;
              return (
                <div
                  key={node.id}
                  onClick={() => setSelectedNode(node)}
                  className={`p-4 rounded-2xl cursor-pointer transition-all border relative overflow-hidden ${
                    isSelected
                      ? 'bg-slate-900 border-cyan-500/80 shadow-lg shadow-cyan-500/10'
                      : 'bg-slate-900/40 border-slate-800/80 hover:bg-slate-900/70 hover:border-slate-700'
                  }`}
                >
                  {/* Packet animation indicator */}
                  {isPacketHere && (
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-400 via-indigo-500 to-purple-500 animate-pulse" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3.5">
                      <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-slate-800' : 'bg-slate-950/80 border border-slate-800'}`}>
                        {getIcon(node.icon)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase text-cyan-400 tracking-wider">
                          {node.layer}
                        </span>
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          {node.name}
                        </h3>
                        <p className="text-xs text-slate-400 font-mono">
                          {node.tech}
                        </p>
                      </div>
                    </div>

                    <ArrowRight className={`w-4 h-4 transition-transform ${isSelected ? 'text-cyan-400 translate-x-1' : 'text-slate-600'}`} />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Deep Inspection Panel for Selected Node */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-slate-900 border border-slate-800 p-6 md:p-8 space-y-6 shadow-2xl relative">
              
              {/* Header */}
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-800">
                <div className="space-y-1">
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                    Layer Inspection &bull; {selectedNode.layer}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedNode.name}
                  </h3>
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-slate-950 border border-slate-800 text-xs font-mono text-slate-300">
                  <Activity className="w-3.5 h-3.5 text-cyan-400" />
                  <span>SLA: 99.99%</span>
                </div>
              </div>

              {/* Core Purpose */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Architectural Role & Responsibilities
                </h4>
                <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                  {selectedNode.role}
                </p>
              </div>

              {/* Technologies in Play */}
              <div className="space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Technology Stack & Protocols
                </h4>
                <div className="p-3.5 rounded-xl bg-slate-950/80 border border-slate-800 text-cyan-300 font-mono text-xs sm:text-sm">
                  {selectedNode.tech}
                </div>
              </div>

              {/* Metrics & Performance Target */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                    <Zap className="w-3.5 h-3.5" />
                    <span>Performance Target</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-200 font-mono">
                    {selectedNode.metrics}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800/80 space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-indigo-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Fault Tolerance & Recovery</span>
                  </div>
                  <div className="text-sm font-semibold text-slate-200">
                    {selectedNode.reliability}
                  </div>
                </div>
              </div>

              {/* Engineering Rationale & Guarantees */}
              <div className="pt-2 border-t border-slate-800/80 space-y-2">
                <h4 className="text-xs font-mono uppercase text-slate-400 tracking-wider">
                  Senior Engineering Principles Enforced
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Zero implicit data mutation: End-to-end type validation with contract testing before release.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Telemetry tracing: Every incoming request carries a correlation ID across frontend and microservices.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>Circuit breaker pattern: Automatic fallback when third-party services breach timeout thresholds.</span>
                  </li>
                </ul>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
