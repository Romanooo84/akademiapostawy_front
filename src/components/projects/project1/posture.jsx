import ReactMarkdown from 'react-markdown';
import css from './project1.module.css';

const ProjectsRender = ({ projectsContent, activeTab }) => {
  return (
    <>
      {projectsContent.map((project, key) => {
        const id = `section${key + 1}`;
        if (id !== activeTab) return null; // renderujemy tylko aktywny element
        return (
          <div className={css.mainDiv} key={key} id={id}>
            <h1>{project.title}</h1>
            <div className={css.text}>
              <ReactMarkdown>{project.content}</ReactMarkdown>
            </div>
          </div>
        );
      })}
    </>
  );
};


export default ProjectsRender;
