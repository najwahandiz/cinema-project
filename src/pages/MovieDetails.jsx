import React, { useState } from 'react'
import MovieCard from '../components/MovieCard'
import { BrowserRouter, Routes, Route } from 'react-router'
import { useLocation, useNavigate } from 'react-router'
import { useParams } from 'react-router'
import Data from '../Data/Movie'

export default function MovieDetails() {

  const {id}=useParams()
  const [Movies,setMovies]=useState(Data);
  

  return (
    <div>MovieDetails

      <h1>Movie Name</h1>
      <div>
        <img ></img>
        <div className='deatils'>
          <p>Time:</p>
          <p>Year:</p>
          <p>Actors:</p>
          <p>Category:</p>
          <p>language:</p>
          <p>Description:</p>
        </div>

      </div>
    </div>

  )
}
