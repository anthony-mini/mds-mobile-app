import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useCustomStyles } from './style';
import { Header, GridList } from '../../components';
import { usePokemonData } from '../../hooks';

type Navigation = NavigationProp<ParamListBase>;

const Home = ({ navigation }: { navigation: Navigation }) => {
  const { fontsLoaded, styles } = useCustomStyles();
  const { data, isLoading } = usePokemonData('0');

  // console.log(data);

  return (
    <>
      <Header />
      <View style={styles.container}>
        <GridList />
      </View>
    </>
  );
};

export default Home;
