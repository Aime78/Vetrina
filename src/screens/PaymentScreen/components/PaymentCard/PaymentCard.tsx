import {View, Text, Image} from 'react-native';
import styles from './styles';

type PaymentCardProps = {
  icon: React.ReactNode;
  name: string;
  status: React.ReactNode;
};
const PaymentCard = ({icon, name, status}: PaymentCardProps) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.containerHeader}>
        <View>{icon}</View>
        <View>{status}</View>
      </View>
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

export default PaymentCard;
