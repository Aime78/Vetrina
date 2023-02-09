import {View, Text, Image} from 'react-native';
import styles from './styles';

const Cliente = () => (
  <View style={styles.container}>
    <Text style={styles.textDate}>29/05/2020 18:54</Text>
    <Text style={styles.textCliente}>Cliente</Text>
    <Text style={styles.textName}>Mario Rossi</Text>
    <Text style={styles.textEmail}>mariorossi@vetrinalive.it</Text>
    <Text style={styles.textTel}>
      Telefono: <Text style={styles.textEmail}>+39 3333232331</Text>{' '}
    </Text>
    <Text style={styles.textName}>Codice Fiscale: RSSMAR22T33M123K </Text>
    <View style={styles.containerSocials}>
      <Image source={require('assets/whatsapp.png')} />
      <Text style={styles.textWhatsapp}>Contatta su Whatsapp</Text>
    </View>
    <View style={styles.containerSocials}>
      <Image source={require('assets/telegram.png')} />
      <Text style={styles.textTelegram}>Contatta su Telegram</Text>
    </View>
  </View>
);

export default Cliente;
