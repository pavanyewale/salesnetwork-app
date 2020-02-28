import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
export const Search = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Search</Text>
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
