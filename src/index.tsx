import React from 'react';
import { SafeAreaView } from 'react-native';
import { useSelector } from 'react-redux';

import styles from './components/common/styles/Styles';
import LoginContainer from './components/login';
import ContentContainer from './components';
import { RootState } from './state/reducers';

export default function Root() {
  const { isLoggedin } = useSelector((state: RootState) => ({
    isLoggedin: state.login.user.isLoggedIn,
  }));

  return (
    <SafeAreaView style={styles.safeArea}>
      {!isLoggedin && <LoginContainer />}
      {isLoggedin && <ContentContainer />}
    </SafeAreaView>
  );
}
