import React from "react";
import { useState, useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com?apikey=ef42fabc';

// const movie1 = {
    
//     "Title": "Superman, Spiderman or Batman",
//     "Year": "2011",
//     "imdbID": "tt2084949",
//     "Type": "movie",
//     "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg"
    
// }

const App = () => {
    const [movies, setMovies] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();

        // console.log(data.Search);
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies('')
    }, []);

    return (
       <div className="app">
        <h1>MovieLand</h1>

        <div className="search">
            <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange={(event) => setSearchTerm(event.target.value)}
            />
           <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
           />
        </div>

        { movies?.length > 0
            ? (
                <div className="container">
                    {movies.map((movie) => (
                        <MovieCard movieProp={movie}/>
                    ))}
                </div>
            ) :
            (
                <div className="empty">
                    <h2>No Movies found</h2>
                </div>
            )}
       </div>
    );
}

export default App;

