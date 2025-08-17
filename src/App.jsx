import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import Video from "./pages//video/video";
import Blog from "./pages/blog/blog.jsx";
import Projects from "./pages/projects/projects.jsx";
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="Blog" element={<Blog/>} />
        <Route path="projekty" element={<Projects />} />
        <Route path="fizjomemo" element={<Video />} />
        <Route path="filmy" element={<Video />} />
        <Route path="kontakt" element={<Video />} />
      </Route>
    </Routes>
  );
}

export default App;
