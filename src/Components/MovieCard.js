import React from 'react'
import './MovieCard.css'



 function MovieCard(props) {
    return (
        <article className="Moviecard">
        <img className="Moviecard-poster" src= {props.poster}alt={props.title} />
        <div >
            <h3>{props.title}</h3>
             <p>{props.description}</p>   
             <p></p> 
             <a href={props.url} > LOOK  </a>        
        </div>
        </article>
    )
}

export default MovieCard