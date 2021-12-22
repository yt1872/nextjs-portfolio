import React from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";

function ProjectsSection({
  projectName,
  projectDesc,
  projectTagline,
  stack,
  images,
  url,
  code,
  bgColor,
  fontColor,
  stackColor,
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

  return (
    <div
      data-aos="fade-up"
      className="relative h-[50vw] md:h-[25vw] lg:h-[20vw]"
    >
      <Image
        src={images[0]}
        layout="fill"
        objectFit="cover"
        className="rounded-md absolute"
        priority="true"
      />
      <div className="absolute flex items-center bg-slate-700 text-slate-200 w-full h-full opacity-0 hover:opacity-95 rounded-md transition ease-in-out duration-200">
        <div className="w-2/3 mx-auto text-center">
          <div className="mb-4">{projectTagline}</div>
          <button className="primary-btn">Find out more</button>
          {/* <div>{projectDesc}</div> */}
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
