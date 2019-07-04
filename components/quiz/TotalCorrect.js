import React from "react";
import PropTypes from "prop-types";

const TotalCorrect = props => {
  var style = {
    width: "100%",
    display: "inline-block",
    padding: ".25em",
    background: "#eee"
  };
  return <h2 style={style}>Correct: {props.correct}</h2>;
};

export default TotalCorrect;

// function TotalCorrect(props) {
//   var style = {
//     display: "inline-block",
//     padding: "1em",
//     background: "#eee",
//     margin: "0 1em 0 0"
//   };
//   return <h2 style={style}>Correct: {props.correct}</h2>;
// }
