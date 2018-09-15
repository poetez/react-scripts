import * as React from 'react';
import ReactDOM from 'react-dom';
import App from './modules/shared/components/App';
import './modules/shared/core/styles.global';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App/>, document.getElementById('root'));
registerServiceWorker();
