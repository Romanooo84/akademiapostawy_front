import { useState, useRef } from "react";
import css from "./ProjectButtons.module.css";

const ProjectButtons = ({projectsContent, setActiveTab}) => {
  const carouselRef = useRef(null);
  const total = projectsContent.length
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemHeight = 70 + 10; // wysokość elementu + gap

  const handleClick = (idx) => {
  setActiveTab(`section${idx + 1}`); 
  const section = document.getElementById(`section${idx + 1}`);
  if (section) section.scrollIntoView({ behavior: "smooth" });
};

  // duplikacja listy dla płynnego infinite scroll
  const loopedProjects = [...projectsContent, ...projectsContent, ...projectsContent]

const move = (direction) => {
  if (!carouselRef.current) return;

  let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

  // przesunięcie z animacją
  carouselRef.current.style.transition = "transform 0.4s ease-in-out";
  carouselRef.current.style.transform = `translateY(-${newIndex * itemHeight}px)`;

  setTimeout(() => {
    let resetIndex = newIndex;

    // reset tylko jeśli wychodzimy poza środkową kopię
    if (newIndex >= total * 2) {
      resetIndex = newIndex - total;
    } else if (newIndex < total) {
      resetIndex = newIndex + total;
    } else {
      // jeśli nie wychodzimy poza środkową kopię, nic nie resetujemy
      setCurrentIndex(newIndex);
      return;
    }

    // resetujemy transform **tylko w tle** po animacji
    carouselRef.current.style.transition = "none";
    carouselRef.current.style.transform = `translateY(-${resetIndex * itemHeight}px)`;
    setCurrentIndex(resetIndex);
  }, 400);
};



  const handleNext = () => move("next");
  const handlePrev = () => move("prev");

  return (
    <div className={css.mainDiv}>
      <div className={css.buttonsDiv}>
        <button className={css.navBtn} onClick={handlePrev} onMouseEnter={handlePrev}>▲</button>
        <button className={css.navBtn} onClick={handleNext} onMouseEnter={handleNext}>▼</button>
      </div>
      <div className={css.wrapper}>
        <div className={css.carousel} ref={carouselRef}>
            {loopedProjects.map((project, idx) => {
              const distance = Math.abs((idx % total) - ((currentIndex + 2) % total));
              const isActive = distance === 0;  // tylko ten przycisk aktywny
              const scale = isActive ? 1.1 : 0.8;
              const opacity = isActive ? 1 : 0.5;
              const zIndex = isActive ? 2 : 1;
              const translateY = isActive ? 0 : distance * 10;

              return (
                <button
                  key={idx}
                  className={css.item}
                  onClick={isActive ? () => handleClick(idx % total) : undefined} // tylko aktywny klikalny
                  style={{
                    transform: `scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                    cursor: isActive ? "pointer" : "default",   // łapka tylko dla aktywnego
                    transition: "transform 0.5s ease-in-out, opacity 0.5s ease-in-out"
                  }}
                >
                  <h1 className={css.h1}>{project.title}</h1>
                </button>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProjectButtons;
