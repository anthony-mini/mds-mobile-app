// Component Team Card

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCustomStyles } from './style';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Data } from '../../interfaces/pokemonInterfaces';
import { useFocusEffect } from '@react-navigation/native';
import { SafeAreaView } from 'react-native';
import { BlurView } from 'expo-blur';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Swipeable } from 'react-native-gesture-handler';

const TeamCard = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const capturedPokemons = data;

  const uniquePokemons = capturedPokemons.filter(
    (pokemon, index, self) =>
      index ===
      self.findIndex(
        (p) =>
          p.location?.latitude === pokemon.location?.latitude &&
          p.location?.longitude === pokemon.location?.longitude,
      ),
  );

  // Get Data of AsyncStorage
  useFocusEffect(
    React.useCallback(() => {
      setIsLoading(true);
      const fetchPokemon = async () => {
        const currentPokemon = await AsyncStorage.getItem('capturedPokemon');
        if (currentPokemon) {
          console.log(
            'Retrieved captured pokemon:',
            JSON.parse(currentPokemon),
          );
          setData(JSON.parse(currentPokemon));
          setIsLoading(false);
        } else {
          console.log('No captured pokemon in storage');
        }
      };

      fetchPokemon();

      return () => {};
    }, []),
  );

  const deleteItem = (pokedex_id: number) => {
    const deletePokemon = async () => {
      const currentPokemon = await AsyncStorage.getItem('capturedPokemon');
      if (currentPokemon) {
        const newPokemon = JSON.parse(currentPokemon).filter(
          (pokemon: Data) => pokemon.pokedex_id !== pokedex_id,
        );
        if (newPokemon.length > 0) {
          await AsyncStorage.setItem(
            'capturedPokemon',
            JSON.stringify(newPokemon),
          );
        } else {
          await AsyncStorage.removeItem('capturedPokemon');
        }
        setData(newPokemon);
      }
    };

    deletePokemon();
  };

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <ActivityIndicator style={styles.loader} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.blocTitle}>
            <Text style={styles.teamTitle}> Mon Équipe </Text>
          </View>
          {isLoading ? (
            <ActivityIndicator />
          ) : (
            data &&
            data.map(
              (
                {
                  pokedex_id,
                  generation,
                  name,
                  sprites,
                  types,
                  height,
                  weight,
                },
                index,
              ) => {
                return (
                  <>
                    <Swipeable
                      key={pokedex_id}
                      renderRightActions={() => (
                        <TouchableOpacity
                          onPress={() => deleteItem(pokedex_id)}
                          style={styles.blocDeleteButton}
                        >
                          <View style={styles.blocDeleteButton}>
                            <Text style={styles.textDeleteButton}>Retirer</Text>
                          </View>
                        </TouchableOpacity>
                      )}
                    >
                      <View style={styles.card}>
                        <View style={styles.cardTop}>
                          <Image
                            alt=""
                            resizeMode="cover"
                            style={styles.cardImg}
                            source={{ uri: sprites?.regular }}
                          />
                        </View>

                        <View style={styles.cardBody}>
                          <View style={styles.cardHeader}>
                            <Text style={styles.cardTitle}>{name?.fr}</Text>

                            <Text style={styles.cardPrice}>
                              Pokedex ID: {pokedex_id}
                            </Text>
                          </View>

                          <View style={styles.cardStats}>
                            <View style={styles.cardStatsItem}>
                              <FeatherIcon
                                color="#48496c"
                                name="zap"
                                size={14}
                              />

                              <Text style={styles.cardStatsItemText}>
                                Generation: {generation}
                              </Text>
                            </View>

                            <View style={styles.cardStatsItem}>
                              {types?.map((type, index) => (
                                <View
                                  key={index}
                                  style={{
                                    flexDirection: 'row',
                                    alignItems: 'center',
                                    marginRight: 3,
                                    marginLeft: 3,
                                  }}
                                >
                                  <Image
                                    source={{ uri: type.image }}
                                    style={styles.cardTypeImg}
                                  />
                                  <Text style={styles.cardStatsItemText}>
                                    {type.name}
                                  </Text>
                                </View>
                              ))}
                            </View>
                          </View>

                          {uniquePokemons.map((pokemon, index) => (
                            <View key={index}>
                              <Text style={styles.cardFooterText}>
                                Latitude: {pokemon.location?.latitude}
                              </Text>
                              <Text style={styles.cardFooterText}>
                                Longitude: {pokemon.location?.longitude}
                              </Text>
                            </View>
                          ))}
                        </View>
                      </View>
                    </Swipeable>
                  </>
                );
              },
            )
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default TeamCard;
