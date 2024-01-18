import * as React from "react";

import Header from "@components/Header";
import Projects from "@components/Projects";
import Form from "@components/Form";
import Footer from "@components/Footer";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

const IndexPage = () => (
  <main className="bg-gradient-to-b from-white from-30% via-[#F7F5F2] via-50% to-warm-gray to-60% py-8 md:py-20">
    <div className="max-w-5xl mx-auto px-3 space-y-16 md:space-y-20">
      <Header />
      <Projects />
      <Form />
      <Footer />
    </div>
  </main>
);

export default IndexPage;

export const Head = () => {
  const { title, description } = useSiteMetadata();

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
    </>
  );
};
