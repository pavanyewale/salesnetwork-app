import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';

const SplashScreen = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.photo}
        source={require('../../assets/images/splashscreen.png')}
      />
    </View>
  );
};

export default SplashScreen;
