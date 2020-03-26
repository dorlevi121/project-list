import React, { Component } from "react";
import formStyle from "../../../sass/form/form.module.scss";
import Button from "../../shared/UI/button";
import { signIn } from "../../../store/auth/auth.actions";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router";

interface StateProps {
  isLogIn: string | null;
  auth: any
}

interface DispatchProps {
  signIn: typeof signIn;
}

type OwnProps = StateProps & DispatchProps;

class SignIn extends Component<OwnProps> {
  state = {
    email: "",
    password: ""
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.type]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.signIn(this.state);
  };
  render() {
    if (this.props.auth.uid) return <Redirect to="/" />;

    return (
      <div className={formStyle.SignIn}>
        <form onSubmit={(e: any) => this.handleSubmit(e)}>
          <h5>Sign In</h5>
          <div className={formStyle.FormGroup}>
            <input
              className={formStyle.Question}
              type="email"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.email}
              required
            />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          <div className={formStyle.FormGroup}>
            <input
              className={formStyle.Question}
              type="password"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.password}
              required
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          <div className={formStyle.Button}>
            <Button title="submit" />
          </div>
        </form>
        <div className={formStyle.LogginError}>
          <p>{this.props.isLogIn}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  isLogIn: state.auth.authError,
  auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch: any) => ({
  signIn: (credential: any) => dispatch(signIn(credential))
});

export default compose<any>(
  connect<StateProps, DispatchProps, OwnProps>(
    mapStateToProps,
    mapDispatchToProps
  )
)(SignIn);
