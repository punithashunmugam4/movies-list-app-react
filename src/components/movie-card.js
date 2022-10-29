import React from "react";

const MovieCard=({movie})=>{
return(
    <div className="movie">
        <img src={movie.imgUrl}/>
        <h3 className="title">{movie.name}</h3>
        <p className="text-1">Distributor: {movie.distributor}</p>
        <p className="text-2">Amount: {movie.Amount}</p>
    </div>
)
}

export default MovieCard