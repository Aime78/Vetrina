import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen/ResetPasswordScreen';
import RootNavigation from './navigation';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <RootNavigation />
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName="Signup">
    //     <Stack.Screen
    //       name="Signup"
    //       component={SignUpScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Login"
    //       component={LoginScreen}
    //       options={{headerShown: false}}
    //     />
    //     <Stack.Screen
    //       name="Resetpassword"
    //       component={ResetPasswordScreen}
    //       options={{headerShown: false}}
    //     />
    //   </Stack.Navigator>
    // </NavigationContainer>
  );
}

export default App;
