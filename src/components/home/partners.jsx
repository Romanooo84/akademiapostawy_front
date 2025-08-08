import sp80 from '../../images/sp80.jpg';
import sp209 from '../../images/sp209.jpg';
import sp263 from '../../images/sp263.png';
import sp352 from '../../images/sp352.png';
import css from './partners.module.css';

const Parters=() => {

 const partnersList = [
    {
      picture: sp80,
      name: 'Szkoła Podstawowa nr 80 im. Marii Kownackiej w Warszawie',
      alt: 'SP 80',
    },
    {
      picture: sp209,
      name: 'Szkoła Podstawowa nr 209 im. Hanki Ordonówny w Warszawie',
      alt: 'SP 209',
    },
    {
      picture: sp263,
      name: 'Szkoła Podstawowa nr 263 im. Powstańców Wielkopolskich w Warszawie',
      alt: 'SP 263',
    },
    {
      picture: sp352,
      name: 'Szkoła Podstawowa nr 352 im. Jerzego Huberta Wagnera w Warszawie',
      alt: 'SP 352',
    },
  ];

const markup=partnersList.map((partner) => (
    <div className={css.partnerDiv} key={partner.alt}>
        <img className={css.partnerImg} src={partner.picture} alt={partner.alt} />
        <p>{partner.name}</p>
    </div>
));

  return (
        <div className={css.mainDiv}>
            <div className={css.titleDiv}>
            <h1>Nasi Partnerzy</h1>
            </div>
            <div className={css.partnersListDiv}>
                {markup}
            </div>
        </div>
        );
 }

 export default Parters;