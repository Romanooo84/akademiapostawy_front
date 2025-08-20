import ReactMarkdown from 'react-markdown';
import css from './project1.module.css';

const ProjectsRender = ({ projectsContent, activeTab }) => {

   const markdownComponents = {
    h1: ({  ...props }) => <h1 className={css.header1} {...props} />,
    h2: ({  ...props }) => <h2 className={css.header2} {...props} />,
    h3: ({  ...props }) => <h3 className={css.header3} {...props} />,
    p: ({  ...props }) => <p className={css.paragraph} {...props} />,
    li: ({  ...props }) => <li className={css.li} {...props} />,
  };

  return (
    <>
      {projectsContent.map((project, key) => {
        const id = `section${key + 1}`;
        if (id !== activeTab) return null; // renderujemy tylko aktywny element
        return (
          <div className={css.mainDiv} key={key} id={id}>
            <h1 className={css.header1}>{project.title}</h1>
            <div className={css.text}>
              <ReactMarkdown components={markdownComponents}>{project.content}</ReactMarkdown>
            </div>
          </div>
        );
      })}
    </>
  );
};


export default ProjectsRender;
