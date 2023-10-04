import axios from "axios";
import {
  getJobListError,
  getJobListRequest,
  getJobListSuccess,
} from "./actionType";

const JoblistUrl = `backend-production-1eb3.up.railway.app/languages`;

// using function curring
export const fetchjobs = (language) => async (dispatch) => {
  const queryParams = {
    category: language,
  };
  try {
    dispatch({ type: getJobListRequest });
    let data = await axios.get(JoblistUrl, {
      params: queryParams,
    });
    dispatch({ type: getJobListSuccess, payload: data.data });
  } catch (error) {
    dispatch({ type: getJobListError, payload: error.message });
  }
};
