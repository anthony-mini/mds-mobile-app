import React from 'react';
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
import { getAllPokemon } from '../../services/pokemonService';
import { Data } from '../../interfaces/pokemonInterfaces';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native';

// @ts-ignore
import FeatherIcon from 'react-native-vector-icons/Feather';

const GridList = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    getAllPokemon().then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, []);

  return (
    <SafeAreaView>
      {isLoading ? (
        <View>
          <ActivityIndicator />
          <Text>Loading...</Text>
        </View>
      ) : (
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Available Pokemon</Text>

          {data.map(
            (
              {
                pokedex_id,
                generation,
                category,
                name,
                sprites,
                types,
                talents,
                stats,
                resistances,
                evolution,
                height,
                weight,
                egg_groups,
                sexe,
                catch_rate,
                level_100,
                forme,
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

                        {/* <View style={styles.cardStatsItem}>
                          <FeatherIcon color="#48496c" name="clock" size={14} />

                          <Text style={styles.cardStatsItemText}>
                            Forme: {forme}
                          </Text>
                        </View> */}
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
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default GridList;
