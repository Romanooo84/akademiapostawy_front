import logo from '../../images/logo.png';
import css from './header.module.css';
import { Link, useLocation  } from "react-router-dom"
import { useEffect, useState } from 'react';


const Header=()=>{

    const [buttons, setButtons] = useState()
    const location = useLocation()

     useEffect(()=>{
        const buttonsList = ['blog', 'Projekty', 'Fizjomemo', 'Filmy', 'Kontakt']
        const path=location.pathname.split('/')
        const pageTitle = path[path.length-1]
        const markup=buttonsList.map((button, index)=>{
            if (button!==pageTitle.toLowerCase()) {
                let upperLetter=button.charAt(0).toUpperCase()+button.slice(1)
                return (
                    <Link key={index} to={`/${button}`}>
                    <button className={css.buttons}>{upperLetter}</button>
                    </Link> 
                )
            }
            else {
                let upperLetter=button.charAt(0).toUpperCase()+button.slice(1)
                return (
                    <Link key={index} to={`/${button}`}>
                    <button className={css.buttons}>{upperLetter}</button>
                    </Link> 
                )
                
            }
            })
        setButtons(markup)
    }, [location])

    return(
        <div className={css.mainDiv}>
            <div className={css.imgDiv}>
                <Link to={`/`}>
                <img src={logo} alt="Logo"/>
                </Link>
            </div>
            <div className={css.buttonsDiv}>
                {buttons}
            </div>
        </div>
    )
}

export default Header