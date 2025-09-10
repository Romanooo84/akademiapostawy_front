import css from './partners.module.css';
import { useEffect, useState } from 'react';
import link from '../../link';

const Kindergardens=() => {
  
const [partnersList, setPartnersList] = useState([]);

 useEffect(() => {
    const fetchPictures = async () => {
      try {
        const response = await fetch(`${link}kindergardens`);
        if (!response.ok) throw new Error('Błąd pobierania danych');
        const data = await response.json();
        setPartnersList(data);
        console.log(data)
      } catch (error) {
        console.error('Nie udało się pobrać listy zdjęć:', error);
      }
    };

    fetchPictures();
  }, []);

const markup=partnersList.map((partner) => (
    <div className={css.partnerDiv} key={partner.alt}>
        <img className={css.partnerImg} src={partner.img} alt={partner.alt} />
        <h2>{partner.title}</h2>
    </div>
));

  return (
        <div className={css.mainDiv}>
            <div className={css.titleDiv}>
            <h1>Skorzystali z naszego doświadczenia</h1>
            </div>
            <div className={css.partnersListDiv}>
                {markup}
            </div>
        </div>
        );
 }

 export default Kindergardens;