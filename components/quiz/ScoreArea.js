import React from "react";
import TotalIncorrect from "./TotalIncorrect";
import TotalCorrect from "./TotalCorrect";

const ScoreArea = props => {
  var style = {
    width: "100%",
    display: "block",
    textAlign: "left",
    float: "left",
    padding: "2em"
  };
  return (
    <div style={style}>
      <TotalCorrect correct={props.correct} />
      <TotalIncorrect incorrect={props.incorrect} />
    </div>
  );
};

export default ScoreArea;

// function ScoreArea(props) {
//   var style = {
//     width: "100%",
//     display: "block",
//     textAlign: "left",
//     float: "left",
//     padding: "2em"
//   };
//   return (
//     <div style={style}>
//       <TotalCorrect correct={props.correct} />
//       <TotalIncorrect incorrect={props.incorrect} />
//     </div>
//   );
// }
