import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.scss';
import AppContainer from 'pages';

ReactDOM.render(
    <BrowserRouter>
        <AppContainer />
    </BrowserRouter>,
    document.getElementById('root')
);