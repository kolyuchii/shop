import {combineReducers, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import list from './list';

const rootReducer = combineReducers({
    list
});

export default createStore(rootReducer, {}, applyMiddleware(thunk));