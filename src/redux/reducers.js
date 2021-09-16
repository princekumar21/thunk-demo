import { useDispatch } from "react-redux";
import { fetchActions, sucessActions, failureActions } from "./actions";

let initialState = {
  data: [],
  loading: null,
  error: null,
};

export const fetchReducer = (state = initialState, action) => {
  // let dispatch = useDispatch();
  switch (action.type) {
    case "FETCH_USER":
      return {
        ...state,
        loading: true,
      };
    case "SUCESS_USER":
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    case "FAILURE_USER":
      return {
        ...state,
        error: action.payload,
        loading: false,
      };

    default:
      return state;
  }
};

// this is a part of thunk
export const fetchUser = () => {
  return (dispatch) => {
    dispatch(fetchActions());
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        return res.json();
      })
      .then((json) => {
        dispatch(sucessActions(json));
      })
      .catch((err) => {
        dispatch(failureActions(err));
      });
  };
};
