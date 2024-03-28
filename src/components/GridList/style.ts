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
      fontSize: 20,
      fontFamily: 'ClashDisplay-Semibold',
      color: '#2d2d2d',
    },
    cardPrice: {
      fontSize: 16,
      fontFamily: 'ClashDisplay-Semibold',
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
      width: 15,
      height: 15,
      borderRadius: 5,
    },
    picker: {
      width: '100%',
      marginBottom: 5,
      marginTop: -40,
    },
    itemStyle: {
      fontSize: 18,
      height: 100,
      fontFamily: 'ClashDisplay-Medium',
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
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    modalTitle: {
      fontSize: 26,
      marginBottom: 5,
      fontFamily: 'ClashDisplay-Semibold',
      color: '#2d2d2d',
    },
    modalBody: {
      flexDirection: 'row',
      marginBottom: 20,
      marginTop: 60,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    modalStats: {
      flex: 2,
    },
    modalDivider: {
      height: 1,
      backgroundColor: '#000',
      opacity: 0.5,
      width: '100%',
      marginBottom: 10,
    },
    modalFooter: {
      flexDirection: 'row',
      alignContent: 'center',
      width: '100%',
      gap: 10,
      justifyContent: 'center',
      marginBottom: 25,
    },
    modalType: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    modalTypeText: {
      fontFamily: 'ClashDisplay-Medium',
      fontSize: 16,
      marginBottom: 10,
    },
    modalCloseButton: {
      backgroundColor: '#2196F3',
      borderRadius: 20,
      width: 100,
      padding: 10,
      elevation: 2,
    },
    modalEncapsulateImg: {
      width: 150,
      height: 150,
      borderRadius: 50,
      overflow: 'hidden',
      margin: 10,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    modalImage: {
      width: '100%',
      height: '100%',
      resizeMode: 'cover',
    },
    modalView: {
      margin: 30,
      backgroundColor: 'white',
      borderRadius: 20,
      padding: 35,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
      width: '90%',
    },
    modalText: {
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'ClashDisplay-Semibold',
      color: '#444',
    },
    modalHeader: {
      position: 'absolute',
      top: 15,
      width: '100%',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    modalTextButton: {
      color: 'white',
      textAlign: 'center',
      fontSize: 16,
      fontFamily: 'ClashDisplay-Semibold',
    },
    absolute: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    },
  });

  return { fontsLoaded, styles };
};
