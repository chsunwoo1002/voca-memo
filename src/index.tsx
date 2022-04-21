import React from 'react';
import { SafeAreaView } from 'react-native';

import styles from './components/common/styles/Styles';
import LoginContainer from './components/login';
import ContentContainer from './components';

export default function Root() {
  // const { isLoggedin } = useSelector((state: RootState) => ({
  //   isLoggedin: state.login.user.isLoggedIn,
  // }));
  let isLoggedin = true;
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {!isLoggedin && <LoginContainer />}
      {isLoggedin && <ContentContainer />}
    </SafeAreaView>
  );
}
