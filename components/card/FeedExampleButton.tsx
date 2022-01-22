import React from "react";
import { TouchableOpacity, Text } from "react-native";
import Styles from "../styles/feed";

import { FeedExampleButtonProps } from "../types/feed";

const FeedExampleButton: React.FC<FeedExampleButtonProps> = ({
  onPress,
  numOfExamples,
}) => {
  return (
    <TouchableOpacity onPress={onPress} style={Styles.feedExampleButton}>
      <Text style={Styles.feedExampleButtonText}>
        View all {numOfExamples} examples
      </Text>
    </TouchableOpacity>
  );
};

export default FeedExampleButton;
