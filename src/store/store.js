import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "./slices/todosSlice";
import createSagaMiddleWare from "redux-saga";
import todosSagas from "../saga";

const sagaMiddleware = createSagaMiddleWare();
export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(todosSagas);
