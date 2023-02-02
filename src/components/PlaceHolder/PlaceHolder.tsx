import {View, Text} from 'react-native';
import styles from './styles';

const PlaceHolder = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fistLine}></View>
      <Text style={styles.text}>OR</Text>
      <View style={styles.secondLine}></View>
    </View>
  );
};

export default PlaceHolder;
