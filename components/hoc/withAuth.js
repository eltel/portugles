import React from "react";

import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";


export default role => Component =>
  class withAuth extends React.Component {
    static async getInitialProps(args) {
      const pageProps =
        (await Component.getInitialProps) &&
        (await Component.getInitialProps(args));

      return { ...pageProps };
    }

    renderProtectedContent() {
      const { isAuthenticated, user } = this.props.auth;
      const userRole = user && user[`${process.env.NAMESPACE}/role`];
      let isAuthorized = false;

      if (role) {
        if (userRole && userRole === role) {
          isAuthorized = true;
        }
      } else {
        isAuthorized = true;
      }

      if (!isAuthenticated) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <div>Unauthenticated - Sign up or log in to access</div>
              <p>Secret Content Here</p>
            </BasePage>
          </BaseLayout>
        );
      } else if (!isAuthorized) {
        return (
          <BaseLayout {...this.props.auth}>
            <BasePage>
              <div>
                Unauthorized - You don't have permission to access this content
              </div>
              <p>Secret Content Here</p>
            </BasePage>
          </BaseLayout>
        );
      } else {
        return <Component {...this.props} />;
      }
    }
    render() {
      return this.renderProtectedContent();
    }
  };
