import React, { useState } from "react";
import { FooterProps } from "./types/footer";
import { View } from "react-native";
import styles from "./styles/footer";
import IconButton from "./card/IconButton";

const Footer: React.FC<FooterProps> = () => {
  const footerIcons = {
    favourite: require("../assets/icons/favourite.png"),
    doneAll: require("../assets/icons/done_all.png"),
    language: require("../assets/icons/language.png"),
    shuffle: require("../assets/icons/shuffle.png"),
  };
  return (
    <View style={styles.footerContainer}>
      <IconButton
        onPress={() => console.log("button1 clicked")}
        title='btn 1'
        icon={footerIcons.favourite}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log("button2 clicked")}
        title='btn 2'
        icon={footerIcons.doneAll}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log("button3 clicked")}
        title='btn 3'
        icon={footerIcons.language}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log("button4 clicked")}
        title='btn 4'
        icon={footerIcons.shuffle}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
    </View>
  );
};

export default Footer;
