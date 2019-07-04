import React from "react";
import { Row, Col } from "reactstrap";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends React.Component {
  render() {
    return (
      <BaseLayout {...this.props.auth} title="Portuglês - About">
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="left-side" style={{ width: "300px" }}>
                <h1 className="title fadein">Hi, Welcome</h1>
                <h4 className="subtitle fadein">
                  To the Portugles.com About Page
                </h4>
                <p className="subsubTitle fadein">
                  Here's a short description of who we are and what we do...
                </p>
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                <p>
                  Specialists in personalised, English language studies for
                  Brazilians.{" "}
                </p>
                <p>
                  Classes are available both in-person and online via Skype and
                  are tailored to the needs of the individual student. Private,
                  in-person classes are only available at the school in Sorocaba
                  at the moment - Skype classes are available throughout Brazil,
                  depending on the quality of the student's internet connection.
                </p>
                <p>
                  Coordinated by a native English teacher from London, with 13+
                  years experience of catering for the specific requirements of
                  Brazilian students of English as a second language, at all
                  levels. Translations of Portuguese language texts into English
                  and text-revision/proofreading in English services are also
                  available.
                </p>
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
