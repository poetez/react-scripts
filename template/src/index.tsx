import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './modules/shared/components/App';
import './modules/shared/core/style.global.css';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
