import React from "react";
import Image from "next/image";

function ProjectsSection({ projectName, projectDesc, stack, image }) {
  let itemsToRender;
  if (stack) {
    itemsToRender = stack.map((item) => {
      return (
        <p
          className="border text-xs border-primary rounded-md p-1 mr-2 mb-1"
          key={item}
        >
          {item}
        </p>
      );
    });
  }

  return (
    <div className="py-3">
      {/* <Carousel {...{ images }} /> */}
      <div className="">
        {/* <Image src={image} layout="fill" objectFit="contain" /> */}
        <Image src={image} width={400} height={220} layout="responsive" />
        {/* <img src={image} className=""></img> */}
      </div>
      <div className="py-2">
        <h2>{projectName}</h2>
      </div>
      <div className="text-sm leading-6">{projectDesc}</div>
      <div className="flex mt-3 flex-wrap">{itemsToRender}</div>
    </div>
  );
}

export default ProjectsSection;
