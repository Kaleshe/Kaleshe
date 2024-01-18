import * as React from "react";
import { graphql } from "gatsby";

import Header from "@components/Header";
import Projects from "@components/Projects";
import Form from "@components/Form";
import Footer from "@components/Footer";

const IndexPage = ({ data }) => {
  return (
    <main className="bg-gradient-to-b from-white from-30% via-[#F7F5F2] via-50% to-warm-gray to-60% py-8 md:py-20">
      <div className="max-w-5xl mx-auto px-3 space-y-16 md:space-y-20">
        <Header />
        <Projects data={data} />
        <Form />
        <Footer />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;

export const pageQuery = graphql`
  query imageQuery {
    allImageSharp {
      edges {
        node {
          gatsbyImageData
          fluid(maxWidth: 600) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;
