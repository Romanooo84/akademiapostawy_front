
import css from './projects.module.css';
import ProjectsRender from "../../components/projects/projectContent/posture";
import projectsContent from "./projectsContnent";
import { useState } from 'react';
import ProjectButtons from '../../components/projects/projectContent/projectButtons/projectButtons';

const Projects = () => {
  

  const [activeTab, setActiveTab] = useState("section3");

  return (
    <div className={css.mainDiv}>
      <div className={css.tabAndBoxDiv}>
        <ProjectButtons projectsContent={projectsContent}  activeTab={activeTab} setActiveTab={setActiveTab}/>
      </div>
      <div className={css.sectionsDiv}>
        <ProjectsRender projectsContent={projectsContent}  activeTab={activeTab}/>
      </div>
    </div>
  );
};

export default Projects;
