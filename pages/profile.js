import React from "react";
import {
  Row,
  Col,
  Badge,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardSubtitle,
  Button
} from "reactstrap";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
// import ProfileTabs from "../components/profile/ProfileTabs";
// import DeleteUser from "../components/profile/DeleteUser";
// import FollowUser from "../components/profile/FollowUser";

class Profile extends React.Component {
  render() {
    const { isAuthenticated, user } = this.props.auth;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div>
                <Card style={{ padding: "1em" }}>
                  <h1>
                    <Badge color="secondary">
                      <b>Profile: </b>
                    </Badge>
                    <span style={{ float: "right" }}> {user.name} </span>
                  </h1>
                  <CardImg
                    width="50%"
                    src="../static/images/profile-image.jpg"
                    alt="Card image cap"
                  />
                  <CardBody>
                    <CardSubtitle>Card subtitle</CardSubtitle>
                    <CardText>
                      Full profile functionality coming soon, all of your
                      material, testing and account details will be accessible
                      here!!
                    </CardText>
                    <Button>Button</Button>
                    <h1>
                      <Badge color="success">
                        <b>English Level: </b>
                      </Badge>
                      <span style={{ float: "right" }}> {user.name} </span>
                    </h1>
                  </CardBody>
                </Card>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default Profile;
