import React from 'react'
import MovieEx from './MovieEx'

const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>
      <MovieEx
        title="Chavva"
        category="Action/Drama/Historical"
        path="./assets/chhaava.avif"
      />
      <MovieEx
        title="Mazaka"
        category="Comedy/Family/Romantic"
        path="./assets/majaka.avif"
      />
      <MovieEx
        title="Return of the Dragon"
        category="Comedy/Drama/Thriller"
        path="./assets/return-of-the-dragon.avif"
      />
      <MovieEx
        title="Shabdham"
        category="Horrer/Thriller"
        path="./assets/shabdham.avif"
      />
      <MovieEx
        title="Crazxy"
        category="Drama/Thriller"
        path="./assets/crazxy.avif"
      />
      <MovieEx
        title="Superboys of Malegaon"
        category="Biography/Comedy/Drama"
        path="./assets/superboys-of-malegaon.avif"
      />
      <MovieEx
        title="Thandel"
        category="Action/Drama/Romantic"
        path="./assets/thandel.avif"
      />
      <MovieEx
        title="Aghthiyaa"
        category="Comedy/Romantic"
        path="./assets/aghathiyaa.avif"
      />
    </div>
  )
}

export default Movies
