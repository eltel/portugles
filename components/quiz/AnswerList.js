import React from "react";
import PropTypes from "prop-types";

const AnswerList = props => {
  var answers = [];
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(
      <Answer
        choice={i}
        handleClick={props.handleClick}
        answer={props.dataSet.answers[i]}
      />
    );
  }
  return <div>{answers}</div>;
};

export default AnswerList;

// function AnswerList(props) {
//   var answers = [];
//   for (let i = 0; i < props.dataSet.answers.length; i++) {
//     answers.push(
//       <Answer
//         choice={i}
//         handleClick={props.handleClick}
//         answer={props.dataSet.answers[i]}
//       />
//     );
//   }
//   return <div>{answers}</div>;
// }
