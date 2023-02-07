import {View} from 'react-native';
import {HeaderProducts, TableProducts} from './components';
import styles from './styles';

const ProductsScreen = () => (
  <View style={styles.container}>
    <HeaderProducts />
    <TableProducts />
  </View>
);

export default ProductsScreen;
