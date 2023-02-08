import {View, ScrollView, Text} from 'react-native';
import styles from './styles';
import PaymentCard from './components/PaymentCard/PaymentCard';
import methods from './cardData';

const PaymentScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.textHeader}>Payment methods</Text>
      <View style={styles.containerCard}>
        {methods.map(method => (
          <PaymentCard
            key={method.id}
            icon={method.method}
            name={method.methodName}
            status={method.status}
          />
        ))}
      </View>
    </ScrollView>
  );
};

export default PaymentScreen;
