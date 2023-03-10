import {View, Text, Image, Pressable} from 'react-native';
import styles from './styles';
import tableData from './tableData';

const OrdersTable = ({navigation}: any) => {
  const handleNavigate = () => navigation.navigate('Order');

  return (
    <View style={styles.container}>
      <View style={styles.containerRow}>
        <View style={styles.columnOne}>
          <Image source={require('assets/checkbox.png')} />
          <Text style={styles.textHeader}>#</Text>
          <Image source={require('assets/chevrons.png')} />
        </View>
        <View style={styles.columnTwo}>
          <Text style={styles.textHeader}>Name</Text>
          <Image source={require('assets/chevrons.png')} />
        </View>
        <View style={styles.columnThree}>
          <Text style={styles.textHeader}>Stato</Text>
          <Image source={require('assets/chevrons.png')} />
        </View>
        <View style={styles.columnFour}></View>
      </View>

      {tableData.map(data => (
        <Pressable key={data.id} onPress={handleNavigate}>
          <View style={styles.containerRow}>
            <View style={styles.columnOne}>
              <Image source={require('assets/checkbox.png')} />
              <Text style={styles.textBody}>2222</Text>
            </View>
            <View style={styles.columnTwo}>
              <Text style={styles.textBody}>Cameron Williamson</Text>
            </View>
            <View style={styles.columnThree}>{data.status}</View>
            <View style={styles.columnFour}>
              <Image source={require('assets/dots.png')} />
            </View>
          </View>
        </Pressable>
      ))}
    </View>
  );
};

export default OrdersTable;
