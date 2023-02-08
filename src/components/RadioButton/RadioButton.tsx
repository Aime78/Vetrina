import React from 'react';
import {View} from 'react-native';
import styles from './styles';
import style from './styles';

type RadioButtonProps = {
  selected?: boolean;
};
const RadioButton = ({selected}: RadioButtonProps) => {
  return (
    <View style={styles.notChecked}>
      {selected ? <View style={styles.checked} /> : null}
    </View>
  );
};

export default RadioButton;
