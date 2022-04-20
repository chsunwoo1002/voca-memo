import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';
import { login, logout, loginAPI } from '../../../state/user/login';

const LogIn: React.FC<LogInProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const tryLogin = () => {
    const data = {
      email: username,
      password,
    };
    dispatch(loginAPI(data));
  };
  return (
    <View>
      <Text>Login page</Text>
      <TextInput
        onChangeText={setUsername}
        value={username}
        placeholder='Email Address'
      />
      <TextInput
        onChangeText={setPassword}
        value={password}
        placeholder='Password'
        secureTextEntry={true}
      />
      <TextButton title='Login' onPress={tryLogin} />
      <TextButton title='Sign up' onPress={switchPage} />
    </View>
  );
};
export default LogIn;
