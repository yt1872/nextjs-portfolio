import ProjectsSection from "./ProjectsSection";
import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
} from "./Data";

function Projects() {
  gsap.registerPlugin(ScrollTrigger);
  let projectsTitle = useRef(null);
  let projectOne = useRef(null);
  let projectTwo = useRef(null);
  let projectThree = useRef(null);
  let projectFour = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      projectsTitle,
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectsTitle,
        },
      }
    );
    gsap.fromTo(
      projectOne,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectOne,
        },
      }
    );
    gsap.fromTo(
      projectTwo,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectTwo,
        },
      }
    );
    gsap.fromTo(
      projectThree,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectThree,
        },
      }
    );
    gsap.fromTo(
      projectFour,
      { opacity: 0, x: 50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        scrollTrigger: {
          trigger: projectFour,
        },
      }
    );
  });

  return (
    <div className="mx-5 pt-16 md:px-10 md:m-0" id="works">
      <div className="flex flex-col md:flex-row w-full">
        <div
          className="py-3 md:w-1/3 md:text-right md:mr-5"
          ref={(el) => (projectsTitle = el)}
        >
          <h1>PREVIOUS WORK</h1>
        </div>
        <div className="px-2 py-3 md:w-1/2">
          <div ref={(el) => (projectOne = el)}>
            <ProjectsSection {...projectObjOne} />
          </div>
          <div ref={(el) => (projectTwo = el)}>
            <ProjectsSection {...projectObjTwo} />
          </div>
          <div ref={(el) => (projectThree = el)}>
            <ProjectsSection {...projectObjThree} />
          </div>
          <div ref={(el) => (projectFour = el)}>
            <ProjectsSection {...projectObjFour} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
