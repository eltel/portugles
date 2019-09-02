import React from "react";
import { Row, Col, Button } from "reactstrap";

import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";

class About extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEnglish: true
    };

    this.toggleLanguage = this.toggleLanguage.bind(this);
  }

  toggleLanguage() {
    this.setState(prevState => ({ isEnglish: !prevState.isEnglish }));
  }

  //   this.setState(prevState => ({
  //   check: !prevState.check
  // }));

  //  () => this.setState(prevState =>({!prevState.isEnglish}))
  render() {
    const { isEnglish } = this.state;
    return (
      <BaseLayout {...this.props.auth} title="Portuglês - About">
        <BasePage className="about-page">
          <Row className="mt-5">
            <Col md="6">
              <div className="switchLanguge-container">
                {isEnglish && (
                  <Button
                    color="success"
                    style={{ minWidth: "10em" }}
                    onClick={this.toggleLanguage}
                  >
                    Portuguese
                  </Button>
                )}
                {!isEnglish && (
                  <Button
                    color="danger"
                    style={{ minWidth: "10em" }}
                    onClick={this.toggleLanguage}
                  >
                    English
                  </Button>
                )}
              </div>
              <div className="left-side" style={{ width: "300px" }}>
                {isEnglish && <h1 className="title fadein">Hi, Welcome</h1>}{" "}
                {!isEnglish && <h1 className="title fadein">Oi, bem vindo</h1>}
                {isEnglish && (
                  <h4 className="subtitle fadein">
                    To the Portugles.com About Page
                  </h4>
                )}
                {!isEnglish && (
                  <h4 className="subtitle fadein">
                    Para a página Sobre do Portugles.com
                  </h4>
                )}
                {isEnglish && (
                  <p className="subsubTitle fadein">
                    Here's a short description of who we are and what we do...
                  </p>
                )}
                {!isEnglish && (
                  <p className="subsubTitle fadein">
                    Aqui está uma breve descrição de quem somos e o que fazemos
                    ...
                  </p>
                )}
              </div>
            </Col>
            <Col md="6">
              <div className="fadein">
                {isEnglish && (
                  <>
                    <p>
                      Specialists in personalised, English language studies for
                      Brazilians.{" "}
                    </p>
                    <p>
                      Classes are available both in-person and online via Skype
                      and are tailored to the needs of the individual student.
                      Private, in-person classes are only available at the
                      school in Sorocaba at the moment - Skype classes are
                      available throughout Brazil, depending on the quality of
                      the student's internet connection.
                    </p>
                    <p>
                      Coordinated by a native English teacher from London, with
                      13+ years experience of catering for the specific
                      requirements of Brazilian students of English as a second
                      language, at all levels. Translations of Portuguese
                      language texts into English and text-revision/proofreading
                      in English services are also available.
                    </p>
                  </>
                )}
                {!isEnglish && (
                  <>
                    <p>
                      Especialistas em estudos personalizados da língua inglesa
                      para Brasileiros.{" "}
                    </p>
                    <p>
                      As aulas estão disponíveis pessoalmente e on-line via
                      Skype e são adaptados às necessidades de cada aluno.
                      Privado, aulas presenciais só estão disponíveis na escola
                      em Sorocaba no momento - as aulas do Skype estão
                      disponíveis em todo o Brasil, dependendo da qualidade da
                      conexão de internet do aluno.
                    </p>
                    <p>
                      Coordenado por um professor de inglês nativo de Londres,
                      com mais de 13 anos anos de experiência em atender os
                      requisitos específicos de Estudantes brasileiros de inglês
                      como segunda língua, de todo níveis. Traduções de textos
                      em português para inglês revisão de texto / revisão em
                      serviços em inglês também são acessível.
                    </p>
                  </>
                )}
              </div>
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default About;
