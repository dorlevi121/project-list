import {combineReducers} from "redux";
import { projectReducer } from "./project/project.reducer";
import { authReducer } from "./auth/auth.reducer";
import {firestoreReducer} from 'redux-firestore';
import {firebaseReducer} from 'react-redux-firebase';

export const rootReducer = combineReducers({
    project: projectReducer,
    auth:  authReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
})