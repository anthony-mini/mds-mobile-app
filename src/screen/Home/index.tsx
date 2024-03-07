import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useCustomStyles } from './style';
import { Header } from '../../components';

type Navigation = NavigationProp<ParamListBase>;

const Home = ({ navigation }: { navigation: Navigation }) => {
  const { fontsLoaded, styles } = useCustomStyles();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
      </View>
    </>
  );
};

export default Home;