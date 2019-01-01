import React from "react";
import { SingleQuestionAction } from "../../actions/SingleQuestionAction";
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
          return <p key={i}>{answer.answer}</p>;
        });
        return (
          <div key={data.question_id} className="txt-s">
            {question}
            {answerElements}
          </div>
        );
      });
    }
  }
  render() {
   
    return (
      <div className="body-container">
        {this.showEditData()}
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
