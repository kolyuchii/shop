import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.scss';
import AppContainer from 'containers/app';
import store from "store";

// Hello!
// Despite this is just a technical test I tried to build it as a true SPA application
// with routing, global state and separation of big containers into smaller ones
// Pages -> containers -> components
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppContainer />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);