import React from "react";
import Answer from "./Answer";

const AnswerList = props => {
  const answers = [];
  for (let i = 0; i < props.dataSet.answers.length; i++) {
    answers.push(
      <Answer
        key={answers.index}
        choice={i}
        handleClick={props.handleClick}
        answer={props.dataSet.answers[i]}
      />
    );
  }
  return <div>{answers}</div>;
};

export default AnswerList;
