import React, { useState } from "react";
import { FooterProps } from "./types/footer";
import { View } from "react-native";
import styles from "./styles/footer";
import FooterButton from "./card/Button";

const Footer: React.FC<FooterProps> = () => {
  let footerIcons = {
    favourite: require("../assets/icons/favourite.png"),
    doneAll: require("../assets/icons/done_all.png"),
    language: require("../assets/icons/language.png"),
    shuffle: require("../assets/icons/shuffle.png"),
  };
  return (
    <View style={styles.footerContainer}>
      <FooterButton
        onPress={() => console.log("button1 clicked")}
        title='btn 1'
        icon={footerIcons.favourite}
      />
      <FooterButton
        onPress={() => console.log("button2 clicked")}
        title='btn 2'
        icon={footerIcons.doneAll}
      />
      <FooterButton
        onPress={() => console.log("button3 clicked")}
        title='btn 3'
        icon={footerIcons.language}
      />
      <FooterButton
        onPress={() => console.log("button4 clicked")}
        title='btn 4'
        icon={footerIcons.shuffle}
      />
    </View>
  );
};

export default Footer;
