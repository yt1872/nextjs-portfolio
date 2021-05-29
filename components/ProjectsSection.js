import React from "react";
import Image from "next/image";

function ProjectsSection({ projectName, projectDesc, stack, image }) {
  let itemsToRender;
  if (stack) {
    itemsToRender = stack.map((item) => {
      return (
        <p
          className="text-xs bg-accent dark:bg-gray-800 rounded py-1 px-2 mr-2 mb-1"
          key={item}
        >
          {item}
        </p>
      );
    });
  }

  return (
    <div className="p-4 bg-gray-200 dark:bg-gray-700 rounded mb-6">
      {/* <Carousel {...{ images }} /> */}
      <div className="">
        {/* <Image src={image} layout="fill" objectFit="contain" /> */}
        <Image src={image} width={400} height={220} layout="responsive" />
        {/* <img src={image} className=""></img> */}
      </div>
      <div className="pt-4 pb-2">
        <h2>{projectName}</h2>
      </div>
      <div className="text-sm leading-6 whitespace-pre-wrap">{projectDesc}</div>
      <div className="flex mt-3 flex-wrap">{itemsToRender}</div>
    </div>
  );
}

export default ProjectsSection;
