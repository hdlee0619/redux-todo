import { createStore } from 'redux';
import { combineReducers } from 'redux';
import toDos from '../modules/toDos.js';

const rootReducer = combineReducers({
  toDos,
});
const store = createStore(rootReducer);

export default store;
