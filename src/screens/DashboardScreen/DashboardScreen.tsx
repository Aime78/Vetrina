import {ScrollView, View} from 'react-native';
import {
  Welcome,
  Configura,
  Visitors,
  Orders,
  Latest,
  Marketplace,
  Captera,
  Customer,
  Invite,
} from './components';
import styles from './styles';

const DashboardScreen = () => {
  return (
    <ScrollView style={styles.scrollContainer}>
      <Welcome />
      <View style={styles.container}>
        <View style={styles.containerConfigura}>
          <Configura />
        </View>
        <Visitors />
        <Orders />
        <Latest />
        <Marketplace />
        <Captera />
        <Customer />
        <Invite />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
