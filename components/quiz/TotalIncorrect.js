import React from "react";
import PropTypes from "prop-types";

const TotalIncorrect = props => {
  var style = {
    width: "100%",
    display: "inline-block",
    padding: ".25em",
    background: "#eee"
  };
  return <h2 style={style}>Incorrect: {props.incorrect}</h2>;
};

export default TotalIncorrect;

// function TotalIncorrect(props) {
//   var style = {
//     display: "inline-block",
//     padding: "1em",
//     background: "#eee",
//     margin: "0 0 0 1em"
//   };
//   return <h2 style={style}>Incorrect: {props.incorrect}</h2>;
// }
