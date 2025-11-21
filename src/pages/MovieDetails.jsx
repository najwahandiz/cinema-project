import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Movies from '../Data/Movie'

export default function MovieDetails() {

  const {id}=useParams()
  console.log(id);
  
  const navigate=useNavigate()

  const movie=Movies.find(m=>String(m.id)===String(id));

  return(
    <>
      {
        movie ? (
          <div className="movieDtails">
            <div className="movieImg">
              <img src={movie.image} alt={movie.name} />
            </div>
            <div className="Details">
              <h1 className="movieTitle">{movie.name}</h1>
              <hr id="titleLine"></hr>
              <p><strong>Time :</strong> {movie.time}</p>
              <p><strong>Year :</strong> {movie.year}</p>
              <p><strong>Category :</strong> {movie.category}</p>
              <p><strong>Language :</strong> {movie.language}</p>
              <p><strong>Actors :</strong></p>
              <hr id="actorsLine"></hr>
              {movie.actors.map((item, index)=>(<p key={index} className="actors">{item}</p>))}
              <p><strong>Description :</strong> {movie.description}</p>
            </div>
          </div>
          
        )
        : 
        <section className='noFilmSection'>
          <div className='noFilmDiv'>
            <h2>Film non trouvé</h2>
            <p>Le film que vous recherchez n'existe pas.</p>
            <button onClick={() => navigate("/")}>← Retour à l'accueil</button>
          </div>
        </section>
      }

    </>
  )



  
}
