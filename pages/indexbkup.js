import React from "react";
import Typed from "react-typed";
import { Button, Container, Row, Col } from "reactstrap";

import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false
    };

    this.roles = [
      "English Classes Online & In-Person",
      "Portuguese > English text translation",
      "Text Revision",
      "Level testing"
    ];
  }

  componentDidMount() {
    this.animateCard();
  }

  componentWillUnmount() {
    this.cardAnimationInterval && clearInterval(this.cardAnimationInterval);
  }

  animateCard() {
    this.cardAnimationInterval = setInterval(() => {
      this.setState({
        isFlipping: !this.state.isFlipping
      });
    }, 5000);
  }

  render() {
    const { isFlipping } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    return (
      <BaseLayout
        {...this.props.auth}
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        headerType="index"
        title="Portuglês - Home Page"
      >
        <div className="main-section">
          <div className="background-image">
            <img src="" />
          </div>
          <Container>
            <Row>
              <Col md="6">
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        <h2>English School & More</h2>
                        <div className="hero-section-content-intro">
                          <h3>Sign in, test yourself and learn English!.</h3>
                        </div>
                      </div>
                      <img
                        className="image"
                        alt="Hacker coding"
                        src="/static/images/brazilian-flag.jpg"
                      />
                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        <h2>Learn from *native* English teachers</h2>
                        <div className="hero-section-content-intro">
                          *Great Britain
                        </div>
                      </div>
                      <img
                        className="image"
                        alt="negative version of Hacker coding"
                        src="/static/images/britishFlag.jpg"
                      />
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        <b>{user.name}</b>{" "}
                      </span>
                    )}
                    Welcome to Portuglês.com, check out our services and
                    products, sign up, log in and test your level. All of your
                    material in one place, acccessible from anywhere, monitored
                    by professional, native teachers of English as a second
                    language.
                  </h1>
                </div>
                <Typed
                  loop
                  typeSpeed={110}
                  backSpeed={25}
                  strings={this.roles}
                  smartBackspace
                  shuffle={true}
                  backDelay={25}
                  className="self-typed"
                  loopCount={0}
                  showCursor
                  cursorChar="|"
                />

                <div className="hero-welcome-bio">
                  <h1>
                    Click the 'About' tab for more info on who we are and what
                    we do
                  </h1>
                </div>
              </Col>
            </Row>
          </Container>
          <span className="service-link">
            Free Vectors by:{" "}
            <a href="https://www.vecteezy.com">www.Vecteezy.com</a>
          </span>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
