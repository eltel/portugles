import React from "react";
import { Row, Col } from "reactstrap";
// import moment from "moment";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import CreatePortfolioForm from "../components/portfolios/CreatePortfolioForm";

import withAuth from "../components/hoc/withAuth";
import { Router } from "../routes";
import { createPortfolio } from "../actions";

const INITIAL_VALUES = {
  title: "",
  company: "",
  location: "",
  position: "",
  description: "",
  startDate: new Date(),
  endDate: new Date()
};

// moment()
// moment()

class PortfolioNew extends React.Component {
  constructor(props) {
    super();

    this.state = {
      error: undefined
    };

    this.savePortfolio = this.savePortfolio.bind(this);
  }

  savePortfolio(portfolioData, { setSubmitting }) {
    setSubmitting(true);
    createPortfolio(portfolioData)
      .then(portfolio => {
        setSubmitting(false);
        this.setState({ error: undefined });
        Router.pushRoute("/portfolios");
      })
      .catch(err => {
        const error = err.message || "Server Error";
        setSubmitting(false);

        this.setState({ error });
      });
  }

  render() {
    const { error } = this.state;

    return (
      <BaseLayout {...this.props.auth}>
        <BasePage
          className="portfolio-create-page"
          title="Create New Portfolio"
        >
          <Row>
            <Col md={{ size: 6, offset: 3 }}>
              <CreatePortfolioForm
                initialValues={INITIAL_VALUES}
                error={error}
                onSubmit={this.savePortfolio}
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth("siteOwner")(PortfolioNew);
