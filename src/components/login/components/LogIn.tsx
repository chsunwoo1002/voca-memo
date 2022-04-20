import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';
import { getUserProfileThunk } from '../../../state/user';
const LogIn: React.FC<LogInProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const tryLogin = () => {
    dispatch(getUserProfileThunk(username, password));
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
