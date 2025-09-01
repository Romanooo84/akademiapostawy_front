import { useEffect, useState } from 'react';
import css from './mainPicture.module.css';
import link from '../../link.js';


const MainPicture = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [pictureList, setPictureList] = useState([]);

   useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(`${link}getmainpicturelist`);
        if (!response.ok) throw new Error('Błąd pobierania danych');
        const data = await response.json();
        setPictureList(data);
      } catch (error) {
        console.error('Nie udało się pobrać listy zdjęć:', error);
      }
    };

    fetchPictures();
  }, []);

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
                <p className={css.paragraph}>{pic.content}</p>
              </div>
              <img
                className={css.image}
                src={pic.img}
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
