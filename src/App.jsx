import { Route, Routes } from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import Video from "./pages//video/video";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="Blog" element={<Video />} />
        <Route path="projekty" element={<Video />} />
        <Route path="fizjomemo" element={<Video />} />
        <Route path="filmy" element={<Video />} />
        <Route path="kontakt" element={<Video />} />
      </Route>
    </Routes>
  );
}

export default App;
