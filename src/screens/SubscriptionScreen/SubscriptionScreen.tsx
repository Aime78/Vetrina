import {ScrollView, View, Text, Image} from 'react-native';
import SubscriptionCard from './components/SubscriptionCard/SubscriptionCard';
import plans from './subcriptionData';

import styles from './styles';

const SubscriptionScreen = () => (
  <ScrollView style={styles.container}>
    <Text style={styles.textHeader}>Choose your plan</Text>
    <View style={styles.containerSubscription}>
      <View style={styles.containerMonthly}>
        <Text style={styles.textMonthly}>Monthly</Text>
        <Image source={require('assets/switch-input.png')} />
      </View>
      <View style={styles.containerYearly}>
        <Text style={styles.textYearly}>Yearly</Text>
        <View style={styles.containerPromo}>
          <Text style={styles.textPromo}>Promo</Text>
        </View>
      </View>
    </View>
    <View style={styles.containerCard}>
      {plans.map(plan => (
        <SubscriptionCard
          name={plan.name}
          price={plan.number}
          messi={plan.messi}
          key={plan.id}
        />
      ))}
    </View>
  </ScrollView>
);

export default SubscriptionScreen;
