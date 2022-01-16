import React, { useState } from "react";
import { View, Text } from "react-native";
import FlipVocaCard from "./flipCardComponents/FlipVocaCard";
import { FeedProps } from "./types/feed";
import { VocabularyType } from "./types/word";
import Styles from "./styles/feed";
import FeedButton from "./card/FeedButton";
import ExampleCard from "./card/ExampleCard";

const Feed: React.FC<FeedProps> = ({ word }) => {
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);
  const [isMemorized, setIsMemorized] = useState<Boolean>(false);
  const [examples, setExamples] = useState<Array<string>>([]);

  const feedIcons = {
    like: require("../assets/icons/done_all.png"),
    memorized: require("../assets/icons/done_all.png"),
    play: require("../assets/icons/done_all.png"),
  };

  const switchButtonValue = () => {};
  const playSound = () => {};
  return (
    <View style={Styles.feedContainer}>
      <FlipVocaCard word={word} />
      <View style={Styles.feedButtonsContainer}>
        <FeedButton onPress={playSound} icon={feedIcons.play} />
        <FeedButton onPress={switchButtonValue} icon={feedIcons.like} />
        <FeedButton onPress={switchButtonValue} icon={feedIcons.memorized} />
      </View>
      {examples.length > 0 ? (
        <View style={Styles.feedActiveExampleContainer}>
          {examples.map((example, index) => {
            <ExampleCard key={index} example={example} />;
          })}
        </View>
      ) : (
        <View style={Styles.feedDeactiveExampleContainer}>
          <Text> there is no examples here...please add them</Text>
        </View>
      )}
    </View>
  );
};

export default Feed;
