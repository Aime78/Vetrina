import AuthOContainer from 'components/AuthOContainer/AuthOContainer';
import CustomButton from 'components/Button/Button';
import {FormInput} from 'components/FormInput/FormInput';
import PlaceHolder from 'components/PlaceHolder/PlaceHolder';
import Support from 'components/Support/Support';
import TextPlaceholder from 'components/TextPlaceholder/TextPlaceholder';
import {facebook, google} from 'data/authO';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import React, {useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const LoginScreen = ({navigation}: any) => {
  const [inputValue, setInputValue] = useState('');
  const handleNavigateReset = () => navigation.navigate('Resetpassword');
  const handleNavigateRegister = () => navigation.navigate('Signup');
  return (
    <AuthLayout
      title="Welcome"
      description="Enter your email and password to
      access your account">
      <View>
        <FormInput
          placeholder="Enter your email"
          value={inputValue}
          setValue={setInputValue}
        />
        <FormInput
          placeholder="Enter your password"
          value={inputValue}
          setValue={setInputValue}
        />
      </View>
      <CustomButton title="Login" />
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
