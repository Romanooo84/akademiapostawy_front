import Header  from "../header/header"
import Footer from "../footer/footer"
import Home from '../home/home'
import { Outlet, useLocation  } from "react-router-dom";
import css from  './sharedLayout.module.css'; // Importing the CSS for shared layout

// SharedLayout component that includes Header, Footer, and Outlet for nested routes

const SharedLayout = () => {
    const location = useLocation();
    const { pathname } = location;

 return (
  <div className={css.sharedLayout}> 
    <Header />
    <main>
      <div>
        {pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </main>
    <Footer />
  </div>
);

}

export default SharedLayout