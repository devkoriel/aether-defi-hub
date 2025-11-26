import { View, Text, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import { styled } from 'nativewind';
import { ArrowDown, Settings, Info } from 'lucide-react-native';
import { useState, useEffect } from 'react';

const StyledView = styled(View);
const StyledText = styled(Text);
const StyledTextInput = styled(TextInput);
const StyledTouchableOpacity = styled(TouchableOpacity);

export default function SwapScreen() {
  const [amount, setAmount] = useState('');
  const [quote, setQuote] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [swapping, setSwapping] = useState(false);

  useEffect(() => {
    if (!amount || isNaN(Number(amount))) {
      setQuote(null);
      return;
    }
    const fetchQuote = async () => {
      setLoading(true);
      await new Promise(resolve => setTimeout(resolve, 600));
      const rate = 3500;
      setQuote((Number(amount) * rate).toFixed(2));
      setLoading(false);
    };
    const debounce = setTimeout(fetchQuote, 500);
    return () => clearTimeout(debounce);
  }, [amount]);

  const handleSwap = async () => {
    setSwapping(true);
    await new Promise(resolve => setTimeout(resolve, 2000));
    setSwapping(false);
    setAmount('');
    setQuote(null);
    alert('Swap Successful!');
  };

  return (
    <StyledView className="flex-1 bg-background pt-12 px-6">
      <StyledView className="flex-row justify-between items-center mb-8">
        <StyledText className="text-2xl font-bold text-white">Swap</StyledText>
        <StyledTouchableOpacity className="p-2 bg-white/10 rounded-full">
          <Settings size={20} color="gray" />
        </StyledTouchableOpacity>
      </StyledView>

      <StyledView className="bg-white/5 p-4 rounded-3xl border border-white/10 relative">
        {/* From Section */}
        <StyledView className="bg-black/40 p-4 rounded-2xl mb-2 border border-white/5">
          <StyledView className="flex-row justify-between mb-2">
            <StyledText className="text-gray-400 text-sm">Sell</StyledText>
            <StyledText className="text-gray-400 text-sm">Bal: 1.45</StyledText>
          </StyledView>
          <StyledView className="flex-row items-center justify-between">
            <StyledTextInput
              value={amount}
              onChangeText={setAmount}
              placeholder="0"
              placeholderTextColor="#525252"
              keyboardType="numeric"
              className="text-3xl font-bold text-white flex-1"
            />
            <TokenBadge symbol="ETH" />
          </StyledView>
        </StyledView>

        {/* Swap Arrow */}
        <StyledView className="items-center -my-4 z-10">
          <StyledView className="bg-[#1a1a1a] p-2 rounded-xl border-4 border-background">
            <ArrowDown size={20} color="gray" />
          </StyledView>
        </StyledView>

        {/* To Section */}
        <StyledView className="bg-black/40 p-4 rounded-2xl mt-2 border border-white/5">
          <StyledView className="flex-row justify-between mb-2">
            <StyledText className="text-gray-400 text-sm">Buy</StyledText>
            <StyledText className="text-gray-400 text-sm">Bal: 4,500</StyledText>
          </StyledView>
          <StyledView className="flex-row items-center justify-between">
            {loading ? (
              <ActivityIndicator color="white" />
            ) : (
              <StyledText className="text-3xl font-bold text-white">{quote || '0'}</StyledText>
            )}
            <TokenBadge symbol="USDC" />
          </StyledView>
        </StyledView>

        {/* Action Button */}
        <StyledTouchableOpacity
          disabled={!amount || !quote || loading || swapping}
          onPress={handleSwap}
          className={`w-full mt-6 py-4 rounded-xl items-center ${!amount ? 'bg-white/10' : 'bg-secondary'}`}
        >
          {swapping ? (
            <ActivityIndicator color="white" />
          ) : (
            <StyledText className={`font-bold text-lg ${!amount ? 'text-gray-500' : 'text-white'}`}>
              {!amount ? 'Enter Amount' : 'Swap'}
            </StyledText>
          )}
        </StyledTouchableOpacity>
      </StyledView>
    </StyledView>
  );
}

function TokenBadge({ symbol }: { symbol: string }) {
  return (
    <StyledView className="flex-row items-center bg-white/10 px-3 py-1.5 rounded-full ml-4">
      <StyledText className="font-bold text-white mr-1">{symbol}</StyledText>
      <ArrowDown size={14} color="gray" />
    </StyledView>
  );
}
