import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DashboardScreen from 'screens/DashboardScreen/DashboardScreen';
import Header from 'components/Header/Header';
import ProductsScreen from 'screens/ProductsScreen/ProductsScreen';
import NewProductScreen from 'screens/NewProductScreen/NewProductScreen';
import PaymentScreen from 'screens/PaymentScreen/PaymentScreen';
import OrdersScreen from 'screens/OrdersScreen/OrdersScreen';
import OrderScreen from 'screens/OrderScreen/OrderScreen';
import SubscriptionScreen from 'screens/SubscriptionScreen/SubscriptionScreen';

const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const OrdersNavigation = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={OrdersScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="Order"
      component={OrderScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

const PrivateScreen = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          header: ({navigation}) => (
            <Header
              navigation={navigation}
              name="Dashboard"
              showIcons={false}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Products"
        component={ProductsScreen}
        options={{
          header: ({navigation}) => (
            <Header navigation={navigation} name="Products" showIcons={true} />
          ),
        }}
      />
      <Drawer.Screen
        name="NewProduct"
        component={NewProductScreen}
        options={{
          header: ({navigation}) => (
            <Header navigation={navigation} name="Products" showIcons={true} />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentScreen}
        options={{
          header: ({navigation}) => (
            <Header navigation={navigation} name="Payment" showIcons={false} />
          ),
        }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrdersNavigation}
        options={{
          header: ({navigation}) => (
            <Header navigation={navigation} name="Orders" showIcons={true} />
          ),
        }}
      />
      <Drawer.Screen
        name="Subscription"
        component={SubscriptionScreen}
        options={{
          header: ({navigation}) => (
            <Header
              navigation={navigation}
              name="Subscription"
              showIcons={false}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default PrivateScreen;

const screenStyle = {
  headerStyle: {
    backgroundColor: 'red',
  },
};
