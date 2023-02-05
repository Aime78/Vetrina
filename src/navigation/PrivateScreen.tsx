import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import DashboardScreen from 'screens/DashboardScreen/DashboardScreen';
import Header from 'components/Header/Header';

const Drawer = createDrawerNavigator();

const PrivateScreen = () => (
  <NavigationContainer>
    <Drawer.Navigator initialRouteName="Dashboard">
      <Drawer.Screen
        name="Dashboard"
        component={DashboardScreen}
        options={{
          header: ({navigation}) => (
            <Header navigation={navigation} showIcons={true} />
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
