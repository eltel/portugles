import React from "react";
import { Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class CV extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="setState - CV">
        <BasePage title="Access CV" className="cv-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div className="cv-title">
                <a
                  download="description.pdf"
                  href="https://s3.amazonaws.com/portugles.com/Description.pdf"
                  className="btn btn-success"
                >
                  Download
                </a>
              </div>
              <iframe
                style={{ width: "100%", height: "800px" }}
                download
                src="https://s3.amazonaws.com/portugles.com/Description.pdf"
                frameBorder="0"
              />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default CV;
