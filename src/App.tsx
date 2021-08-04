import React, { useState } from 'react'
import './App.css'
import Counter from './Counter'

import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import { Provider } from 'react-redux'


function reducer(state = 0, action: any) {
  console.log(action)
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'INCREMENT_IF_ODD':
      return (state % 2 !== 0) ? state + 1 : state
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(rootSaga)

const action = (type: any) => store.dispatch({ type })

function App() {

  return (
    <Provider store={store}>
      <div className="App">
        <Counter
          onIncrement={() => action('INCREMENT')}
          onDecrement={() => action('DECREMENT')}
          onIncrementAsync={() => action('INCREMENT_ASYNC')}
        />
      </div>
    </Provider>
  )
}

export default App
