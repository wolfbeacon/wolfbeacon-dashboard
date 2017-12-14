import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import AppRouter from './components/router';
import registerServiceWorker from './utils/registerServiceWorker';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
