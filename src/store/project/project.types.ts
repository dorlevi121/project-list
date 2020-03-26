import { Project } from "../../models/project.model";

export interface ProjectState {
    projects: Project[]
}

export enum ProjectActionsEnum {
    CREATE_PROJECT = "CREATE_PROJECT",
    CREATE_PROJECT_ERROR = "CREATE_PROJECT_ERROR"
}

export interface ProjectActionPattern {
    type: ProjectActionsEnum; //Action Type
}

export interface createProjectActionType extends ProjectActionPattern {
    type: ProjectActionsEnum.CREATE_PROJECT,
    project: { title: string, content: string }
}

export interface createProjectErrorActionType extends ProjectActionPattern {
    type: ProjectActionsEnum.CREATE_PROJECT_ERROR,
    err: any
}