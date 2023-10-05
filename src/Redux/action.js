import axios from "axios";
import { list } from "../data";
import {
  getJobListError,
  getJobListRequest,
  getJobListSuccess,
} from "./actionType";

const JoblistUrl = `https://backend-production-1eb3.up.railway.app/languages/`;

// using function curring
export const fetchjobs = (language) => (dispatch) => {
  try {
    let data = list(language);
    dispatch({ type: getJobListSuccess, payload: data });
  } catch (error) {
    dispatch({ type: getJobListError, payload: error.message });
  }
};
