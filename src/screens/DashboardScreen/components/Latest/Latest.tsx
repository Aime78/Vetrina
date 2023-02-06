import {View, Text, Image} from 'react-native';
import styles from './styles';

const Latest = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerHeader}>
      <Image source={require('assets/file-text.png')} />
      <Text style={styles.textHeader}>Lastest news</Text>
    </View>
    <View style={[styles.card, styles.shadow]}>
      <Image source={require('assets/chart.png')} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>E-COMMERCE TIPS</Text>
        <Text style={styles.cardBody}>
          13 tips on How to Write a {'\n'} Business Plan with success
        </Text>
        <Text style={styles.cardSpan}>Stima lettura: 5 min</Text>
      </View>
    </View>
    <View style={[styles.card, styles.shadow]}>
      <Image source={require('assets/girl.png')} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>E-COMMERCE TIPS</Text>
        <Text style={styles.cardBody}>
          10 profitable Things to {'\n'} make and sell Online for...
        </Text>
        <Text style={styles.cardSpan}>Stima lettura: 5 min</Text>
      </View>
    </View>
    <View style={[styles.card, styles.shadow]}>
      <Image source={require('assets/chart.png')} />
      <View style={styles.cardContainer}>
        <Text style={styles.cardTitle}>E-COMMERCE TIPS</Text>
        <Text style={styles.cardBody}>
          10 profitable Things to {'\n'} make and sell Online for...
        </Text>
        <Text style={styles.cardSpan}>Stima lettura: 5 min</Text>
      </View>
    </View>
    <View style={styles.blogContainer}>
      <Text style={styles.blogText}>Visita il nostro Blog</Text>
      <Image source={require('assets/external-link-blue.png')} />
    </View>
  </View>
);

export default Latest;
