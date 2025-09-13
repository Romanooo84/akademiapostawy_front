import { useState, useRef, useEffect } from "react";
import css from "./projectButtons.module.css";

const ProjectButtons = ({projectContent}) => {

  const [blocks, setBlocks] = useState()
  
  const handleClick = (idx) => {
    const section = document.getElementById(`section${idx}`);
     if (section) {
    const yOffset = -130; // przewiń 100px wyżej
    const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

  useEffect(()=>{
    console.log(projectContent)
      const markup = projectContent.map((project, idx) => {
              return (
                <div className={css.border}>
                  <button
                    key={idx}
                    className={css.item}
                    onClick={() => handleClick(idx)}
                  >
                    <img className={css.projectImg} src={project.img}/>
                    <h1>{project.title}</h1>
                  </button>
                </div>
              );
            })
            setBlocks(markup)
  },[])

  return (
        <div className={css.carousel}>
          {blocks}
        </div>
  );
};

export default ProjectButtons;
