import logo from '../../images/logo.png';
import HamburgerMenu from './hamburgerMenu/hamburgerManu';
import css from './header.module.css';
import { Link, useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react';


const Header=()=>{

    const [buttons, setButtons] = useState()
    const location = useLocation()

     useEffect(() => {
    //const buttonsList = ['home', `o nas`, `blog`, `treningi`, `produkty`, `współpraca`, 'adminDorota'];
    const buttonsList = ['home', `o nas`, `blog`, `treningi`, `produkty`, `współpraca`];
    
    const path = location.pathname.split('/');
    console.log(path)
    const pageTitle = decodeURIComponent(path[path.length - 1] || 'home'); // dla '/' domyślnie 'home'

    const markup = buttonsList.map((button, index) => {
    const buttonName = button.toLowerCase();
    const upperLetter = button.charAt(0).toUpperCase() + button.slice(1);
    const pathName = buttonName === 'home' ? '/' : `/${buttonName}`;

    const isActive = buttonName === pageTitle.toLowerCase();

    return (
        <Link key={index} to={pathName}>
            <button
                className={`${css.buttons} ${isActive ? css.active : ''}`}
            >
                {upperLetter}
            </button>
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