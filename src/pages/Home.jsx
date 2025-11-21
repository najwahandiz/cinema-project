import { Link } from "react-router-dom";
import  Movies from "../Data/Movie";
import './Home.css'; 
import PopUp from "./pop-up.jsx";



export default function Home() {
  
  return (
    <div>
      <PopUp />
       <section class="heroSection">
        <h2>Welcome</h2>
        <p> Every movie you discover here open a new door to imagination, emotion, and unforgettable cinematic moments.</p>
       
       </section>
       
      <div className="card">
        {Movies.map((item) => (
          <Link className="link-card"
            key={item.id}
            to={`/details/${item.id}`}
            
          >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

