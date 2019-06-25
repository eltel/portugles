import React from "react";
import { Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class Profile extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div>
                <h1>
                  Full profile functionality coming soon, all of your material
                  and testing and account details will be accessible here!!
                </h1>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Profile;
