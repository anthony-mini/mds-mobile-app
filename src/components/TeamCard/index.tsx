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

const TeamCard = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(false);

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
                    <TouchableOpacity key={index}>
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

                          <View style={styles.cardFooter}>
                            <Text style={styles.cardFooterText}>
                              Height: {height}
                            </Text>

                            <Text style={styles.cardFooterText}>
                              Weight: {weight}
                            </Text>
                          </View>
                        </View>
                      </View>
                    </TouchableOpacity>
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
