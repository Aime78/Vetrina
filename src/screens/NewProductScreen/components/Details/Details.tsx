import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

const Details = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.textHeader}>Details</Text>
    <View style={styles.containerCategory}>
      <Text style={styles.textBody}>Category</Text>
      <View style={styles.categoryArrow}>
        <Image source={require('assets/chevron-down-blue.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Select category" />
      </View>
    </View>
    <View>
      <View style={styles.containerProduct}>
        <Text style={styles.textBody}>Product code / SKU</Text>
        <Image source={require('assets/info.png')} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Leave empty to automatically generate"
        />
      </View>
    </View>
    <View style={styles.containerWeight}>
      <Text style={styles.textBody}>Weight</Text>
      <View style={styles.weightValue}>
        <Image source={require('assets/weight.png')} />
        <Text>0 g</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    </View>
    <View style={styles.containerAvailability}>
      <Text style={styles.textBody}>Availability</Text>
      <View style={styles.availabilityValue}>
        <Image source={require('assets/box.png')} />
        <Text>0</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} />
      </View>
    </View>
    <View style={styles.containerFooter}>
      <Image source={require('assets/checkbox.png')} />
      <Text style={styles.textFooter}>This is a featured product</Text>
    </View>
  </View>
);

export default Details;
