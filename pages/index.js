import React from "react";
import Typed from "react-typed";
import { Button, Container, Row, Col, Spinner } from "reactstrap";
import {
  Image,
  Video,
  Transformation,
  CloudinaryContext
} from "cloudinary-react";

import BaseLayout from "../components/layouts/BaseLayout";

class Index extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isFlipping: false,
      isLoading: true,
      isEnglish: true
    };

    this.roles = [
      "English Classes...",
      "...in-person (private)...",
      "...or online",
      "TOEFL/IELTS",
      "Text Translation",
      "Text Revision",
      "Level testing"
    ];

    this.roles_p = [
      "Aulas de inglês...",
      "... pessoais (privado) ...",
      "... ou online",
      "TOEFL/IELTS",
      "Tradução de texto",
      "Revisão de texto",
      "Teste de nível"
    ];

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  componentDidMount() {
    this.animateCard();
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 2100);
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

  toggleLanguage() {
    this.setState(prevState => ({ isEnglish: !prevState.isEnglish }));
  }

  render() {
    const { isFlipping, isEnglish } = this.state;
    const { isAuthenticated, user } = this.props.auth;
    return this.state.isLoading ? (
      <div>
        Loading...
        <Spinner color="dark" />
      </div>
    ) : (
      <BaseLayout
        {...this.props.auth}
        className={`cover ${isFlipping ? "cover-1" : "cover-0"}`}
        headerType="index"
        title="Portuglês - Home Page"
      >
        <div className="main-section">
          {/*<div className="background-image">
            <img src="" />
          </div>*/}
          <Container>
            <Row>
              <Col md="6">
                <div className="switchLanguge-container">
                  {isEnglish && (
                    <Button
                      color="success"
                      style={{ minWidth: "10em" }}
                      onClick={this.toggleLanguage}
                    >
                      Português
                    </Button>
                  )}
                  {!isEnglish && (
                    <Button
                      color="secondary"
                      style={{ minWidth: "10em" }}
                      onClick={this.toggleLanguage}
                    >
                      English
                    </Button>
                  )}
                </div>
                <div className="hero-section">
                  <div className={`flipper ${isFlipping ? "isFlipping" : ""}`}>
                    <div className="front">
                      <div className="hero-section-content">
                        {isEnglish && <h2> English School & More</h2>}
                        {!isEnglish && <h2> Escola de inglês e muito mais</h2>}
                        <div className="hero-section-content-intro">
                          {isEnglish && (
                            <h3>
                              Sign up,
                              <br /> test yourself
                              <br /> & learn English!
                            </h3>
                          )}
                          {!isEnglish && (
                            <h3>
                              Assinar,
                              <br /> teste você mesmo
                              <br /> e aprenda inglês!
                            </h3>
                          )}
                        </div>
                      </div>

                      <div className="image-holder">
                        <Image
                          cloudName="setstate"
                          fetchFormat="auto"
                          crop="scale"
                          publicId="jihgp26s1q2y7pd0hbxl.jpg"
                          alt="British Flag"
                          className="cld-img"
                          responsive
                          secure
                        >
                          <Transformation quality="auto:eco" />
                        </Image>
                      </div>

                      <div className="shadow-custom">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                    <div className="back">
                      <div className="hero-section-content">
                        {isEnglish && (
                          <h2>
                            Learn from <br />
                            *native* <br />
                            English teachers
                          </h2>
                        )}
                        {!isEnglish && (
                          <h2>
                            Aprenda com <br />
                            professores *nativos*
                            <br />
                            de inglês
                          </h2>
                        )}

                        <div className="hero-section-content-intro">
                          {isEnglish && <h4>*Great Britain</h4>}
                          {!isEnglish && <h4>*Grã Bretanha</h4>}
                        </div>
                      </div>
                      <div className="image-holder">
                        <Image
                          cloudName="setstate"
                          fetchFormat="auto"
                          crop="scale"
                          publicId="yxwdn7xxrox0ws0zwdjh.jpg"
                          alt="British Flag"
                          className="cld-img"
                          responsive
                          secure
                        >
                          <Transformation quality="auto:eco" />
                        </Image>
                      </div>
                      <div className="shadow-custom shadow-custom-2">
                        <div className="shadow-inner"> </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>
              <Col md="6" className="hero-welcome-wrapper">
                {isEnglish && (
                  <Typed
                    loop
                    typeSpeed={120}
                    backSpeed={40}
                    strings={this.roles}
                    smartBackspace
                    shuffle={false}
                    backDelay={25}
                    className="self-typed"
                    loopCount={0}
                    showCursor
                    cursorChar="."
                  />
                )}
                {!isEnglish && (
                  <Typed
                    loop
                    typeSpeed={120}
                    backSpeed={40}
                    strings={this.roles_p}
                    smartBackspace
                    shuffle={false}
                    backDelay={25}
                    className="self-typed"
                    loopCount={0}
                    showCursor
                    cursorChar="."
                  />
                )}

                <div className="hero-welcome-text">
                  <h1>
                    {isAuthenticated && (
                      <span>
                        <b>{user.name}</b>{" "}
                      </span>
                    )}
                    {isEnglish && (
                      <p>
                        Welcome to Portuglês.com, check out our services and
                        products, sign up, log in and test your level. All of
                        your material in one place, acccessible from anywhere,
                        monitored by professional, native teachers of English as
                        a second language.
                      </p>
                    )}
                    {!isEnglish && (
                      <p>
                        Bem-vindo ao Portuglês.com, consulte nossos serviços e
                        produtos, cadastre-se, faça login e teste seu nível.
                        Todo o seu material em um só lugar, acessível de
                        qualquer lugar, monitorado por professores nativos
                        profissionais de Inglês como segunda língua.
                      </p>
                    )}
                  </h1>
                </div>

                <div className="hero-welcome-bio">
                  {isEnglish && (
                    <h1>
                      Click the 'About' tab for more info on who we are and what
                      we do
                    </h1>
                  )}
                  {!isEnglish && (
                    <h1>
                      Clique na guia "About" para obter mais informações sobre
                      quem somos e o que fazemos.
                    </h1>
                  )}
                </div>
              </Col>
            </Row>
            <Row className="leftColumn-row">
              <Col className="leftColumn" style={{ marginTop: ".5em" }}>
                {" "}
                Left column Foooter Conteeeeent (location etc??) and Legam aut
                te illum senserit te ut export voluptate illustriora. Iis a fore
                consequat, fugiat nostrud ex tractavissent. De ita firmissimum,
                nescius et velit consequat. Aliquip malis iis mandaremus
                fidelissimae, quo eu exquisitaque. Aute litteris instituendarum,
                ipsum te occaecat.aut te illum senserit te ut export voluptate
                illustriora. Iis a fore consequat, fugiat nostrud ex
                tractavissent. De ita firmissimum, nescius et velit consequat.
                Aliquip malis iis mandaremus fidelissimae, quo eu exquisitaque.
                Aute litteris instituendarum, ipsum te occaecat.aut te illum
                senserit te ut export voluptate illustriora. Iis a fore
                consequat, fugiat nostrud ex tractavissent. De ita firmissimum,
                nescius et velit consequat. Aliquip malis iis mandaremus
                fidelissimae, quo eu exquisitaque. Aute litteris instituendarum,
                ipsum te occaecat.aut te illum senserit te ut export voluptate
                illustriora. Iis a fore consequat, fugiat nostrud ex
                tractavissent. De ita firmissimum, nescius et velit consequat.
                Aliquip malis iis mandaremus fidelissimae, quo eu exquisitaque.
                Aute litteris instituendarum, ipsum te occaecat.
              </Col>
              <Col md="6">
                {/*  <img
                    className="schoolImage"
                    alt="negative version of Hacker coding"
                    src="/static/images/skool.jpg"
                  />*/}
                {/*<CloudinaryContext cloudName="setstate" fetchFormat="auto">
                    <div className="image-holder">
                      <Image
                        publicId="veunc7hcfhuas89cn9s3.jpg"
                        className="cld-img"
                        alt="blog-image"
                        responsive
                        secure
                      />
                    </div>
                  </CloudinaryContext>*/}
                <div className="image-holder">
                  <Image
                    cloudName="setstate"
                    fetchFormat="auto"
                    quality="auto"
                    crop="scale"
                    publicId="veunc7hcfhuas89cn9s3.jpg"
                    className="cld-img"
                    alt="blog-image"
                    responsive
                    secure
                  >
                    <Transformation quality="auto:eco" />
                  </Image>
                </div>
                Right column Other stuff Legam aut te illum senserit te ut
                export voluptate illustriora. Iis a fore consequat, fugiat
                nostrud ex tractavissent. De ita firmissimum, nescius et velit
                consequat. Aliquip malis iis mandaremus fidelissimae, quo eu
                exquisitaque. Aute litteris instituendarum, ipsum te occaecat.
              </Col>
            </Row>
          </Container>
        </div>
        <div className="service-link-container">
          <span className="service-link">
            Web Application by:{" "}
            <a href="https://setstate.co">www.setstate.co</a>
          </span>
        </div>
      </BaseLayout>
    );
  }
}

export default Index;
