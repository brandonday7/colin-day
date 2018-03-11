import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./containers/Root"
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import history from './history'

ReactDOM.render(<Root history={history} />, document.getElementById('root'));
registerServiceWorker();
