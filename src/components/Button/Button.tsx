import {View, Pressable, Alert, Text} from 'react-native';
import styles from './styles';

type CustomButtonProps = {
  title: string;
};
const CustomButton = ({title}: CustomButtonProps) => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default CustomButton;
