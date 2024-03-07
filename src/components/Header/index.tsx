import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Logo } from '../../../assets/logos';
import { useCustomStyles } from './style';
import { pokeBackground } from '../../../assets/images';

const Header = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={pokeBackground} style={styles.imageBackground} />
      <View style={styles.navigationContainer}>
        {/* <Text> arrow </Text> */}
        <TouchableOpacity onPress={() => navigation.navigate('Home' as never)}>
          <Text style={styles.text}>
            <Text style={styles.highlightedText}>Poke</Text>
            dex
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
