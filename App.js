import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SearchPlace from './src/screens/SearchPlace';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{ flex: 1 }}>
        <SearchPlace />
      </SafeAreaView>
    </Provider>
  );
}; 

export default App;
