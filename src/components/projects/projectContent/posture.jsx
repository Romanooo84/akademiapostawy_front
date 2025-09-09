import ReactMarkdown from 'react-markdown';
import css from './project1.module.css';

const ProjectsRender = ({ projectContent, activeTab }) => {


  return (
    <>
      {projectContent.map((project, key) => {
        const id = `section${key + 1}`;
        if (id !== activeTab) return null; // renderujemy tylko aktywny element
        return (
          <div className={css.mainDiv} key={key} id={id}>
            <h3>{project.title}</h3>
            <div className={css.text}>
              <div  className={css.contentDiv} dangerouslySetInnerHTML={{ __html: project.content}}/>
            </div>
          </div>
        );
      })}
    </>
  );
};


export default ProjectsRender;
