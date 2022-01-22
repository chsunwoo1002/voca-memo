import { StyleProp, ViewStyle, ImageStyle } from "react-native";

export interface IconButtonProps {
  icon: any;
  onPress: () => void;
  buttonStyle: StyleProp<ViewStyle>;
  feedButtonIconStyle: StyleProp<ImageStyle>;
}
