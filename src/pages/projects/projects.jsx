
import css from './projects.module.css';
import ProjectsRender from "../../components/projects/projectContent/posture";
import { useState, useEffect } from 'react';
//import ProjectButtons from '../../components/projects/projectButtons/projectButtons';
import ProjectButtonsHorizontal from '../../components/projects/projectButtons/projectButtonsHorizontal';
import link from '../../link';

const Projects = () => {

  const [projectContent, setProjectContent] = useState([]);

  useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(`${link}projectscontent`);
        if (!response.ok) throw new Error('Błąd pobierania danych');
        const data = await response.json();
        setProjectContent(data);
      } catch (error) {
        console.error('Nie udało się pobrać listy zdjęć:', error);
      }
    };

    fetchPictures();
  }, []);
  

  const [activeTab, setActiveTab] = useState("section3");

return (
  <>
    {projectContent.length > 0 && (
      <div className={css.mainDiv}>
        <div>
          <ProjectButtonsHorizontal
            projectContent={projectContent}
            setActiveTab={setActiveTab}
          />
        </div>
        <div className={css.sectionsDiv}>
          <ProjectsRender
            projectContent={projectContent}
            activeTab={activeTab}
          />
        </div>
      </div>
    )}
  </>
);

};

export default Projects;
