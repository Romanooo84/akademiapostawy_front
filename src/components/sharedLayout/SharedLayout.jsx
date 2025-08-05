import Header  from "../header/header"
import Footer from "../footer/footer"
import Home from '../home/home'
import { Outlet, useLocation  } from "react-router-dom";
import './sharedLayout.module.css'; // Importing the CSS for shared layout

// SharedLayout component that includes Header, Footer, and Outlet for nested routes

const SharedLayout = () => {
    const location = useLocation();
    const { pathname } = location;

 return (
  <>
    <Header />
    <main>
      <div>
        {pathname === '/' ? <Home /> : <Outlet />}
      </div>
    </main>
    <Footer />
  </>
);

}

export default SharedLayout