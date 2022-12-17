import React from 'react';

import Museum from './src/components/MuseumModule/Screens/Museum';
import MusemDetails from './src/components/MuseumModule/Screens/MuseumDetails';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {Provider} from 'react-redux';
import store from './src/Redux/Store';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Museum" component={Museum} />
          <Stack.Screen name="MuseumDetails" component={MusemDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
