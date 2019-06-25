import React from "react";
import { Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { getBlogBySlug } from "../actions";

class StudyLoggedOut extends React.Component {
  render() {
    const { blog } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div>
                <h1>
                  Please log in or sign up to view this content, it only takes
                  30 seconds, and then you will have access to much more
                  content! :)
                </h1>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default StudyLoggedOut;
