import ProjectsSection from "./ProjectsSection";
import { projects } from "./Data";

function Projects() {
  let projectsToRender;
  projectsToRender = projects.map((project) => {
    return <ProjectsSection {...project} />;
  });

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto mt-24" id="works">
      <div className="">
        <div data-aos="fade-up" data-aos-duration="500">
          <h1>Previous work</h1>
          <div className="sectionUnderline"></div>
        </div>
        {/* <p>
          Some of my previous projects and work. View the code or a live version
          if available.
        </p> */}
        <div className="grid gap-4 md:grid-cols-2">{projectsToRender}</div>
      </div>
    </div>
  );
}

export default Projects;
