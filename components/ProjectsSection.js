import React from "react";
import Image from "next/image";
import { GoBrowser, GoFileCode } from "react-icons/go";
import { useRouter } from "next/router";

import ReactPlayer from "react-player";

function ProjectsSection(props) {
  const router = useRouter();

  let itemsToRender;
  if (props.projectInfo.stack) {
    itemsToRender = props.projectInfo.stack.map((item) => {
      return (
        <p
          className="text-xs dark:text-slate-100 rounded-md py-1 px-2 mr-2 mb-2 bg-slate-50 dark:bg-slate-700"
          key={item}
        >
          {item}
        </p>
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
      data-aos="fade-up"
      data-aos-duration="600"
      className="mb-4 md:mb-8 p-4 rounded-md bg-slate-200 dark:bg-slate-800 items-center grid gap-4 md:grid-cols-5"
    >
      <div className={`${props.id % 2 ? "previewRTL" : "previewLTR"}`}>
        {props.projectInfo.video ? (
          <ReactPlayer
            className="absolute top-0 left-0"
            url={props.projectInfo.video}
            width="100%"
            height="100%"
          />
        ) : (
          <Image
            src={props.projectInfo.images[0]}
            layout="fill"
            objectFit="contain"
            priority="true"
          />
        )}
      </div>
      <div
        className={`${
          props.id % 2 ? "infoRTL projectInfo" : "infoLTR projectInfo"
        }`}
      >
        <div>
          <div className="flex justify-between">
            <div className="font-semibold text-cyan-500 dark:text-cyan-400 mb-2">
              {router.locale === "en"
                ? props.projectInfo.projectName
                : props.projectInfo.projectNameJa}
            </div>
            <div className="flex space-x-1">
              {liveLink}
              {sourceCode}
            </div>
          </div>
          <div className="mb-2">
            {router.locale === "en"
              ? props.projectInfo.projectDesc
              : props.projectInfo.projectDescJa}
          </div>
          <div className="flex flex-wrap">{itemsToRender}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectsSection;
