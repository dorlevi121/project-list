import React from "react";
import projectListStyle from "./projectList.module.scss";
import ProjectSummary from "../project-summary/projectSummary.project";
import { Project } from "../../../models/project.model";
import { Link } from "react-router-dom";

interface OwnProps {
  projects: any
}

const ProjectList: React.FC <OwnProps> = (props) => {
  
  return (
    <div className={projectListStyle.ProjectList}>
      { props.projects && props.projects.map((project: Project) => (
        <Link to={'/project/' + project.id} key={project.id}>
        <ProjectSummary project={project} />
        </Link>
      ))}
    </div>
  );
}

export default ProjectList;
