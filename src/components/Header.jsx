import React from "react";
import { Link } from "gatsby";
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
    url: "https://www.linkedin.com/in/kaleshe/",
  },
  { label: "Dribble", icon: "dribble", url: "https://dribbble.com/kaleshe" },
]);

const isExternal = (string) => {
  return string.includes("http");
};

const Header = () => (
  <header className="flex flex-col gap-4 text-center items-center sm:text-left sm:justify-between sm:flex-row">
    <div className="flex flex-col gap-y-3 gap-x-4 sm:items-center sm:flex-row">
      <Link to="/">
        <StaticImage
          alt="Kaleshe"
          width={53}
          src="../images/kaleshe.png"
          quality={70}
          objectFit="contain"
        />
      </Link>
      <div>
        <p className="font-bold text-lg leading-5 md:leading-none">
          Kaleshe <span className="hidden md:inline-block">Alleyne-Vassel</span>
        </p>
        <p className="text-sm font-medium text-warm-gray-70">
          Web designer &amp; developer
        </p>
      </div>
    </div>
    <ul className="flex gap-x-4">
      {LINKS.map(({ icon, url, label }) => (
        <li key={icon}>
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
