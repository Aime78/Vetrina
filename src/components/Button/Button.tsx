import {View, Pressable, Alert, Text} from 'react-native';
import styles from './styles';

type CustomButtonProps = {
  title: string;
  handleTask?: () => void;
};
const CustomButton = ({title, handleTask}: CustomButtonProps) => {
  return (
    <Pressable style={styles.container} onPress={handleTask}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
