import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { SignIn } from '../../../screen';

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="SignIn" component={SignIn} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
};

export default App;
