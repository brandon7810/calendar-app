import React from 'react';
import ReactDOM from 'react-dom';
import 'stylesheets/index.css';
import 'antd/dist/antd.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import calendarApp from './reducers';
import App from 'components/App';
import registerServiceWorker from 'helpers/registerServiceWorker';

const store = createStore(calendarApp);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);
registerServiceWorker();
