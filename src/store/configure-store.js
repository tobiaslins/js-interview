import { createStore, applyMiddleware, combineReducers } from 'redux'
import { createLogger } from 'redux-logger'

import persons from '../modules/persons'

const reducer = combineReducers({
  persons
})

const middlewares = []

if (process.env.NODE_ENV === 'development') {
  // we just want the logger for development
  middlewares.push(createLogger())
}

export default function configureStore() {
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(reducer)
}
