import {
  FETCHING_JOKES_START,
  FETCH_JOKES_SUCCESS,
} from "../actions/jokeActions";
const initialState = {
  jokes: [],
  isLoading: false,
  error: "",
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_JOKES_START: {
      return {
        ...state,
        isLoading: true,
        error: "",
      };
    }
    case FETCH_JOKES_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        jokes: action.payload,
      };
    }
    default:
      return state;
  }
};
