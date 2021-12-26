import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import FlipCard from "react-native-flip-card";
import {
  VocaValueProps,
  phoneticType,
  meaning,
  definition,
} from "../../assets/Interfaces";

export default function FlipVocaCard({ wordObj }: VocaValueProps) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <FlipCard style={styles.flipCard}>
      {/* Face Side */}
      <View style={styles.card}>
        <Text>{wordObj.word}</Text>
        <Text>{wordObj.phonetic}</Text>
        <Text>audio needs to be implemented</Text>
      </View>
      {/* Back Side */}
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
                      {/* Need to implement synonym and antonym */}
                    </View>
                  );
                }
              )}
            </View>
          );
        })}
      </View>
    </FlipCard>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "50%",
    height: "50%",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "red",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  flipCard: {
    width: 900,
    height: "100%",
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
