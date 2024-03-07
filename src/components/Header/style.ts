import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashGroteskBold: require('../../../assets/fonts/ClashGrotesk-Bold.otf'),
    ClashGroteskRegular: require('../../../assets/fonts/ClashGrotesk-Semibold.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      height: 180,
      backgroundColor: '#F2F7F9',
      borderBottomColor: 'rgba(160, 160, 160, 0.3)',
      borderBottomWidth: 1,
      shadowColor: 'rgba(160, 160, 160, 0.3)',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.65,
      shadowRadius: 3.84,
      elevation: 10,
    },
    text: {
      fontSize: 42,
      color: '#707070',
      textAlign: 'center',
      fontFamily: fontsLoaded ? 'ClashGroteskRegular' : 'Arial',
    },
    highlightedText: {
      color: '#514EB7',
      fontFamily: fontsLoaded ? 'ClashGroteskBold' : 'Arial',
    },
    image: {
      width: 150,
      height: 150,
      resizeMode: 'contain',
    },
    imageBackground: {
      position: 'absolute',
      top: 20,
      right: -50,
      width: 150,
      height: 150,
      opacity: 1,
      resizeMode: 'contain',
    },
    navigationContainer: {
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      alignItems: 'flex-start',
      top: 70,
      left: 20,
    },
  });

  return { fontsLoaded, styles };
};
