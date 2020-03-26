import React, { Component } from "react";
import formStyle from "../../../sass/form/form.module.scss";
import Button from "../../shared/UI/button";
import { connect } from "react-redux";
import { createProject } from "../../../store/project/project.actions";
import { Redirect } from "react-router-dom";
import { RouteComponentProps } from "react-router-dom";


interface StateProps {
  auth: any;
}

interface DispatchProps {
  createProject: typeof createProject;
}

interface Props extends RouteComponentProps<any> {
  /* Parent component's props*/
  history: any
}

type OwnProps = StateProps & DispatchProps & Props;

class CreateProject extends Component<OwnProps> {
  state = {
    title: "",
    content: ""
  };

  handleChange = (e: any) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    this.props.createProject(this.state);
    this.props.history.push('/');
  };

  render() {
    if (!this.props.auth.uid) return <Redirect to="/signin" />;

    return (
      <div className={formStyle.SignIn}>
        <form onSubmit={(e: any) => this.handleSubmit(e)}>
          <h5>Create New Project</h5>
          <div className={formStyle.FormGroup}>
            <input
              className={formStyle.Question}
              type="text"
              name="title"
              onChange={this.handleChange}
              autoComplete="off"
              value={this.state.title}
              required
            />
            <label htmlFor="title">
              <span>Title</span>
            </label>
          </div>
          <div className={formStyle.FormGroup}>
            <textarea
              className={formStyle.Question}
              name="content"
              onChange={this.handleChange}
              value={this.state.content}
              required
            ></textarea>
            <label htmlFor="content">
              <span>Content</span>
            </label>
          </div>
          <div className={formStyle.Button}>
            <Button title="submit" />
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => ({
  auth: state.firebase.auth
});

const mapDispatchToProps = (dispatch: any) => ({
  createProject: (project: any) =>
    dispatch(createProject(project))
});

export default connect<StateProps, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(CreateProject);
