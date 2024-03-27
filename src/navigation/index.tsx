import * as React from 'react';
import {
  NavigationContainer,
  DarkTheme,
  DefaultTheme,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { Loading, SignIn, Home } from '../screen/index';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName="Home"
    >
      <Stack.Screen name="Loading" component={Loading} />
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        drawerPosition: 'right',
        drawerStyle: {
          backgroundColor: '#F2F7F9',
        },
        drawerItemStyle: {
          marginVertical: 5,
        },
        drawerLabelStyle: {
          color: '#1d1d1d',
          fontSize: 18,
          fontFamily: 'ClashGrotesk-Semibold',
        },
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Sign In" component={SignIn} />
      {/* Ajoutez ici d'autres écrans si nécessaire */}
    </Drawer.Navigator>
  );
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
}
