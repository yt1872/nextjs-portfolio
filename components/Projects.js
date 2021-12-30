import ProjectsSection from "./ProjectsSection";
import { projects } from "./Data";
import { useRouter } from "next/router";
import { en } from "../locales/en";
import { ja } from "../locales/ja";

function Projects() {
  const router = useRouter();
  const t = router.locale === "en" ? en : ja;

  let projectsToRender;
  projectsToRender = projects.map((project, index) => {
    let props = { projectInfo: project, id: index };
    return <ProjectsSection {...props} />;
  });

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto mt-24" id="works">
      <h1>{t.previousWork}</h1>
      <div className="sectionUnderline"></div>
      {projectsToRender}
    </div>
  );
}

export default Projects;
