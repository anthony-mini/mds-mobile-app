import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../../assets/logos';
import { useCustomStyles } from './style';

const Header = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
        <Image
          source={Logo}
          style={styles.image}
          accessible
          accessibilityLabel="Logo"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
