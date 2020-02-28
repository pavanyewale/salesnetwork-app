import React, {useState, Fragment} from 'react';
import {Formik} from 'formik';
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

const CompleteProfileScreen = props => {
  const handleSubmit = () => {
    props.setLogin(true);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.containerView} behavior="padding">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.loginScreenContainer}>
            <View style={styles.loginFormView}>
              <Text style={styles.HeadingText}>Edit Profile</Text>
              <Formik
                initialValues={{
                  fullName: '',
                  companyName: '',
                  addressLine1: '',
                  addressLine2: '',
                  city: '',
                  state: '',
                  mobileNumber1: '7040309988',
                  mobileNumber2: '',
                }}
                onSubmit={values => {
                  alert(JSON.stringify(values));
                }}>
                {formikProps => (
                  <Fragment>
                    {/* <Text>{JSON.stringify(formikProps)}</Text> */}
                    <TextInput
                      name="fullName"
                      value={formikProps.values.fullName}
                      placeholder="Your Name"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('fullName')}
                    />
                    <TextInput
                      name="companyName"
                      value={formikProps.values.companyName}
                      placeholder="Company / Shop Name (optional)"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('companyName')}
                    />
                    <TextInput
                      name="addressLine1"
                      value={formikProps.values.addressLine1}
                      placeholder="Address Line 1"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('addressLine1')}
                    />
                    <TextInput
                      name="addressLine2"
                      value={formikProps.values.addressLine2}
                      placeholder="Address Line 2"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('addressLine2')}
                    />
                    <TextInput
                      name="city"
                      value={formikProps.values.city}
                      placeholder="City"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('city')}
                    />
                    <TextInput
                      name="state"
                      value={formikProps.values.state}
                      placeholder="State"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('state')}
                    />
                    <TextInput
                      name="mobileNumber1"
                      placeholder="Mobile Number 1"
                      value={formikProps.values.mobileNumber1}
                      keyboardType="numeric"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('mobileNumber1')}
                    />
                    <TextInput
                      name="mobileNumber2"
                      placeholder="Mobile Number 2"
                      value={formikProps.values.mobileNumber2}
                      keyboardType="numeric"
                      style={styles.loginFormTextInput}
                      onChangeText={formikProps.handleChange('mobileNumber2')}
                    />
                    <Button
                      buttonStyle={styles.loginButton}
                      onPress={formikProps.handleSubmit}
                      title="Save"
                    />
                  </Fragment>
                )}
              </Formik>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default CompleteProfileScreen;
