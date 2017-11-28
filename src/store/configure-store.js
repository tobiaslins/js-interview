import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'

import persons from '../modules/persons'
import rootSaga from '../sagas'

const reducer = combineReducers({
  persons
})

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

if (process.env.NODE_ENV === 'development') {
  // we just want the logger for development
  middlewares.push(createLogger())
}

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  const store = {
    ...createStoreWithMiddleware(reducer),
    runSaga: sagaMiddleware.run
  }
  store.runSaga(rootSaga)
  return store
}
