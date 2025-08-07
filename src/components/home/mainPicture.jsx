import { useEffect, useState } from 'react';
import css from './mainPicture.module.css'; // Assuming you have a CSS file for styling

import picture1 from '../../images/przedszkole.jpg';
import picture2 from '../../images/zajecia-dodatkowe-W-przedszkolu.jpg'
import picture3 from '../../images/skolioza1.jpg';
import picture4 from '../../images/skolioza2.jpg';
import picture5 from '../../images/skolioza3.jpg';
import picture6 from '../../images/wadypostawy.jpg';

const MainPicture = () => {

    const pictureList = [picture1, picture2, picture3, picture4, picture5, picture6];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % pictureList.length);
        }, 10000); // 10000 ms = 10 sekund

        // Wyczyść interwał przy odmontowaniu komponentu
        return () => clearInterval(interval);
    }, [pictureList.length]);


    return (
        <div className={css.mainDiv}>
            {pictureList.map((pic, index) => (
                <img
                    key={index}
                    src={pic}
                    alt={`Slajd ${index + 1}`}
                    className={`${css.imageSlide} ${index === currentIndex ? css.active : ''}`}
                />
            ))}
        </div>
    );
};

export default MainPicture;
