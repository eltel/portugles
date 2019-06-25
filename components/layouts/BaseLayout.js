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
          content="We are setState({}) and we are experienced software engineers and freelance developers."
        />

        <meta
          name="keywords"
          content="setState({}) portfolio, setState({}) developer, setState({}) freelancing, setState({}) programming"
        />
        <meta
          property="og:title"
          content="setState({}) - programmers, developers, bloggers"
        />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`} />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="We are setState({}) and we are experienced software engineers and freelance developers. We have a Master's degree in Artificial Intelligence and several years of experience working on a wide range of technologies and projects from C++ development for ultrasound devices to modern mobile and web applications in React and Angular. Throughout my career, We have acquired advanced technical knowledge and the ability to explain programming topics clearly and in detail to a broad audience."
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
