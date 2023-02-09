import {View, Text} from 'react-native';
import styles from './styles';

type SubscriptionCardProps = {
  name: string;
  price: string;
  messi: string;
};
const SubscriptionCard = ({name, price, messi}: SubscriptionCardProps) => {
  return (
    <View style={[styles.container, styles.shadow]}>
      <View style={styles.containerHeader}>
        <Text style={styles.textFree}>{name}</Text>
        <Text style={styles.textMax}>Max 150 prodotti</Text>
      </View>
      <Text style={styles.textMessi}>{messi}</Text>
      <View style={styles.containerBody}>
        <Text style={styles.textCurrency}>
          € <Text style={styles.textNumber}>{price}</Text>/year
        </Text>
        <View style={styles.containerChange}>
          <Text style={styles.textChange}>Change plan</Text>
        </View>
      </View>
    </View>
  );
};

export default SubscriptionCard;
