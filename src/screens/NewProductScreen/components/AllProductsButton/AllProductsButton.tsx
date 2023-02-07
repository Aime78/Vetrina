import {Pressable, Text, Image} from 'react-native';
import styles from './styles';

const AllProductsButton = () => (
  <Pressable style={[styles.container, styles.shadow]}>
    <Image source={require('assets/chevron-left-blue.png')} />
    <Text style={styles.text}>All products</Text>
  </Pressable>
);

export default AllProductsButton;
