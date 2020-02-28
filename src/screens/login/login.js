import React, {useState} from 'react';

import styles from './style';
import {
  Keyboard,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  ScrollView,
} from 'react-native';
import {Button} from 'react-native-elements';

const LoginScreen = props => {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState('');

  const onLoginPress = () => {
    props.setLogin(true);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.logoText}>
                Let's start with{'\n'}Sales Network
              </Text>
              <TextInput
                placeholder="Mobile Number"
                keyboardType="numeric"
                style={styles.loginFormTextInput}
                onChangeText={value => {
                  setMobile(value);
                }}
              />
              <TextInput
                placeholder="Enter OTP"
                style={styles.loginFormTextInput}
                onChangeText={value => {
                  setOtp(value);
                }}
              />
              <Button
                buttonStyle={styles.loginButton}
                onPress={() => onLoginPress()}
                title="Continue"
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
