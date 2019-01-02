import React from "react";
import { SingleQuestionAction } from "../../actions/singleQuestionAction";
import { connect } from "react-redux";
export class SingleQuestion extends React.Component {
  componentDidMount() {
    this.props.SingleQuestionAction(this.props.match.params.id);
  }
  showEditData() {
    if (this.props.match.params.id) {
      return Array.from(this.props.ViewSingleQuestion.item).map((data) => {
        const question = data.questions;
        const ans = data.answers;
        const answerElements = ans.map((answer, i) => {
          return <p key={i} className="answer"><span> * </span>{answer.answer}</p>;
        });
        return (
          <div key={data.question_id} className="txt-s">
            <div className="answer-question">{question}</div>
            {answerElements}
          </div>
        );
      });
    }
  }
  render() {
   
    return (
      <div className="body-container ">
      <div className="row">
        <div className="col-md-12">
          <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
          <div className="card-body">
        {this.showEditData()}
        </div>
      </div>
      </div>
      </div>
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    ViewSingleQuestion: state.singleQuestion
  };
};

export default connect(
  mapStateToProps,
  { SingleQuestionAction }
)(SingleQuestion);
