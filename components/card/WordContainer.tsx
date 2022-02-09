import React from "react";
import { View, Text } from "react-native";
import Styles from "../styles/feed";
import { VocabularyType, ErrorType } from "../types/word";
import IconButton from "./IconButton";

interface WordContainerProps {
  word: VocabularyType;
  onPress: () => void;
}
const wordIcons = {
  back: require("../../assets/icons/back_arrow.png"),
};
const WordContainer: React.FC<WordContainerProps> = ({ word, onPress }) => {
  return (
    <View style={Styles.exampleContainer}>
      <View>
        <IconButton
          onPress={onPress}
          icon={wordIcons.back}
          buttonStyle={Styles.feedButton}
          buttonIconStyle={Styles.feedButtonIcon}
        ></IconButton>
      </View>
      <View>
        <Text>{word.word}</Text>
        <Text>{word.phonetic}</Text>
      </View>
    </View>
  );
};

export default WordContainer;
