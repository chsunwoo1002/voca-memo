import React, { useState } from "react";
import { ScrollView } from "react-native";
import Feed from "./Feed";
import { FeedContainerProps } from "./types/feed";
import { VocabularyType } from "./types/word";

const FeedContainer: React.FC<FeedContainerProps> = ({ word }) => {
  const [words, setWords] = useState<Array<VocabularyType>>();

  return (
    <ScrollView>
      {words &&
        words.map((word, index) => {
          return <Feed word={word}></Feed>;
        })}
    </ScrollView>
  );
};

export default FeedContainer;
