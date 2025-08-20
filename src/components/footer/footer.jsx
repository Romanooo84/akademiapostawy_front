import css from './footer.module.css';
import logo from '../../images/logo.png';
import facebookIcon from '../../assets/facebook.svg';  
import instagramIcon from '../../assets/instagram.svg';
import youtubeIcon from '../../assets/youtube.svg'; 

const Footer = () => {
    return (
        <footer className={css.mainDiv}>
            <div className={css.imgDiv}>
                <img src={logo} alt="Logo" />
            </div>
            <div>
                <div className={css.headerDiv}>
                    <h2>Odwiedź nas</h2>
                </div>
                <div className={css.mediaDiv}>
                    <a className={css.link} href="https://www.facebook.com/wadypostawy.edu/?_rdr" target="_blank" rel="noopener noreferrer">
                        <img className={css.icon} src={facebookIcon} alt="facebook" />
                        <span>Facebook</span>
                    </a> 
                    <a className={css.link} href="https://www.instagram.com/akademiapostawy/?utm_medium=copy_link" target="_blank" rel="noopener noreferrer">
                        <img className={css.icon} src={instagramIcon} alt="instagram" />
                        <span>Instagram</span>
                    </a> 
                    <a className={css.link} href="https://www.youtube.com/channel/UCWBr60EPg760Z4f2rMJDOkw" target="_blank" rel="noopener noreferrer">
                        <img className={css.icon} src={youtubeIcon} alt="YouTube" />
                        <span>YouTube</span>
                    </a>  
                </div>
            </div>
            <div>
                kontakt
            </div>
        </footer>
    );
};

export default Footer;
