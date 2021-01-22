import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import createSagaMiddleware from 'redux-saga'

import superheroReducer from './reducers/superheroReducer'
import sagaWatcher from './sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const reducers = combineReducers({
    superheroes: superheroReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // delete before sending
const store = createStore(reducers, composeEnhancers(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagaWatcher)

export default store