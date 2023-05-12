import { useState, useEffect } from 'react'
import './App.css'

function App() {
 const [movies, setMovies] = useState([])
useEffect(()=>{
   getMovies();  
  })
const getMovies = async()=>{
  const response = await fetch('https://swapi.dev/api/films');
  const data = await response.json();
  setMovies(data.results)
}
  return (
    <>
    {movies.map( movie =>(
     <h1>{movie.title}</h1>
    ))}
    </>
  )
}

export default App
