import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/feed";

interface ErrorCardProps {
  msg: string;
}

const ErrorMessageContainer: React.FC<ErrorCardProps> = ({ msg }) => {
  return (
    <View style={Styles.exampleContainer}>
      <Text style={Styles.feedExampleText}>{msg}</Text>
    </View>
  );
};

export default ErrorMessageContainer;
