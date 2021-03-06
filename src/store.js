import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from './reducers/rootReducer';
import weatherSaga from './sagas/sagas'

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();
// mount it on the Store

const store = createStore(
    rootReducer, composeWithDevTools(
        applyMiddleware(sagaMiddleware),
    ));

// then run the saga
sagaMiddleware.run(weatherSaga);

export default store;