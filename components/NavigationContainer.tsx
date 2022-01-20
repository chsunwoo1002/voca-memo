import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles/navigation";
import { VocabularyType, ErrorType } from "./types/word";
import { NavigationProp } from "./types/navigation";

const NavigationContainer: React.FC<NavigationProp> = ({ handleNewWord }) => {
  const [search, setSearch] = useState("");
  const [isValid, setIsValid] = useState("false");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const getWordFromAPI = async () => {
    await fetch(
      "https://api.dictionaryapi.dev/api/v2/entries/en_US/" + search,
      {
        method: "GET",
      }
    )
      .then(async (response) => {
        return await response.json();
      })
      .then((responseJson) => {
        var [responseObj] = responseJson;

        handleNewWord(responseObj);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        onChangeText={updateSearch}
        placeholder='search here:)'
        inlineImageLeft='search'
        onSubmitEditing={getWordFromAPI}
      />
    </View>
  );
};

export default NavigationContainer;
