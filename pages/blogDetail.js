import React from "react";
import { Row, Col } from "reactstrap";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { getBlogBySlug } from "../actions";

class BlogDetail extends React.Component {
  static async getInitialProps({ query }) {
    let blog = {};
    const slug = query.slug;

    try {
      blog = await getBlogBySlug(slug);
    } catch (err) {
      console.error(err);
    }
    return { blog };
  }

  render() {
    const { blog } = this.props;
    return (
      <BaseLayout {...this.props.auth}>
        <BasePage className="blog-detail-page">
          <Row>
            <Col md={{ size: 8, offset: 2 }}>
              <div dangerouslySetInnerHTML={{ __html: blog.story }} />
            </Col>
          </Row>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default BlogDetail;
