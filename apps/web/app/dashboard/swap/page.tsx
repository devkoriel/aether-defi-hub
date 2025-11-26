'use client';

import { useState, useEffect } from 'react';
import { ArrowDown, Settings, Info, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';

// Mock Token List
const TOKENS = [
  { symbol: 'ETH', name: 'Ethereum', icon: '🔷' },
  { symbol: 'USDC', name: 'USD Coin', icon: '💵' },
  { symbol: 'WBTC', name: 'Wrapped Bitcoin', icon: '₿' },
  { symbol: 'SOL', name: 'Solana', icon: '◎' },
];

export default function SwapPage() {
  const [fromToken, setFromToken] = useState(TOKENS[0]);
  const [toToken, setToToken] = useState(TOKENS[1]);
  const [amount, setAmount] = useState('');
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [swapping, setSwapping] = useState(false);

  // Simulate Quote Fetching
  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setQuote(null);
      return;
    }

    const fetchQuote = async () => {
      setLoading(true);
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 600));
      
      // Mock exchange rate (randomized slightly)
      const rate = fromToken.symbol === 'ETH' ? 3500 : 1/3500; 
      const randomVariance = 1 + (Math.random() * 0.01 - 0.005); // +/- 0.5%
      const calculated = (Number(amount) * rate * randomVariance).toFixed(4);
      
      setQuote(calculated);
      setLoading(false);
    };

    const debounce = setTimeout(fetchQuote, 500);
    return () => clearTimeout(debounce);
  }, [amount, fromToken, toToken]);

  const handleSwap = async () => {
    setSwapping(true);
    // Simulate transaction
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSwapping(false);
    alert(`Successfully swapped ${amount} ${fromToken.symbol} for ${quote} ${toToken.symbol}`);
    setAmount('');
    setQuote(null);
  };

  return (
    <div className="max-w-lg mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-white">Swap</h1>
        <button className="p-2 text-gray-400 hover:text-white hover:bg-white/10 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
      </div>

      <div className="glass-card p-4 rounded-3xl border border-white/10 relative">
        {/* From Section */}
        <div className="bg-black/40 p-4 rounded-2xl mb-2 border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm font-medium">Sell</span>
            <span className="text-gray-400 text-sm">Balance: 1.45</span>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0"
              className="bg-transparent text-3xl font-bold text-white outline-none w-full placeholder-gray-600"
            />
            <TokenSelector selected={fromToken} onSelect={setFromToken} />
          </div>
          <div className="text-gray-500 text-sm mt-2">
            ${amount ? (Number(amount) * 3500).toLocaleString() : '0.00'}
          </div>
        </div>

        {/* Swap Arrow */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <button 
            onClick={() => {
              setFromToken(toToken);
              setToToken(fromToken);
            }}
            className="bg-[#1a1a1a] border-4 border-[#0a0a0a] p-2 rounded-xl text-gray-400 hover:text-cyan-400 hover:scale-110 transition-all"
          >
            <ArrowDown className="w-5 h-5" />
          </button>
        </div>

        {/* To Section */}
        <div className="bg-black/40 p-4 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
          <div className="flex justify-between mb-2">
            <span className="text-gray-400 text-sm font-medium">Buy</span>
            <span className="text-gray-400 text-sm">Balance: 4,500.00</span>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-full">
              {loading ? (
                <div className="h-9 w-32 bg-white/10 animate-pulse rounded-lg" />
              ) : (
                <input
                  type="text"
                  value={quote || ''}
                  readOnly
                  placeholder="0"
                  className="bg-transparent text-3xl font-bold text-white outline-none w-full placeholder-gray-600"
                />
              )}
            </div>
            <TokenSelector selected={toToken} onSelect={setToToken} />
          </div>
          <div className="text-gray-500 text-sm mt-2">
             ${quote ? (Number(quote) * 1).toLocaleString() : '0.00'} <span className="text-xs text-green-500 ml-2">(-0.05%)</span>
          </div>
        </div>

        {/* Info Section */}
        <AnimatePresence>
          {quote && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="mt-4 p-3 bg-white/5 rounded-xl border border-white/5 space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-1">Rate <Info className="w-3 h-3" /></span>
                  <span className="text-white">1 {fromToken.symbol} ≈ {(Number(quote)/Number(amount)).toFixed(4)} {toToken.symbol}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-400 flex items-center gap-1">Network Cost <Info className="w-3 h-3" /></span>
                  <span className="text-white flex items-center gap-1"><span className="text-gray-500 line-through">$4.50</span> <span className="text-green-400">Free</span></span>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Button */}
        <button
          disabled={!amount || !quote || loading || swapping}
          onClick={handleSwap}
          className={clsx(
            "w-full mt-4 py-4 rounded-xl font-bold text-lg transition-all flex items-center justify-center gap-2",
            !amount ? "bg-white/10 text-gray-500 cursor-not-allowed" : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]"
          )}
        >
          {swapping ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Swapping...
            </>
          ) : !amount ? (
            'Enter Amount'
          ) : (
            'Swap'
          )}
        </button>
      </div>
    </div>
  );
}

function TokenSelector({ selected, onSelect }: { selected: any, onSelect: (t: any) => void }) {
  return (
    <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-colors shrink-0">
      <span className="text-lg">{selected.icon}</span>
      <span className="font-bold text-white">{selected.symbol}</span>
      <ArrowDown className="w-4 h-4 text-gray-400" />
    </button>
  );
}
