'use client';

import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { injected } from 'wagmi/connectors';
import { motion } from 'framer-motion';
import { Wallet, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { clsx } from 'clsx';

export default function DashboardPage() {
  const { address, isConnected } = useAccount();
  const { connect } = useConnect();
  const { disconnect } = useDisconnect();

  if (!isConnected) {
    return (
      <div className="h-[80vh] flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="p-12 rounded-3xl glass-card max-w-lg w-full"
        >
          <div className="w-20 h-20 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-6 text-cyan-400">
            <Wallet className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-white mb-4">Connect Your Wallet</h2>
          <p className="text-gray-400 mb-8">
            Connect your wallet to view your portfolio, track assets, and start trading on Aether.
          </p>
          <button
            onClick={() => connect({ connector: injected() })}
            className="w-full py-4 bg-white text-black font-bold rounded-xl hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
          >
            Connect MetaMask / Injected
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-white">Dashboard</h1>
          <p className="text-gray-400 mt-1">Welcome back, <span className="font-mono text-cyan-400">{address?.slice(0, 6)}...{address?.slice(-4)}</span></p>
        </div>
        <button 
          onClick={() => disconnect()}
          className="px-4 py-2 text-sm font-medium text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg hover:bg-red-400/20 transition-colors"
        >
          Disconnect
        </button>
      </div>

      {/* Portfolio Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatsCard title="Net Worth" value="$12,450.32" change="+2.4%" positive />
        <StatsCard title="Total Yield" value="$450.21" change="+12.5%" positive />
        <StatsCard title="Active Positions" value="4" change="-1" positive={false} />
      </div>

      {/* Assets Table Placeholder */}
      <div className="glass-card rounded-2xl p-6">
        <h3 className="text-xl font-bold text-white mb-6">Your Assets</h3>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors border border-white/5">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-blue-500 to-purple-500" />
                <div>
                  <div className="font-medium text-white">Ethereum</div>
                  <div className="text-sm text-gray-400">ETH</div>
                </div>
              </div>
              <div className="text-right">
                <div className="font-medium text-white">1.45 ETH</div>
                <div className="text-sm text-gray-400">$3,450.21</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatsCard({ title, value, change, positive }: { title: string, value: string, change: string, positive: boolean }) {
  return (
    <div className="glass-card p-6 rounded-2xl">
      <div className="flex justify-between items-start mb-4">
        <div className="text-gray-400 text-sm font-medium">{title}</div>
        <div className={clsx("flex items-center text-xs font-bold px-2 py-1 rounded-full", positive ? "text-green-400 bg-green-400/10" : "text-red-400 bg-red-400/10")}>
          {positive ? <ArrowUpRight className="w-3 h-3 mr-1" /> : <ArrowDownRight className="w-3 h-3 mr-1" />}
          {change}
        </div>
      </div>
      <div className="text-3xl font-bold text-white">{value}</div>
    </div>
  );
}
