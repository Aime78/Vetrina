import {View, Text, Image} from 'react-native';
import styles from './styles';
import LinearGradient from 'react-native-linear-gradient';

const Welcome = () => (
  <LinearGradient
    start={{x: 0.1, y: 0.1}}
    end={{x: 0.8, y: 1.0}}
    useAngle={true}
    angle={180}
    colors={['#21B8F9', 'rgba(33, 184, 249, 0.3)']}
    style={styles.container}>
    <Text style={styles.introduction}>Welcome Mario!</Text>
    <View style={styles.bodyContainer}>
      <Text style={styles.body}>app.vetrinalive.com/mario-store</Text>
      <Image source={require('assets/external-link.png')} />
    </View>
  </LinearGradient>
);

export default Welcome;
