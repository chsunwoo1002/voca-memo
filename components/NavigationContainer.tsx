import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "./styles/navigation";
import { VocabularyType } from "./types/word";
import { NavigationProp } from "./types/navigation";

const NavigationContainer: React.FC<NavigationProp> = ({ handleNewWord }) => {
  const [search, setSearch] = useState("");
  const [responseJson, setResponseJson] = useState({});

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const getWordFromAPI = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + search)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        setResponseJson(responseJson);
        handleNewWord(responseJson);
      }).catch;
    (error: string) => {
      console.log(error);
    };
  };

  return (
    <View style={styles.searchContainer}>
      <TextInput
        style={styles.search}
        onChangeText={updateSearch}
        placeholder="search here:)"
        inlineImageLeft="search"
        onSubmitEditing={getWordFromAPI}
      />
    </View>
  );
};

export default NavigationContainer;
