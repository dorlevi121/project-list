import React from "react";
import navbarStyle from "../navbar/navbar.module.scss";
import { NavLink } from "react-router-dom";
import { compose } from "redux";
import { connect } from "react-redux";
import { signOut } from "../../../store/auth/auth.actions";

interface StateProps {}

interface DispatchProps {
  signOut: typeof signOut;
}

interface Props {
  profile: any;
}

type OwnProps = StateProps & DispatchProps & Props;

const SignInLinks: React.FC<OwnProps> = props => {
  return (
    <div className={navbarStyle.Links}>
      <ul>
        <li>
          <NavLink to="/create">new project</NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={props.signOut}>
            Log out
          </NavLink>
        </li>
        <li>
          <div className={navbarStyle.User}>
            <span>{props.profile.initials}</span>
          </div>
        </li>
      </ul>
    </div>
  );
};

const mapStateToProps = (state: any) => ({});

const mapDispatchToProps = (dispatch: any) => ({
  signOut: () => dispatch(signOut())
});

export default compose<any>(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignInLinks);
