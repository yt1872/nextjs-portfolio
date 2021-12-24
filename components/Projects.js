import ProjectsSection from "./ProjectsSection";
import { projects } from "./Data";

function Projects() {
  let projectsToRender;
  projectsToRender = projects.map((project, index) => {
    let props = { projectInfo: project, id: index };
    // console.log(props);
    return <ProjectsSection {...props} />;
  });

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto mt-24" id="works">
      <div className="">
        <div data-aos-duration="500">
          <h1>Previous work</h1>
          <div className="sectionUnderline"></div>
        </div>
        {/* <p>
          Some of my previous projects and work. View the code or a live version
          if available.
        </p> */}
        <div className="">{projectsToRender}</div>
      </div>
    </div>
  );
}

export default Projects;
