import { createProjectActionType, ProjectActionsEnum, createProjectErrorActionType } from "./project.types"
import {initialProjectState} from './project.state';

type allProjectActionTypes = createProjectActionType | createProjectErrorActionType;

export const projectReducer = (state = initialProjectState, action: allProjectActionTypes) => {
    switch (action.type) {
        case ProjectActionsEnum.CREATE_PROJECT:
            console.log("CREATE_PROJECT: " + action.project);
            return state;
        case ProjectActionsEnum.CREATE_PROJECT_ERROR:
            console.log("CREATE_PROJECT_ERROR: " + action.err);
            return state;
            
        
    }

    return state;
}