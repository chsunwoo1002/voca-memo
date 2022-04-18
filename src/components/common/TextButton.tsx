import React from 'react';
import { Text, Pressable, StyleProp, ViewStyle, TextStyle } from 'react-native';

interface TextButtonProps {
  title: string;
  onPress: () => void;
  buttonStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
}
const TextButton: React.FC<TextButtonProps> = ({
  title,
  onPress,
  buttonStyle,
  textStyle,
}) => {
  return (
    <Pressable style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{title}</Text>
    </Pressable>
  );
};

export default TextButton;
