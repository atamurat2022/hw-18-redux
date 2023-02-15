import { AuthActionType } from "./actionTyoe";

const initialState = {
  email: "",
  isAuthorizen: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case AuthActionType.LOG_IN:
      return {
        ...state,
        email: action.payload,
        isAuthorizen: true,
      };
    case AuthActionType.LOG_OUT:
      return initialState;

    default:
      return state;
  }
};
