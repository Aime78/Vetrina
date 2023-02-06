import {View, Text, Image} from 'react-native';
import styles from './styles';

const Marketplace = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerMarketplace}>
      <Image source={require('assets/new-app.png')} />
      <Text style={styles.textMarketplace}>Extensions Marketplace</Text>
    </View>
    <View style={styles.containerBody}>
      <View>
        <View style={styles.containerDomain}>
          <Image source={require('assets/domain-1.png')} />
        </View>
        <Text style={styles.textBody}>Custom Domain</Text>
      </View>
      <View>
        <View style={styles.containerProduct}>
          <Text style={styles.textProduct1}>+50</Text>
          <Text style={styles.textProduct2}>Prodoti</Text>
        </View>
        <Text style={styles.textBody}>+ 50 Products</Text>
      </View>
    </View>
    <View style={styles.containerDiscover}>
      <Text style={styles.textDiscover}>Discover all extensions</Text>
      <Image source={require('assets/arrow-right.png')} />
    </View>
  </View>
);

export default Marketplace;
