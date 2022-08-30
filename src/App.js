import React from 'react';
import {useEffect, useState} from 'react';
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from './MovieCard'
//851542ef
const API_URL = 'http://www.omdbapi.com?apikey=851542ef';

const App = () =>{
    const [movies, setMovies] = useState();
    const [searchTerm, setSearchTerm] = useState('');
    const searchMovies =async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`)
        const data = await response.json();

        setMovies(data.Search)
    }
    useEffect(()=> {
        searchMovies('Superman')
    }, []);
    return (
        <div className="app">
            <h1>CinemaCity</h1>
            <div className="search">
                <input 
                placeholder="Search for movies"
                value={searchTerm}
                onChange ={(e) => setSearchTerm(e.target.value)} />
                <img
                src={SearchIcon}
                alt="search"
                onClick={() => searchMovies(searchTerm)}
                 />
            </div>
            {
                movies?.length > 0 ? 
                (
                <div className="container">
                    {
                        movies.map((movie) => (
                            <MovieCard movie = {movie} />
                        ) )
                    }
                 </div>
                 ) : (
                    <div className="empty">
                        <h2>No movies Found</h2>

                    </div>

                 )
            }
        </div>
    );
}
export default App;