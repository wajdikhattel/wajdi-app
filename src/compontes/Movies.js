import React from 'react'
import MovieCard from './MovieCard'

const Movies = ({movies}) => {
    return (
        <div style={{display:"flex"}}>
            {movies.map((el, i)=>(<MovieCard key={i} movie={el} />))}
        </div>
    )
}

export default Movies
