import { initialAuthState } from "./auth.state";
import {
  logingErrorActionType,
  logingSuccessActionType,
  AuthActionsEnum,
  signOutActionType,
  signUpErrorActionType,
  signUpSuccessActionType
} from "./auth.types";

type allAuthActionTypes =
  | logingErrorActionType
  | logingSuccessActionType
  | signOutActionType
  | signUpErrorActionType
  | signUpSuccessActionType;

export const authReducer = (
  state = initialAuthState,
  action: allAuthActionTypes
) => {
  switch (action.type) {
    case AuthActionsEnum.LOGIN_ERROR:
      return {
        ...state,
        authError: "Login Failed!"
      };

    case AuthActionsEnum.LOGIN_SUCCESS:
      return {
        ...state,
        authError: null
      };

    case AuthActionsEnum.SIGNOUT_SUCCESS:
      return state;

    case AuthActionsEnum.SIGNUP_ERROR:
      return {
        ...state,
        authError: action.err.message
      };

    case AuthActionsEnum.SIGNUP_SUCCESS:
      return {
        ...state,
        authError: null
      };
  }

  return state;
};
