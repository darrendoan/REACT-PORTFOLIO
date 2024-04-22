import React from "react";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Hero/Hero.jsx";
import About from "./components/About/About.jsx";
import Portfolio from "./components/Portfolio/Portfolio.jsx";
import { 
  BrowserRouter,
  Routes, 
  Route
 } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<About/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/portfolio" element={<Portfolio/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes> 
    </BrowserRouter>
    
  )
}
export default App
