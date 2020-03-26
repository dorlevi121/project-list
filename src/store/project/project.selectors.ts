import { ProjectState } from "./project.types";
import { Project } from "../../models/project.model";

export const getAllProjects = (state: any): Project[] => state.project.projects;