import {ScrollView, View} from 'react-native';
import {
  Welcome,
  Configura,
  Visitors,
  Orders,
  Latest,
  Marketplace,
  Captera,
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
        <View style={styles.containerVisitors}>
          <Visitors />
        </View>
        <View style={styles.containerOrders}>
          <Orders />
        </View>
        <View style={styles.containerLatest}>
          <Latest />
        </View>
        <View style={styles.containerMarketplace}>
          <Marketplace />
        </View>
        <Captera />
      </View>
    </ScrollView>
  );
};

export default DashboardScreen;
