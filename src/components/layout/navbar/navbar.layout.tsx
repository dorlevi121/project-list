import React from "react";
import navbarStyle from "./navbar.module.scss";
import { Link } from "react-router-dom";
import SignInLinks from "../sign-in-links/signInLinks.layout";
import SignOutLinks from "../sign-out-links/signOutLinks.layout";
import { compose } from "redux";
import { connect } from "react-redux";
import logo from '../../../models/logo.png';

interface StateProps {
  auth: any;
  profile: any
}
type OwnProps = StateProps;

const Navbar: React.FC<OwnProps> = props => {
  const links = props.auth.uid ? <SignInLinks profile={props.profile}/> : <SignOutLinks />;
  return (
    <div className={navbarStyle.Navbar}>
      <div className={navbarStyle.Logo}>
        <Link to="/"><img src={logo} alt="logo"/></Link>
      </div>
      {props.auth.isLoaded && links}
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

export default compose<any>(
  connect<StateProps, null, OwnProps>(mapStateToProps, null)
)(Navbar);
