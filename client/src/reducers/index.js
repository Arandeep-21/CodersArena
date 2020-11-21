import { combineReducers } from "redux";
import authReducer from "./authReducer";
import problemsReducer from "./problemsReducer";

export default combineReducers({
  auth: authReducer,
  numOfProblems: problemsReducer,
});
