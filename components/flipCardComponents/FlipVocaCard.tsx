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
  VocaValueProps,
  phoneticType,
  meaning,
  definition,
} from "../types/word";
import styles from "../styles/Styles";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function FlipVocaCard(
  { wordObj }: VocaValueProps,
  innerRef: any
) {
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
      {...innerRef.panHandlers}
      onPress={() => (!!flipRotation ? flipToBack() : flipToFront())}
    >
      <Animated.View
        style={{
          backgroundColor: "white",
          position: "absolute",
          ...flipToBackStyle,
        }}
      >
        <Text>{wordObj.word}</Text>
        <Text>{wordObj.phonetic}</Text>
        <Text>audio needs to be implemented</Text>
      </Animated.View>
      <Animated.View
        style={{
          backgroundColor: "white",
          backfaceVisibility: "hidden",
          ...flipToFrontStyle,
        }}
      >
        <Text>Origin: {wordObj.origin}</Text>
        {wordObj.meanings.map((meaning: meaning, meanIdx: number) => {
          return (
            <View key={meanIdx}>
              <Text>{meaning.partOfSpeech}</Text>
              {meaning.definitions.map(
                (definition: definition, defIdx: number) => {
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
}

/**
 * 
 * return (
    <Animated.View>
      <FlipCard style={styles.card}>
        {/* Face Side }
        <View style={styles.card}>
          <Text>{wordObj.word}</Text>
          <Text>{wordObj.phonetic}</Text>
          <Text>audio needs to be implemented</Text>
        </View>
        {/* Back Side }
        <View style={styles.card}>
          <Text>Origin: {wordObj.origin}</Text>
          {wordObj.meanings.map((meaning: meaning, meanIdx: number) => {
            return (
              <View key={meanIdx}>
                <Text>{meaning.partOfSpeech}</Text>
                {meaning.definitions.map(
                  (definition: definition, defIdx: number) => {
                    return (
                      <View key={defIdx}>
                        <Text>{definition.definition}</Text>
                        {/* Need to implement synonym and antonym }
                      </View>
                    );
                  }
                )}
              </View>
            );
          })}
        </View>
      </FlipCard>
    </Animated.View>
  );
 */
