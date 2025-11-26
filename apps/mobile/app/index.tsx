import { View, Text, TouchableOpacity } from 'react-native';
import { styled } from 'nativewind';
import { LinearGradient } from 'expo-linear-gradient'; // Need to install this if I use it, or use View with bg color
import { Link } from 'expo-router';
import { Shield, Zap, Globe } from 'lucide-react-native';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function Home() {
  return (
    <StyledView className="flex-1 bg-background items-center justify-center p-6">
      <StyledView className="items-center mb-12">
        <StyledText className="text-4xl font-bold text-white mb-2">
          Aether<StyledText className="text-secondary">.</StyledText>
        </StyledText>
        <StyledText className="text-gray-400 text-center text-lg">
          The Future of DeFi
        </StyledText>
      </StyledView>

      <StyledView className="w-full space-y-4 mb-12">
        <FeatureRow icon={Zap} title="AI Insights" desc="Real-time predictions" />
        <FeatureRow icon={Globe} title="Cross-Chain" desc="Swap anywhere" />
        <FeatureRow icon={Shield} title="Secure" desc="Non-custodial" />
      </StyledView>

      <Link href="/dashboard" asChild>
        <StyledTouchableOpacity className="w-full bg-white py-4 rounded-full items-center active:opacity-80">
          <StyledText className="text-black font-bold text-lg">Get Started</StyledText>
        </StyledTouchableOpacity>
      </Link>
      
      <StyledTouchableOpacity className="w-full mt-4 py-4 rounded-full items-center border border-white/20 active:bg-white/10">
        <StyledText className="text-white font-medium text-lg">Connect Wallet</StyledText>
      </StyledTouchableOpacity>
    </StyledView>
  );
}

function FeatureRow({ icon: Icon, title, desc }: { icon: any, title: string, desc: string }) {
  return (
    <StyledView className="flex-row items-center bg-white/5 p-4 rounded-xl border border-white/10">
      <StyledView className="w-10 h-10 rounded-full bg-secondary/20 items-center justify-center mr-4">
        <Icon size={20} color="#06b6d4" />
      </StyledView>
      <StyledView>
        <StyledText className="text-white font-bold">{title}</StyledText>
        <StyledText className="text-gray-400 text-sm">{desc}</StyledText>
      </StyledView>
    </StyledView>
  );
}
