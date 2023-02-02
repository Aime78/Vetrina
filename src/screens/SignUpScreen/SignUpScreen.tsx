import React from 'react';
import {FormInput} from 'components/FormInput/FormInput';
import {useState} from 'react';
import {View} from 'react-native';
import AuthLayout from 'layout/AuthLayout/AuthLayout';
import {facebook} from 'data/authO';
import {google} from 'data/authO';
import CustomButton from 'components/Button/Button';
import PlaceHolder from 'components/PlaceHolder/PlaceHolder';
import AuthOContainer from 'components/AuthOContainer/AuthOContainer';
import styles from './styles';

const SignUpScreen = () => {
  const [inputValue, setInputValue] = useState('');
  return (
    <AuthLayout>
      <View>
        <FormInput
          placeholder="Name and Surname"
          value={inputValue}
          setValue={setInputValue}
        />
        <FormInput
          placeholder="Email"
          value={inputValue}
          setValue={setInputValue}
        />
        <FormInput
          placeholder="Password"
          value={inputValue}
          setValue={setInputValue}
        />
      </View>
      <CustomButton />
      <PlaceHolder />
      <View style={styles.container}>
        <AuthOContainer path={facebook.path} text={facebook.text} />
        <AuthOContainer path={google.path} text={google.text} />
      </View>
    </AuthLayout>
  );
};

export default SignUpScreen;
