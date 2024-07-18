import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
  loading: false,
  error: null,
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodosRequest: (state) => {
      state.error = null;
      state.loading = true;
    },
    fetchTodosSuccess: (state, action) => {
      state.todos = action.payload;
      state.loading = false;
    },
    fetchTodosFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    addTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos.push(action.payload);
    },
    addTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    updateTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    updateTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    updateTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    deleteTodoRequest: (state) => {
      state.loading = true;
      state.error = null;
    },
    deleteTodoSuccess: (state, action) => {
      state.loading = false;
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
    deleteTodoFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
export const {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
  fetchTodosSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
} = todosSlice.actions;

export default todosSlice.reducer;
