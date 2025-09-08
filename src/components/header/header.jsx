import logo from '../../images/logo.png';
import HamburgerMenu from './hamburgerMenu/hamburgerManu';
import css from './header.module.css';
import { Link, useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react';


const Header=()=>{

    const [buttons, setButtons] = useState()
    const location = useLocation()

     useEffect(() => {
    const buttonsList = ['home', `o nas`, `blog`, `treningi`, `produkty`, `współpraca`, 'adminDorota'];
    
    const path = location.pathname.split('/');
    const pageTitle = path[path.length - 1] || 'home'; // dla '/' domyślnie 'home'

    const markup = buttonsList
        .filter(button => {
            const buttonName = button.toLowerCase();
            // Jeśli jesteśmy na tej stronie — pomijamy ją
            return buttonName !== pageTitle.toLowerCase();
        })
        .map((button, index) => {
            const upperLetter = button.charAt(0).toUpperCase() + button.slice(1);
            const pathName = button.toLowerCase() === 'home' ? '/' : `/${button.toLowerCase()}`;

            return (
                <Link key={index} to={pathName}>
                    <button className={css.buttons}>{upperLetter}</button>
                </Link>
            );
        });

    setButtons(markup);
}, [location]);



    return(
        <header className={css.mainDiv}>
            <div className={css.imgDiv}>
                <Link to={`/`}>
                <img src={logo} alt="Logo"/>
                </Link>
            </div>
            <div className={css.buttonsDiv}>
                {buttons}
            </div>
            <div className={css.hamburgerMenu}>
                <HamburgerMenu buttons={buttons}/>
            </div>
        </header>
    )
}

export default Header