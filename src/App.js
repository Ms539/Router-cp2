import { Route, Routes } from "react-router-dom";
import Home from "./WebPages/Home";
import Description from "./WebPages/Description";
function App() {

  
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="trailer/:MovieName" element={<Description />}/>
      <Route path="*" element={<Home/>}/>
    </Routes>
  );
}

export default App;
