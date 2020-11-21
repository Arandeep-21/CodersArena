import axios from "axios";
import history from "../history";
import { FETCH_USER, FETCH_PROBLEM_DATA } from "./types.js";

export const fetchUser = () => async (dispatch) => {
  const response = await axios.get("/api/current_user");
  dispatch({ type: FETCH_USER, payload: response.data });
};

export const fetch_problem_data = (handle) => async (dispatch) => {
  const response = await axios.get("/api/problems_data", {
    params: {
      handle: handle,
    },
  });
  console.log(response);
  dispatch({ type: FETCH_PROBLEM_DATA, payload: response.data });
};
