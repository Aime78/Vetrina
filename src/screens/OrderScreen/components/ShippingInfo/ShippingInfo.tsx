import {View, Text, Image} from 'react-native';
import styles from './styles';

const ShippingInfo = () => (
  <View style={styles.container}>
    <Text style={styles.textHeader}>Shipping Info</Text>
    <Text style={styles.textBody}>Nome corriere: Fedex</Text>
    <Text style={styles.textBody}>Numero/Link ordine: FR12342123 2314</Text>
    <View style={styles.containerBody}>
      <Image source={require('assets/info.png')} />
      <Text style={styles.textBodyTwo}>Spedizione Corriere</Text>
      <Image source={require('assets/chevron-down.png')} />
    </View>
    <Text style={styles.textParagraph}>
      Se cambi la modalità e i costi di consegna, ricordati di comunicarlo al
      cliente.
    </Text>
  </View>
);

export default ShippingInfo;
