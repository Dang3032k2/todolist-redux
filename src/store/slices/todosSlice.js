import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};
export const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.todos.push(action.payload);
    },
    updateTask: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.id === action.payload.id ? action.payload : todo
      );
    },
    deleteTask: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTask, updateTask, deleteTask } = todosSlice.actions;
export default todosSlice.reducer;
