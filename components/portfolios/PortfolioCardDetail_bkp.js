import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
import Quiz from "../quiz/Quiz";
class PortfolioCardDetail extends React.Component {
  render() {
    const { isOpen, toggle, portfolio } = this.props;

    return (
      <div>
        <Modal isOpen={isOpen} toggle={toggle}>
          <ModalHeader toggle={toggle}>
            <b>{portfolio.title}</b>
          </ModalHeader>
          <ModalBody>
            <b>Test: </b>
            <Quiz />
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
