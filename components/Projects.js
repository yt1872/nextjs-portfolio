import ProjectsSection from "./ProjectsSection";
import {
  projectObjOne,
  projectObjTwo,
  projectObjThree,
  projectObjFour,
} from "./Data";

function Projects() {
  return (
    <div className="mx-5 pt-16 md:px-10 md:m-0" id="works">
      <div className="flex flex-col md:flex-row w-full">
        <div className="py-3 md:w-1/3 md:text-right md:mr-5">
          <h1>PREVIOUS WORK</h1>
        </div>
        <div>
          <ProjectsSection {...projectObjOne} />
          <ProjectsSection {...projectObjTwo} />
          <ProjectsSection {...projectObjThree} />
          <ProjectsSection {...projectObjFour} />
        </div>
      </div>
    </div>
  );
}

export default Projects;
