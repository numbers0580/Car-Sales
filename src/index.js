import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {reducer} from './reducers/reducer';
import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

const carStore = createStore(reducer);

const rootElement = document.getElementById('root');
ReactDOM.render(<Provider store={carStore}><App /></Provider>, rootElement);
