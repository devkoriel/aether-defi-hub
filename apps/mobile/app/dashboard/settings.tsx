import { View, Text, ScrollView, TouchableOpacity, Switch } from 'react-native';
import { styled } from 'nativewind';
import { User, Bell, Shield, Moon, Globe, LogOut, ChevronRight, DollarSign } from 'lucide-react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function SettingsScreen() {
  return (
    <StyledView className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <StyledText className="text-3xl font-bold text-white mb-8">Settings</StyledText>

        {/* Profile Card */}
        <StyledView className="bg-gray-900 rounded-3xl p-6 mb-8 border border-white/10 flex-row items-center space-x-4">
          <StyledView className="w-16 h-16 rounded-full bg-cyan-600 items-center justify-center">
            <StyledText className="text-2xl font-bold text-white">K</StyledText>
          </StyledView>
          <StyledView className="flex-1">
            <StyledText className="text-xl font-bold text-white">Koriel</StyledText>
            <StyledText className="text-gray-400">koriel@example.com</StyledText>
            <StyledView className="flex-row mt-2 space-x-2">
              <StyledView className="bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                <StyledText className="text-cyan-400 text-xs">Pro</StyledText>
              </StyledView>
            </StyledView>
          </StyledView>
        </StyledView>

        {/* Settings Groups */}
        <SettingsGroup title="Preferences">
          <SettingsItem icon={Moon} title="Appearance" value="Dark Mode" />
          <SettingsItem icon={Globe} title="Language" value="English (US)" />
          <SettingsItem icon={DollarSign} title="Currency" value="USD ($)" />
        </SettingsGroup>

        <SettingsGroup title="Security & Notifications">
          <SettingsItem icon={Shield} title="Security" value="2FA Enabled" />
          <SettingsItem icon={Bell} title="Notifications" value="On" toggle />
        </SettingsGroup>

        <StyledTouchableOpacity className="w-full py-4 mt-4 bg-red-500/10 rounded-2xl border border-red-500/20 flex-row items-center justify-center space-x-2">
          <LogOut size={20} color="#ef4444" />
          <StyledText className="text-red-500 font-bold">Log Out</StyledText>
        </StyledTouchableOpacity>
      </ScrollView>
    </StyledView>
  );
}

function SettingsGroup({ title, children }: { title: string, children: React.ReactNode }) {
  return (
    <StyledView className="mb-6">
      <StyledText className="text-gray-400 text-sm font-medium uppercase tracking-wider ml-2 mb-2">{title}</StyledText>
      <StyledView className="bg-gray-900 rounded-2xl overflow-hidden border border-white/10">
        {children}
      </StyledView>
    </StyledView>
  );
}

function SettingsItem({ icon: Icon, title, value, toggle }: { icon: any, title: string, value: string, toggle?: boolean }) {
  return (
    <StyledTouchableOpacity className="flex-row items-center justify-between p-4 border-b border-white/5 active:bg-white/5">
      <StyledView className="flex-row items-center space-x-4">
        <StyledView className="w-10 h-10 rounded-xl bg-white/5 items-center justify-center">
          <Icon size={20} color="#d1d5db" />
        </StyledView>
        <StyledText className="text-white font-medium">{title}</StyledText>
      </StyledView>
      <StyledView className="flex-row items-center space-x-2">
        <StyledText className="text-gray-400 text-sm">{value}</StyledText>
        {toggle ? (
          <Switch value={true} trackColor={{ true: '#06b6d4' }} />
        ) : (
          <ChevronRight size={20} color="#6b7280" />
        )}
      </StyledView>
    </StyledTouchableOpacity>
  );
}
