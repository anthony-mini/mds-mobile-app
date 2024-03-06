import React from 'react';
import { View, ActivityIndicator, Text } from 'react-native';
import styles from './style';

const Loading: () => React.JSX.Element = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#0000ff" />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

export default Loading;
