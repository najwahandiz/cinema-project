import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useLocation, useNavigate,navigate } from 'react-router'
import { useParams } from 'react-router'
import Movies from '../Data/Movie'

export default function MovieDetails() {

  const {id}=useParams()
  const navigate=useNavigate()

  const movie=Movies.find(m=>String(m.id)===String(id));

  return(
    <>
      {
        movie ? (
          <div class="movieDtails">
            <div class="movieImg">
              <img src={movie.image} alt="" />
            </div>
            <div class="Details">
              <h1 class="movieTitle">{movie.name}</h1>
              <hr id="titleLine"></hr>
              <p><strong>Time :</strong> {movie.time}</p>
              <p><strong>Year :</strong> {movie.year}</p>
              <p><strong>Category :</strong> {movie.category}</p>
              <p><strong>Language :</strong> {movie.language}</p>
              <p><strong>Actors :</strong></p>
              <hr id="actorsLine"></hr>
              <p>{movie.actors.map((i)=>(<p class="actors">{i}</p>))}</p>
           
              <p><strong>Description :</strong> {movie.description}</p>

            </div>

          </div>
          
        )
        : 
        <section>
          <h2>Film non trouvé</h2>
          <p>Le film que vous recherchez n'existe pas.</p>
          <button onClick={() => navigate("/")}>Retour à l'accueil</button>
        </section>
      }

    </>
  )


  // const movie=Movies.find(m=>String(m.id)===String(id));
  // console.log(movie.name);
  
  

  // return (
  //   <div>MovieDetails

  //     <h1>{movie.name}</h1>
  //     <p>un paragraph de salwa</p>
  //     <div>
  //       {/* <img ></img> */}
  //       <div className='deatils'>
  //         <p>Time:</p>
  //         <p>Year:</p>
  //         <p>Actors:</p>
  //         <p>Category:</p>
  //         <p>language:</p>
  //         <p>Description:</p>
  //       </div>

  //     </div>
  //  const movie = Movies.find((m) => String(m.id) === String(id));

  // cas film non trouvé (id invalide)
  // if (!movie) {
  //   return (
      // <section>
      //   <h2>Film non trouvé</h2>
      //   <p>Le film que vous recherchez n'existe pas (id: {id}).</p>
      //   <button onClick={() => navigate("/")}>Retour à l'accueil</button>
      // </section>
  //   );
  // }

  // return (
  //   <section className="movie-details">
  //     <button onClick={() => navigate(-1)} aria-label="Retour">
  //       ← Retour
  //     </button>

  //     <div className="details-grid">
  //       <img
  //         src={movie.image}
  //         alt={`Affiche - ${movie.title}`}
  //         className="details-img"
  //       />

  //       <div className="details-info">
  //         <h2>{movie.title} <span className="year">({movie.year})</span></h2>
  //         <p className="description">{movie.description}</p>

  //         <h3>Équipe</h3>
  //         <ul>
  //           {movie.team.map((p, i) => (
  //             <li key={i}><strong>{p.role}:</strong> {p.name}</li>
  //           ))}
  //         </ul>
  //       </div>
  //     </div>
  //   </section>
   

  // )


  
}
