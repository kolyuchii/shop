import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from 'containers/header';
import ProductListContainer from 'pages/product-list';

// Expire listings

const AppContainer = () => (
    <div className="app">
        <Header />
        <div className="app__container">
            <Switch>
                <Route exact path='/' component={ProductListContainer}/>
            </Switch>
        </div>
    </div>
);

export default AppContainer;
