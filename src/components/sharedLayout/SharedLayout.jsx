import Header  from "../header/header"
import Footer from "../footer/footer"
import Home from '../../pages/home/home'; // Importing Home component
import css from './sharedLayout.module.css'
import { Outlet, useLocation  } from "react-router-dom";
import { FaEnvelope, FaChevronLeft,FaChevronRight  } from "react-icons/fa";
import { useState, useEffect } from "react";


// SharedLayout component that includes Header, Footer, and Outlet for nested routes

const SharedLayout = () => {
    const location = useLocation();
    const { pathname } = location;
    const [open, setOpen] = useState(false);
    const [delayedOpen, setDelayedOpen] = useState(false);

    useEffect(() => {
    let timer;
    if (open) {
      timer = setTimeout(() => setDelayedOpen(true), 30); // po 1s
    } else {
      setDelayedOpen(false); // reset od razu po zamknięciu
    }
    return () => clearTimeout(timer);
  }, [open]);

 return (
  <div className={css.main}> 
    <Header />
    <main>
      <div className={css.mainDiv}>
        {pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </main>
    <Footer />

     <div className={css.contactWrapper}>
        <div className={`${css.contactPanel} ${open ? css.open : ""}`}>
          <p>📞 +48 123 456 789</p>
          <a href={"mailto:akademiapostawy@gmail.com"}>✉ kontakt@akademiapostawy.pl</a>
        </div>

        <button
          className={`${css.floatingButton} ${delayedOpen ? css.open : ""}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <FaChevronRight /> : <FaChevronLeft />}
          <FaEnvelope />
        </button>
    </div>

  </div>
);

}

export default SharedLayout