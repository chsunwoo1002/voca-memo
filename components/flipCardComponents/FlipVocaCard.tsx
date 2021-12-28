import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import FlipCard from "react-native-flip-card";
import {
  VocaValueProps,
  phoneticType,
  meaning,
  definition,
} from "../../assets/Interfaces";
import styles from "../../assets/Styles";

export default function FlipVocaCard({ wordObj }: VocaValueProps) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <FlipCard style={styles.entireContainer}>
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
