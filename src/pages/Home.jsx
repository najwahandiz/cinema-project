import React from 'react';
import { useEffect,useState } from 'react';
import MovieCard from '../components/MovieCard';
import Movies from '../Data/Movie';
import { Link } from 'react-router';

export default function Home() {
  
  return (
    <div>
       <section class="heroSection">
        <h2>Welcome</h2>
        <p> Every movie you discover here open a new door to imagination, emotion, and unforgettable cinematic moments.</p>
        {/* <button><Link to="/Contact">Explore more</Link></button> */}
       </section>
      
        
      

      


    </div>
  )
}
