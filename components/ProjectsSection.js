import React from "react";
import Image from "next/image";
import { GoBrowser, GoFileCode } from "react-icons/go";

import ReactPlayer from "react-player";

function ProjectsSection(props) {
  let itemsToRender;
  if (props.projectInfo.stack) {
    itemsToRender = props.projectInfo.stack.map((item) => {
      return (
        <p
          className="text-xs dark:text-slate-100 rounded-md py-1 px-2 bg-slate-50 dark:bg-slate-700"
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

  let liveLink;
  if (props.projectInfo.url) {
    liveLink = (
      <a
        title="Visit site"
        href={props.projectInfo.url}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-cyan-500 hover:dark:text-cyan-400"
      >
        <GoBrowser className="text-2xl" />
      </a>
    );
  }

  let sourceCode;
  if (props.projectInfo.code) {
    sourceCode = (
      <a
        title="Check code"
        href={props.projectInfo.code}
        target="_blank"
        rel="noopener noreferrer"
        className="cursor-pointer hover:text-cyan-500 hover:dark:text-cyan-400"
      >
        <GoFileCode className="text-2xl" />
      </a>
    );
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
        <div className="">
          <div className="flex justify-between">
            <div className="font-semibold text-cyan-500 dark:text-cyan-400 mb-2">
              {props.projectInfo.projectName}
            </div>
            <div className="flex space-x-1">
              {liveLink}
              {sourceCode}
            </div>
          </div>
          <div className="mb-2">{props.projectInfo.projectDesc}</div>
          <div className="flex mb-2 space-x-2">{itemsToRender}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
