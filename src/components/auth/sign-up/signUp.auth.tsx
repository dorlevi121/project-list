import React, { Component } from "react";
import formStyle from "../../../sass/form/form.module.scss";
import Button from "../../shared/UI/button";
import { compose } from "redux";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import { signUp } from "../../../store/auth/auth.actions";
import Loading from "../../shared/loading/loading";

interface StateProps {
  auth: any;
  authError: string | null;
}

interface DispatchProps {
  signUp: any;
}

type OwnProps = StateProps & DispatchProps;

class SignUp extends Component<OwnProps> {
  state = {
    form: {
      email: "",
      password: "",
      firstName: "",
      lastName: ""
    },
    loading: false
  };

  handleChange = (e: any) => {
    let newForm = this.state.form;
    if (e.target.name === "firstName") newForm.firstName = e.target.value;
    else if (e.target.name === "lastName") newForm.lastName = e.target.value;
    else if (e.target.name === "password") newForm.password = e.target.value;
    else if (e.target.name === "email") newForm.email = e.target.value;

    this.setState({ form: newForm });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.signUp(this.state.form);
    this.setState({Loading: true})
  };

  render() {
    if (this.props.auth.uid) return <Redirect to="/" />;

    return (
      <div className={formStyle.SignIn}>
        {this.state.loading && <Loading />}
        <form onSubmit={(e: any) => this.handleSubmit(e)}>
          <h5>Sign Up</h5>
          {/* Email */}
          <div className={formStyle.FormGroup}>
            <input
              className={formStyle.Question}
              type="email"
              name="email"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.form.email}
              required
            />
            <label htmlFor="email">
              <span>Email</span>
            </label>
          </div>
          {/* Password */}
          <div className={formStyle.FormGroup}>
            <input
              className={formStyle.Question}
              type="password"
              name="password"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.form.password}
              required
            />
            <label htmlFor="password">
              <span>Password</span>
            </label>
          </div>
          {/* First Name */}
          <div className={formStyle.FormGroup} style={{ marginTop: "3%" }}>
            <input
              className={formStyle.Question}
              type="text"
              name="firstName"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.form.firstName}
              required
            />
            <label htmlFor="firstName">
              <span>First Name</span>
            </label>
          </div>
          {/* Last Name */}
          <div className={formStyle.FormGroup} style={{ marginTop: "3%" }}>
            <input
              className={formStyle.Question}
              type="text"
              name="lastName"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.form.lastName}
              required
            />
            <label htmlFor="lastName">
              <span>Last Name</span>
            </label>
          </div>
          <div className={formStyle.Button}>
            <Button title="submit" />
          </div>
        </form>
        <p style={{ color: "red" }}>{this.props.authError}</p>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth,
  authError: state.auth.authError
});

const mapDispatchToProps = (dispatch: any) => ({
  signUp: (user: any) => dispatch(signUp(user))
});

export default compose<any>(
  connect<StateProps, DispatchProps>(mapStateToProps, mapDispatchToProps)
)(SignUp);
