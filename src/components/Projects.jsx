import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { useStaticQuery } from "gatsby";
import { graphql } from "gatsby";

const PROJECTS = [
  {
    title: "Krystal",
    description: "Business Website",
    imageURL: "krystal.webp",
    url: "https://krystal.uk",
  },
  {
    title: "Katapult",
    description: "Business Website",
    imageURL: "katapult.webp",
    url: "https://katapult.io",
  },
  {
    title: "Lior GP",
    description: "Business Website",
    imageURL: "lior.jpg",
    url: "https://lior-gp.com",
  },
  {
    title: "Comxps",
    description: "Job Board Website",
    imageURL: "comxps",
    url: "https://comxps.com",
  },
  {
    title: "Dennis of Bexley",
    description: "eCommerce Website",
    imageURL: "dob.webp",
    url: "https://www.dennisofbexley.com",
  },
  {
    title: "Glo",
    description: "UX/UI",
    imageURL: "glo.jpg",
    url: "https://www.behance.net/gallery/154402065/Glo",
  },
  {
    title: "Episteme",
    description: "Business Website",
    imageURL: "episteme.png",
    url: "https://epistemecap.com",
  },
  {
    title: "Inspire",
    description: "eCommerce Website",
    imageURL: "inspire.jpg",
    url: "https://inspirecommunitytrust.org",
  },
  {
    title: "HWM Solutions",
    description: "Business Website",
    imageURL: "hwm-solutions.jpg",
    url: "https://hwmsolutions.com",
  },
];

const Card = ({ title, images, description, imageURL, url }) => {
  const image = images.find((image) => {
    return image.node.fluid.src.includes(imageURL);
  });

  return (
    <li className="max-w-lg mx-auto text-center relative space-y-3 group">
      <div className="h-60 md:h-72 w-full rounded-xl overflow-hidden relative after:left-0 after:top-0 after:absolute after:w-full after:h-full after:bg-[linear-gradient(180deg,_rgba(0,_0,_0,_0)_56.68%,_rgba(0,_0,_0,_0.42)_87.08%,_rgba(0,_0,_0,_0.90)_100%)] group-hover:opacity-80 transition-all">
        <GatsbyImage
          height={361}
          width={373}
          image={image.node.gatsbyImageData}
          alt={title}
          className="w-full h-full"
        />
      </div>
      <div>
        <a
          className="font-extrabold text-2xl after:absolute after:left-0 after:top-0 after:w-full after:h-full"
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          {title}
        </a>
        <p className="text-warm-gray-70 font-medium">{description}</p>
      </div>
    </li>
  );
};

const Projects = () => {
  const {
    allImageSharp: { edges: images },
  } = useStaticQuery(graphql`
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
  `);

  return (
    <ul className="grid gap-x-6 gap-y-10 md:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
      {PROJECTS.map((item) => (
        <Card images={images} {...item} />
      ))}
    </ul>
  );
};

export default Projects;
