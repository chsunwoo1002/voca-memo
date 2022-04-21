import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import styles from '../styles/login';
import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';
import { getUserProfileThunk } from '../../../state/user';

const LogIn: React.FC<LogInProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();

  // runtime works, but ts complaint args types --> need to figure out
  const tryLogin = () => {
    dispatch(getUserProfileThunk(username, password));
  };

  return (
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.loginTextInput}
        onChangeText={setUsername}
        value={username}
        placeholder='Email Address'
      />
      <TextInput
        style={styles.loginTextInput}
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TextButton
        buttonStyle={styles.loginButtonView}
        textStyle={styles.loginButtonText}
        title='Login'
        onPress={tryLogin}
      />
      <TextButton
        buttonStyle={styles.loginButtonView}
        textStyle={styles.loginButtonText}
        title='Sign up'
        onPress={switchPage}
      />
    </View>
  );
};
export default LogIn;
