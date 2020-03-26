export interface AuthState {
    authError: string | null
}

export enum AuthActionsEnum {
    LOGIN_SUCCESS = "LOGIN_SUCCESS",
    LOGIN_ERROR = "LOGIN_ERROR",
    SIGNOUT_SUCCESS = "SIGNOUT_SUCCESS",
    SIGNUP_SUCCESS = "SIGNUP_SUCCESS",
    SIGNUP_ERROR = "SIGNUP_ERROR"
}

export interface AuthActionPattern {
    type: AuthActionsEnum; //Action Type
}

export interface logingSuccessActionType extends AuthActionPattern {
    type: AuthActionsEnum.LOGIN_SUCCESS
}

export interface logingErrorActionType extends AuthActionPattern {
    type: AuthActionsEnum.LOGIN_ERROR
    err: any
}

export interface signOutActionType extends AuthActionPattern {
    type: AuthActionsEnum.SIGNOUT_SUCCESS
}

export interface signUpSuccessActionType extends AuthActionPattern {
    type: AuthActionsEnum.SIGNUP_SUCCESS
}

export interface signUpErrorActionType extends AuthActionPattern {
    type: AuthActionsEnum.SIGNUP_ERROR,
    err: any
}