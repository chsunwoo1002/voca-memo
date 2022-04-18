import React, { useRef, useState } from 'react';
import { SafeAreaView } from 'react-native';
import styles from './src/components/common/styles/Styles';

import LoginContainer from './src/components/login';
import ContentContainer from './src/components/ContentContainer';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './src/state';

const store = createStore(rootReducer);

export default function App() {
  const [isLoggedin, setIsLoggedin] = useState<boolean>(false);

  return (
    <SafeAreaView style={styles.safeArea}>
      <Provider store={store}>
        {!isLoggedin && <LoginContainer />}
        {isLoggedin && <ContentContainer />}
      </Provider>
    </SafeAreaView>
  );
}
