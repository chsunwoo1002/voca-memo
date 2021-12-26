import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { SearchBar } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";
import styles from "../../assets/Styles";

export default function NavigationContainer() {
  const [search, setSearch] = useState("");
  const [responseJson, setResponseJson] = useState({});

  const updateSearch = (search: string) => {
    setSearch(search);
    console.log(search);
  };

  const getWordFromAPI = () => {
    fetch("https://api.dictionaryapi.dev/api/v2/entries/en_US/" + search)
      .then((response) => {
        return response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
        setResponseJson(responseJson);
      }).catch;
    (error: string) => {
      console.log(error);
    };
  };

  return (
    <View style={styles.navigationContainer}>
      <TextInput
        style={styles.search}
        onChangeText={updateSearch}
        placeholder='search here:)'
        onSubmitEditing={getWordFromAPI}
      />
      <Pressable style={styles.button} onPress={getWordFromAPI}>
        <Text>Search</Text>
      </Pressable>
    </View>
  );
}
