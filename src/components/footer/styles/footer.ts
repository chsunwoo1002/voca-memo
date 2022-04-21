import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  footerContainer: {
    width: '100%',
    height: '8%',
    flexDirection: 'row',
    borderColor: '#F0ECE3',
    borderTopWidth: 3,
    paddingHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  footerButtonCotainer: {
    height: '100%',
    width: '18%',
    alignItems: 'center',
    marginTop: 5,
  },
  footerButtonIcon: {
    width: '70%',
    height: '70%',
    resizeMode: 'contain',
    opacity: 0.5,
  },
  footerButtonText: {
    fontSize: 10,
    color: 'gray',
  },
});
