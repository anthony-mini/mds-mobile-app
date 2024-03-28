// Component Team Card

import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCustomStyles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Data } from '../../interfaces/pokemonInterfaces';
import { useFocusEffect } from '@react-navigation/native';

const TeamCard = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

  // Get Data of AsyncStorage

  useFocusEffect(
    React.useCallback(() => {
      const fetchPokemon = async () => {
        const currentPokemon = await AsyncStorage.getItem('capturedPokemon');
        if (currentPokemon) {
          console.log(
            'Retrieved captured pokemon:',
            JSON.parse(currentPokemon),
          );
        } else {
          console.log('No captured pokemon in storage');
        }
      };

      fetchPokemon();

      return () => {};
    }, []),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Mon Équipe</Text>
    </View>
  );
};

export default TeamCard;
