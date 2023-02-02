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
import TextPlaceholder from 'components/TextPlaceholder/TextPlaceholder';
import Support from 'components/Support/Support';

const SignUpScreen = ({navigation}: any) => {
  const [inputValue, setInputValue] = useState('');
  const handleNavigate = () => navigation.navigate('Login');

  return (
    <AuthLayout
      title="Create your e-commerce"
      description="Prova Vetrina Live gratuitamente per 7 giorni e apri il tuo negozio
    online in pochi minuti. Nessuna carta di credito richiesta.">
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
      <CustomButton title="Create your shop" />
      <PlaceHolder />
      <View style={styles.container}>
        <AuthOContainer path={facebook.path} text={facebook.text} />
        <AuthOContainer path={google.path} text={google.text} />
      </View>
      <TextPlaceholder
        placeholder="Do you have an account?"
        link="Sign in now"
        navigate={handleNavigate}
      />

      <Support />
    </AuthLayout>
  );
};

export default SignUpScreen;
