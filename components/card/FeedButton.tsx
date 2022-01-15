import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import Styles from "../styles/feed";

import { FeedButtonProps } from "../types/feed";

const FeedButton: React.FC<FeedButtonProps> = ({ onPress, icon }) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.feedButton}>
      <Image style={Styles.feedButtonIcon} source={icon} />
    </TouchableOpacity>
  );
};

export default FeedButton;
