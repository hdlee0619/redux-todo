const initialState = [
  { id: 0, title: '리액트공부하기', comment: '리액트 기초를 공부해봅시다.', isDone: false },
  { id: 1, title: '항해99', comment: 'todolist 만들기', isDone: true },
];

const ADD_TO_DO = 'src/AddInput/ADD_TO_DO';
const DELETE_TO_DO = 'src/ToDoCards/DELETE_TO_DO';
const UPDATE_TO_DO = 'src/ToDoCards/UPDATE_TO_DO';

export const addToDo = (payload) => {
  return {
    type: ADD_TO_DO,
    payload: payload,
  };
};

export const deleteToDo = (payload) => {
  return {
    type: DELETE_TO_DO,
    payload: payload,
  };
};

export const updateToDo = (payload) => {
  return {
    type: UPDATE_TO_DO,
    payload: payload,
  };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      return [action.payload, ...state];
    case DELETE_TO_DO:
      return state.filter((item) => item.id !== action.payload);
    case UPDATE_TO_DO:
      action.payload.isDone = !action.payload.isDone;
      return state.map((item) => (item.id === action.payload.id ? action.payload : item));
    default:
      return state;
  }
};

export default todos;
