import React from "react";
import { View, Text } from "react-native";

interface ExampleCardProps {
  example: string;
}
const ExampleCard: React.FC<ExampleCardProps> = ({ example }) => {
  return (
    <View>
      <Text> {example}</Text>
    </View>
  );
};

export default ExampleCard;
