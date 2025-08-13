import { useRef } from "react";
import css from './projects.module.css'
import Posture from "../../components/projects/project1/posture";
import Screening from "../../components/projects/project2/screening";



const Projects = () => {
  const sectionRefs = {
    section1: useRef(null),
    section2: useRef(null),
    section3: useRef(null)
  };

  const scrollTo = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (
    <div className={css.mainDiv}>
      <nav>
        <button onClick={() => scrollTo("section1")}>Sekcja 1</button>
        <button onClick={() => scrollTo("section2")}>Sekcja 2</button>
        <button onClick={() => scrollTo("section3")}>Sekcja 3</button>
      </nav>

      <div className={css.sectionsDiv}>
        <section
          ref={sectionRefs.section1}
        >
          <Posture/>
        </section>

        <section
          ref={sectionRefs.section2}
        >
          <Screening/>
        </section>

        <section
          ref={sectionRefs.section3}
        >
          Sekcja 3
        </section>
      </div>
  </div>
  );
}   

export default Projects;