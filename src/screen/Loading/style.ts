import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashGrotesk: require('../../../assets/fonts/ClashDisplay-Bold.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'red',
      textAlign: 'center',
      fontFamily: fontsLoaded ? 'ClashGrotesk' : 'Arial',
    },
  });

  return { fontsLoaded, styles };
};
