import React from "react";
import ScoreArea from "./ScoreArea";
import Answer from "./Answer";
import AnswerList from "./AnswerList";
import Question from "./Question";
import QuizArea from "./QuizArea";
import TotalCorrect from "./TotalCorrect";
import TotalIncorrect from "./TotalIncorrect";

import PropTypes from "prop-types";

class Quiz extends React.Component {
  constructor(props) {
    super(props);

    var dataSet = [
      {
        question: "What is 8 x 1?",
        answers: ["1", "8", "16", "9"],
        correct: 1
      },
      {
        question: "Who is Steve Jobs?",
        answers: [
          "CEO of Microsoft",
          "Barber in NY",
          "Movie Star",
          "CEO of Apple"
        ],
        correct: 3
      },
      {
        question: "Metallica is a ____ band",
        answers: ["Blues", "Hard-Rock", "Jazz", "Metal"],
        correct: 3
      },
      {
        question: "IS is a ____",
        answers: ["Word", "Band", "Terror Group", "Brand"],
        correct: 2
      },
      {
        question: "Who was Einstein",
        answers: [
          "A Scientist",
          "A Dentist",
          "A Serial Killer",
          "None of the above"
        ],
        correct: 0
      },
      {
        question: "JavaScript can be used in ____ development",
        answers: ["Back-End", "Front-End", "ReactJS", "All of the Above"],
        correct: 3
      },
      {
        question: "Hitler was a",
        answers: [
          "Mass Murderer",
          "Dictator",
          "Jew",
          "None of the above",
          "All of the above"
        ],
        correct: 4
      },
      {
        question: "Korn is a",
        answers: ["Nu-Metal band", "Religion", "Singer"],
        correct: 0
      },
      {
        question: "Windows computers are",
        answers: ["Horrible", "Great", "Cheap", "Invented by Bill Gates"],
        correct: 3
      },
      {
        question: "The BigBan stands in",
        answers: ["Egypt", "London", "Amsterdam", "NewYork"],
        correct: 1
      }
    ];

    this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 };
    this.handleClick = this.handleClick.bind(this);
  } // end constructor

  handleClick(choice) {
    if (choice == this.state.dataSet[this.state.current].correct) {
      this.setState({ correct: this.state.correct + 1 });
    } else {
      this.setState({ incorrect: this.state.incorrect + 1 });
    }

    if (this.state.current == 9) {
      this.setState({ current: 0 });
      this.setState({ incorrect: 0 });
      this.setState({ correct: 0 });
    } else {
      this.setState({ current: this.state.current + 1 });
    }
  }

  render() {
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

export default Quiz;

// class Quiz extends React.Component {
//   constructor(props) {
//     super(props);
//
//     var dataSet = [
//       {
//         question: "What is 8 x 1?",
//         answers: ["1", "8", "16", "9"],
//         correct: 1
//       },
//       {
//         question: "Who is Steve Jobs?",
//         answers: [
//           "CEO of Microsoft",
//           "Barber in NY",
//           "Movie Star",
//           "CEO of Apple"
//         ],
//         correct: 3
//       },
//       {
//         question: "Metallica is a ____ band",
//         answers: ["Blues", "Hard-Rock", "Jazz", "Metal"],
//         correct: 3
//       },
//       {
//         question: "IS is a ____",
//         answers: ["Word", "Band", "Terror Group", "Brand"],
//         correct: 2
//       },
//       {
//         question: "Who was Einstein",
//         answers: [
//           "A Scientist",
//           "A Dentist",
//           "A Serial Killer",
//           "None of the above"
//         ],
//         correct: 0
//       },
//       {
//         question: "JavaScript can be used in ____ development",
//         answers: ["Back-End", "Front-End", "ReactJS", "All of the Above"],
//         correct: 3
//       },
//       {
//         question: "Hitler was a",
//         answers: [
//           "Mass Murderer",
//           "Dictator",
//           "Jew",
//           "None of the above",
//           "All of the above"
//         ],
//         correct: 4
//       },
//       {
//         question: "Korn is a",
//         answers: ["Nu-Metal band", "Religion", "Singer"],
//         correct: 0
//       },
//       {
//         question: "Windows computers are",
//         answers: ["Horrible", "Great", "Cheap", "Invented by Bill Gates"],
//         correct: 3
//       },
//       {
//         question: "The BigBan stands in",
//         answers: ["Egypt", "London", "Amsterdam", "NewYork"],
//         correct: 1
//       }
//     ];
//
//     this.state = { current: 0, dataSet: dataSet, correct: 0, incorrect: 0 };
//     this.handleClick = this.handleClick.bind(this);
//   } // end constructor
//
//   handleClick(choice) {
//     if (choice == this.state.dataSet[this.state.current].correct) {
//       this.setState({ correct: this.state.correct + 1 });
//     } else {
//       this.setState({ incorrect: this.state.incorrect + 1 });
//     }
//
//     if (this.state.current == 9) {
//       this.setState({ current: 0 });
//       this.setState({ incorrect: 0 });
//       this.setState({ correct: 0 });
//     } else {
//       this.setState({ current: this.state.current + 1 });
//     }
//   }
//
//   render() {
//     return (
//       <div>
//         <ScoreArea
//           correct={this.state.correct}
//           incorrect={this.state.incorrect}
//         />
//         <QuizArea
//           handleClick={this.handleClick}
//           dataSet={this.state.dataSet[this.state.current]}
//         />
//       </div>
//     );
//   }
// }
