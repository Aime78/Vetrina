import {View, Text, Image} from 'react-native';
import styles from './styles';

const Customer = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerHeader}>
      <Image source={require('assets/headphones.png')} />
      <Text style={styles.textHeader}>Customer support</Text>
    </View>
    <View style={styles.containerBody}>
      <Image source={require('assets/avatar.png')} />
      <Text style={styles.textBody}>Simone is here to help you</Text>
    </View>
    <View style={styles.containerButton}>
      <View style={styles.button}>
        <Text style={styles.buttonText}>Contact us</Text>
      </View>
    </View>
  </View>
);

export default Customer;
