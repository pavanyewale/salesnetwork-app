import {StyleSheet} from 'react-native';
import {PrimaryColor, SecondaryColor} from '../../assets/color';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  selectedTitleStyle: {
    color: PrimaryColor,
  },
  titleStyle: {
    color: SecondaryColor,
  },
});

export default styles;
