import React from 'react';
import {Image, View, Pressable, Text} from 'react-native';
import styles from './styles';

type HeaderProps = {
  navigation: any;
  showIcons: boolean;
};
const Header = ({navigation, showIcons}: HeaderProps) => (
  <View style={styles.container}>
    <View style={styles.containerMenu}>
      <Pressable onPress={navigation.toggleDrawer}>
        <Image source={require('assets/menu.png')} />
      </Pressable>
      <Text style={styles.text}>Dashboard</Text>
    </View>
    {showIcons && (
      <View style={styles.containerIcon}>
        <Image source={require('assets/search.png')} />
        <Image source={require('assets/vector.png')} />
      </View>
    )}
  </View>
);

export default Header;
