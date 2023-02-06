import {View, Text, Image} from 'react-native';
import styles from './styles';

const Visitors = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerHeader}>
      <View style={styles.containerEye}>
        <Image source={require('assets/eye.png')} />
        <Text style={styles.textEye}>Visitors</Text>
      </View>
      <View style={styles.containerMonth}>
        <Text style={styles.textMonth}>This month</Text>
        <Image source={require('assets/chevron-down.png')} />
      </View>
    </View>
    <View style={styles.containerZero}>
      <Text style={styles.textZero}>0</Text>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.textBody}>Vuoi ricevere più visite? Contattaci!</Text>
      <Image source={require('assets/arrow-right.png')} />
    </View>
  </View>
);

export default Visitors;
