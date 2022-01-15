import React, { useState } from "react";
import { FooterProps } from "./types/footer";
import { View } from "react-native";
import styles from "./styles/footer";
import FooterButton from "./card/Button";

const Footer: React.FC<FooterProps> = () => {
  return (
    <View style={styles.footerContainer}>
      <FooterButton
        onPress={() => console.log("button1 clicked")}
        title='btn 1'
      />
      <FooterButton
        onPress={() => console.log("button2 clicked")}
        title='btn 2'
      />
      <FooterButton
        onPress={() => console.log("button3 clicked")}
        title='btn 3'
      />
      <FooterButton
        onPress={() => console.log("button4 clicked")}
        title='btn 4'
      />
    </View>
  );
};

export default Footer;
