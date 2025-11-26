import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { ArrowUpRight, ArrowDownRight, PieChart, Activity, Wallet } from 'lucide-react-native';
import { LinearGradient } from 'expo-linear-gradient';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function PortfolioScreen() {
  return (
    <StyledView className="flex-1 bg-background">
      <ScrollView className="flex-1" contentContainerStyle={{ padding: 20, paddingBottom: 100 }}>
        <StyledText className="text-3xl font-bold text-white mb-6">Portfolio</StyledText>

        {/* Net Worth Card */}
        <StyledView className="bg-gray-900 rounded-3xl p-6 mb-6 border border-white/10">
          <StyledView className="flex-row items-center space-x-2 mb-2">
            <Wallet size={20} color="#9ca3af" />
            <StyledText className="text-gray-400 font-medium">Total Net Worth</StyledText>
          </StyledView>
          <StyledText className="text-4xl font-bold text-white mb-2">$12,450.32</StyledText>
          <StyledView className="flex-row items-center bg-green-500/10 self-start px-3 py-1 rounded-full">
            <ArrowUpRight size={16} color="#4ade80" />
            <StyledText className="text-green-400 font-bold ml-1">+2.4% ($298.12)</StyledText>
          </StyledView>
        </StyledView>

        {/* Allocation */}
        <StyledText className="text-xl font-bold text-white mb-4">Allocation</StyledText>
        <StyledView className="bg-gray-900 rounded-2xl p-4 mb-6 border border-white/10 space-y-4">
          <AllocationRow label="Ethereum" percent={45} color="bg-blue-500" value="$5,602.50" />
          <AllocationRow label="Bitcoin" percent={30} color="bg-orange-500" value="$3,735.00" />
          <AllocationRow label="Solana" percent={15} color="bg-purple-500" value="$1,867.50" />
        </StyledView>

        {/* Recent Activity */}
        <StyledText className="text-xl font-bold text-white mb-4">Recent Activity</StyledText>
        <StyledView className="bg-gray-900 rounded-2xl p-4 border border-white/10 space-y-4">
          {[1, 2, 3].map((i) => (
            <StyledView key={i} className="flex-row items-center justify-between py-2">
              <StyledView className="flex-row items-center space-x-4">
                <StyledView className="w-10 h-10 rounded-full bg-white/5 items-center justify-center">
                  {i % 2 === 0 ? <ArrowDownRight size={20} color="#4ade80" /> : <ArrowUpRight size={20} color="#f87171" />}
                </StyledView>
                <StyledView>
                  <StyledText className="text-white font-medium">{i % 2 === 0 ? 'Received ETH' : 'Sent USDC'}</StyledText>
                  <StyledText className="text-gray-500 text-xs">2 hours ago</StyledText>
                </StyledView>
              </StyledView>
              <StyledView className="items-end">
                <StyledText className={i % 2 === 0 ? "text-green-400 font-medium" : "text-white font-medium"}>
                  {i % 2 === 0 ? '+' : '-'}0.{i}5 ETH
                </StyledText>
                <StyledText className="text-gray-500 text-xs">$12{i}.00</StyledText>
              </StyledView>
            </StyledView>
          ))}
        </StyledView>
      </ScrollView>
    </StyledView>
  );
}

function AllocationRow({ label, percent, color, value }: { label: string, percent: number, color: string, value: string }) {
  return (
    <StyledView>
      <StyledView className="flex-row justify-between mb-1">
        <StyledText className="text-gray-300">{label}</StyledText>
        <StyledText className="text-white font-medium">{value}</StyledText>
      </StyledView>
      <StyledView className="h-2 bg-white/5 rounded-full overflow-hidden">
        <StyledView className={`h-full ${color}`} style={{ width: `${percent}%` }} />
      </StyledView>
    </StyledView>
  );
}
