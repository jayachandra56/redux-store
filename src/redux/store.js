import { combineReducers, createStore } from 'redux';
import cakeReducer from './cakes/cakeReduser';
import iceCreamReducer from './iceCreams/iceCreamReducer';

//single reducer
// const store = createStore(cakeReducer)

//multiple reducers
const reducers = combineReducers({
  cake: cakeReducer,
  iceCream: iceCreamReducer
})
const store = createStore(reducers)

export default store