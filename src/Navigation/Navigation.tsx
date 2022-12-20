import Museum from '../components/MuseumModule/Screens/Museum';
import MusemDetails from '../components/MuseumModule/Screens/MuseumDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MuseumScreens from '../components/MuseumModule/constants/ScreenConstants';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name={MuseumScreens.Museum} component={Museum} />
        <Stack.Screen
          name={MuseumScreens.MuseumDetails}
          component={MusemDetails}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
