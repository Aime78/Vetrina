import {View, Text, Image} from 'react-native';
import styles from './styles';
import RadioButton from 'components/RadioButton/RadioButton';

const ProductType = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.textHeader}>Product type</Text>
    <View style={styles.containerBody}>
      <View style={styles.containerOption}>
        <RadioButton selected={true} />
        <Text style={styles.textBody}>Physical</Text>
      </View>
      <View style={styles.containerOption}>
        <RadioButton selected={false} />
        <Text style={styles.textBody}>Digital</Text>
      </View>
    </View>
  </View>
);

export default ProductType;
