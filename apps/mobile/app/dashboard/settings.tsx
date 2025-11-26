import { View, Text } from 'react-native';
import { styled } from 'nativewind';

const StyledView = styled(View);
const StyledText = styled(Text);

export default function Settings() {
  return (
    <StyledView className="flex-1 bg-background items-center justify-center">
      <StyledText className="text-white text-xl">Settings Coming Soon</StyledText>
    </StyledView>
  );
}
