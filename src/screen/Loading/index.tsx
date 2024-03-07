import React, { useEffect } from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import { useCustomStyles } from './style';

type Navigation = NavigationProp<ParamListBase>;

const Loading = ({ navigation }: { navigation: Navigation }) => {
  const { fontsLoaded, styles } = useCustomStyles();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Home');
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;
