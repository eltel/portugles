import React from "react";
import PropTypes from "prop-types";

const Answer = props => {
  var style = {
    width: "100%",
    height: 50,
    color: "blue"
  };
  return (
    <div>
      <button style={style} onClick={() => props.handleClick(props.choice)}>
        {props.answer}
      </button>
    </div>
  );
};

export default Answer;

// function Answer(props) {
//   var style = {
//     width: "100%",
//     height: 50,
//     color: "blue"
//   };
//   return (
//     <div>
//       <button style={style} onClick={() => props.handleClick(props.choice)}>
//         {props.answer}
//       </button>
//     </div>
//   );
// }
