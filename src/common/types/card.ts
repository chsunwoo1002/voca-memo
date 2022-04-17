import { StyleProp, ViewStyle, ImageStyle, TextStyle } from "react-native";

export interface IconButtonProps {
  icon?: any;
  onPress: () => void;
  buttonStyle: StyleProp<ViewStyle>;
  buttonIconStyle?: StyleProp<ImageStyle>;
  title?: string;
  titleStyle?: StyleProp<TextStyle>;
}
