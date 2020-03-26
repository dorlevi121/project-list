import React, { Component } from "react";
import dashboardStyle from "./dashboard.module.scss";
import Notification from "./notifications/notification.dashboard";
import ProjectList from "../projects/project-list/projectList.project";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { Redirect } from "react-router-dom";
import Loading from "../shared/loading/loading";

interface StateProps {
  projects: any;
  auth: any;
  notifications: any;
}

interface DispatchProps {}

interface OwnState {
  loading: boolean;
}

type OwnProps = StateProps & DispatchProps;

class Dashboard extends Component<OwnProps> {
  state: OwnState = {
    loading: true
  };

  render() {
    setTimeout(() => {
      this.setState({ loading: false });
    }, 2500);
    if (this.state.loading) return <Loading />;
    else if (!this.props.auth.uid) return <Redirect to="/signin" />;

    return (
      <div className={dashboardStyle.Dashboard}>
        <div className={dashboardStyle.Row}>
          <div className={dashboardStyle.Projects}>
            <ProjectList projects={this.props.projects} />
          </div>
          <div className={dashboardStyle.Notifications}>
            <Notification notifications={this.props.notifications} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  projects: state.firestore.ordered.projects,
  auth: state.firebase.auth,
  notifications: state.firestore.ordered.notifications
});

export default compose<any>(
  connect<StateProps, DispatchProps>(mapStateToProps),
  firestoreConnect([
    { collection: "projects", orderBy: ["createAt", "desc"] },
    { collection: "notifications", limit: 3, orderBy: ["time", "desc"] }
  ])
)(Dashboard);
