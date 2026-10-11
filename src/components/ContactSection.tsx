import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Copy, 
  Check, 
  Clock, 
  Terminal, 
  Globe 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    engagementType: 'Internship / Full-Stack Developer Role',
    timeline: 'Immediate / Next 30 Days',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<any | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [formError, setFormError] = useState('');

  const engagementTypes = [
    'Internship / Full-Stack Developer Role',
    'Freelance Project / Website Development',
    'Community Platform / MVP Build',
    'Scholarship & Academic Research Collaboration',
  ];

  const timelines = [
    'Immediate / Next 30 Days',
    'Next Quarter (1-3 months)',
    'Exploratory / Advisory'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setFormError('Please fill in your name, email, and a brief message.');
      return;
    }

    setFormError('');
    setIsSubmitting(true);

    // Simulate real backend API call (POST /api/v1/contact)
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmittedPayload({
        status: 201,
        message: 'Inquiry successfully dispatched to developer inbox.',
        timestamp: new Date().toISOString(),
        payload: { ...formData },
        deliveryRoute: 'AWS SES -> alex.rivers.dev@example.com',
      });
    }, 750);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Availability */}
          <div className="lg:col-span-5 space-y-8 text-left">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-950/60 border border-cyan-800/60 text-cyan-300 text-xs font-mono">
                <Mail className="w-3.5 h-3.5" />
                INITIATE CONTACT
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Collaborate?
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Internships, freelance, scholarships, or full-stack software development — I am open, eager to learn, and ready to contribute to impactful initiatives.
              </p>
            </div>

            {/* Direct Email & Phone Card */}
            <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800 space-y-4 shadow-md">
              <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                Direct Contact Channels
              </div>
              
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-cyan-300">
                  <span className="truncate">{PERSONAL_INFO.email}</span>
                  <button
                    onClick={copyEmail}
                    className="p-1.5 hover:text-white rounded-lg hover:bg-slate-800 transition-colors ml-2 shrink-0"
                    title="Copy email"
                  >
                    {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                </div>

                <div className="flex items-center justify-between p-3 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs sm:text-sm text-slate-300">
                  <span>📱 {PERSONAL_INFO.phone}</span>
                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="text-xs text-cyan-400 hover:underline"
                  >
                    Call
                  </a>
                </div>
              </div>

              <div className="text-[11px] text-slate-400 font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-cyan-400" />
                <span>Typically responds within a few hours</span>
              </div>
            </div>

            {/* Location & Timezone */}
            <div className="space-y-3 font-mono text-xs text-slate-400">
              <div className="flex items-center gap-2 text-slate-300">
                <Globe className="w-4 h-4 text-indigo-400" />
                <span>Based in Huye, Rwanda 🇷🇼 &bull; Available for Remote &amp; On-Site</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                <span className="text-emerald-400 font-semibold">Available for Internships, Freelance &amp; Full-Time</span>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Form & API Payload Visualizer */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-2xl relative">
              
              {submittedPayload ? (
                /* Success & Inspectable API Response */
                <div className="space-y-6 py-6 animate-in fade-in duration-200">
                  <div className="p-4 rounded-xl bg-emerald-950/40 border border-emerald-800/80 flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-base font-bold text-white">
                        Inquiry Received!
                      </h4>
                      <p className="text-xs sm:text-sm text-slate-300 mt-1">
                        Thank you for reaching out. I have received your request and will follow up shortly.
                      </p>
                    </div>
                  </div>

                  {/* Simulated HTTP Response Inspector */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs font-mono text-slate-400">
                      <span className="flex items-center gap-1.5 text-cyan-400">
                        <Terminal className="w-3.5 h-3.5" /> HTTP 201 Created Telemetry
                      </span>
                      <span>Latency: 72ms</span>
                    </div>
                    <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-xs font-mono text-emerald-400 overflow-x-auto leading-relaxed">
{JSON.stringify(submittedPayload, null, 2)}
                    </pre>
                  </div>

                  <button
                    onClick={() => {
                      setSubmittedPayload(null);
                      setFormData({
                        name: '',
                        email: '',
                        engagementType: 'Staff / Senior Full-Stack Role',
                        timeline: 'Immediate / Next 30 Days',
                        message: '',
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-mono text-xs transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Interactive Form */
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                    <h3 className="text-lg font-bold text-white">
                      Direct Engagement Form
                    </h3>
                    <span className="text-xs font-mono text-slate-400">POST /api/v1/inquiry</span>
                  </div>

                  {formError && (
                    <div className="p-3 rounded-xl bg-rose-950/50 border border-rose-800/80 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  {/* Name & Email */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-slate-300">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Sarah Connor"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors font-mono"
                      />
                    </div>

                    <div className="space-y-1.5 text-left">
                      <label className="text-xs font-mono text-slate-300">Your Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors font-mono"
                      />
                    </div>
                  </div>

                  {/* Engagement Type */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-slate-300">Opportunity Type</label>
                    <select
                      value={formData.engagementType}
                      onChange={(e) => setFormData({ ...formData, engagementType: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/80 transition-colors font-mono"
                    >
                      {engagementTypes.map((type) => (
                        <option key={type} value={type} className="bg-slate-900 text-white">
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Timeline */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-slate-300">Timeline / Start Horizon</label>
                    <select
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white focus:outline-none focus:border-cyan-500/80 transition-colors font-mono"
                    >
                      {timelines.map((time) => (
                        <option key={time} value={time} className="bg-slate-900 text-white">
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5 text-left">
                    <label className="text-xs font-mono text-slate-300">Message / Project Details *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Tell me about your product vision, tech stack requirements, or team goals..."
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-cyan-500/80 transition-colors font-mono"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold text-xs font-mono shadow-lg shadow-cyan-500/20 transition-all disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>DISPATCHING PAYLOAD...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>DISPATCH INQUIRY &bull; POST /api/v1/inquiry</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
