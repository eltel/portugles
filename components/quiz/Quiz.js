import { dataSet, dataSet2, dataSet3 } from "./Questions";
import ScoreArea from "./ScoreArea";
// import TotalIncorrect from "./TotalIncorrect";
// import TotalCorrect from "./TotalCorrect";
import QuizArea from "./QuizArea";
// import AnswerList from "./AnswerList";
// import Answer from "./Answer";
// import Question from "./Question";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    const dataSet = dataSet3;

    this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 };
    this.handleClick = this.handleClick.bind(this);
    console.log(dataSet.length);
  } // end constructor

  handleClick(choice) {
    const { correct } = this.state;
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current == 9) {
      alert("You've finished!! You scored " + correct + " out of 10!!");
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
    const { correct } = this.state;
    return (
      <div>
        <ScoreArea
          correct={this.state.correct}
          incorrect={this.state.incorrect}
        />
        <QuizArea
          handleClick={this.handleClick}
          dataSet={this.state.dataSet[this.state.current]}
        />
      </div>
    );
  }
}

// function Question(props) {
//   var style = {
//     color: "red"
//   };
//   return (
//     <div>
//       {props.dataSet.video}
//
//       <h1 style={style}>{props.dataSet.question}</h1>
//     </div>
//   );
// }

// function Answer(props) {
//   var style = {
//     width: "100%",
//     height: 40,
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

// function AnswerList(props) {
//   var answers = [];
//   for (let i = 0; i < props.dataSet.answers.length; i++) {
//     answers.push(
//       <Answer
//         key={i}
//         choice={i}
//         handleClick={props.handleClick}
//         answer={props.dataSet.answers[i]}
//       />
//     );
//   }
//   return <div>{answers}</div>;
// }

// function QuizArea(props) {
//   var style = {
//     width: "100%",
//     display: "block",
//     textAlign: "center",
//     boxSizing: "border-box",
//     float: "left",
//     padding: "0 2em"
//   };
//   return (
//     <div style={style}>
//       <Question dataSet={props.dataSet} />
//       <AnswerList dataSet={props.dataSet} handleClick={props.handleClick} />
//     </div>
//   );
// }

// function TotalCorrect(props) {
//   var style = {
//     width: "100%",
//     display: "inline-block",
//     padding: ".25em",
//     background: "#eee"
//   };
//   return <h2 style={style}>Correct: {props.correct}</h2>;
// }

// function TotalIncorrect(props) {
//   var style = {
//     width: "100%",
//     display: "inline-block",
//     padding: ".25em",
//     background: "#eee"
//   };
//   return <h2 style={style}>Incorrect: {props.incorrect}</h2>;
// }

// function ScoreArea(props) {
//   var style = {
//     width: "100%",
//     display: "block",
//     textAlign: "left",
//     float: "left",
//     padding: "2em"
//   };
//
//   return (
//     <div style={style}>
//       <TotalCorrect correct={props.correct} />
//       <TotalIncorrect incorrect={props.incorrect} />
//     </div>
//   );
// }

export default Quiz;
