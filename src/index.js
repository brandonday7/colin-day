import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Root from "./containers/Root"
import registerServiceWorker from './registerServiceWorker';
import 'font-awesome/css/font-awesome.min.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


ReactDOM.render(<MuiThemeProvider><Root /></MuiThemeProvider>, document.getElementById('root'));
registerServiceWorker();
