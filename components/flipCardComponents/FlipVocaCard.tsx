import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useState } from "react";
import FlipCard from "react-native-flip-card";

interface VocaValueProps {
  wordObj: {
    word: string;
    phonetic: string;
    phonetics: Array<phoneticType>;
    origin: string;
    meanings: Array<meaning>;
  };
}

interface phoneticType {
  text: string;
  audio: string;
}

interface meaning {
  partOfSpeech: string;
  definitions: Array<definition>;
}

interface definition {
  definition: string;
  synonym?: Array<string> | never[];
  antonym?: Array<string> | never[];
}
function flip() {}
export default function FlipVocaCard({ wordObj }: VocaValueProps) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  return (
    <FlipCard style={styles.flipcard}>
      {/* Face Side */}
      <View>
        <Text>{wordObj.word}</Text>
        <Text>{wordObj.phonetic}</Text>
        <Text>audio needs to be implemented</Text>
      </View>
      {/* Back Side */}
      <View>
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
                      {/* Need to implement synonyms and antonyms */}
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
  flipcard: {
    width: 300,
    height: 60,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "black",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
