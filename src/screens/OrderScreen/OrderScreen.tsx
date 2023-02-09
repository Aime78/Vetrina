import {ScrollView, View, Text, Image} from 'react-native';
import {OrderHeader, Cliente, ShippingInfo} from './components';
import styles from './styles';

const OrderScreen = ({navigation}: any) => {
  return (
    <ScrollView style={styles.container}>
      <OrderHeader navigation={navigation} />
      <View style={styles.containerVariation}>
        <View style={[styles.textContainerInfo, styles.textContainerVariation]}>
          <Text style={styles.textInfo}>Info orders</Text>
        </View>
        <View style={styles.textContainerVariation}>
          <Text style={styles.textVariant}>Products</Text>
        </View>
        <View style={styles.textContainerVariation}>
          <Text style={styles.textVariant}>Shipping</Text>
        </View>
      </View>
      <Cliente />
      <View style={styles.containerShipping}>
        <Text style={styles.textShippingHeader}>Shipping Address</Text>
        <Text style={styles.textShippingBody}>
          Via Roma, 59, Torre del Greco, NA, 80059
        </Text>
      </View>
      <ShippingInfo />
      <View style={styles.containerTotal}>
        <View style={styles.containerPrice}>
          <Text style={styles.textBodyTotal}>Subtotal</Text>
          <Text style={styles.textBodyTotal}>€ 47,00</Text>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.textBodyTotal}>Courier Shipping</Text>
          <View style={styles.containerCourier}>
            <Text style={styles.textBodyTotal}>€ 2,00</Text>
            <Image source={require('assets/chevron-down.png')} />
          </View>
        </View>
        <View style={styles.containerPrice}>
          <Text style={styles.textBodyGrandTotal}>Total</Text>
          <Text style={styles.textBodyGrandTotal}>€ 49,00</Text>
        </View>
      </View>
      <View style={styles.containerShipped}>
        <View style={styles.containerShippedContent}>
          <Text style={styles.textShipped}>Shipped</Text>
          <Image source={require('assets/chevron-down-white.png')} />
        </View>
      </View>
    </ScrollView>
  );
};

export default OrderScreen;
