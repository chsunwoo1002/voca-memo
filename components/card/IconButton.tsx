import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { IconButtonProps } from "../types/card";

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  buttonStyle,
  feedButtonIconStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Image style={feedButtonIconStyle} source={icon} />
    </TouchableOpacity>
  );
};

export default IconButton;
