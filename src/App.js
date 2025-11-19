import react from "react";
import { Routes, Route, BrowserRouter} from "react-router";
import Contact from './pages/Contact'
import Home from './pages/Home'
import MovieDetails from './pages/MovieDetails'


function App() {

  return (
   
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path='/Contact' element={<Contact/>}></Route>
          <Route path="/MovieDetails" element={<MovieDetails/>}></Route>
         </Routes>

      </BrowserRouter>
     
    
  );
}

export default App;
