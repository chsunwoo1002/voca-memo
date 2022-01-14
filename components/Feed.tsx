import React, { useState } from "react";
import { View } from "react-native";
import FlipVocaCard from "./flipCardComponents/FlipVocaCard";
import { FeedProps } from "./types/feed";
import { VocabularyType } from "./types/word";

const Feed: React.FC<FeedProps> = ({ word }) => {
  return (
    <View>
      <FlipVocaCard word={word} />
    </View>
  );
};

export default Feed;
