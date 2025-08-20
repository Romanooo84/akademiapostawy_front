import { useState } from "react";
import css from './projects.module.css';
import ProjectsRender from "../../components/projects/project1/posture";
import projectsContent from "./projectsContnent";

const Projects = () => {
  const [activeTab, setActiveTab] = useState("section1");

  const handleClick = (id) => {
    setActiveTab(id);
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const buttonsMarkup = projectsContent.map((project, key) => {
    const id = `section${key+1}`;
    return (
      <button
        className={activeTab === id ? css.activeTab : ""}
        key={key}
        onClick={() => handleClick(id)}
      >
        <img className={css.projectImg} src={project.img}/>
        <h1>{project.title}</h1>
      </button>
    );
  });

  return (
    <div className={css.mainDiv}>
      <nav className={css.tabNav}>{buttonsMarkup}</nav>
      <div className={css.sectionsDiv}>
        <ProjectsRender projectsContent={projectsContent}  activeTab={activeTab}/>
      </div>
    </div>
  );
};

export default Projects;
