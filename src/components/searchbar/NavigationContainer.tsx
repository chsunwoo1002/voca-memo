import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles/navigation';
import { NavigationProp } from './types/navigation';

const NavigationContainer: React.FC<NavigationProp> = ({ handleNewWord }) => {
  const [search, setSearch] = useState('');
  const [isValid, setIsValid] = useState('false');

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  const getWordFromAPI = async () => {
    await fetch(
      `https://dictionary-api-flask.herokuapp.com/dictionary-api/v1/word?word=${search}&language=en-US`,
      {
        method: 'GET',
      }
    )
      .then(async (response) => {
        return await response.json();
      })
      .then((responseJson) => {
        handleNewWord(responseJson);
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
        clearButtonMode='always'
      />
    </View>
  );
};

export default NavigationContainer;
