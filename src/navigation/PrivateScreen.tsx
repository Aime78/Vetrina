import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from 'screens/DashboardScreen/DashboardScreen';

const Drawer = createDrawerNavigator();

const PrivateScreen = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
    </Drawer.Navigator>
  </NavigationContainer>
);

export default PrivateScreen;
