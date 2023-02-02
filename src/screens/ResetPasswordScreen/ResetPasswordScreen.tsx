import CustomButton from 'components/Button/Button';
import {FormInput} from 'components/FormInput/FormInput';
import Support from 'components/Support/Support';
import TextPlaceholder from 'components/TextPlaceholder/TextPlaceholder';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import React, {useState} from 'react';
import {View, Text} from 'react-native';

const ResetPasswordScreen = ({navigation}: any) => {
  const [inputValue, setInputValue] = useState('');
  const handleNavigate = () => navigation.navigate('Login');

  return (
    <AuthLayout
      title="Forgot Password"
      description="Enter your email and you will receive an email to recover your password">
      <FormInput
        placeholder="Enter your email"
        value={inputValue}
        setValue={setInputValue}
      />
      <CustomButton title="Login" />
      <TextPlaceholder
        placeholder="Do you have an account?"
        link="Sign in now"
        navigate={handleNavigate}
      />
      <Support />
    </AuthLayout>
  );
};

export default ResetPasswordScreen;
