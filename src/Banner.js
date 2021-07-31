import React, { useState, useEffect } from 'react'
import "./Banner.css"
import axios from "./axios"
import requests from './request'
const baseURL = "https://image.tmdb.org/t/p/original";

const Banner = () => {
    const [movie, setMovie] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(requests.fetchNetflixOriginals)
            setMovie(
                response.data.results[
                Math.floor(Math.random() * response.data.results.length - 1)]
            )
            return response
        }
        fetchData()
    }, [])
    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "..." : str;
      }
    console.log(movie)
    return (
        <header className="banner" style={{
            backgroundSize: "cover",
            backgroundImage: `url(${baseURL}${movie?.poster_path})`,
            backgroundPosition: "center center"
        }}>
            <div className="banner_content">
                <h1 className="banner_title">{movie?.name || movie?.title}</h1>

                <div className="banner_buttons">
                    <button className="banner_button">Add</button>
                    <button className="banner_button">List</button>

                </div>
                <h1 class="banner_discription">{truncate(movie?.overview, 200)}
                </h1>
            </div>
            <div className="banner--fadeBottom"/>
        </header>

    )
}

export default Banner
