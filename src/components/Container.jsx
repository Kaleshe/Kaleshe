import React from "react";

const Container = ({ children, ...otherProps }) => (
  <div className="max-w-5xl mx-auto px-2" {...otherProps}>
    {children}
  </div>
);

export default Container;
