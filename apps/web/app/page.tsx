'use client';

import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, Globe, Shield, Zap } from 'lucide-react';
import Link from 'next/link';

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col overflow-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 glass border-b-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold tracking-tighter text-white">
                Aether<span className="text-cyan-400">.</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <Link href="#features" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                <Link href="#pricing" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
                <Link href="#about" className="hover:text-cyan-400 transition-colors px-3 py-2 rounded-md text-sm font-medium">About</Link>
              </div>
            </div>
            <div>
              <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-md">
                Launch App
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex-grow pt-20">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20">
          <motion.div 
            initial="initial"
            animate="animate"
            variants={stagger}
            className="text-center"
          >
            <motion.h1 variants={fadeInUp} className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block">The Future of</span>
              <span className="block text-gradient">Decentralized Finance</span>
            </motion.h1>
            <motion.p variants={fadeInUp} className="mt-6 max-w-lg mx-auto text-xl text-gray-400 sm:max-w-3xl">
              Trade, earn, and manage your assets across all chains with AI-powered insights. 
              Experience the speed of centralized exchanges with the security of DeFi.
            </motion.p>
            <motion.div variants={fadeInUp} className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center gap-4">
              <button className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-200 md:py-4 md:text-lg md:px-10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                Get Started <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="mt-3 w-full flex items-center justify-center px-8 py-3 border border-white/20 text-base font-medium rounded-full text-white glass hover:bg-white/10 md:mt-0 md:py-4 md:text-lg md:px-10 transition-all">
                Read Whitepaper
              </button>
            </motion.div>
          </motion.div>

          {/* Abstract Visual Placeholder */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mt-16 relative"
          >
            <div className="absolute inset-0 flex items-center justify-center filter blur-3xl opacity-30">
              <div className="w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-blob"></div>
              <div className="w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000"></div>
              <div className="w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000"></div>
            </div>
            <div className="relative rounded-2xl glass-card p-4 sm:p-8 max-w-4xl mx-auto border-t border-white/20">
              <div className="aspect-[16/9] bg-black/50 rounded-xl flex items-center justify-center border border-white/5">
                <span className="text-gray-500 font-mono">Interactive 3D Dashboard Preview</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div id="features" className="py-24 bg-black/20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-base text-cyan-400 font-semibold tracking-wide uppercase">Features</h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
                Everything you need to trade smarter
              </p>
            </div>

            <div className="mt-20">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    name: 'AI-Powered Insights',
                    description: 'Get real-time market predictions and sentiment analysis powered by advanced machine learning models.',
                    icon: Zap,
                  },
                  {
                    name: 'Cross-Chain Bridge',
                    description: 'Seamlessly move assets between Ethereum, Solana, and L2s with the lowest fees and slippage.',
                    icon: Globe,
                  },
                  {
                    name: 'Bank-Grade Security',
                    description: 'Non-custodial architecture ensuring you maintain full control of your private keys at all times.',
                    icon: Shield,
                  },
                  {
                    name: 'Portfolio Analytics',
                    description: 'Track your net worth, PnL, and yield farming performance across all protocols in one dashboard.',
                    icon: BarChart2,
                  },
                ].map((feature) => (
                  <div key={feature.name} className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
                    <div className="relative p-6 bg-black rounded-2xl border border-white/10 h-full">
                      <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-cyan-400">
                        <feature.icon className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                      <p className="mt-2 text-base text-gray-400">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold tracking-tighter text-white">
              Aether<span className="text-cyan-400">.</span>
            </div>
            <p className="text-gray-500 text-sm">© 2025 Aether Labs. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
