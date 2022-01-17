import './styles/styles.css';

import React from 'react';
import ReactDOM from 'react-dom';

import app from './pages/app/_app';
import * as serviceWorker from '../my-app/serviceWorker.js';

// create barrel export

ReactDOM.render(<app />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
