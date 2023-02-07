import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './styles';

type FormInputProps = {
  value: string;
  placeholder: string;
  hideText?: boolean;
  setValue: React.Dispatch<React.SetStateAction<string>>;
};

export const FormInput = ({
  value,
  setValue,
  placeholder,
  hideText,
}: FormInputProps) => {
  const [inputBorderColor, setInputBorderColor] = useState('#B6BEC6');
  //   const [value, setValue] = useState('');

  const handleOnFocus = () => setInputBorderColor('#21B8F9');

  const handleOnBlur = () => setInputBorderColor('#B6BEC6');

  return (
    <View style={{...styles.container, borderColor: `${inputBorderColor}`}}>
      <TextInput
        style={styles.input}
        placeholderTextColor={'#B6BEC6'}
        placeholder={placeholder}
        secureTextEntry={hideText}
        value={value}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        onChangeText={setValue}
      />
    </View>
  );
};
