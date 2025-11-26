'use client';

import { motion } from 'framer-motion';
import { User, Bell, Shield, Moon, Globe, LogOut, ChevronRight } from 'lucide-react';
import { clsx } from 'clsx';
import { useDisconnect } from 'wagmi';

export default function SettingsPage() {
  const { disconnect } = useDisconnect();

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <h1 className="text-3xl font-bold text-white">Settings</h1>

      {/* Profile Section */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass-card p-6 rounded-3xl flex items-center gap-6"
      >
        <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-cyan-500/20">
          K
        </div>
        <div className="flex-1">
          <h2 className="text-xl font-bold text-white">Koriel</h2>
          <p className="text-gray-400">koriel@example.com</p>
          <div className="flex gap-2 mt-2">
            <span className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-md border border-cyan-500/20">Pro Member</span>
            <span className="px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded-md border border-green-500/20">Verified</span>
          </div>
        </div>
        <button className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-xl text-sm font-medium transition-colors">
          Edit Profile
        </button>
      </motion.div>

      {/* Settings Groups */}
      <div className="space-y-6">
        <SettingsGroup title="Preferences">
          <SettingsItem icon={Moon} title="Appearance" value="Dark Mode" />
          <SettingsItem icon={Globe} title="Language" value="English (US)" />
          <SettingsItem icon={DollarSign} title="Currency" value="USD ($)" />
        </SettingsGroup>

        <SettingsGroup title="Security & Notifications">
          <SettingsItem icon={Shield} title="Security" value="2FA Enabled" />
          <SettingsItem icon={Bell} title="Notifications" value="On" toggle />
        </SettingsGroup>

        <div className="pt-4">
          <button 
            onClick={() => disconnect()}
            className="w-full py-4 bg-red-500/10 hover:bg-red-500/20 text-red-500 rounded-2xl font-bold transition-colors border border-red-500/20 flex items-center justify-center gap-2"
          >
            <LogOut className="w-5 h-5" />
            Log Out
          </button>
        </div>
      </div>
    </div>
  );
}

function SettingsGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <div className="space-y-3">
      <h3 className="text-gray-400 text-sm font-medium uppercase tracking-wider ml-2">{title}</h3>
      <div className="glass-card rounded-2xl overflow-hidden divide-y divide-white/5">
        {children}
      </div>
    </div>
  );
}

function SettingsItem({ icon: Icon, title, value, toggle }: { icon: any, title: string, value: string, toggle?: boolean }) {
  return (
    <div className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer group">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-gray-300 group-hover:text-white transition-colors">
          <Icon className="w-5 h-5" />
        </div>
        <span className="text-white font-medium">{title}</span>
      </div>
      <div className="flex items-center gap-3">
        <span className="text-gray-400 text-sm">{value}</span>
        {toggle ? (
          <div className="w-10 h-6 bg-cyan-500 rounded-full relative">
            <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm" />
          </div>
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </div>
    </div>
  );
}

import { DollarSign } from 'lucide-react';
