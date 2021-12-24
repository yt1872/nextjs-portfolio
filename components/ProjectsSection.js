import React from "react";
import { CodeIcon, ExternalLinkIcon } from "@heroicons/react/outline";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/solid";
import Image from "next/image";
import ReactPlayer from "react-player";

function ProjectsSection(props) {
  let itemsToRender;
  if (props.projectInfo.stack) {
    itemsToRender = props.projectInfo.stack.map((item) => {
      return (
        <p
          className="text-xs dark:text-slate-100 rounded-md py-1 px-2 mr-2 mt-2 bg-slate-200 dark:bg-slate-700"
          key={item}
        >
          {item}
        </p>
      );
    });
  }

  let imagesToRender;
  if (props.projectInfo.images) {
    imagesToRender = props.projectInfo.images.map((image) => {
      return (
        <div className="embla__slide h-[45vw]">
          <Image src={image} layout="fill" objectFit="cover" />
        </div>
      );
    });
  }

  return (
    <div
      key={props.id}
      data-aos="fade-up"
      className="mb-4 md:mb-8 p-4 rounded-md bg-slate-200 dark:bg-slate-800 items-center grid gap-4 md:grid-cols-5"
    >
      <div className={`${props.id % 2 ? "previewRTL" : "previewLTR"}`}>
        {props.projectInfo.video ? (
          <ReactPlayer
            className="absolute top-0 left-0"
            url="https://youtu.be/Qfd_S9Jh8Lc?t=3341"
            width="100%"
            height="100%"
          />
        ) : (
          <Image
            src={props.projectInfo.images[0]}
            layout="fill"
            objectFit="cover"
            priority="true"
          />
        )}
      </div>
      <div
        className={`${
          props.id % 2 ? "infoRTL projectInfo" : "infoLTR projectInfo"
        }`}
      >
        <div className="font-semibold text-cyan-400 mb-2">
          {props.projectInfo.projectName}
        </div>
        <div className="mb-2">{props.projectInfo.projectDesc}</div>
        <div className="flex">{itemsToRender}</div>
      </div>
    </div>
  );
}

export default ProjectsSection;
