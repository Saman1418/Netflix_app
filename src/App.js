import React from 'react';
import './App.css';
import requests from './request';
import Row from './Row';
import Banner from './Banner';
import Nav from "./Nav"
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
    <Nav/>
    <Banner/>
    <Row title="NetflixOriginals" fetchMovie={requests.fetchNetflixOriginals} isLargeRow/>
    <Row title="Trending" fetchMovie={requests.fetchTrending}/>
    <Row title="TopRated" fetchMovie={requests.fetchTopRated}/>
    <Row title="Action Movies" fetchMovie={requests.fetchActionMovies}/>
    <Row title="Comedy Movies" fetchMovie={requests.fetchComedyMovies}/>
    <Row title="Horror Movies" fetchMovie={requests.fetchHorrorMovies}/>
    <Row title="Romance Movies" fetchMovie={requests.fetchRomanceMovies}/>
    <Row title="Documentaries" fetchMovie={requests.fetchDocumentaries}/>
    <Footer/>
      
    </div>
  );
}

export default App;
