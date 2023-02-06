import {View, Text, Image} from 'react-native';
import styles from './styles';

const Orders = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerHeader}>
      <View style={styles.containerOrders}>
        <Image source={require('assets/list.png')} />
        <Text style={styles.textOrders}>Orders</Text>
      </View>
      <View style={styles.containerMonth}>
        <Text style={styles.textMonth}>This month</Text>
        <Image source={require('assets/chevron-down.png')} />
      </View>
    </View>
    <View></View>
    <View style={styles.containerMiddle}>
      <View style={styles.containerHeader}>
        <Text style={styles.textMiddle}>Orders received:</Text>
        <Text style={styles.textOrders}>0</Text>
      </View>
      <View style={styles.containerHeader}>
        <Text style={styles.textMiddle}>Earnings:</Text>
        <Text style={styles.textOrders}>€ 0,00</Text>
      </View>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.textBody}>10 free tips to increase your sales</Text>
      <Image source={require('assets/arrow-right.png')} />
    </View>
  </View>
);

export default Orders;
