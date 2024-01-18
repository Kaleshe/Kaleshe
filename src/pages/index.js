import * as React from "react";
import { Helmet } from "react-helmet";

import PageTemplate from "@components/PageTemplate";
import Header from "@components/Header";
import Projects from "@components/Projects";
import Form from "@components/Form";
import Footer from "@components/Footer";

const IndexPage = () => (
  <PageTemplate>
    <Header />
    <Projects />
    <Form />
    <Footer />
  </PageTemplate>
);

export default IndexPage;

export const Head = () => {
  return (
    <>
      <Helmet title="Kaleshe | Web designer & developer" />
      <Helmet>
        <meta
          name="description"
          content="A frontend developer with over 3 years of professional experience in web development, UI design, and JavaScript frameworks such as React."
        />
        <meta name="twitter:card" content="summary_large_image"></meta>
        <meta name="twitter:site" contact="@stubbornneko"></meta>
        <meta name="twitter:creator" content="@stubbornneko"></meta>
        <meta
          name="twitter:title"
          content="Kaleshe | Web designer & developer"
        ></meta>
        <meta
          name="twitter:description"
          content="A frontend developer with over 3 years of professional experience in web development, UI design, and JavaScript frameworks such as React."
        ></meta>
        <meta name="twitter:image" content="../images/open_graph.png"></meta>
        ​
        <meta property="og:locale" content="en_GB" />
        <meta property="og:site_name" content="Kaleshe" />
        <meta
          property="og:title"
          content="Kaleshe | Web designer & developer"
        ></meta>
        <meta property="og:url" content="https://www.kaleshe.co.uk"></meta>
        <meta
          property="og:description"
          content="A frontend developer with over 3 years of professional experience in web development, UI design, and JavaScript frameworks such as React."
        ></meta>
        <meta property="og:image" content="../images/open_graph.png"></meta>
        <meta property="og:image:alt" content="Kaleshe"></meta>
        <meta property="og:type" content="portfolio" />
      </Helmet>
    </>
  );
};
