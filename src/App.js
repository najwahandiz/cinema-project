import logo from './logo.svg';
import './App.css';
import 

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
