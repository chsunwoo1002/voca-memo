import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import FlipVocaCard from "./components/flipCardComponents/FlipVocaCard";
import NagivationContainer from "./components/navigation/NavigationContainer";
import styles from "./assets/Styles";
import DismissKeyboard from "./components/DismissKeyboard";
export default function App() {
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
  return (
    <View nativeID='main-screen' style={styles.entireScreen}>
      <NagivationContainer />
      <View style={styles.entireContainer} />

      {/*<FlipVocaCard wordObj={test} />*/}
    </View>
  );
}
