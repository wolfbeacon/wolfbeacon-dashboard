import React from 'react';
import ReactDOM from 'react-dom';
import Promise from 'bluebird';

import AppRouter from './components/router';
import registerServiceWorker from './utils/registerServiceWorker';

import './css/index.css';

global.Promise = Promise;
window.Promise = Promise;

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
