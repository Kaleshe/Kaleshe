import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const LINKS = Object.freeze([
  {
    label: "Contact",
    icon: "envelope",
    url: "#contact",
  },
  { label: "GitHub", icon: "github", url: "https://github.com/Kaleshe" },
  {
    label: "LinkedIn",
    icon: "linkedin",
    url: "https://linkedin.com/in/kaleshe",
  },
  { label: "Dribble", icon: "dribble", url: "https://dribbble.com/kaleshe" },
]);

const isExternal = (string) => {
  return string.includes("http");
};

const Header = () => (
  <header className="flex justify-between items-center">
    <div className="flex gap-x-4">
      <StaticImage alt="Kaleshe" width={53} src="../images/kaleshe.png" />
      <div>
        <p className="font-bold text-lg">
          Kaleshe <span className="hidden md:inline-block">Alleyne-Vassel</span>
        </p>
        <h1 className="text-sm font-medium leading-none text-warm-gray-70">
          Web designer &amp; developer
        </h1>
      </div>
    </div>
    <ul className="flex gap-x-4">
      {LINKS.map(({ icon, url, label }) => (
        <li>
          <a
            href={url}
            {...(isExternal(url)
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <svg
              height={16}
              width={16}
              className="hover:opacity-70 transition-opacity"
              alt={label}
            >
              <use href={`/icons.svg#${icon}`}></use>
            </svg>
          </a>
        </li>
      ))}
    </ul>
  </header>
);

export default Header;
