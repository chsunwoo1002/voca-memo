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
import FeedContainer from "./components/FeedContainer";
import Footer from "./components/Footer";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function App() {
  // let [fontsLoaded, error] = useFonts({
  //   Oswald_200ExtraLight,
  //   Oswald_300Light,
  //   Oswald_400Regular,
  //   Oswald_500Medium,
  //   Oswald_600SemiBold,
  //   Oswald_700Bold,
  // });

  const position = useRef(new Animated.ValueXY()).current;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isNewFeed, setIsNewFeed] = useState(false);

  const [newWord, setNewWord] = useState<VocabularyType>();

  const getWordFromAPI = (newWord: Array<VocabularyType>) => {
    setNewWord(newWord[0]);
  };
  console.log(setNewWord);
  return (
    <SafeAreaView style={styles.safeArea}>
      {/*!fontsLoaded && <AppLoading />*/}
      <NagivationContainer handleNewWord={getWordFromAPI} />
      <FeedContainer word={newWord} />
      <Footer />
    </SafeAreaView>
  );
}
