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
              <Link href="/dashboard">
                <button className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium transition-all border border-white/10 backdrop-blur-md">
                  Launch App
                </button>
              </Link>
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
              <Link href="/dashboard" className="w-full sm:w-auto">
                <button className="w-full flex items-center justify-center px-8 py-4 border border-transparent text-base font-medium rounded-full text-black bg-white hover:bg-gray-200 md:text-lg md:px-10 transition-all shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </button>
              </Link>
              <button className="w-full sm:w-auto flex items-center justify-center px-8 py-4 border border-white/20 text-base font-medium rounded-full text-white glass hover:bg-white/10 md:text-lg md:px-10 transition-all">
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
            <div className="relative rounded-2xl glass-card p-4 sm:p-8 max-w-5xl mx-auto border-t border-white/20 transform-style-3d perspective-1000">
              <motion.div 
                whileHover={{ rotateX: 5, rotateY: 5 }}
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
                className="aspect-[16/9] bg-black/80 rounded-xl border border-white/10 shadow-2xl overflow-hidden relative"
              >
                {/* Mock Dashboard UI */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
                <div className="p-6 flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-yellow-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-gray-500 text-xs font-mono">dashboard.aether.finance</div>
                  </div>
                  <div className="flex-1 grid grid-cols-3 gap-6">
                    <div className="col-span-2 space-y-6">
                      <div className="h-32 bg-white/5 rounded-lg animate-pulse" />
                      <div className="h-48 bg-white/5 rounded-lg animate-pulse" />
                    </div>
                    <div className="space-y-6">
                      <div className="h-24 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30" />
                      <div className="h-full bg-white/5 rounded-lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
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

        {/* Pricing Section */}
        <div id="pricing" className="py-24 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 via-cyan-900/10 to-black/0" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                Simple, Transparent Pricing
              </h2>
              <p className="mt-4 text-xl text-gray-400">
                Start for free, upgrade for power.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {['Basic', 'Pro', 'Whale'].map((plan, i) => (
                <div key={plan} className={`relative p-8 rounded-2xl border ${i === 1 ? 'border-cyan-500 bg-cyan-500/5' : 'border-white/10 bg-white/5'} flex flex-col`}>
                  {i === 1 && <div className="absolute top-0 right-0 bg-cyan-500 text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-xl">POPULAR</div>}
                  <h3 className="text-xl font-bold text-white mb-2">{plan}</h3>
                  <div className="text-3xl font-bold text-white mb-6">{i === 0 ? 'Free' : i === 1 ? '$29' : '$99'}<span className="text-sm text-gray-400 font-normal">/mo</span></div>
                  <ul className="space-y-4 mb-8 flex-1">
                    <li className="flex items-center text-gray-300"><Zap className="w-4 h-4 mr-2 text-cyan-500" /> Real-time swaps</li>
                    <li className="flex items-center text-gray-300"><Zap className="w-4 h-4 mr-2 text-cyan-500" /> Portfolio tracking</li>
                    {i > 0 && <li className="flex items-center text-gray-300"><Zap className="w-4 h-4 mr-2 text-cyan-500" /> AI Insights</li>}
                    {i > 1 && <li className="flex items-center text-gray-300"><Zap className="w-4 h-4 mr-2 text-cyan-500" /> Priority Support</li>}
                  </ul>
                  <button className={`w-full py-3 rounded-xl font-bold transition-all ${i === 1 ? 'bg-cyan-500 text-black hover:bg-cyan-400' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                    Choose {plan}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* About Section */}
        <div id="about" className="py-24 bg-black/40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl mb-6">
                  Built by Traders, <br />
                  <span className="text-gradient">Powered by AI</span>
                </h2>
                <p className="text-lg text-gray-400 mb-6">
                  Aether was born from the frustration of managing assets across multiple fragmented chains. We believe DeFi should be as intuitive as a centralized exchange, without compromising on security.
                </p>
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">10+</div>
                    <div className="text-sm text-gray-500">Chains Supported</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-white">$500M+</div>
                    <div className="text-sm text-gray-500">Volume Processed</div>
                  </div>
                </div>
              </div>
              <div className="mt-10 lg:mt-0 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl blur-2xl opacity-20" />
                <div className="relative bg-black rounded-2xl border border-white/10 p-8">
                  <p className="text-gray-300 italic">
                    "Aether has completely transformed how I manage my DeFi portfolio. The AI insights are a game changer."
                  </p>
                  <div className="mt-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gray-700" />
                    <div className="ml-3">
                      <div className="text-white font-medium">Alex Chen</div>
                      <div className="text-gray-500 text-sm">DeFi Power User</div>
                    </div>
                  </div>
                </div>
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
