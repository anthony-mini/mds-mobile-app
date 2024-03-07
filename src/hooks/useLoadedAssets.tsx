import * as Font from 'expo-font';
import React from 'react';
import * as SplashScreen from 'expo-splash-screen';

export function useLoadedAssets() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        // Prevent native splash screen from autohiding
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          'ClashDisplay-Bold': require('../../assets/fonts/ClashDisplay-Bold.otf'),
          'ClashDisplay-Light': require('../../assets/fonts/ClashDisplay-Light.otf'),
          'ClashDisplay-Regular': require('../../assets/fonts/ClashDisplay-Regular.otf'),
          'ClashDisplay-Extralight': require('../../assets/fonts/ClashDisplay-Extralight.otf'),
          'ClashDisplay-Medium': require('../../assets/fonts/ClashDisplay-Medium.otf'),
          'ClashDisplay-Semibold': require('../../assets/fonts/ClashDisplay-Semibold.otf'),
          'ClashGrotesk-Bold': require('../../assets/fonts/ClashGrotesk-Bold.otf'),
          'ClashGrotesk-Light': require('../../assets/fonts/ClashGrotesk-Light.otf'),
          'ClashGrotesk-Regular': require('../../assets/fonts/ClashGrotesk-Regular.otf'),
          'ClashGrotesk-Extralight': require('../../assets/fonts/ClashGrotesk-Extralight.otf'),
          'ClashGrotesk-Medium': require('../../assets/fonts/ClashGrotesk-Medium.otf'),
          'ClashGrotesk-Semibold': require('../../assets/fonts/ClashGrotesk-Semibold.otf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
