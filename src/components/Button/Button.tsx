import {View, Pressable, Alert, Text} from 'react-native';
import styles from './styles';

const CustomButton = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Create your shop</Text>
    </Pressable>
  );
};

export default CustomButton;
