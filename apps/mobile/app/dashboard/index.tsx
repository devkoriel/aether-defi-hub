import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { Wallet, ArrowUpRight, ArrowDownRight } from 'lucide-react-native';
import { Link } from 'expo-router';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Dashboard() {
  return (
    <StyledView className="flex-1 bg-background pt-12 px-6">
      {/* Header */}
      <StyledView className="flex-row justify-between items-center mb-8">
        <StyledView>
          <StyledText className="text-3xl font-bold text-white">Dashboard</StyledText>
          <StyledText className="text-gray-400 mt-1">Welcome back</StyledText>
        </StyledView>
        <StyledTouchableOpacity className="w-10 h-10 rounded-full bg-white/10 items-center justify-center">
          <Wallet size={20} color="white" />
        </StyledTouchableOpacity>
      </StyledView>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Stats Cards */}
        <StyledView className="space-y-4 mb-8">
          <StatsCard title="Net Worth" value="$12,450.32" change="+2.4%" positive />
          <StyledView className="flex-row gap-4">
            <StatsCard title="Yield" value="$450.21" change="+12.5%" positive half />
            <StatsCard title="Positions" value="4" change="-1" positive={false} half />
          </StyledView>
        </StyledView>

        {/* Assets List */}
        <StyledView className="bg-white/5 rounded-2xl p-4 border border-white/10">
          <StyledText className="text-xl font-bold text-white mb-4">Your Assets</StyledText>
          <StyledView className="space-y-4">
            {[1, 2, 3].map((i) => (
              <StyledView key={i} className="flex-row items-center justify-between p-3 rounded-xl bg-white/5">
                <StyledView className="flex-row items-center gap-4">
                  <StyledView className="w-10 h-10 rounded-full bg-primary/20" />
                  <StyledView>
                    <StyledText className="font-medium text-white">Ethereum</StyledText>
                    <StyledText className="text-sm text-gray-400">ETH</StyledText>
                  </StyledView>
                </StyledView>
                <StyledView className="items-end">
                  <StyledText className="font-medium text-white">1.45 ETH</StyledText>
                  <StyledText className="text-sm text-gray-400">$3,450.21</StyledText>
                </StyledView>
              </StyledView>
            ))}
          </StyledView>
        </StyledView>
      </ScrollView>
    </StyledView>
  );
}

function StatsCard({ title, value, change, positive, half }: { title: string, value: string, change: string, positive: boolean, half?: boolean }) {
  return (
    <StyledView className={`bg-white/5 p-5 rounded-2xl border border-white/10 ${half ? 'flex-1' : 'w-full'}`}>
      <StyledView className="flex-row justify-between items-start mb-2">
        <StyledText className="text-gray-400 text-sm font-medium">{title}</StyledText>
        <StyledView className={`flex-row items-center px-2 py-1 rounded-full ${positive ? "bg-green-400/10" : "bg-red-400/10"}`}>
          {positive ? <ArrowUpRight size={12} color="#4ade80" /> : <ArrowDownRight size={12} color="#f87171" />}
          <StyledText className={`text-xs font-bold ml-1 ${positive ? "text-green-400" : "text-red-400"}`}>{change}</StyledText>
        </StyledView>
      </StyledView>
      <StyledText className="text-2xl font-bold text-white">{value}</StyledText>
    </StyledView>
  );
}
