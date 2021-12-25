import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SearchBar, Button } from "react-native-elements";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function NavigationContainer() {
  const [search, setSearch] = useState("");
  const [responseJson, setResponseJson] = useState({});

  const updateSearch = (search: string) => {
    setSearch(search);
    console.log(search);
  };

  const getQuery = () => {
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
    <SafeAreaProvider style={styles.view}>
      <SearchBar
        placeholder='Type Here...'
        onChangeText={updateSearch}
        value={search}
        style={styles.search}
      />
      <Button
        title='Search'
        loading={false}
        loadingProps={{ size: "small", color: "white" }}
        buttonStyle={{
          backgroundColor: "rgba(111, 202, 186, 1)",
          borderRadius: 5,
        }}
        titleStyle={{ fontWeight: "bold", fontSize: 23 }}
        containerStyle={{
          marginHorizontal: 50,
          height: 50,
          width: 200,
          marginVertical: 10,
        }}
        onPress={getQuery}
      />
    </SafeAreaProvider>
  );
}
const styles = StyleSheet.create({
  view: {
    width: 900,
    height: 900,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "red",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  search: {
    width: 900,
    height: 100,
    borderWidth: 5,
    borderStyle: "solid",
    borderColor: "red",
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  button: {
    width: 100,
    height: 100,
  },
});
