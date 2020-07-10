// App Imports
import { isEmpty } from "../../../setup/helpers";
import {
  SET_USER,
  LOGIN_REQUEST,
  LOGIN_RESPONSE,
  LOGOUT,
  UPDATE_STYLE,
} from "./actions";

// Initial State
export const userInitialState = {
  error: null,
  isLoading: false,
  isAuthenticated: false,
  details: null,
};

// State - reducer
export default (state = userInitialState, action) => {
  // type and payload
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        details: action.user,
      };

    case LOGIN_REQUEST:
      return {
        ...state,
        error: null,
        isLoading: action.isLoading,
      };

    case LOGIN_RESPONSE:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };

    case LOGOUT:
      return {
        ...state,
        error: null,
        isLoading: false,
        isAuthenticated: false,
        details: null,
      };

    // add UPDATE_STYLE action type to state
    case UPDATE_STYLE:
      const updatedDetails = state.details;
      updatedDetails.stylePreference = action.payload;
      return {
        ...state,
        error: null,
        isLoading: false,
        details: updatedDetails,
      };

    default:
      return state;
  }
};
