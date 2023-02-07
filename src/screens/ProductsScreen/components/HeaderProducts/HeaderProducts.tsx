import {View, Text, Image} from 'react-native';
import styles from './styles';

const HeaderProducts = () => (
  <View style={styles.container}>
    <View>
      <Text style={styles.text}>Products ( 24 / 100 )</Text>
      <Text style={styles.text}>Featured products (7/10)</Text>
      <Image source={require('assets/switch.png')} />
    </View>
    <View>
      <Image source={require('assets/button-plus.png')} />
    </View>
  </View>
);

export default HeaderProducts;
