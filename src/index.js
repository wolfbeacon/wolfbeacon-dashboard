import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './components/router';
import registerServiceWorker from './utils/registerServiceWorker';

import './css/index.css';

ReactDOM.render(<AppRouter />, document.getElementById('root'));
registerServiceWorker();
