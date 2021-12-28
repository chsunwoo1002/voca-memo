import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
} from "react-native";
import FlipVocaCard from "./components/flipCardComponents/FlipVocaCard";
import NagivationContainer from "./components/navigation/NavigationContainer";
import styles from "./assets/Styles";
import DismissKeyboard from "./components/DismissKeyboard";
import React, { useRef, useState } from "react";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  const position = useRef(new Animated.ValueXY()).current;

  const [currentIndex, setCurrentIndex] = useState(0);
  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onPanResponderMove: (evt, gestureState) => {
        position.setValue({ x: gestureState.dx, y: gestureState.dy });
      },
      onPanResponderRelease: (evt, gestureState) => {},
    })
  ).current;
  const rotateX = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    })
  ).current;
  var test = {
    word: "apple",
    phonetic: "ˈap(ə)l",
    phonetics: [
      {
        text: "ˈap(ə)l",
        audio:
          "//ssl.gstatic.com/dictionary/static/sounds/20200429/apple--_gb_1.mp3",
      },
    ],
    origin:
      "Old English æppel, of Germanic origin; related to Dutch appel and German Apfel .",
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "the round fruit of a tree of the rose family, which typically has thin green or red skin and crisp flesh.",
            synonyms: [],
            antonyms: ["1", "2", "3", "4"],
          },
          {
            definition:
              "the tree bearing apples, with hard pale timber that is used in carpentry and to smoke food.",
            synonyms: [],
            antonyms: [],
          },
        ],
      },
    ],
  };

  const Foods = [
    { id: "1" },
    { id: "2" },
    { id: "3" },
    { id: "4" },
    { id: "5" },
  ];

  return (
    <View nativeID='main-screen' style={styles.entireScreen}>
      {/*<NagivationContainer />*/}
      {Foods.map((item, i) => {
        if (i < currentIndex) {
          return null;
        } else if (i === currentIndex) {
          return (
            <Animated.View
              key={i}
              style={[
                styles.testContainer,
                {
                  transform: [
                    { rotate: rotateX },
                    ...position.getTranslateTransform(),
                  ],
                },
              ]}
              {...panResponder.panHandlers}
            >
              <Animated.View
                style={{
                  transform: [{ rotate: "-30deg" }],
                  position: "absolute",
                  top: 50,
                  left: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "green",
                    color: "green",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  Yes
                </Text>
              </Animated.View>
              <Animated.View
                style={{
                  transform: [{ rotate: "30deg" }],
                  position: "absolute",
                  top: 50,
                  right: 40,
                  zIndex: 1000,
                }}
              >
                <Text
                  style={{
                    borderWidth: 1,
                    borderColor: "red",
                    color: "red",
                    fontSize: 32,
                    fontWeight: "800",
                    padding: 10,
                  }}
                >
                  NOPE
                </Text>
              </Animated.View>
              <Text>{item.id}</Text>
            </Animated.View>
          );
        } else {
          return (
            <Animated.View key={i} style={styles.testContainer}>
              <Text>{item.id}</Text>
            </Animated.View>
          );
        }
      }).reverse()}

      {/*<FlipVocaCard wordObj={test} />*/}
    </View>
  );
}
