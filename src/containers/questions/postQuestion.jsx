import React from "react";
import { PostQuestionAction } from "../../actions/postQuestionAction";
import { connect } from "react-redux";

export class PostQuestion extends React.Component {
  state = {
    question: ""
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = e => {
    e.preventDefault();
    const data = {
      question: this.state.question
    }
    this.props.PostQuestionAction(data);
  };

  editDataHeading() {
    return (
      <div className="card-header unique-color-dark  white-text text-center mt-0 py-4">
        <span>Post a question</span>
      </div>
    );
  }
  textAreaInput() {
    return (
      <textarea
        type="text"
        name="question"
        id="question"
        onChange={this.onChange}
        required
        className="form-control font-weight-light edit-profile-text-area"
        value={this.state.question}
        required
      />
    );
  }

  editSaveButton() {
    return (
      <button
        id="saveProfile"
        className="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0 "
        type="submit"
      >
        Post
      </button>
    );
  }

  showEditData() {
    return (
      <div className="card-body">
        <h4 className="card-title">
          <div className="card-body font-weight-light">
            <span>question</span>
          </div>
          <br />
          <div>{this.textAreaInput()}</div>
          <br />
        </h4>
        <hr />
        <div className="text-center mt-4">
          <div>{this.editSaveButton()}</div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className="body-container ">
        <div className="row">
          <div className="col-md-12">
            <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
              <div>{this.editDataHeading()}</div>
              <form onSubmit={this.onSubmit}>
                <div>{this.showEditData()}</div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    PostQuestionResults: state.postQuestion
  };
};
export const mapDispatchToProps = dispatch => ({
  PostQuestionAction: data => dispatch(PostQuestionAction(data))
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostQuestion);
