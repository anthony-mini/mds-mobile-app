import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashDisplayRegular: require('../../../assets/fonts/ClashDisplay-Regular.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'red',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center',
      fontFamily: fontsLoaded ? 'ClashDisplayRegular' : 'Arial',
    },
  });

  return { fontsLoaded, styles };
};
