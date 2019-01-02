
import React from "react";
import { ViewAllQuestionsAction } from '../actions/viewAllQuestionsAction';
import { connect } from 'react-redux';
import Moment from "react-moment";
import { Link } from "react-router-dom";
export class Home extends React.Component{
componentDidMount(){     
this.props.ViewAllQuestionsAction();
}
displaySIngleQuestion(questionId){

  window.location.replace(`/singlequestion/${questionId}`);
}
editDataHeading() {
  return (
    <div className="card-header unique-color-dark  white-text text-center mt-0 py-4">
      <img src={"https://res.cloudinary.com/dksxmwjqs/image/upload/v1546420242/zstzna8xsm5zv8c5laxm.jpg"} className="img-responsive" />
    </div>
  );
}

showEditData() {
  
  if(this.props.ViewAllQuestionResults.item){
    
  return Array.from(this.props.ViewAllQuestionResults.item).map(data => (
    <div key={data.question_id}>
   <div className="question">{data.question_id}<span>.</span><Link to={""} onClick={() => this.displaySIngleQuestion(data.question_id)}>
   {data.questions}
              </Link></div>
   <div className="row question-info">
    <div className="row-md-2 date-author">Author:</div>
    <div className="row-md-2 date-author">{data.user_name}</div>
    <div className="row-md-2 date-author">Date:</div>
    <div className="row-md-2 date-author"><Moment format="YYYY/MM/DD">{data.question_date}</Moment></div>
   </div>
   <hr />
   </div>
  ));}
}

render() {

  return (
    <div className="body-container ">
      <div className="row">
        <div className="col-md-12">
          <div className="card cloudy-knoxville-gradient mb-4 wow fadeIn">
            <div>{this.editDataHeading()}</div>
            <div className="card-body">
              <div>{this.showEditData()}</div>
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
      ViewAllQuestionResults: state.allQuestions
    };
  };
export const mapDispatchToProps = dispatch => ({
    ViewAllQuestionsAction: () => dispatch(ViewAllQuestionsAction())
  });
export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Home);

