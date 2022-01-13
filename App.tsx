import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  PanResponder,
  SafeAreaView,
} from "react-native";
import FlipVocaCard from "./components/flipCardComponents/FlipVocaCard";
import NagivationContainer from "./components/navigation/NavigationContainer";
import styles from "./components/styles/Styles";
import DismissKeyboard from "./components/DismissKeyboard";
import React, { useRef, useState } from "react";
import { VocabularyType } from "./components/types/word";
import { SafeAreaProvider } from "react-native-safe-area-context";
import {
  Oswald_200ExtraLight,
  Oswald_300Light,
  Oswald_400Regular,
  Oswald_500Medium,
  Oswald_600SemiBold,
  Oswald_700Bold,
} from "@expo-google-fonts/oswald";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  let [fontsLoaded, error] = useFonts({
    Oswald_200ExtraLight,
    Oswald_300Light,
    Oswald_400Regular,
    Oswald_500Medium,
    Oswald_600SemiBold,
    Oswald_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  const [isNewFeed, setIsNewFeed] = useState(false);
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

  const [words, setWords] = useState<VocabularyType[]>([]);

  const getWordFromAPI = (newWord: VocabularyType) => {
    if (words === undefined) {
      setWords([newWord]);
    } else {
      setWords((words) => [...words, newWord]);
    }
  };
  console.log("main componenet");
  console.log(words);
  return (
    <SafeAreaView style={styles.safeArea}>
      <View nativeID='main-screen' style={styles.entireScreen}>
        <Text style={{ fontFamily: "Oswald_400Regular", fontb }}>
          just checking
        </Text>
        <NagivationContainer handleNewWord={getWordFromAPI} />
        {isNewFeed}
        {words &&
          words
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
                    <FlipVocaCard innerRef={panResponder} wordObj={item} />
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
                    <FlipVocaCard innerRef={panResponder} wordObj={item} />
                  </Animated.View>
                );
              }
            })
            .reverse()}
      </View>
    </SafeAreaView>
  );
}
