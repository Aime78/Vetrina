import {ScrollView, View, Text} from 'react-native';
import {
  AllProductsButton,
  Details,
  GeneralInfo,
  Price,
  ProductType,
} from './components';
import styles from './styles';

const NewProductScreen = () => (
  <ScrollView style={styles.container}>
    <AllProductsButton />
    <Text style={styles.textHeader}>New product</Text>
    <View style={styles.containerVariation}>
      <View style={[styles.textContainerInfo, styles.textContainerVariation]}>
        <Text style={styles.textInfo}>info</Text>
      </View>
      <View style={styles.textContainerVariation}>
        <Text style={styles.textVariant}>variants</Text>
      </View>
    </View>
    <GeneralInfo />
    <Price />
    <Details />
    <ProductType />
  </ScrollView>
);

export default NewProductScreen;
