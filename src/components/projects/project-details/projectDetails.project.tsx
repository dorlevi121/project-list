import React from "react";
import ProjectDetailsStyle from "./projectDetails.module.scss";
import { firestoreConnect } from "react-redux-firebase";
import moment from 'moment';
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

interface StateProps {
  project: any;
  auth: any
}
interface Props {
  match: any;
}

type OwnProps = StateProps & Props;

const ProjectDetails: React.FC<OwnProps> = props => {
  if (!props.auth.uid) return <Redirect to="/signin" />;
  
  if (!props.project) return ( <p>Loading Project...</p>);

  return (
    <div className={ProjectDetailsStyle.ProjectDetails}>
      <div className={ProjectDetailsStyle.Card}>
        <div className={ProjectDetailsStyle.Content}>
          <span>{props.project.title}</span>
          <p>{props.project.content}</p>
        </div>
        <hr />
        <div className={ProjectDetailsStyle.Details}>
          <div className={ProjectDetailsStyle.Author}>
            <p>
              Post By: {props.project.authorFirstName}{" "}
              {props.project.authorLastName}
            </p>
          </div>
          <div className={ProjectDetailsStyle.Date}>
            <p>{moment(props.project.createAt.toDate()).calendar()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any, ownProps: Props) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project,
    auth: state.firebase.auth
  };
};

export default compose<any>(
  connect<StateProps, null, OwnProps>(mapStateToProps, null),
  firestoreConnect([{ collection: "projects" }])
)(ProjectDetails);
