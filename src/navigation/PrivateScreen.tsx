import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from 'screens/DashboardScreen/DashboardScreen';
import Header from 'components/Header/Header';
import ProductsScreen from 'screens/ProductsScreen/ProductsScreen';
import NewProductScreen from 'screens/NewProductScreen/NewProductScreen';
import PaymentScreen from 'screens/PaymentScreen/PaymentScreen';
import SubscriptionScreen from 'screens/SubscriptionScreen/SubscriptionScreen';
import {CustomDrawerContent, OrdersNavigation} from './Options';

const Drawer = createDrawerNavigator();

const PrivateScreen = () => (
  <NavigationContainer>
    <Drawer.Navigator
      initialRouteName="Dashboard"
      drawerContent={props => <CustomDrawerContent {...props} />}>
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
        options={{headerShown: false}}
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
