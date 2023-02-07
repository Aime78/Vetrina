import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

const TableProducts = () => (
  <View style={[styles.container, styles.shadow]}>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <Text style={styles.textHeader}>Product name</Text>
      </View>
      <View style={styles.columnTwo}>
        <Text style={styles.textHeader}>Price</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerRow}>
      <View style={styles.columnOne}>
        <View style={styles.containerBody}>
          <Image source={require('assets/t-shirt.png')} />
          <Text style={styles.textBody}>T shirt</Text>
        </View>
      </View>
      <View style={[styles.columnTwo, styles.columnBody]}>
        <Text style={styles.textBody}>30</Text>
      </View>
      <View style={styles.columnThree}>
        <Image source={require('assets/dots.png')} />
      </View>
    </View>
    <View style={styles.containerFooter}>
      <View style={styles.containerP}>
        <Text style={styles.textFooter}>P</Text>
        <Text style={styles.textFooter}>25</Text>
        <Image source={require('assets/chevron-down.png')} />
      </View>
      <View>
        <Text style={styles.textFooter}>1-25 of 25</Text>
      </View>
      <View style={styles.containerChevron}>
        <Image source={require('assets/chevron-left.png')} />
        <Image source={require('assets/chevron-right.png')} />
      </View>
    </View>
  </View>
);

export default TableProducts;
