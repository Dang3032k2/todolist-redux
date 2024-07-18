import { call, put, takeEvery } from "redux-saga/effects";
import { addTodo, deleteTodo, getTodos, updateTodo } from "./api";
import {
  addTodoFailure,
  addTodoRequest,
  addTodoSuccess,
  deleteTodoFailure,
  deleteTodoRequest,
  deleteTodoSuccess,
  fetchTodosFailure,
  fetchTodosRequest,
  fetchTodosSuccess,
  updateTodoFailure,
  updateTodoRequest,
  updateTodoSuccess,
} from "./store/slices/todosSlice";

function* getTodosSaga() {
  try {
    const todos = yield call(getTodos);
    yield put(fetchTodosSuccess(todos));
  } catch (error) {
    yield put(fetchTodosFailure(error));
  }
}

function* addTodoSaga(action) {
  try {
    const addedItem = yield call(addTodo, action.payload);
    yield put(addTodoSuccess(addedItem));
  } catch (error) {
    yield put(addTodoFailure(error));
  }
}

function* updateTodoSaga(action) {
  try {
    const updatedItem = yield call(updateTodo, action.payload);
    yield put(updateTodoSuccess(updatedItem));
  } catch (error) {
    yield put(updateTodoFailure(error));
  }
}

function* deleteTodoSaga(action) {
  try {
    const deletedItem = yield call(deleteTodo, action.payload);
    yield put(deleteTodoSuccess(deletedItem));
  } catch (error) {
    yield put(deleteTodoFailure(error));
  }
}

function* todosSagas() {
  yield takeEvery(fetchTodosRequest.type, getTodosSaga);
  yield takeEvery(addTodoRequest.type, addTodoSaga);
  yield takeEvery(updateTodoRequest.type, updateTodoSaga);
  yield takeEvery(deleteTodoRequest.type, deleteTodoSaga);
}
export default todosSagas;
