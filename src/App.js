import React from "react";
import { Routes, Route, BrowserRouter } from "react-router";
import Contact from './pages/Contact'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


function App() {

  return (

      <BrowserRouter>
         <Navbar/>
         <Routes>
          <Route path="/" element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="/details/:id" element={<MovieDetails/>} />
         </Routes>`
         <Footer/>`

      </BrowserRouter>


  );
}

export default App;
