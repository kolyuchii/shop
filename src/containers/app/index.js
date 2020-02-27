import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from 'containers/header';
import ProductListContainer from 'pages/product-list';

const AppContainer = () => {
    return (
        <div className="app">
            <Header/>
            <Switch>
                {/*I case when we need more pages*/}
                <Route exact path='/' component={ProductListContainer} />
            </Switch>
        </div>
    );
};

export default AppContainer;
