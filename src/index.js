import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/lib/integration/react';
import {persistor, store} from './store/configStore'


import './css/styles.css';
import App from './App';


const app = <Provider store={store}>
  <PersistGate persistor={persistor}>
    <App/>
  </PersistGate>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
