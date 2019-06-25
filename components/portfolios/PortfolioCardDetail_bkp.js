import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";
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
            <p>
              <b>Description: </b>
              {portfolio.description}
            </p>
            <p>
              <b>Company: </b>
              {portfolio.company}
            </p>
            <p>
              <b>Position: </b>
              {portfolio.position}
            </p>
            <p>
              <b>Location: </b>
              {portfolio.location}
            </p>
            <p>
              <b>Start Date: </b>
              {moment(portfolio.startDate).format("DD MMMM YYYY")}
            </p>
            <p>
              <b>End Date: </b>
              {portfolio.endDate
                ? moment(portfolio.endDate).format("DD MMMM YYYY")
                : "present"}
            </p>
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
