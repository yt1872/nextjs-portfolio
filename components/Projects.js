import ProjectsSection from "./ProjectsSection";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
  projectObjFive,
} from "./Data";

function Projects() {
  return (
    <div className="mx-6 mt-12 md:w-2/3 md:m-auto" id="works">
      <div className="">
        <div className="">
          <h1>Previous Work</h1>
        </div>
        <div className="">
          <div
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <ProjectsSection {...projectObjFive} />
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <ProjectsSection {...projectObjOne} />
          </div>
          <div
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <ProjectsSection {...projectObjTwo} />
          </div>
          <div
            data-sal="slide-left"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <ProjectsSection {...projectObjThree} />
          </div>
          <div
            data-sal="slide-right"
            data-sal-easing="ease"
            data-sal-duration="500"
          >
            <ProjectsSection {...projectObjFour} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
