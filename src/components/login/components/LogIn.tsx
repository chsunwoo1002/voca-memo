import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';

const LogIn: React.FC<LogInProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const u = () => {
    // https request to login
    console.log(username);
    console.log(password);
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
      <TextButton title='Login' onPress={u} />
      <TextButton title='Sign up' onPress={switchPage} />
    </View>
  );
};
export default LogIn;
