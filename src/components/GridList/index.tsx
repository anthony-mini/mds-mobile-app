import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ImageBackground,
  FlatList,
  ActivityIndicator,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCustomStyles } from './style';
import { getAllPokemonByGeneration } from '../../services/pokemonService';
import { Data } from '../../interfaces/pokemonInterfaces';
import { SafeAreaView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';

const GridList = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [gen, setGen] = React.useState('1');

  React.useEffect(() => {
    setIsLoading(true);
    getAllPokemonByGeneration(gen).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [gen]);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <ActivityIndicator style={styles.loader} />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Picker
              selectedValue={gen}
              onValueChange={(itemValue) => setGen(itemValue)}
              style={styles.picker}
              itemStyle={styles.itemStyle}
            >
              {Array.from({ length: 9 }, (_, i) => i + 1).map((gen) => (
                <Picker.Item
                  key={gen}
                  label={`Generation ${gen}`}
                  value={gen}
                />
              ))}
            </Picker>
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
                  <TouchableOpacity
                    key={index}
                    onPress={() => {
                      // handle onPress
                    }}
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
                            <FeatherIcon color="#48496c" name="zap" size={14} />

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
                );
              },
            )
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default GridList;
