import NavBar from "./commenent/NavBar.jsx";
import ProductList from "./commenent/ProductList.jsx";
import Slider from "./commenent/Slider.jsx";
import About from "./commenent/About.jsx";
import ProductDetails from "./commenent/ProductDetails.jsx";
import { Routes, Route } from "react-router-dom"
import React from "react";
function App() {
  return (
    <>
    <NavBar/>
    <Routes>
    
    <Route path="/" element={ 
      <>
       <Slider/>
       <ProductList/>
      </>
       } />
    <Route path="About" element={ <About/>  } />
    <Route path="product/:productId" element={ <ProductDetails/>  } />
     
    
    
     </Routes>
    </>
  );
}

export default App;
