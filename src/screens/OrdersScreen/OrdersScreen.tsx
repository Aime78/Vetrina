import {View, Text} from 'react-native';
import OrdersHeader from './components/OrdersHeader/OrdersHeader';
import OrdersTable from './components/OrdersTable/OrdersTable';
import {useRoute} from '@react-navigation/native';
import styles from './styles';

const OrdersScreen = ({navigation}: any) => {
  const route = useRoute();
  const currentScreen = route.name;
  return (
    <View style={styles.container}>
      <Text>{currentScreen}</Text>
      <OrdersHeader />
      <OrdersTable navigation={navigation} />
    </View>
  );
};

export default OrdersScreen;
