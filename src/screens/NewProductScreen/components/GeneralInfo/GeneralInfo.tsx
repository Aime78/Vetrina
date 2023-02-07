import {View, Text, TextInput, Image} from 'react-native';
import styles from './styles';

const GeneralInfo = () => (
  <View style={[styles.container, styles.shadow]}>
    <Text style={styles.textHeader}>General Information</Text>
    <View>
      <Text style={styles.textBody}>Product name</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input} placeholder="Lorem ipsum" />
      </View>
    </View>
    <View style={styles.textAreaContainer}>
      <Text style={styles.textBody}>Description</Text>
      <View>
        <View style={styles.containerFormat}>
          <Image source={require('assets/format-bold.png')} />
          <Image source={require('assets/italic.png')} />
          <Image source={require('assets/format-t.png')} />
          <Image source={require('assets/format-underlined.png')} />
          <Image source={require('assets/format-list.png')} />
          <Image source={require('assets/format-link.png')} />
        </View>
        <View style={styles.inputContainerTwo}>
          <TextInput
            style={styles.inputTwo}
            placeholder="Description (0 / 5000)"
          />
        </View>
      </View>
    </View>
  </View>
);

export default GeneralInfo;
