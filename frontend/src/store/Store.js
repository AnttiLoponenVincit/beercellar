import { createStore, applyMiddleware } from 'redux';
import think from 'redux-thunk';
import RootReducer from '../reducers/RootReducer'

let store = createStore(RootReducer, applyMiddleware(thunk));

export default store;