  import { useState } from "react";
  import css from './projects.module.css';
  import Posture from "../../components/projects/project1/posture";
  import Screening from "../../components/projects/project2/screening";

  const Projects = () => {
    const [activeTab, setActiveTab] = useState("section1");

    return (
      <div className={css.mainDiv}>
        <nav className={css.tabNav}>
          <button
            className={activeTab === "section1" ? css.activeTab : ""}
            onClick={() => setActiveTab("section1")}
          >
            Prawidłowa postawa
          </button>
          <button
            className={activeTab === "section2" ? css.activeTab : ""}
            onClick={() => setActiveTab("section2")}
          >
            Badania przesiewowe
          </button>
          <button
            className={activeTab === "section3" ? css.activeTab : ""}
            onClick={() => setActiveTab("section3")}
          >
            Akcja Plecaki
          </button>
        </nav>

        <div className={css.sectionsDiv}>
          {activeTab === "section1" && <Posture />}
          {activeTab === "section2" && <Screening />}
          {activeTab === "section3" && <div>Sekcja 3</div>}
        </div>
      </div>
    );
  };

  export default Projects;
