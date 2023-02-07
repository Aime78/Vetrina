import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from 'screens/DashboardScreen/DashboardScreen';
import Header from 'components/Header/Header';
import ProductsScreen from 'screens/ProductsScreen/ProductsScreen';
import NewProductScreen from 'screens/NewProductScreen/NewProductScreen';

const Drawer = createDrawerNavigator();

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
    </Drawer.Navigator>
  </NavigationContainer>
);

export default PrivateScreen;

const screenStyle = {
  headerStyle: {
    backgroundColor: 'red',
  },
};
