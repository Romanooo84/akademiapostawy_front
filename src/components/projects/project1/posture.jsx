import ReactMarkdown from 'react-markdown';
import css from './project1.module.css';

const ProjectsRender = ({ projectsContent }) => {
  return (
    <>
      {projectsContent.map((project, key) => (
        <div className={css.mainDiv} key={key} id={`section${key+1}`}>
          <h1 className={css.h1}>{project.title}</h1>
          <div className={css.text}>
            <ReactMarkdown>{project.content}</ReactMarkdown>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProjectsRender;
