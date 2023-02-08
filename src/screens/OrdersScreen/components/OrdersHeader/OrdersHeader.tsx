import {View, Text, Image} from 'react-native';
import styles from './styles';

const OrdersHeader = () => (
  <View style={styles.container}>
    <Text style={styles.text}>
      Orders: <Text style={{fontWeight: '600'}}>24</Text>
    </Text>
    <View style={styles.containerShip}>
      <Text style={styles.shipText}>Ship order</Text>
      <Image source={require('assets/external-link-order.png')} />
    </View>
  </View>
);

export default OrdersHeader;
