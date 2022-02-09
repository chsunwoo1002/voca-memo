import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/feed";
import { VocabularyType } from "../types/word";
import IconButton from "./IconButton";

interface WordContainerProps {
  word: VocabularyType;
  onPress: () => void;
}

const WordContainer: React.FC<WordContainerProps> = ({ word, onPress }) => {
  return (
    <View style={Styles.exampleContainer}>
      <View>
        <IconButton></IconButton>
      </View>
      <View>
        <Text>{word.word}</Text>
        <Text>{word.}</Text>

      </View>
    </View>
  );
};

export default WordContainer;
