import {View, Text} from 'react-native';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import OrdersTable from './components/OrdersTable/OrdersTable';
import styles from './styles';

const OrdersScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <OrdersHeader />
      <OrdersTable navigation={navigation} />
    </View>
  );
};

export default OrdersScreen;
