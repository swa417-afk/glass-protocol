'use client';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px]" />

      <nav className="fixed top-0 w-full p-6 flex justify-between items-center backdrop-blur-md border-b border-white/10 z-50">
        <div className="font-bold text-xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">GLASS PROTOCOL</div>
        <button className="bg-white/10 px-4 py-2 rounded-full text-sm hover:bg-white/20 transition">Connect</button>
      </nav>

      <div className="z-10 text-center max-w-3xl mt-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}
          className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
        >
          The <span className="text-cyan-400">Transparent</span> Layer.
        </motion.h1>
        
        <p className="text-gray-400 text-lg mb-8 leading-relaxed">
          Sovereign Substrate Chains. Zero-Knowledge Privacy. Infinite Composability.
        </p>

        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 bg-cyan-600 rounded-full font-bold hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition">
            Start Building
          </button>
          <button className="px-8 py-3 border border-white/10 rounded-full hover:bg-white/5 transition">
            Read Docs
          </button>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-20 w-full max-w-5xl z-10">
        {['Infinite Scale', 'Instant Finality', 'Rust Native'].map((item) => (
          <div key={item} className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
            <h3 className="font-bold text-xl mb-2">{item}</h3>
            <p className="text-gray-500 text-sm">Engineered for the next generation of decentralized finance.</p>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-gray-600 text-sm">
        SierraWarrenDevelopments™️
      </footer>
    </main>
  )
}
