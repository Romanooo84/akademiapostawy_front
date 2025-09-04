import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import Video from "./pages//video/video";
import Blog from "./pages/blog/blog.jsx";
import Projects from "./pages/projects/projects.jsx";
import Contact from "./pages/contact/contact.jsx";
import Admin from "./pages/admin/admin.jsx";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="Blog" element={<Blog/>} />
        <Route path="współpraca" element={<Projects />} />
        <Route path="produkty" element={<Video />} />
        <Route path="treningi" element={<Video />} />
        <Route path="o nas" element={<Contact />} />
        <Route path="adminDorota" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
