import React, { useState } from "react";
import { View, Text, TextInput } from "react-native";
import FlipVocaCard from "./card/FlipVocaCard";
import { FeedProps } from "./types/feed";
import { VocabularyType } from "./types/word";
import Styles from "./styles/feed";
import FeedButton from "./card/FeedButton";
import ExampleCard from "./card/ExampleCard";

const Feed: React.FC<FeedProps> = ({ word }) => {
  const [isFavourite, setIsFavourite] = useState<Boolean>(false);
  const [isMemorized, setIsMemorized] = useState<Boolean>(false);
  const [additionalExample, setAdditionalExample] = useState<string>("");
  const [examples, setExamples] = useState<Array<string>>([
    "apple is apple",
    "banana is banana",
    "cinammon",
    "de",
    "ee",
  ]);

  const feedIcons = {
    like: require("../assets/icons/favourite.png"),
    memorized: require("../assets/icons/done_all.png"),
    play: require("../assets/icons/play.png"),
    pause: require("../assets/icons/pause.png"),
    add: require("../assets/icons/add.png"),
  };

  const switchButtonValue = () => {};
  const playSound = () => {};
  const updateExampleString = (example: string) => {
    setAdditionalExample(example);
  };
  const submitUpdateExample = () => {
    setExamples((prev) => [additionalExample, ...prev]);
  };
  return (
    <View style={Styles.feedContainer}>
      <View style={Styles.feedFlip}></View>
      {/*<FlipVocaCard word={word} />*/}
      <View style={Styles.feedButtonsContainer}>
        <FeedButton onPress={playSound} icon={feedIcons.play} />
        <FeedButton onPress={switchButtonValue} icon={feedIcons.like} />
        <FeedButton onPress={switchButtonValue} icon={feedIcons.memorized} />
      </View>
      {examples.length > 0 ? (
        <View style={Styles.feedActiveExamplesContainer}>
          <ExampleCard example={examples[0]} />
          {/*examples &&
            examples.map((example, index) => {
              return <ExampleCard key={index} example={example} />;
            })*/}
        </View>
      ) : (
        <View style={Styles.feedDeactiveExampleContainer}>
          <Text> there is no examples here...please add them</Text>
        </View>
      )}
      <View style={Styles.feedExampleContainer}>
        <TextInput
          style={Styles.feedExampleInput}
          onChangeText={updateExampleString}
          placeholder='add example here'
          inlineImageLeft='search'
          onSubmitEditing={submitUpdateExample}
        />
        <FeedButton onPress={submitUpdateExample} icon={feedIcons.add} />
      </View>
    </View>
  );
};

export default Feed;
