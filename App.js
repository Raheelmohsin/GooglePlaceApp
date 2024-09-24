import React from 'react';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import SearchPlace from './src/screens/SearchPlace';

const App = () => {
    return (
        <Provider store={store}>
            <SearchPlace />
        </Provider>
    );
};

export default App;
