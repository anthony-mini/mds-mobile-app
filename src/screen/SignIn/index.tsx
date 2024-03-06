import React from 'react';
import { View, Text } from 'react-native';
import styles from './style';

const SignIn: () => React.JSX.Element = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign In</Text>
    </View>
  );
};

export default SignIn;
