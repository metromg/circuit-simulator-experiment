import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import Editor from './components/Editor';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => (
    <Provider store={store}>
        <Editor />
    </Provider>
);

export default App;