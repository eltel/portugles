import React from "react";
import PropTypes from "prop-types";

const Question = props => {
  var style = {
    color: "red"
  };
  return (
    <div>
      {props.dataSet.video}

      <h1 style={style}>{props.dataSet.question}</h1>
    </div>
  );
};

export default Question;

// function Question(props) {
//   var style = {
//     color: "red"
//   };
//   return <h1 style={style}>{props.dataSet.question}</h1>;
// }
