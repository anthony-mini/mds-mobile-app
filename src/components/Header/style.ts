import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashGroteskBold: require('../../../assets/fonts/ClashGrotesk-Bold.otf'),
    ClashGroteskRegular: require('../../../assets/fonts/ClashGrotesk-Semibold.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      position: 'relative',
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
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
    },
    text: {
      position: 'absolute',
      top: -20,
      marginBottom: 20,
      fontSize: 38,
      color: '#707070',
      textAlign: 'center',
      fontFamily: fontsLoaded ? 'ClashGroteskRegular' : 'Arial',
    },
    highlightedText: {
      color: '#514EB7',
      fontFamily: fontsLoaded ? 'ClashGroteskBold' : 'Arial',
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
      flexDirection: 'row',
      position: 'absolute',
      alignItems: 'flex-start',
      top: 70,
      left: 20,
    },
    loader: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    loadingText: {
      fontFamily: 'ClashDisplay-Semibold',
      marginTop: 10,
      fontSize: 18,
      color: '#333',
    },
  });

  return { fontsLoaded, styles };
};
