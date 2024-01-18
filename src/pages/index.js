import * as React from "react";

import Form from "@components/Form";

const IndexPage = () => {
  return (
    <main className="bg-gradient-to-b from-white from-30% via-[#F7F5F2] via-50% to-warm-gray to-60% py-20">
      <div className="max-w-5xl mx-auto px-2">
        <Form />
      </div>
    </main>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
