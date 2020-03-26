import * as React from "react";
import { Redirect, Route, RouteProps } from "react-router";
import { compose } from "redux";
import { connect } from "react-redux";

interface StateProps {
  auth: any;
}

export interface ProtectedRouteProps extends RouteProps {
  //   isAuthenticated: boolean;
  //   isAllowed: boolean;
  //   restrictedPath: string;
  authenticationPath: string;
  redirectPath: string;
}

type OwnProps = StateProps & ProtectedRouteProps;

 const ProtectedRoute: React.FC<OwnProps> = props => {
  if (!props.auth.uid) {
    const renderComponent = () => (
      <Redirect to={ props.authenticationPath } />
    );
    return <Route component={renderComponent} render={undefined} />;
  } else {
    const renderComponent = () => (
      <Redirect to={props.redirectPath } />
    );
    return <Route component={renderComponent} render={undefined} />;
  }
};

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

export default compose<any>(
  connect<StateProps, null, OwnProps>(mapStateToProps, null)
)(ProtectedRoute);
