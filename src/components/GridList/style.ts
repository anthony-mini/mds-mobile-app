import { StyleSheet } from 'react-native';
import { useFonts } from 'expo-font';

export const useCustomStyles = () => {
  const [fontsLoaded] = useFonts({
    ClashGroteskBold: require('../../../assets/fonts/ClashGrotesk-Bold.otf'),
    ClashGroteskRegular: require('../../../assets/fonts/ClashGrotesk-Semibold.otf'),
  });

  const styles = StyleSheet.create({
    container: {
      padding: 24,
    },
    title: {
      fontSize: 28,
      fontWeight: '700',
      color: '#1d1d1d',
    },
    /** Card */
    card: {
      borderRadius: 12,
      backgroundColor: 'white',
      marginBottom: 24,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,
      elevation: 4,
    },
    cardTop: {
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      alignItems: 'center',
      justifyContent: 'center',
    },
    cardImg: {
      width: '100%',
      height: 180,
      zIndex: 100,
      borderTopLeftRadius: 12,
      borderTopRightRadius: 12,
      resizeMode: 'contain',
    },
    cardBody: {
      paddingVertical: 16,
      paddingHorizontal: 12,
    },
    cardHeader: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12,
    },
    cardTitle: {
      fontSize: 19,
      fontWeight: '600',
      color: '#2d2d2d',
    },
    cardPrice: {
      fontSize: 20,
      fontWeight: '700',
      color: '#444',
    },
    cardStats: {
      paddingBottom: 8,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginHorizontal: -12,
    },
    cardStatsItem: {
      paddingHorizontal: 12,
      flexDirection: 'row',
      alignItems: 'center',
    },
    cardStatsItemText: {
      fontSize: 14,
      fontWeight: '600',
      color: '#48496c',
      marginLeft: 4,
    },
    cardFooter: {
      paddingTop: 8,
      borderTopWidth: 1,
      borderColor: '#e9e9e9',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    cardFooterText: {
      fontSize: 14,
      fontWeight: '500',
      color: '#909090',
    },
    cardTypeImg: {
      width: 20,
      height: 20,
      borderRadius: 10,
    },
  });

  return { fontsLoaded, styles };
};
