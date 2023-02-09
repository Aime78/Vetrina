import {View, Text, Image} from 'react-native';
import styles from './styles';

const OrderHeader = () => (
  <View style={styles.container}>
    <Text style={styles.textOrder}>Orders: #1292</Text>
    <View style={styles.containerRight}>
      <View style={styles.containerStampa}>
        <Image source={require('assets/star-filled.png')} />
        <Text style={styles.textStampa}>Stampa ordine</Text>
      </View>
      <Image source={require('assets/x.png')} />
    </View>
  </View>
);

export default OrderHeader;
