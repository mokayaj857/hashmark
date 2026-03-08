'use client';

import React, { useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import {
  Zap, Shield, Lock, Leaf, ChevronRight, Check, X,
  Layers, Database, Cpu, Code2, Eye, Brain, Coins,
  TrendingUp, GitBranch, Sparkles, Lightning, Archive
} from 'lucide-react';

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600;700&family=Courier+Prime:wght@400;700&display=swap');
  
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  
  body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #0a0e27 0%, #1a0033 50%, #0f0820 100%);
    color: #e0e0e0;
    overflow-x: hidden;
    min-height: 100vh;
  }

  h1, h2, h3, h4, h5, h6 { font-family: 'Space Grotesk', sans-serif; }

  @keyframes float-up { 0% { transform: translateY(0px); opacity: 0; } 50% { opacity: 1; } 100% { transform: translateY(-20px); opacity: 0; } }
  @keyframes pulse-glow { 0%, 100% { box-shadow: 0 0 20px rgba(147, 51, 234, 0.3); } 50% { box-shadow: 0 0 60px rgba(147, 51, 234, 0.8); } }
  @keyframes scan-line { 0% { top: 0%; } 100% { top: 100%; } }
  @keyframes shimmer { 0% { background-position: -1000px 0; } 100% { background-position: 1000px 0; } }
  @keyframes rotate-3d { 0% { transform: rotateX(0deg) rotateY(0deg); } 100% { transform: rotateX(360deg) rotateY(360deg); } }
  @keyframes neon-flicker { 0%, 100% { opacity: 1; text-shadow: 0 0 10px #00d4ff, 0 0 20px #00d4ff; } 50% { opacity: 0.8; text-shadow: 0 0 20px #00d4ff, 0 0 40px #00d4ff; } }
  @keyframes blob-morph { 0%, 100% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; } 50% { border-radius: 30% 60% 70% 40% / 50% 60% 30% 60%; } }
  @keyframes glow-border { 0%, 100% { border-color: rgba(147, 51, 234, 0.5); } 50% { border-color: rgba(0, 212, 255, 0.8); } }
  @keyframes float-orbit { 0% { transform: translateX(0px) translateY(0px) scale(1); } 25% { transform: translateX(30px) translateY(-30px) scale(1.1); } 50% { transform: translateX(0px) translateY(-60px) scale(1); } 75% { transform: translateX(-30px) translateY(-30px) scale(0.9); } 100% { transform: translateX(0px) translateY(0px) scale(1); } }

  .glass { background: rgba(10, 14, 39, 0.7); backdrop-filter: blur(10px); border: 1px solid rgba(147, 51, 234, 0.2); }
  .glow-text { color: #00d4ff; text-shadow: 0 0 20px #00d4ff, 0 0 40px rgba(147, 51, 234, 0.5); }
  .gradient-text { background: linear-gradient(90deg, #00d4ff, #9333ea, #00d4ff); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
  .accent { color: #9333ea; }

  ::-webkit-scrollbar { width: 10px; }
  ::-webkit-scrollbar-track { background: rgba(147, 51, 234, 0.1); }
  ::-webkit-scrollbar-thumb { background: #9333ea; border-radius: 5px; }
  ::-webkit-scrollbar-thumb:hover { background: #00d4ff; }
`;

export default function HashmarkSolution() {
  const { scrollYProgress } = useScroll();
  const [activeTab, setActiveTab] = useState(0);
  const [expandedFeature, setExpandedFeature] = useState(null);

  const yBg = useTransform(scrollYProgress, [0, 1], [0, 300]);

  return (
    <>
      <style>{styles}</style>
      <div style={{ background: 'linear-gradient(135deg, #0a0e27 0%, #1a0033 50%, #0f0820 100%)', minHeight: '100vh', position: 'relative', overflow: 'hidden' }}>
        
        {/* Animated Background Elements */}
        <motion.div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0, pointerEvents: 'none' }}>
          <motion.div animate={{ blob_morph: 'blob-morph' }} style={{ position: 'absolute', top: '10%', left: '10%', width: '500px', height: '500px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.2), transparent)', borderRadius: '60% 40% 30% 70%', filter: 'blur(80px)', animation: 'blob-morph 8s infinite' }} />
          <motion.div animate={{ blob_morph: 'blob-morph' }} style={{ position: 'absolute', bottom: '10%', right: '10%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(0, 212, 255, 0.15), transparent)', borderRadius: '30% 60% 70% 40%', filter: 'blur(80px)', animation: 'blob-morph 10s infinite 2s' }} />
        </motion.div>

        {/* Navigation */}
        <motion.nav initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.5 }} style={{ position: 'sticky', top: 0, zIndex: 40, backdropFilter: 'blur(10px)', borderBottom: '1px solid rgba(147, 51, 234, 0.2)', padding: '1rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <motion.div whileHover={{ scale: 1.05 }} style={{ fontSize: '1.5rem', fontWeight: 'bold' }} className="gradient-text">
              ⚡ HASHMARK
            </motion.div>
            <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ padding: '0.5rem 1.5rem', background: 'rgba(147, 51, 234, 0.2)', border: '1px solid #9333ea', borderRadius: '8px', color: '#00d4ff', cursor: 'pointer', fontWeight: 'bold' }}>
              Scroll to Top
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section style={{ position: 'relative', zIndex: 10, minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '4rem 2rem', textAlign: 'center' }}>
          <motion.div style={{ y: yBg }} />
          
          <div style={{ maxWidth: '1000px' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <motion.div style={{ fontSize: '4rem', fontWeight: 'bold', marginBottom: '2rem', lineHeight: 1.2 }} className="gradient-text">
                <motion.span animate={{ opacity: [0.5, 1] }} transition={{ duration: 2, repeat: Infinity }}>
                  Stop Chasing Fakes.
                </motion.span>
                <br />
                <motion.span animate={{ textShadow: ['0 0 20px rgba(0,212,255,0.3)', '0 0 60px rgba(147,51,234,0.8)', '0 0 20px rgba(0,212,255,0.3)'] }} transition={{ duration: 3, repeat: Infinity }} style={{ color: '#00d4ff' }}>
                  Prove Reality.
                </motion.span>
              </motion.div>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} style={{ fontSize: '1.25rem', color: '#b0b0b0', marginBottom: '3rem', lineHeight: 1.8 }}>
              Cryptographic proof of origin. Hardware-rooted trust. Immutable ledger on Base blockchain.
              <br />
              <span className="glow-text">Content authenticated the moment it's created.</span>
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', background: 'linear-gradient(90deg, #9333ea, #7c3aed)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Learn More ✨
              </motion.button>
              <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.6)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 2.5rem', background: 'transparent', border: '2px solid #00d4ff', borderRadius: '12px', color: '#00d4ff', fontWeight: 'bold', fontSize: '1rem', cursor: 'pointer' }}>
                Documentation →
              </motion.button>
            </motion.div>
          </div>

          {/* Floating Elements */}
          <motion.div animate={{ float_orbit: 'float-orbit' }} style={{ position: 'absolute', right: '5%', top: '20%', opacity: 0.6, animation: 'float-orbit 6s ease-in-out infinite' }}>
            <motion.div style={{ width: '80px', height: '80px', background: 'radial-gradient(circle, rgba(147, 51, 234, 0.6), transparent)', borderRadius: '50%', border: '2px solid #9333ea', boxShadow: '0 0 30px rgba(147, 51, 234, 0.4)' }} />
          </motion.div>
        </section>

        {/* The Problem vs Solution */}
        <section style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }} className="gradient-text">
              The Paradigm Shift
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '2rem' }}>
              {/* Problem */}
              <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass" style={{ padding: '2.5rem', borderRadius: '16px', borderLeft: '4px solid #ff4444', background: 'rgba(255, 68, 68, 0.05)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#ff6b6b' }}>❌ Traditional Detection</div>
                <ul style={{ listStyle: 'none', gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  {['AI detectors become obsolete weekly', 'Metadata easily stripped', 'Software vs Software arms race', 'No verifiable proof', 'Detection = Guesswork'].map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                      <X style={{ color: '#ff6b6b', width: '20px' }} /> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Solution */}
              <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }} className="glass" style={{ padding: '2.5rem', borderRadius: '16px', borderLeft: '4px solid #00d4ff', background: 'rgba(0, 212, 255, 0.05)' }}>
                <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#00d4ff' }}>✓ Hashmark Protocol</div>
                <ul style={{ listStyle: 'none', gap: '1rem', display: 'flex', flexDirection: 'column' }}>
                  {['Proof at capture time', 'Hardware-rooted trust', 'Cryptographic signatures', 'Immutable on-chain proof', 'Mathematically verified'].map((item, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.1 }} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '1rem' }}>
                      <Check style={{ color: '#00d4ff', width: '20px' }} /> {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* How It Works - Interactive Timeline */}
        <section style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }} className="gradient-text">
              The Proof Chain
            </motion.h2>

            <div style={{ position: 'relative' }}>
              {/* Timeline steps */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '1rem', position: 'relative' }}>
                {[
                  { num: '01', icon: '📸', title: 'Capture', desc: 'Device captures content in real-time' },
                  { num: '02', icon: '🔐', title: 'Hash & Sign', desc: 'Cryptographic signature in TEE' },
                  { num: '03', icon: '⛓️', title: 'Anchor', desc: 'Immutable record on Base' },
                  { num: '04', icon: '✅', title: 'Verify', desc: 'Globally verifiable forever' }
                ].map((step, i) => (
                  <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.15, duration: 0.5 }} className="glass" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', background: 'rgba(147, 51, 234, 0.1)', border: '2px solid rgba(147, 51, 234, 0.3)', animation: `glow-border 3s ease-in-out infinite` }}>
                    <motion.div style={{ fontSize: '3.5rem', marginBottom: '0.5rem' }} animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                      {step.icon}
                    </motion.div>
                    <div style={{ color: '#9333ea', fontSize: '0.85rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>STEP {step.num}</div>
                    <div style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>{step.title}</div>
                    <div style={{ fontSize: '0.85rem', color: '#b0b0b0' }}>{step.desc}</div>
                  </motion.div>
                ))}
              </div>

              {/* Connecting line */}
              <motion.svg style={{ position: 'absolute', top: '60px', left: 0, width: '100%', height: '4px' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.5 }}>
                <motion.line x1="0" y1="0" x2="100%" y2="0" stroke="#9333ea" strokeWidth="2" initial={{ strokeDasharray: 1000 }} whileInView={{ strokeDasharray: 0 }} transition={{ duration: 1.5 }} />
              </motion.svg>
            </div>
          </div>
        </section>

        {/* Core Technology */}
        <section style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', background: 'rgba(0, 0, 0, 0.3)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }} className="gradient-text">
              Tech Stack
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
              {[
                { icon: Shield, title: 'Hardware TEE', desc: 'Secure Enclave / Android TEE - signatures never exported', color: '#00d4ff' },
                { icon: Archive, title: 'Identity Registry', desc: 'DIDs with granular rights & device registration', color: '#9333ea' },
                { icon: Database, title: 'Content Registry', desc: 'Immutable ledger of all proven content', color: '#00d4ff' },
                { icon: GitBranch, title: 'Context Court', desc: 'Decentralized dispute resolution system', color: '#9333ea' },
                { icon: Coins, title: 'Economic Security', desc: 'Deposits, slashing, and incentive alignment', color: '#00d4ff' },
                { icon: Lightning, title: 'Base L2', desc: 'Fast, scalable settlement layer', color: '#9333ea' }
              ].map((tech, i) => (
                <motion.div key={i} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * 0.1 }} onHoverStart={() => setExpandedFeature(i)} onHoverEnd={() => setExpandedFeature(null)} className="glass" style={{ padding: '2rem', borderRadius: '16px', background: expandedFeature === i ? `rgba(${tech.color === '#00d4ff' ? '0, 212, 255' : '147, 51, 234'}, 0.15)` : 'rgba(147, 51, 234, 0.1)', border: `2px solid ${expandedFeature === i ? tech.color : 'rgba(147, 51, 234, 0.3)'}`, cursor: 'pointer', transition: 'all 0.3s', transform: expandedFeature === i ? 'translateY(-10px)' : 'translateY(0)' }}>
                  <motion.div animate={{ rotate: expandedFeature === i ? 360 : 0 }} transition={{ duration: 0.6 }} style={{ fontSize: '2.5rem', marginBottom: '1rem', color: tech.color }}>
                    <tech.icon size={32} />
                  </motion.div>
                  <div style={{ fontSize: '1.2rem', fontWeight: 'bold', marginBottom: '0.5rem', color: tech.color }}>{tech.title}</div>
                  <div style={{ fontSize: '0.9rem', color: '#b0b0b0' }}>{tech.desc}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <motion.h2 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '4rem' }} className="gradient-text">
              Real-World Impact
            </motion.h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
              {[
                { title: '📰 Verified Journalism', impact: 'Prove field media is authentic and unmanipulated' },
                { title: '⚖️ Legal Evidence', impact: 'Court-admissible proof of content integrity' },
                { title: '🎨 Creator Protection', impact: 'Prove human-made art before AI scraping' },
                { title: '🔬 Scientific Data', impact: 'Immutable dataset provenance and integrity' },
                { title: '🏦 Insurance Claims', impact: 'Cryptographic evidence for claim verification' },
                { title: '🌍 OSINT Ops', impact: 'Unimpeachable location & time proof' }
              ].map((useCase, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} className="glass" style={{ padding: '2rem', borderRadius: '16px', background: 'rgba(0, 212, 255, 0.05)', border: '1px solid rgba(0, 212, 255, 0.2)', overflow: 'hidden', position: 'relative' }}>
                  <motion.div animate={{ x: ['-100%', '100%'] }} transition={{ duration: 3, repeat: Infinity }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '2px', background: 'linear-gradient(90deg, transparent, #00d4ff, transparent)' }} />
                  <div style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.75rem' }}>{useCase.title}</div>
                  <div style={{ color: '#b0b0b0' }}>{useCase.impact}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section style={{ position: 'relative', zIndex: 10, padding: '4rem 2rem', textAlign: 'center' }}>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="glass" style={{ maxWidth: '800px', margin: '0 auto', padding: '3rem', borderRadius: '20px', background: 'rgba(147, 51, 234, 0.2)', border: '2px solid #9333ea', boxShadow: '0 0 60px rgba(147, 51, 234, 0.3)' }}>
            <motion.h2 animate={{ textShadow: ['0 0 20px rgba(0,212,255,0.3)', '0 0 60px rgba(147,51,234,0.8)', '0 0 20px rgba(0,212,255,0.3)'] }} transition={{ duration: 3, repeat: Infinity }} style={{ fontSize: '2rem', marginBottom: '1rem' }} className="gradient-text">
              Ready to Prove Reality?
            </motion.h2>
            <p style={{ fontSize: '1.1rem', color: '#b0b0b0', marginBottom: '2rem' }}>
              Join the ledger revolution. Authentication matters. Reality matters.
            </p>
            <motion.button whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(147, 51, 234, 0.6)' }} whileTap={{ scale: 0.95 }} style={{ padding: '1rem 3rem', background: 'linear-gradient(90deg, #9333ea, #7c3aed)', border: 'none', borderRadius: '12px', color: 'white', fontWeight: 'bold', fontSize: '1.1rem', cursor: 'pointer' }}>
              Join Waitlist → Prove Reality
            </motion.button>
          </motion.div>
        </section>

        {/* Footer */}
        <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={{ position: 'relative', zIndex: 10, padding: '3rem 2rem', borderTop: '1px solid rgba(147, 51, 234, 0.2)', textAlign: 'center', color: '#7c7c7c', marginTop: '4rem' }}>
          <p style={{ marginBottom: '1rem' }}>
            © 2024 Hashmark Protocol. Proving reality on Base L2.
          </p>
          <p style={{ fontSize: '0.9rem' }}>
            Built with cryptography. Powered by blockchain. Secured by hardware.
          </p>
        </motion.footer>
      </div>
    </>
  );
}