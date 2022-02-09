import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";

import { IconButtonProps } from "../types/card";

const IconButton: React.FC<IconButtonProps> = ({
  onPress,
  icon,
  title,
  buttonStyle,
  buttonIconStyle,
  titleStyle,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={buttonStyle}>
      {icon && <Image style={buttonIconStyle} source={icon} />}
      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
};

export default IconButton;
