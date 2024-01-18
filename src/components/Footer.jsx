import React from "react";

const date = new Date();
const year = date.getFullYear();

const Footer = () => (
  <footer className="py-8 border-t border-warm-gray-10 text-warm-gray-60 text-sm text-center lg:text-left">
    <p>&copy; {year} Kaleshe Alleyne-Vassel</p>
  </footer>
);

export default Footer;
