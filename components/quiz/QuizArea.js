import React from "react";
import AnswerList from "./AnswerList";
import Question from "./Question";

const QuizArea = props => {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "center",
    boxSizing: "border-box",
    float: "left",
    padding: "0 2em"
  };
  return (
    <div style={style}>
      <Question dataSet={props.dataSet} />
      <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
    </div>
  );
};

export default QuizArea;

// function QuizArea(props) {
//   return (
//     <div style={style}>
//       <Question dataSet={props.dataSet} />
//       <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//     </div>
//   );
// }
