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
      onPanResponderRelease: (evt, gestureState) => {
        if (gestureState.dx > 120) {
          Animated.spring(position, {
            useNativeDriver: true,
            toValue: { x: windowWidth + 100, y: gestureState.dy },
          }).start(() => {
            setCurrentIndex((currentIndex) => currentIndex + 1);
            position.setValue({ x: 0, y: 0 });
          });
        } else if (gestureState.dx < -120) {
          Animated.spring(position, {
            useNativeDriver: true,
            toValue: { x: -windowWidth - 100, y: gestureState.dy },
          }).start(() => {
            setCurrentIndex((currentIndex) => currentIndex + 1);
            position.setValue({ x: 0, y: 0 });
          });
        } else {
          Animated.spring(position, {
            useNativeDriver: true,
            toValue: { x: 0, y: 0 },
            friction: 4,
          }).start();
        }
      },
    })
  ).current;

  const rotateX = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: ["-10deg", "0deg", "10deg"],
      extrapolate: "clamp",
    })
  ).current;

  const likeOpacity = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: [0, 0, 1],
      extrapolate: "clamp",
    })
  ).current;

  const nopeOpacity = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: [1, 0, 0],
      extrapolate: "clamp",
    })
  ).current;
  const nextCardOpacity = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: [1, 0, 1],
      extrapolate: "clamp",
    })
  ).current;
  const nextCardScale = useRef(
    position.x.interpolate({
      inputRange: [-windowWidth / 2, 0, windowWidth / 2],
      outputRange: [1, 0.8, 1],
      extrapolate: "clamp",
    })
  ).current;
  var test = [
    {
      word: "apple1",
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
    },
    {
      word: "apple2",
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
    },
    {
      word: "apple3",
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
    },
    {
      word: "apple4",
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
    },
    {
      word: "apple5",
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
    },
  ];

  return (
    <View nativeID='main-screen' style={styles.entireScreen}>
      {/*<NagivationContainer />*/}
      {test
        .map((item, i) => {
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
                    opacity: likeOpacity,
                    transform: [{ rotate: "-30deg" }],
                    position: "absolute",
                    top: 50,
                    left: 40,
                    zIndex: 1000,
                  }}
                >
                  <Text style={styles.yesText}>Yes</Text>
                </Animated.View>

                <Animated.View
                  style={{
                    opacity: nopeOpacity,
                    transform: [{ rotate: "30deg" }],
                    position: "absolute",
                    top: 50,
                    right: 40,
                    zIndex: 1000,
                  }}
                >
                  <Text style={styles.nopeText}>NOPE</Text>
                </Animated.View>
                <FlipVocaCard wordObj={item} />
              </Animated.View>
            );
          } else {
            return (
              <Animated.View
                key={i}
                style={[
                  styles.testContainer,
                  {
                    opacity: nextCardOpacity,
                    transform: [{ scale: nextCardScale }],
                    padding: 10,
                    position: "absolute",
                  },
                ]}
              >
                <FlipVocaCard wordObj={item} />
              </Animated.View>
            );
          }
        })
        .reverse()}
    </View>
  );
}
