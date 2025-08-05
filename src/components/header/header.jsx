import logo from '../../images/logo.png';
import css from './header.module.css';

const Header=()=>{
    return(
        <div className={css.mainDiv}>
            <div className={css.imgDiv}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={css.buttonsDiv}>
                <button className={css.buttons}>Blog</button>
                <button className={css.buttons}>Nasze projekty</button>
                <button className={css.buttons}>Kontakt</button>
                <button className={css.buttons}>Fizjomemo</button>
            </div>
        </div>
    )
}

export default Header