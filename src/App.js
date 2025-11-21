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
<<<<<<< HEAD
          <Route path="/" element={<Home/>} />
          <Route path='/Contact' element={<Contact/>} />
          <Route path="/details/:id" element={<MovieDetails/>} />
         </Routes>`
         <Footer/>`

=======
          <Route path="/" element={<Home />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path="/MovieDetails/:id" element={<MovieDetails/>}></Route>
         </Routes>
      <Footer/>
>>>>>>> 2caf4ade5d0d52f72fddeb6f93a33c9969b0a38e
      </BrowserRouter>


  );
}

export default App;
