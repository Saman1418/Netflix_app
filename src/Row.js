import React, { useState, useEffect } from 'react';
import axios from "./axios"
import './Row.css';
import YouTube from 'react-youtube';


const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({ title, fetchMovie,isLargeRow }) => {
    const [movies, setMovies] = useState([])
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(fetchMovie)
            setMovies(response.data.results)
            return response
        }
        fetchData()

    }, [fetchMovie])


    // console.log(movies)
    const opts = {
        height:"390",
        width:"100%",
        playerVars:{
            autoplay:1,
        },
        
    }

    

    const handleClick = async (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          let trailerurl = await axios.get(
            `/movie/${movie.id}/videos?api_key=fb34530271b349314af0de263d16ab5a`
          );
          setTrailerUrl(trailerurl.data.results[0]?.key);
        }
      };

    return (
        <div className="row">
            <h3 className="title">{title}</h3>
            <div className="row_posters">
                {movies.map((movie) => {
                    return (     
                        <img onClick={()=> handleClick(movie)} key={movie.id} className={`row_poster ${isLargeRow && "row_posterLarger"}`} src={`${baseURL}${isLargeRow ? movie.poster_path: movie.backdrop_path}`} alt={movie.name}></img>
                    )

                })}
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    )
}

export default Row;
