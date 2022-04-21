import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  loginContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10%',
  },
  loginTextInput: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    paddingHorizontal: 10,
  },
  loginButtonView: {
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    borderColor: 'gray',
    width: '50%',
    height: 30,
    marginTop: 15,
    borderWidth: 1,
    borderRadius: 10,
  },
  loginButtonText: {
    fontSize: 20,
  },
  switchButtonText: {
    fontSize: 15,
  },
});
