import {View, Text, TextInput, Image} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import styles from './style';

const Price = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.textHeader}>Price</Text>
    <View>
      <Text style={styles.textBody}>Original price</Text>
      <View>
        <View>
          <Image source={require('assets/euro-input.png')} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
    <View>
      <Text style={styles.textBody}>Discounted price</Text>
      <View>
        <View>
          <Image source={require('assets/euro-input.png')} />
        </View>
        <View style={styles.inputContainer}>
          <TextInput style={styles.input} />
        </View>
      </View>
    </View>
    <View>
      <CheckBox />
      <Text>Activate discounted price</Text>
    </View>
  </View>
);

export default Price;
