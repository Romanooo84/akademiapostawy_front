
import { Route, Routes} from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";


function App() {

  return (
     <Routes>
      <Route path="/" element={<SharedLayout />}>
        {/*<Route path="/picture of a day" element={<PictureOfADay/>}/>
        <Route path="/gallery" element={<Gallery/>}/>
        <Route path="/Mars Pictures" element={<PictureOfMars/>}/>
        <Route path="/Near Earth Object" element={<NearObjectDetails/>}/>*/}
      </Route>
    </Routes>
  )
}

export default App
