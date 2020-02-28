import {PrimaryColor, SecondaryColor} from '../../assets/color';

const React = require('react-native');

export default {
  containerView: {
    flex: 1,
  },
  loginScreenContainer: {
    flex: 1,
  },
  logoText: {
    fontSize: 40,
    fontWeight: '800',
    marginTop: 150,
    marginBottom: 30,
    textAlign: 'center',
  },
  HeadingText: {
    fontSize: 30,
    fontWeight: '800',
    marginTop: 10,
    marginBottom: 20,
    textAlign: 'center',
  },
  loginFormTextInput: {
    height: 43,
    fontSize: 14,
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: SecondaryColor,
    paddingLeft: 10,
    marginTop: 5,
    marginBottom: 5,
    marginLeft: 15,
    marginRight: 15,
  },
  loginButton: {
    backgroundColor: PrimaryColor,
    borderRadius: 5,
    height: 45,
    marginTop: 10,
    marginLeft: 15,
    marginRight: 15,
  },
  fbLoginButton: {
    height: 45,
    marginTop: 10,
    backgroundColor: '#389fff',
  },
};
