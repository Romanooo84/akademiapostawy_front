import { useState, useRef, useEffect } from "react";
import css from './projectButtonsHorizontal.module.css';

const ProjectButtonsHorizontal = ({ projectContent, setActiveTab }) => {
  const carouselRef = useRef(null);
  const total = projectContent.length;
  const [currentIndex, setCurrentIndex] = useState(1);
  const [itemWidth, setItemWidth] = useState(300); // domyślna wartość zapasowa

  useEffect(() => {
    const rootStyles = getComputedStyle(document.documentElement);
    const width = parseInt(rootStyles.getPropertyValue('--itemWidth'));
    setItemWidth(width);
  }, []);

  const handleClick = (idx) => {
    setActiveTab(`section${idx + 1}`);
    const section = document.getElementById(`section${idx + 1}`);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const loopedProjects = [...projectContent, ...projectContent, ...projectContent];


  const move = (direction) => {
    if (!carouselRef.current) return;

    let newIndex = direction === "next" ? currentIndex + 1 : currentIndex - 1;

    carouselRef.current.style.transition = "transform 0.4s ease-in-out";
    carouselRef.current.style.transform = `translateX(-${(newIndex * itemWidth)}px)`;

    setTimeout(() => {
      let resetIndex = newIndex;

      if (newIndex >= total * 2) {
        resetIndex = newIndex - total;
      } else if (newIndex < total) {
        resetIndex = newIndex + total;
      } else {
        setCurrentIndex(newIndex);
        return;
      }

      carouselRef.current.style.transition = "none";
      carouselRef.current.style.transform = `translateX(-${(resetIndex * itemWidth)}px)`;
      setCurrentIndex(resetIndex);
    }, 400);
  };

  const handleNext = () => move("next");
  const handlePrev = () => move("prev");

  return (
    <div className={css.mainDiv}>
      <div className={css.buttonsDiv}>
        <button className={css.navBtn} onClick={handlePrev} onMouseEnter={handlePrev}>◀</button>
        <button className={css.navBtn} onClick={handleNext} onMouseEnter={handleNext}>▶</button>
      </div>
      <div className={css.wrapper}>
        <div className={css.carousel} ref={carouselRef}>
          {loopedProjects.map((project, idx) => {
            const distance = Math.abs((idx % total) - ((currentIndex + 1) % total));
            const isActive = distance === 0;

            return (
              <button
                key={idx}
                className={`${css.item} ${isActive ? css.active : css.inactive}`}
                onClick={isActive ? () => handleClick(idx % total) : undefined}
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

export default ProjectButtonsHorizontal;
