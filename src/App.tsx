import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpScreen from './screens/SignUpScreen/SignUpScreen';
import LoginScreen from './screens/LoginScreen/LoginScreen';
import ResetPasswordScreen from './screens/ResetPasswordScreen/ResetPasswordScreen';
import RootNavigation from './navigation';

const Stack = createNativeStackNavigator();

function App() {
  return <RootNavigation />;
}

export default App;
