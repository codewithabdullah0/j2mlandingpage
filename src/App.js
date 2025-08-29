import Home from "./Component/Home";
import NavBar from "./Component/NavBar";
import Footer from "./Component/Footer";

import { BrowserRouter, Route, Routes } from "react-router-dom";




function App() {
  return (
    <div >

      <BrowserRouter>

        <NavBar></NavBar>
        <Routes>

          <Route path="/" element={<Home></Home>} />


        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
