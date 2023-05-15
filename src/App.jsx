import { useState, useEffect } from 'react'
import './App.css'
import Logo from './assets/images.jpg'
import Spin from './assets/spin.png'
function App() {
 const [movies, setMovies] = useState([]);
 //const [showLogo, setShowLogo] = useState(true);
//  useEffect(()=>{
//   const timer = setTimeout(()=>{
//     setShowLogo(false)
//   }, 3000)
//   // clear timer
//   return () => clearTimeout(timer);
// }, [])
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
   {/* <div className='image'> <img src= {Logo} /> </div> */}
    <div className='spin-container'>
    <img src={Spin}className="spin" />
   </div>
<div className="container">
    {movies.map( movie =>(
      <div className="card">
     <h3>{movie.title}</h3>
     {<p className='date'>{movie.release_date}</p>}
     <p>
  {movie.opening_crawl.length > 200 ?
    `${movie.opening_crawl.substring(0, 200)}...` : movie.opening_crawl
  }
</p>
     <div className="border"></div>
     <a href="">more info</a>
     </div>
    ))}
  
    </div>
   
    </>
  )
}

export default App
