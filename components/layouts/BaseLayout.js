import React from "react";
import Header from "../shared/Header";
import Head from "next/head";

const BaseLayout = props => {
  const {
    className,
    children,
    isAuthenticated,
    user,
    isSiteOwner,
    canonical
  } = props;
  const headerType = props.headerType || "default";
  const title = props.title || "Portuglês.com";
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Portuglês.com 'The people from here, the language from there': English studies for Brazilian students."
        />
        <meta
          name="keywords"
          content="Portuglês, English, studies. Brazilian, students"
        />
        <meta
          property="og:title"
          content="Portuglês.com 'The people from here, the language from there': English studies for Brazilian students"
        />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/setstate/image/upload/v1562190941/ljmzttyqtdrylfv0bb3w.png"
        />
        <meta property="og:locale" content="en_GB" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Portuglês.com 'The people from here, the language from there': English studies for Brazilian students."
        />
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,700&display=swap"
          rel="stylesheet"
        />
        {canonical && (
          <link rel="canonical" href={`${process.env.BASE_URL}${canonical}`} />
        )}
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="/static/images/favicon.ico"
        />
        <link
          rel="apple-touch-icon-precomposed"
          href="/static/images/apple-touch-icon.png"
        />
      </Head>
      <div className="layout-container">
        <Header
          className={`port-nav-${headerType}`}
          isAuthenticated={isAuthenticated}
          user={user}
          isSiteOwner={isSiteOwner}
        />
        <main className={`cover ${className}`}>
          <div className="wrapper">{children}</div>
        </main>
      </div>
    </React.Fragment>
  );
};

export default BaseLayout;
