import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../../assets/logos';

const Header = () => {
  const navigation = useNavigation();

  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
        <Image source={Logo} style={{ width: 100, height: 100 }} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
