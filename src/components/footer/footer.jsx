import css from './footer.module.css';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <div className={css.mainDiv}>
            <div className={css.imgDiv}>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                partnerzy
            </div>
            <dvi>
                media społecznościowe
            </dvi>
            <div>
                kontakt
            </div>
        </div>
    );
};

export default Footer;
