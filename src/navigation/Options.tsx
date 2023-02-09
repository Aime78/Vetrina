import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import OrdersScreen from 'screens/OrdersScreen/OrdersScreen';
import OrderScreen from 'screens/OrderScreen/OrderScreen';
import Header from 'components/Header/Header';
import {signOut} from 'firebase/auth';
import {authentication} from 'config/firebase';

const Stack = createNativeStackNavigator();

const SignOutButton = () => {
  const handleSignout = () => {
    signOut(authentication);
  };
  return <DrawerItem label="Sign Out" onPress={() => handleSignout()} />;
};

export const CustomDrawerContent = (props: any) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <SignOutButton />
    </DrawerContentScrollView>
  );
};

export const OrdersNavigation = ({navigation}: any) => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={OrdersScreen}
      options={{
        header: () => (
          <Header navigation={navigation} name="Orders" showIcons={true} />
        ),
      }}
    />
    <Stack.Screen
      name="Order"
      component={OrderScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);
