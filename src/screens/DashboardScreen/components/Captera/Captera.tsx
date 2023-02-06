import {View, Text, Image} from 'react-native';
import styles from './styles';

const Captera = () => (
  <View style={[styles.container, styles.shadow]}>
    <View>
      <Image source={require('assets/captera.png')} />
    </View>
    <View style={styles.containerBody}>
      <Text style={styles.textBody}>
        Write a <Text style={styles.textPositive}>positive </Text> review on
        Capterra and {'\n'}receive the extension with{' '}
        <Text style={styles.textAdditional}>50 {'\n'}additional products.</Text>
      </Text>
    </View>
    <View style={[styles.containerReview, styles.borderReview]}>
      <Text style={styles.textReview}>Write a review on Capterra</Text>
      <Image source={require('assets/arrow-right-green.png')} />
    </View>
    <View style={styles.containerTrust}>
      <Image source={require('assets/trustpilot.png')} />
      <View style={styles.containerBody}>
        <Text style={styles.textBody}>
          Show us your love by leaving a{' '}
          <Text style={styles.textPositive}>positive</Text> {'\n'} review on
          trust pilot and receive the {'\n'} extension of{' '}
          <Text style={styles.textAdditional}> 50 additional products</Text>
        </Text>
      </View>
      <View style={styles.containerReview}>
        <Text style={styles.textReview}>Write a review on Trustpilot</Text>
        <Image source={require('assets/arrow-right-green.png')} />
      </View>
    </View>
    <View style={styles.containerPromotion}>
      <Image source={require('assets/promotions.png')} />
    </View>
  </View>
);

export default Captera;
