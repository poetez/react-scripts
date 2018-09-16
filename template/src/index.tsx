import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './modules/shared/components/App';
import './modules/shared/core/style.global.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
