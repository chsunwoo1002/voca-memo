import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';

import { login } from '../../../state/user/userReducer';
import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';
import { UserState } from '../../../state/user/userStateType';

const LogIn: React.FC<LogInProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const dispatch = useDispatch();
  const tryLogin = () => {
    const payload: UserState = {
      loggedIn: true,
      email: username,
      password: password,
    };
    dispatch(login(payload));
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
