import React from "react";

const MovieCard = ({ movieProp }) => {
    return (
        <div className="movie">

        <div>   
            <p>{movieProp.Year}</p>
        </div>

        <div>
            <img src={movieProp.Poster !== 'N/A' ? movieProp.Poster : 'https://dummyimage.com/400x400/bababa/0011ff.jpg&text=Image+not+found'} alt={movieProp.Title}></img>
        </div>

        <div>
            <span>{movieProp.Type}</span>
            <h3>{movieProp.Title}</h3>
        </div>

    </div>
    )
}

export default MovieCard;