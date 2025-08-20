import Header  from "../header/header"
import Footer from "../footer/footer"
import Home from '../../pages/home/home'; // Importing Home component
import css from './sharedLayout.module.css'
import { Outlet, useLocation  } from "react-router-dom";


// SharedLayout component that includes Header, Footer, and Outlet for nested routes

const SharedLayout = () => {
    const location = useLocation();
    const { pathname } = location;

 return (
  <div> 
    <Header />
    <main>
      <div className={css.mainDiv}>
        {pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </main>
    <Footer />
  </div>
);

}

export default SharedLayout