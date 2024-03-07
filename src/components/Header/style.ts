import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashDisplayRegular: require('../../../assets/fonts/ClashDisplay-Regular.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      paddingTop: 30,
      height: 100,
      backgroundColor: '#EDEDED',
    },
    text: {
      fontSize: 20,
      fontWeight: 'bold',
      color: 'white',
      textAlign: 'center',
      fontFamily: fontsLoaded ? 'ClashDisplayRegular' : 'Arial',
    },
    image: {
      width: 120,
      height: 120,
      resizeMode: 'contain',
    },
  });

  return { fontsLoaded, styles };
};
