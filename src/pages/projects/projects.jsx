
import css from './projects.module.css';
import ProjectsRender from "../../components/projects/projectContent/posture";
import { useState, useEffect } from 'react';
import ProjectButtons from '../../components/projects/projectButtons/projectButtons';
//import ProjectButtonsHorizontal from '../../components/projects/projectButtons/projectButtonsHorizontal';
import link from '../../link';
import { TbChevronsUp } from 'react-icons/tb';

const Projects = () => {

  const [projectContent, setProjectContent] = useState([]);
  const [active, setActive] = useState(false);

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

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true); // pokaż przycisk po scrollu w dół
      } else {
        setActive(false); // ukryj na górze
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollUp = () => {
    window.scrollTo({
      top: 0,           // przewiń do góry
      behavior: 'smooth' // płynne przewijanie
    });
  };
  

  

return (
  <>

    {projectContent.length > 0 && (
     <>
      <div className={css.mainDiv}>
        <div>
          <ProjectButtons
            projectContent={projectContent}
          />
        </div>
        <div className={css.sectionsDiv}>
          <ProjectsRender
            projectContent={projectContent}
          />
        </div>
      </div>
      <div className={active ? css.active : css.inactive}>
        <button className={css.button} onClick={scrollUp}>
          <TbChevronsUp className={css.svg} />
        </button>
</div>

      </>
    )}
  </>
);

};

export default Projects;
