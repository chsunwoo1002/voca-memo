import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../styles/footer";

import { FooterButtonProps } from "../types/footer";

const FooterButton: React.FC<FooterButtonProps> = ({ onPress, title }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.footerButtonCotainer}>
      <Text>{title}</Text>
    </TouchableOpacity>
  );
};

export default FooterButton;
