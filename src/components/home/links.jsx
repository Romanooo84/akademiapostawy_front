import css from './links.module.css';
import picture1 from '../../images/chlopiec.jpg';
import picture2 from '../../images/doktor.jpg';
import picture3 from '../../images/miednica.jpg';
import picture4 from '../../images/stopy.jpg';
import { useNavigate } from 'react-router-dom';

const Links = () => {
    const navigate = useNavigate();

    return (
        <div className={css.mainDiv}>
            <button onClick={() => navigate('/Blog')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture1} alt="Chłopiec z piłką" className={css.picture} />
                    <div className={css.showText}>
                        <p>text do wyswietlenia</p>
                    </div> 
                </div>
                 <h1>Blog</h1>
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture2} alt="Doktor" className={css.picture} />
                    <div className={css.showText}>
                        <p>text do wyswietlenia</p>
                    </div>
                </div>
                <h1>Filmy</h1>
               
            </button>

            <button onClick={() => navigate('/Projekty')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture3} alt="Miednica" className={css.picture} />
                    <div className={css.showText}>
                        <p>text do wyswietlenia</p>
                    </div>
                </div>
                <h1>Projekty</h1>
                
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <div className={css.pictureAndTitle}>
                    <img src={picture4} alt="Stopy" className={css.picture} />
                    <div className={css.showText}>
                        <p>text do wyswietlenia</p>
                    </div>
                </div>
                <h1>Fizjomemo</h1>
             
            </button>
        </div>
    );
};

export default Links;
