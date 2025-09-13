import css from './project1.module.css';

const ProjectsRender = ({ projectContent}) => {


  return (
    <>
      {projectContent.map((project, key) => {
        return (
          <div className={css.mainDiv} key={key} id={`section${key}`}>
            <h1 className={css.header1}>{project.title}</h1>
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
