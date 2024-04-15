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
      backgroundColor: '#F2F7F9',
    },
    text: {
      fontSize: 28,
      color: '#444',
      textAlign: 'center',
      fontFamily: 'ClashDisplay-Semibold',
      marginBottom: 25,
    },
    input: {
      height: 50,
      borderColor: 'gray',
      borderWidth: 1,
      marginBottom: 10,
      padding: 10,
      width: '80%',
      borderRadius: 10,
      marginVertical: 15,
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      margin: 15,
      height: 40,
      width: '80%',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      paddingHorizontal: 15,
      paddingVertical: 10,
      marginTop: 40,
    },
    buttonText: {
      textAlign: 'center',
      fontSize: 18,
      fontFamily: 'ClashDisplay-Semibold',
      color: '#fff',
    },
  });

  return { fontsLoaded, styles };
};
