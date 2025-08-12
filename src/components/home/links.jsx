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
                <img src={picture1} alt="Chłopiec z piłką" className={css.picture} />
                <p>Blog</p>
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <img src={picture2} alt="Doktor" className={css.picture} />
                <p>Filmy</p>
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <img src={picture3} alt="Miednica" className={css.picture} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </button>

            <button onClick={() => navigate('/Filmy')} className={css.linkButton}>
                <img src={picture4} alt="Stopy" className={css.picture} />
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
            </button>
        </div>
    );
};

export default Links;
