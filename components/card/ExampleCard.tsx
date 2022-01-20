import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/feed";

interface ExampleCardProps {
  example: string;
}

const ExampleCard: React.FC<ExampleCardProps> = ({ example }) => {
  return (
    <View style={Styles.feedExample}>
      <Text style={Styles.feedExampleText}>{example}</Text>
    </View>
  );
};

export default ExampleCard;
