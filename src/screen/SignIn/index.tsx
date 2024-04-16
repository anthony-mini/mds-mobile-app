import React from 'react';
import { View, Text, TextInput } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { Header } from '../../components';
import { useCustomStyles } from './style';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Navigation = NavigationProp<ParamListBase>;

const SignIn = ({ navigation }: { navigation: Navigation }) => {
  const { fontsLoaded, styles } = useCustomStyles();

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Connexion</Text>
        <TextInput style={styles.input} placeholder="Nom d'utilisateur" />
        <TextInput
          style={styles.input}
          placeholder="Mot de passe"
          secureTextEntry
        />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Se connecter</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default SignIn;
