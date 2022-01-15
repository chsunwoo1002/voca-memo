import React, { useState } from "react";
import { View } from "react-native";
import FlipVocaCard from "./flipCardComponents/FlipVocaCard";
import { FeedProps } from "./types/feed";
import { VocabularyType } from "./types/word";
import Styles from "./styles/feed";
import FeedButton from "./card/FeedButton";

const Feed: React.FC<FeedProps> = ({ word }) => {
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);
  const [isMemorized, setIsMemorized] = useState<Boolean>(false);
  const [comments, setComments] = useState<Array<String>>([]);

  const feedIcons = {
    like: require("../assets/icons/done_all.png"),
    memorized: require("../assets/icons/done_all.png"),
  };

  const switchButtonValue = () => {};
  return (
    <View style={Styles.feedContainer}>
      <FlipVocaCard word={word} />
      <View style={Styles.feedButtonsContainer}>
        <FeedButton onPress={switchButtonValue} icon={feedIcons.like} />
        <FeedButton onPress={switchButtonValue} icon={feedIcons.memorized} />
      </View>
      {/** Add comment container */}
    </View>
  );
};

export default Feed;
