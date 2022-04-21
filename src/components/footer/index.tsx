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
    favourite: require('../../../assets/icons/favourite.png'),
    doneAll: require('../../../assets/icons/done_all.png'),
    language: require('../../../assets/icons/language.png'),
    shuffle: require('../../../assets/icons/shuffle.png'),
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
        title='favourite'
        icon={footerIcons.favourite}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => handleMemorizedWords}
        title='memo'
        icon={footerIcons.doneAll}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log('button3 clicked')}
        title='For you'
        icon={footerIcons.language}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
      <IconButton
        onPress={() => console.log('button4 clicked')}
        title='Setting'
        icon={footerIcons.shuffle}
        buttonStyle={styles.footerButtonCotainer}
        titleStyle={styles.footerButtonText}
        buttonIconStyle={styles.footerButtonIcon}
      />
    </View>
  );
};

export default Footer;
