import { useEffect, useState } from 'react';
import css from './mainPicture.module.css';
import pictureList from './mainPictureList';

const MainPicture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Opóźnione przypisanie klasy active do pierwszego zdjęcia
    const timeout = setTimeout(() => setLoaded(true), 50);

    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % pictureList.length);
    }, 20000); // co 10 sek

    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [pictureList.length]);

  return (
    <div className={css.relative}>
      <div className={css.mainDiv}>
   {pictureList.map((pic, index) => {
  console.log(pic);
          return (  
            <div  
              className={`${css.imageSlide} ${index === currentIndex && loaded ? css.active : ''}`} 
              key={index}
            >
              <div className={css.caption} >
                <h1 className={css.headaer}>{pic.title}</h1>
                <p className={css.paragraph}>{pic.caption}</p>
              </div>
              <img
                className={css.image}
                src={pic.src}
                alt={`Slajd ${index + 1}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MainPicture;
