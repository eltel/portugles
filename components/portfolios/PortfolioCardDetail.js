import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { dataSet, dataSet2, dataSet3 } from "../quiz/Questions";

import BaseLayout from "../layouts/BaseLayout";
import Quiz from "../quiz/Quiz";

class PortfolioCardDetail extends React.Component {
  constructor(props) {
    super(props);

    this.state = { userTestScore: 0, testLevel: "" };
  }

  keepScore(score) {
    score = this.state.userTestScore;
    score = score + correct;
    setState({ score });
    console.log("score", score);
  }
  render() {
    //  const { isAuthenticated, user } = this.props.auth;
    const { userTestScore, testLevel } = this.state;

    const { isOpen, toggle, portfolio, user } = this.props;
    const title = portfolio.title;

    console.log("title output", title);
    return (
      <div {...this.props.auth}>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <b>{portfolio.title}</b>
          </ModalHeader>
          <ModalBody>
            <b>Test: </b>
            {title === "Beginner " && (
              <Quiz
                level={dataSet}
                keepScore={this.keepScore}
                user={user}
                userTestScore={userTestScore}
                testLevel={"beginner"}
              />
            )}
            {title === "Intermediate" && (
              <Quiz
                level={dataSet2}
                keepScore={this.keepScore}
                user={user}
                userTestScore={userTestScore}
                testLevel={"intermediate"}
              />
            )}
            {title === "Advanced " && (
              <Quiz
                level={dataSet3}
                keepScore={this.keepScore}
                user={user}
                userTestScore={userTestScore}
                testLevel={"Advanced"}
              />
            )}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default PortfolioCardDetail;
