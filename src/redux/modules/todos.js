import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 0, title: '리액트공부하기', comment: '리액트 기초를 공부해봅시다.', isDone: false },
  { id: 1, title: '항해99', comment: 'todolist 만들기', isDone: true },
];

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addToDo: (state, action) => {
      state.unshift(action.payload);
    },
    deleteToDo: (state, action) => {
      return state.filter((item) => item.id !== action.payload);
    },
    updateToDo: (state, action) => {
      let copy = { ...action.payload };
      copy.isDone = !copy.isDone;
      return state.map((item) => (item.id === action.payload.id ? copy : item));
    },
  },
});

// export default todos;
export default todosSlice.reducer;
export const { addToDo, deleteToDo, updateToDo } = todosSlice.actions;
