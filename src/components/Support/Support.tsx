import {View, Image, Text} from 'react-native';
import styles from './styles';

const Support = () => {
  return (
    <View style={styles.container}>
      <View style={styles.containerButton}>
        <Image source={require('assets/headphones.png')} />
        <Text style={styles.text}>Support</Text>
      </View>
    </View>
  );
};

export default Support;
