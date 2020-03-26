import { ProjectActionsEnum } from "./project.types";

export const createProject = (project: { title: string; content: string }) => {
    return (dispach: any, getState: any, { getFirebase, getFirestore }: any) => {
        const profile = getState().firebase.profile;
        const authId = getState().firebase.auth.uid;

        //add to db
        const fitestore = getFirestore();
        fitestore.collection('projects').add({
            ...project,
            authorFirstName: profile.firstName,
            authorLastName: profile.lastName,
            authorId: authId,
            createAt: new Date()
                }).then(() => {
            dispach({ type: ProjectActionsEnum.CREATE_PROJECT, project: project })
        }).catch((err: any) => {
            dispach({ type: ProjectActionsEnum.CREATE_PROJECT_ERROR, err: err })
        })
    }
}
