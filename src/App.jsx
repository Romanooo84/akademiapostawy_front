
import { Route, Routes} from "react-router-dom";
import SharedLayout from "./components/sharedLayout/SharedLayout";
import React, { useState, useEffect } from 'react';


function App() {

  //const [data, setData] = useState(null);
  //const [error, setError] = useState(null);
   useEffect(() => {
    fetch('https://srv80578.seohost.com.pl/myvideolist')
      .then(res => {
        if (!res.ok) {
          throw new Error(`Server error: ${res.status}`);
        }
        console.log(res);
        return res.json(); // lub .text(), .blob() zależnie od odpowiedzi
      })
      .then(json => setData(json))
      .catch(err => setError(err.message));
  }, [])


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
