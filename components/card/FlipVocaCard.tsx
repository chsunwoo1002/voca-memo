import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Animated,
  Pressable,
} from "react-native";
import { useState, useRef } from "react";
import FlipCard from "react-native-flip-card";
import {
  FilpCardProps,
  VocabularyType,
  PhoneticType,
  MeaningType,
  DefinitionType,
} from "../types/word";
import styles from "../styles/feed";

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FlipVocaCard: React.FC<FilpCardProps> = ({ word }) => {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const flipAnimation = useRef(new Animated.Value(0)).current;
  let flipRotation = 0;
  flipAnimation.addListener(({ value }) => (flipRotation = value));
  const flipToFrontStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["0deg", "180deg"],
        }),
      },
    ],
  };
  const flipToBackStyle = {
    transform: [
      {
        rotateY: flipAnimation.interpolate({
          inputRange: [0, 180],
          outputRange: ["180deg", "360deg"],
        }),
      },
    ],
  };
  const flipToFront = () => {
    Animated.timing(flipAnimation, {
      toValue: 180,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  const flipToBack = () => {
    Animated.timing(flipAnimation, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };
  return (
    <AnimatedPressable
      onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
    >
      <Animated.View
        style={{
          backgroundColor: "white",
          position: "absolute",
          ...flipToBackStyle,
        }}
      >
        <Text>{word.wordObj.word}</Text>
        <Text>{word.wordObj.phonetic}</Text>
        <Text>audio needs to be implemented</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: "white",
          backfaceVisibility: "hidden",
          ...flipToFrontStyle,
        }}
      >
        <Text>Origin: {word.wordObj.origin}</Text>
        {word.wordObj.meanings.map((meaning: MeaningType, meanIdx: number) => {
          return (
            <View key={meanIdx}>
              <Text>{meaning.partOfSpeech}</Text>
              {meaning.definitions.map(
                (definition: DefinitionType, defIdx: number) => {
                  return (
                    <View key={defIdx}>
                      <Text>{definition.definition}</Text>
                      {/* Need to implement synonym and antonym */}
                    </View>
                  );
                }
              )}
            </View>
          );
        })}
      </Animated.View>
    </AnimatedPressable>
  );
};

export default FlipVocaCard;
