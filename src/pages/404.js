import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import PageTemplate from "@components/PageTemplate";
import Header from "@components/Header";
import Footer from "@components/Footer";
import Button from "@components/Button";

const NotFoundPage = () => {
  return (
    <PageTemplate>
      <Header />
      <div className="space-y-6 text-center">
        <StaticImage
          alt="Ikigai Cat putting up a 404 error sign"
          width={368}
          placeholder="none"
          src="../images/ikigai-cat-putting-up-a-404-error-sign-1.png"
          quality={80}
        />
        <p className="text-warm-gray-70 mb-20 max-w-md mx-auto md:text-lg">
          Sorry, but the page you're looking for doesn't exist, or never existed in the first place.
        </p>
        <Button>
          <Link to="/">Go home</Link>
        </Button>
      </div>
      <Footer />
    </PageTemplate>
  );
};

export default NotFoundPage;

export const Head = () => <title>Not found</title>;
