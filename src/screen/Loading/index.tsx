import React from 'react';
import { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './style';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

type Navigation = NavigationProp<ParamListBase>;

const Loading = ({ navigation }: { navigation: Navigation }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('SignIn');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;
