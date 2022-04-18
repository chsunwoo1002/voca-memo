import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextButton from '../../common/TextButton';
import { SignUpProps } from '../types/auth';

const SignUp: React.FC<SignUpProps> = ({ switchPage }) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [firstName, setFirstName] = useState<string>('');
  const [lastName, setLastName] = useState<string>('');
  const [isPasswordMatched, setIsPasswordMatched] = useState<boolean>(true);

  const u = () => {
    if (password === confirmPassword) {
      // https request to register
      setIsPasswordMatched(true);
    } else {
      setIsPasswordMatched(false);
    }
  };

  return (
    <View>
      <Text>Signup page</Text>
      <TextInput
        onChangeText={setFirstName}
        value={firstName}
        placeholder='First Name'
      />
      <TextInput
        onChangeText={setLastName}
        value={lastName}
        placeholder='Last Name'
      />
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
      <TextInput
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder='Confirm Password'
        secureTextEntry={true}
      />
      {!isPasswordMatched && <Text> unmatched!</Text>}
      <TextButton title='Sign Up' onPress={u} />
      <TextButton title='Go to Login Page' onPress={switchPage} />
    </View>
  );
};

export default SignUp;
