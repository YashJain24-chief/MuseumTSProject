import React from 'react';
import Navigation from './src/Navigation/Navigation';
import {Provider} from 'react-redux';
import store from './src/Redux/Store';

function App() {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
}

export default App;
