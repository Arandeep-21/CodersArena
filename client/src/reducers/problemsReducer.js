import { FETCH_PROBLEM_DATA } from "../actions/types";

const authReducer = (state = null, action) => {
  switch (action.type) {
    case FETCH_PROBLEM_DATA:
      return action.payload || false;
    default:
      return state;
  }
};
export default authReducer;
