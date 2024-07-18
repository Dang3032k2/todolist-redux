import { combineReducers } from "redux";
import todolistReducer from "./todolist";

const allReducers = combineReducers({ todolistReducer });
export default allReducers;
