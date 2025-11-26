'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowDownRight, PieChart, Activity, Wallet, DollarSign } from 'lucide-react';
import { clsx } from 'clsx';

export default function PortfolioPage() {
  return (
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Portfolio</h1>
        <div className="flex gap-2">
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
            1D
          </button>
          <button className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg text-sm font-medium transition-colors border border-cyan-500/20">
            1W
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
            1M
          </button>
          <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg text-sm font-medium transition-colors">
            1Y
          </button>
        </div>
      </div>

      {/* Main Chart Area */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          {/* Net Worth Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-card p-8 rounded-3xl"
          >
            <div className="flex items-center gap-2 text-gray-400 mb-2">
              <Wallet className="w-5 h-5" />
              <span className="font-medium">Total Net Worth</span>
            </div>
            <div className="flex items-baseline gap-4">
              <h2 className="text-5xl font-bold text-white">$12,450.32</h2>
              <div className="flex items-center text-green-400 bg-green-400/10 px-3 py-1 rounded-full text-sm font-bold">
                <ArrowUpRight className="w-4 h-4 mr-1" />
                +2.4% ($298.12)
              </div>
            </div>
            
            {/* Mock Chart Visual */}
            <div className="mt-8 h-64 w-full bg-gradient-to-b from-cyan-500/10 to-transparent rounded-xl border border-cyan-500/20 relative overflow-hidden group">
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/40 backdrop-blur-sm">
                <span className="text-white font-medium">Interactive Chart Placeholder</span>
              </div>
              {/* Simple SVG Line for visual effect */}
              <svg className="w-full h-full" preserveAspectRatio="none">
                <path d="M0,200 C100,150 200,250 300,100 S500,150 600,50 L600,300 L0,300 Z" fill="url(#gradient)" opacity="0.4" />
                <path d="M0,200 C100,150 200,250 300,100 S500,150 600,50" fill="none" stroke="#06b6d4" strokeWidth="3" />
                <defs>
                  <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#06b6d4" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </motion.div>

          {/* Asset Allocation */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <PieChart className="w-5 h-5 text-purple-400" />
                Allocation
              </h3>
              <div className="space-y-4">
                <AllocationRow label="Ethereum" percent={45} color="bg-blue-500" value="$5,602.50" />
                <AllocationRow label="Bitcoin" percent={30} color="bg-orange-500" value="$3,735.00" />
                <AllocationRow label="Solana" percent={15} color="bg-purple-500" value="$1,867.50" />
                <AllocationRow label="USDC" percent={10} color="bg-green-500" value="$1,245.32" />
              </div>
            </div>

            <div className="glass-card p-6 rounded-2xl">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Activity className="w-5 h-5 text-pink-400" />
                Performance
              </h3>
              <div className="space-y-4">
                <PerformanceRow label="Best Performer" value="SOL" change="+12.5%" positive />
                <PerformanceRow label="Worst Performer" value="BTC" change="-1.2%" positive={false} />
                <PerformanceRow label="Yield Earned" value="$45.20" change="+0.5%" positive />
                <PerformanceRow label="Gas Spent" value="$12.40" change="" positive={false} neutral />
              </div>
            </div>
          </div>
        </div>

        {/* Recent Activity Sidebar */}
        <div className="glass-card p-6 rounded-3xl h-fit">
          <h3 className="text-xl font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors border border-white/5">
                  {i % 2 === 0 ? <ArrowDownRight className="w-5 h-5 text-green-400" /> : <ArrowUpRight className="w-5 h-5 text-red-400" />}
                </div>
                <div className="flex-1">
                  <div className="text-white font-medium">{i % 2 === 0 ? 'Received ETH' : 'Sent USDC'}</div>
                  <div className="text-xs text-gray-500">2 hours ago</div>
                </div>
                <div className="text-right">
                  <div className={clsx("font-medium", i % 2 === 0 ? "text-green-400" : "text-white")}>
                    {i % 2 === 0 ? '+' : '-'}0.{i}5 ETH
                  </div>
                  <div className="text-xs text-gray-500">$12{i}.00</div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 bg-white/5 hover:bg-white/10 text-white rounded-xl text-sm font-medium transition-colors border border-white/5">
            View All History
          </button>
        </div>
      </div>
    </div>
  );
}

function AllocationRow({ label, percent, color, value }: { label: string, percent: number, color: string, value: string }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1">
        <span className="text-gray-300">{label}</span>
        <span className="text-white font-medium">{value}</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <div className={`h-full ${color}`} style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}

function PerformanceRow({ label, value, change, positive, neutral }: { label: string, value: string, change: string, positive: boolean, neutral?: boolean }) {
  return (
    <div className="flex justify-between items-center p-3 rounded-xl bg-white/5 border border-white/5">
      <span className="text-gray-400 text-sm">{label}</span>
      <div className="text-right">
        <div className="text-white font-bold">{value}</div>
        {!neutral && (
          <div className={clsx("text-xs", positive ? "text-green-400" : "text-red-400")}>
            {change}
          </div>
        )}
      </div>
    </div>
  );
}
