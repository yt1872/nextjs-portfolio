import React from "react";
import Carousel from "./Carousel";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { IconContext } from "react-icons";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";

// import { Carousel } from "react-responsive-carousel";
// import styles from "react-responsive-carousel/lib/styles/carousel.min.css";

function ProjectsSection({
  projectName,
  projectDesc,
  stack,
  images,
  url,
  code,
  bgColor,
  fontColor,
  stackColor,
  direction,
}) {
  let projectCard = {
    backgroundColor: bgColor,
    color: fontColor,
  };

  let stackPill = {
    backgroundColor: stackColor,
    color: fontColor,
  };

  let itemsToRender;
  if (stack) {
    itemsToRender = stack.map((item) => {
      return (
        <p
          className="text-xs rounded-md py-1 px-2 mr-2 mt-2"
          style={stackPill}
          key={item}
        >
          {item}
        </p>
      );
    });
  }

  {
    /* <Carousel>
    {images.map((image, index) => {
      <Image src={image} width={800} height={440} layout="responsive" />;
    })}
  </Carousel> */
  }
  return (
    <div
      className="p-8 rounded-md mb-6 flex flex-col-reverse"
      style={projectCard}
    >
      <div className="">
        <div className="pb-2 pt-4">
          <h2>{projectName}</h2>
          {/* <p>{direction ? "left to right" : "right to left"}</p> */}
        </div>
        <div className="flex flex-col">
          <div className="text-sm flex flex-auto leading-6 whitespace-pre-wrap">
            {projectDesc}
          </div>
          <div className="flex justify-between">
            <div className="flex mt-3 flex-wrap">{itemsToRender}</div>
            {/* <div className="flex mt-3 mb-1 self-end space-x-2">
              {code !== "" ? (
                <IconContext.Provider value={{ size: "1.2rem" }}>
                <FaGithub className="hover:text-primary" />
                </IconContext.Provider>
                ) : null}
                {url !== "" ? (
                  <IconContext.Provider value={{ size: "1.2rem" }}>
                  <FaExternalLinkAlt className="hover:text-primary" />
                  </IconContext.Provider>
                  ) : null}
                </div> */}
            <div className="flex mt-3 self-end space-x-2">
              {code !== "" ? (
                <a href={code} target="_blank" rel="noopener noreferrer">
                  <CodeIcon className="hover:text-primary w-6" />
                </a>
              ) : null}
              {url !== "" ? (
                <a href={url} target="_blank" rel="noopener noreferrer">
                  <ExternalLinkIcon className="hover:text-primary w-6" />
                </a>
              ) : null}
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Image src={images[0]} width={800} height={440} layout="responsive" />

        {/* <Carousel images={images} /> */}
      </div>
    </div>
  );
}

export default ProjectsSection;
