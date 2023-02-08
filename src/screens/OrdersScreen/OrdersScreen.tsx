import {View, Text} from 'react-native';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import OrdersTable from './components/OrdersTable/OrdersTable';
import styles from './styles';

const OrdersScreen = () => (
  <View style={styles.container}>
    <OrdersHeader />
    <OrdersTable />
  </View>
);

export default OrdersScreen;
