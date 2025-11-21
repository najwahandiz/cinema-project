import { Link } from "react-router-dom";
import  Movies from "../Data/Movie";
import './Home.css'; 


export default function Home() {
  
  return (
    <div>
       <section class="heroSection">
        <div class="heroDiv">
          <h2>YOUR CINEMATIC JOURNEY</h2>
          <p> Every movie you discover here open a new door to imagination, emotion, and unforgettable cinematic moments.</p>
          <button class="hero-btn"><a href={'#cardSection'}>EXPLORE MOVIES</a></button>
        </div>
       </section>
      
      
      <div id="cardSection">
        <div className="card">
          {Movies.map((item) => (
            <Link className="link-card"
              key={item.id}
              to={`/MovieDetails/${item.id}`}
            >
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            </Link>
        ))}
        </div>
      </div>
    </div>
  );
}
