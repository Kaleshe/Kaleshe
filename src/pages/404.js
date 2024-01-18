import * as React from "react";
import { Link } from "gatsby";

import Header from "@components/Header";
import Footer from "@components/Footer"

const NotFoundPage = () => {
  return (
    <main>
      <Header />
      <h1>Page not found</h1>
      <p>
        Sorry 😔, we couldn’t find what you were looking for.
        <Link to="/">Go home</Link>.
      </p>
      <Footer />
    </main>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
