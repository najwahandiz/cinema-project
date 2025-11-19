import react from "react";
import { Routes, Route, BrowserRouter} from "react-router";
import Contact from './pages/Contact'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'

import Movies from "./Data/Movie";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
// import Movies from "./Data/Movie"


function App() {

  return (
   
      <BrowserRouter>
      <Navbar/>
         <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path="/MovieDetails" element={<MovieDetails/>}></Route>
         </Routes>
      <Footer/>
      </BrowserRouter>
     
    
  );
}

export default App;