import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Profile and settings</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});
