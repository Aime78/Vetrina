import {View, Text, Image} from 'react-native';
import styles from './styles';

const Configura = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerConfig}>
      <Image source={require('assets/tool.png')} />
      <Text style={styles.textConfig}>Configura la tua vetrina</Text>
    </View>
    <View style={styles.containerText}>
      <Text style={styles.textCompletato}>0%</Text>
      <Text style={styles.textCompletato}>completato</Text>
    </View>
    <View style={styles.containerText}>
      <Text style={styles.textBody}>
        Completa tutti i step per ricevere maggiore visibilità e una vetrina
        accattivante
      </Text>
    </View>
    <View style={styles.containerCompleta}>
      <Text style={styles.textCompleta}>Completa la configurazione!</Text>
      <Image source={require('assets/arrow-right.png')} />
    </View>
  </View>
);

export default Configura;
