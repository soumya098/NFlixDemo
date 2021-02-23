import "./App.css";
import React from "react";
import Row from "./Row";
import request from "./request";
import Banner from "./Banner";
import Nav from "./NavBar";

function App() {
  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NFlics Originals"
        fetchUrl={request.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={request.fetchTrending} />
      <Row title="Top Rated" fetchUrl={request.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
      <Row title="Commedy Movies" fetchUrl={request.fetchCommedyMovies} />
      <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
      <Row title="Horror Movies" fetchUrl={request.fetchHorroreMovies} />
      <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
    </div>
  );
}

export default App;
