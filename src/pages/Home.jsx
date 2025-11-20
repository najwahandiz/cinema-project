import { Link } from "react-router-dom";
import  Movies from "../Data/Movie";
import './Home.css'; 

// function Home() {
//   return (
    // <div style={{ padding: "20px" }}>
    //   <h1>Galerie</h1>
{/* import React from 'react';
import { useEffect,useState } from 'react';
import MovieCard from '../components/MovieCard';
import Movies from '../Data/Movie';
import { Link } from 'react-router'; */}

export default function Home() {
  
  return (
    <div>
       <section class="heroSection">
        <h2>Welcome</h2>
        <p> Every movie you discover here open a new door to imagination, emotion, and unforgettable cinematic moments.</p>
        {/* <button><Link to="/Contact">Explore more</Link></button> */}
       </section>
       
      <div className="card">
        {Movies.map((item) => (
          <Link className="link-card"
            key={item.id}
            to={`/details/${item.id}`}
            
          >
            <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "8px" }} />
            <h3>{item.name}</h3>
          </Link>
        ))}
      </div>
    </div>
  );
}

