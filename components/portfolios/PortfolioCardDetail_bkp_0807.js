import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import { dataSet, dataSet2, dataSet3 } from "../quiz/Questions";
import Quiz from "../quiz/Quiz";

class PortfolioCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, portfolio } = this.props;
    const title = portfolio.title;

    console.log("title output", title);
    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <b>{portfolio.title}</b>
          </ModalHeader>
          <ModalBody>
            <b>Test: </b>
            {title === "Beginner " && <Quiz level={dataSet} />}
            {title === "Intermediate" && <Quiz level={dataSet2} />}
            {title === "Advanced " && <Quiz level={dataSet3} />}
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
