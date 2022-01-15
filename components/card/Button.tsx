import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Styles from "../styles/footer";

import { FooterButtonProps } from "../types/footer";

const FooterButton: React.FC<FooterButtonProps> = ({
  onPress,
  title,
  icon,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.footerButtonCotainer}>
      <Image style={Styles.footerButtonIcon} source={icon} />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FooterButton;
