import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers';
import Editor from './components/Editor';

const store = createStore(rootReducer);

const App = () => (
    <Provider store={store}>
        <Editor />
    </Provider>
);

export default App;