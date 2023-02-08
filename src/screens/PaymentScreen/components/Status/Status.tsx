import {View, Text} from 'react-native';
import styles from './style';

const DisableGreen = () => (
  <View style={[styles.containerLayout, styles.green]}>
    <Text style={[styles.text, styles.textGreen]}>Disable</Text>
  </View>
);

const Disable = () => (
  <View style={[styles.containerLayout, styles.gray]}>
    <Text style={[styles.text, styles.textGray]}>Disable</Text>
  </View>
);

const CommingSoon = () => (
  <View style={[styles.purpleLayout, styles.purple]}>
    <Text style={[styles.text, styles.textPurple]}>Comming soon</Text>
  </View>
);

export {DisableGreen, Disable, CommingSoon};
