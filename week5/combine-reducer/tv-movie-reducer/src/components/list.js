import React from 'react'


 const MovieList = ({title, genre}) =>{

    
  console.log(title)
    return(
        <div>
            <h2>{title}</h2>
            <h4>{genre}</h4>
        </div>
    )
}

export default MovieList