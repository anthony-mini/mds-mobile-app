import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  ActivityIndicator,
  ScrollView,
  Modal,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useCustomStyles } from './style';
import { getAllPokemonByGeneration } from '../../services/pokemonService';
import { Data } from '../../interfaces/pokemonInterfaces';
import { SafeAreaView } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { Picker } from '@react-native-picker/picker';
import { BlurView } from 'expo-blur';

const GridList = () => {
  const { fontsLoaded, styles } = useCustomStyles();
  const navigation = useNavigation();

  const [data, setData] = React.useState<Data[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [gen, setGen] = React.useState('1');
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<Data | null>(null);

  React.useEffect(() => {
    setIsLoading(true);
    getAllPokemonByGeneration(gen).then((res) => {
      setData(res);
      setIsLoading(false);
    });
  }, [gen]);

  const handlePress = (pokemon: Data) => {
    setSelectedPokemon(pokemon);
    setModalVisible(true);
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
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
            style={styles.modalContainer}
          >
            <BlurView intensity={60} tint="light" style={styles.absolute}>
              <View style={styles.centeredView}>
                <View style={styles.modalView}>
                  <View style={styles.modalHeader}>
                    <Text style={styles.modalTitle}>
                      {selectedPokemon?.name?.fr}
                    </Text>
                    <Text style={styles.modalText}>
                      Pokedex ID: {selectedPokemon?.pokedex_id}
                    </Text>
                  </View>
                  <View style={styles.modalBody}>
                    <View style={styles.modalEncapsulateImg}>
                      <Image
                        source={{ uri: selectedPokemon?.sprites?.regular }}
                        style={styles.modalImage}
                        resizeMode="cover"
                      />
                    </View>
                    <View style={styles.modalStats}>
                      <Text style={styles.modalTypeText}>
                        Hp: {selectedPokemon?.stats?.hp}
                      </Text>
                      <Text style={styles.modalTypeText}>
                        Atk: {selectedPokemon?.stats?.atk}
                      </Text>
                      <Text style={styles.modalTypeText}>
                        Def: {selectedPokemon?.stats?.def}
                      </Text>
                      <Text style={styles.modalTypeText}>
                        Spé. Atk: {selectedPokemon?.stats?.spe_atk}
                      </Text>
                      <Text style={styles.modalTypeText}>
                        Spé. Def: {selectedPokemon?.stats?.spe_def}
                      </Text>
                      <Text style={styles.modalTypeText}>
                        Vit: {selectedPokemon?.stats?.vit}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.modalDivider} />
                  <View style={styles.modalFooter}>
                    {selectedPokemon?.types?.map((type, index) => (
                      <View key={index} style={styles.modalType}>
                        <Image
                          source={{ uri: type.image }}
                          style={{ width: 25, height: 25, borderRadius: 20 }}
                        />
                      </View>
                    ))}
                  </View>
                  <TouchableOpacity
                    style={styles.modalCloseButton}
                    onPress={() => {
                      setModalVisible(!modalVisible);
                    }}
                  >
                    <Text style={styles.modalTextButton}>Fermer</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </BlurView>
          </Modal>

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
                      handlePress(data[index]);
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
