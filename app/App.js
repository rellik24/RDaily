import Router from './router'
// redirect src to app folder
import React from 'react'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
// import reducer, { types } from './reducer'


const store = createStore(
  // reducer,
  applyMiddleware(thunk),
)

export default () => (
  <Provider store={store}>
    <Router />
  </Provider>
)
