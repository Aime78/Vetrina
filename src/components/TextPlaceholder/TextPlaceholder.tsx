import {View, Text, Alert} from 'react-native';
import styles from './styles';

type TextPlaceholderProps = {
  placeholder: string;
  link?: string;
  navigate: () => void;
};
const TextPlaceholder = ({
  placeholder,
  link,
  navigate,
}: TextPlaceholderProps) => {
  return (
    <View style={styles.textWrapper}>
      <Text style={styles.textOne}>{placeholder}</Text>
      <Text style={styles.textTwo} onPress={() => navigate()}>
        {link}
      </Text>
    </View>
  );
};

export default TextPlaceholder;
