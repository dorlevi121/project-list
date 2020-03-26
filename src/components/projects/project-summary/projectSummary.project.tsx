import React from "react";
import projectSummaryStyle from "./projectSummary.module.scss";
import moment from "moment";

interface OwnProps {
  project: any;
}

const ProjectSummary: React.FC<OwnProps> = props => {
  return (
    <div className={projectSummaryStyle.Project}>
      <div className={projectSummaryStyle.ProjectSummary}>
        <span>{props.project.title}.</span>
        <div className={projectSummaryStyle.Author}>
          <p>{props.project.authorFirstName} {props.project.authorLastName}</p>
        </div>
        <div className={projectSummaryStyle.Date}>
        <p>{moment(props.project.createAt.toDate()).calendar()}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectSummary;
