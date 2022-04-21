import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import TextButton from '../../common/TextButton';
import { LogInProps } from '../types/auth';
import styles from '../styles/login';

const SignUp: React.FC<LogInProps> = ({ switchPage }) => {
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
    <View style={styles.loginContainer}>
      <TextInput
        style={styles.loginTextInput}
        onChangeText={setFirstName}
        value={firstName}
        placeholder='First Name'
      />
      <TextInput
        style={styles.loginTextInput}
        onChangeText={setLastName}
        value={lastName}
        placeholder='Last Name'
      />
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
      <TextInput
        style={styles.loginTextInput}
        onChangeText={setConfirmPassword}
        value={confirmPassword}
        placeholder='Confirm Password'
        secureTextEntry={true}
      />
      {!isPasswordMatched && <Text> unmatched!</Text>}
      <TextButton
        buttonStyle={styles.loginButtonView}
        textStyle={styles.loginButtonText}
        title='Sign Up'
        onPress={u}
      />
      <TextButton
        buttonStyle={styles.loginButtonView}
        textStyle={styles.switchButtonText}
        title='Go to Login Page'
        onPress={switchPage}
      />
    </View>
  );
};

export default SignUp;
