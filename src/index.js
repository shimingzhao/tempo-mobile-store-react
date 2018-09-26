import React from 'react';
import ReactDOM from 'react-dom';
// import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store/configStore'

import './css/styles.css';
import App from './App';

const app = <Provider store={store}>
    <App/>
</Provider>

ReactDOM.render(app, document.getElementById('root'));
