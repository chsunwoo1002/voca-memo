import React, { useState } from 'react';
import { FooterProps } from './types/footer';
import { View } from 'react-native';
import styles from './styles/footer';
import IconButton from '../common/IconButton';

const Footer: React.FC<FooterProps> = ({
  handleFavoriteWords,
  handleMemorizedWords,
  testAPIf,
}) => {
  const footerIcons = {
    favourite: require('../assets/icons/favourite.png'),
    doneAll: require('../assets/icons/done_all.png'),
    language: require('../assets/icons/language.png'),
    shuffle: require('../assets/icons/shuffle.png'),
  };
  const { APP_BASE_URL } = process.env;

  const getData = async (
    url: string = 'http://192.168.1.64:4444/',
    data = {}
  ) => {
    const u = APP_BASE_URL ? APP_BASE_URL : 'http://192.168.1.64:123213/';
    const res = await fetch(u, {
      method: 'GET',
    })
      .then(async (response) => {
        return await response.json();
      })
      .then((responseJson) => {
        console.log(responseJson);
      })
      .catch((error: string) => {
        console.log(error);
      });
  };

  return (
    <View style={styles.footerContainer}>
      <IconButton
        onPress={getData}
        title='btn 1'
        icon={footerIcons.favourite}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => handleMemorizedWords}
        title='btn 2'
        icon={footerIcons.doneAll}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log('button3 clicked')}
        title='btn 3'
        icon={footerIcons.language}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log('button4 clicked')}
        title='btn 4'
        icon={footerIcons.shuffle}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
    </View>
  );
};

export default Footer;
