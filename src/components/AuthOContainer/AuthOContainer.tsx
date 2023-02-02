import {View, Image, Text} from 'react-native';
import styles from './styles';

type AuthOContainerProps = {
  path: any;
  text: string;
};
const AuthOContainer = ({path, text}: AuthOContainerProps) => {
  return (
    <View style={styles.container}>
      <Image source={path} />
      <Text style={styles.text}>{text}</Text>
    </View>
  );
};

export default AuthOContainer;
