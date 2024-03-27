import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCustomStyles } from './style';
import { pokeBackground } from '../../../assets/images';
import Icon from 'react-native-vector-icons/Feather';

const MyBigBurger = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      // @ts-ignore
      onPress={() => navigation.openDrawer()}
      style={{
        bottom: 13,
        right: 20,
      }}
    >
      <Icon name="menu" size={32} color="#1d1d1d" />
    </TouchableOpacity>
  );
};

const Header = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={pokeBackground} style={styles.imageBackground} />
      <View style={styles.navigationContainer}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home' as never)}
          style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '90%',
          }}
        >
          <Text style={styles.text}>
            <Text style={styles.highlightedText}>Poke</Text>
            dex
          </Text>
        </TouchableOpacity>
        <MyBigBurger />
      </View>
    </View>
  );
};

export default Header;
