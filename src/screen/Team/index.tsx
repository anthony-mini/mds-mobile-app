// Team Screen
import React from 'react';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Header, TeamCard } from '../../components';
import { useCustomStyles } from './style';
import { NavigationProp } from '@react-navigation/native';

const TeamScreen = () => {
  const { fontsLoaded, styles } = useCustomStyles();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <TeamCard />
      </View>
    </>
  );
};

export default TeamScreen;
