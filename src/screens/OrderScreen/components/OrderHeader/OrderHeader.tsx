import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';

const OrderHeader = ({navigation}: any) => {
  const handleNavigation = () => navigation.navigate('Home');
  return (
    <View style={styles.container}>
      <Text style={styles.textOrder}>Orders: #1292</Text>
      <View style={styles.containerRight}>
        <View style={styles.containerStampa}>
          <Image source={require('assets/star-filled.png')} />
          <Text style={styles.textStampa}>Stampa ordine</Text>
        </View>
        <Pressable onPress={handleNavigation}>
          <Image source={require('assets/x.png')} />
        </Pressable>
      </View>
    </View>
  );
};

export default OrderHeader;
