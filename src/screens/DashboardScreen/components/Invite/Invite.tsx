import {View, Text, Image} from 'react-native';
import styles from './styles';

const Invite = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerHeader}>
      <Image source={require('assets/users.png')} />
      <Text style={styles.textHeader}>Invite a friend</Text>
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.textBody}>
        <Text style={styles.textReceive}>Receive 50 products </Text>
        by inviting a {'\n'} friend who subscribes to a plan. Your {'\n'} friend
        will receive a 30% discount {'\n'}coupon valid for any plan.
      </Text>
    </View>
    <View style={styles.containerStart}>
      <Text style={styles.textStart}>Start inviting friends!</Text>
      <Image source={require('assets/arrow-right.png')} />
    </View>
  </View>
);

export default Invite;
