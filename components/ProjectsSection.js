import React from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import Image from "next/image";

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

  return (
    // <div
    //   className="p-8 rounded-md mb-6 flex flex-col-reverse"
    //   style={projectCard}
    // >
    //   <div className="">
    //     <div className="pb-2 pt-4">
    //       <h2>{projectName}</h2>
    //     </div>
    //     <div className="flex flex-col">
    //       <div className="text-sm flex flex-auto leading-6 whitespace-pre-wrap">
    //         {projectDesc}
    //       </div>
    //       <div className="flex justify-between">
    //         <div className="flex mt-3 flex-wrap">{itemsToRender}</div>
    //         <div className="flex mt-3 self-end space-x-2">
    //           {code !== "" ? (
    //             <a href={code} target="_blank" rel="noopener noreferrer">
    //               <CodeIcon className="hover:text-primary w-6" />
    //             </a>
    //           ) : null}
    //           {url !== "" ? (
    //             <a href={url} target="_blank" rel="noopener noreferrer">
    //               <ExternalLinkIcon className="hover:text-primary w-6" />
    //             </a>
    //           ) : null}
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div className="w-100 my-4">
      <Image
        src={images[0]}
        width={805}
        height={440}
        layout="responsive"
        className="rounded"
      />
    </div>
  );
}

export default ProjectsSection;
