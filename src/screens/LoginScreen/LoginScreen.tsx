import AuthOContainer from 'components/AuthOContainer/AuthOContainer';
import CustomButton from 'components/Button/Button';
import {FormInput} from 'components/FormInput/FormInput';
import PlaceHolder from 'components/PlaceHolder/PlaceHolder';
import Support from 'components/Support/Support';
import TextPlaceholder from 'components/TextPlaceholder/TextPlaceholder';
import {facebook, google} from 'data/authO';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import React, {useState} from 'react';
import {View} from 'react-native';
import login from 'services/login';
import styles from './styles';

const LoginScreen = ({navigation}: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleNavigateReset = () => navigation.navigate('Resetpassword');
  const handleNavigateRegister = () => navigation.navigate('Signup');
  const handleNavigateDashboard = () =>
    navigation.navigate('Login', {screen: 'Dashboard'});

  const loginUser = async () => {
    if (!email || !password) return;
    const userData = {email, password};
    const user = await login(userData);
    console.log(user);
    handleNavigateDashboard();
  };

  return (
    <AuthLayout
      title="Welcome"
      description="Enter your email and password to
      access your account">
      <View>
        <FormInput
          placeholder="Enter your email"
          value={email}
          setValue={setEmail}
        />
        <FormInput
          placeholder="Enter your password"
          // hideText={true}
          value={password}
          setValue={setPassword}
        />
      </View>
      <CustomButton title="Login" handleTask={loginUser} />
      <PlaceHolder />
      <View style={styles.container}>
        <AuthOContainer path={facebook.path} text={facebook.text} />
        <AuthOContainer path={google.path} text={google.text} />
      </View>
      <TextPlaceholder
        placeholder="Did you forget your password?"
        // link="Reset password"
        navigate={handleNavigateReset}
      />
      <TextPlaceholder
        placeholder="Do not have an account?"
        link="Register now"
        navigate={handleNavigateRegister}
      />
      <Support />
    </AuthLayout>
  );
};

export default LoginScreen;
