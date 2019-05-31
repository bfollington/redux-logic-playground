import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import { createLogicMiddleware } from 'redux-logic'
import logic from './logic'

export type ActionType = 
  | 'INCREMENT'
  | 'DECREMENT'
  | 'PING'
  | 'CONTINUE'
  | 'PONG'

export type Action = 
  | { type: 'INCREMENT' }
  | { type: 'DECREMENT' }
  | { type: 'CONTINUE' }
  | { type: 'PING' }
  | { type: 'PONG' }

function counter(state = 0, action: Action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1
    case 'DECREMENT':
      return state - 1
    default:
      return state
  }
}

function pingPong(state = 'None', action: Action) {
  switch (action.type) {
    case 'PING':
      return 'PING'
    case 'PONG':
      return 'PONG'
    default:
      return state
  }
}

const composeEnhancers = (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const logicMiddleware = createLogicMiddleware(logic)

const store = createStore(
  combineReducers({
    counter,
    pingPong,
  }),
  composeEnhancers(
    applyMiddleware(logicMiddleware)
  )
)

export default store