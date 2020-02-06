import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>
        Welcome to Sales Network, India's Largest Sales Platform
      </Text>
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
