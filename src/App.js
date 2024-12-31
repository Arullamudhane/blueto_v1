import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Company from "./pages/Company";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Services from "./pages/Services";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div className=' bg-[#020e37]   relative  min-h-screen px-0 md:px-10'>
        <div className='background-gradient absolute inset-0  max-h-screen' />
        {/* <div className="pointer-events-none absolute inset-0  h-full bg-[url('./noisetexture.jpg')] opacity-20 mix-blend-soft-light"></div> */}

        <Header />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/company' element={<Company />} />
          <Route path='/products' element={<Products />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
