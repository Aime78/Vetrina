import {View, Text} from 'react-native';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import styles from './styles';

const OrdersScreen = () => (
  <View style={styles.container}>
    <OrdersHeader />
  </View>
);

export default OrdersScreen;
