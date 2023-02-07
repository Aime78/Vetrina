import {View, Text, TextInput, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

const Price = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.textHeader}>Price</Text>
    <View style={styles.containerOriginalPrice}>
      <Text style={styles.textBody}>Original price</Text>
      <View>
        <View style={styles.containerOriginal}>
          <Image source={require('assets/euro-input.png')} />
          <Text style={styles.textOriginal}>0</Text>
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
    <View>
      <Text style={styles.textBody}>Discounted price</Text>
      <View style={styles.containerDiscountedPrice}>
        <View style={styles.containerDiscounted}>
          <Image source={require('assets/euro-icon.png')} />
        </View>
        <View style={styles.inputContainerTwo}>
          <TextInput style={styles.inputTwo} placeholder="Lorem ipsum" />
        </View>
      </View>
    </View>
    <View style={styles.containerFooter}>
      <Image source={require('assets/checkbox.png')} />
      <Text style={styles.textFooter}>Activate discounted price</Text>
    </View>
  </View>
);

export default Price;
