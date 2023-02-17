import { configureStore } from '@reduxjs/toolkit';
import toDos from '../modules/todos.js';

const store = configureStore({
  reducer: {
    toDos,
  },
});

export default store;
