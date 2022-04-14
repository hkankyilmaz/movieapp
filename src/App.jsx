import React from "react";
import { useState, useEffect } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import MovieListHeading from "./components/MovieListHeading";
import SearchBox from "./components/SearchBox";
import MovieList from "./components/MovieList";
import AddFavourites from "./components/AddFavourites";
import FavouritesList from "./components/FavouritesList";
import "./App.css";

const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(async () => {
    const url = `http://www.omdbapi.com/?s=spider&apikey=96f8fd3b`;

    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(responseJson);

    if (responseJson.Search) {
      setMovies(responseJson.Search);
    }
  }, []);

  const getMovies = async (searchValue) => {
    const movielist = await fetch(
      `http://www.omdbapi.com/?s=${searchValue}&apikey=96f8fd3b&`
    );
    const jsonMovieList = await movielist.json();
    console.log(jsonMovieList);

    if (jsonMovieList.Search) {
      setMovies(jsonMovieList.Search);
    }
  };

  useEffect(() => {
    getMovies(searchValue);
  }, [searchValue]);

  useEffect(() => {
    const favourites = JSON.parse(
      localStorage.getItem("react-movie-app-favourites")
    );

    if (favourites) {
      setFavourites(favourites);
    }
  }, []);

  const saveToLocalStorage = (items) => {
    localStorage.setItem("react-movie-app-favourites", JSON.stringify(items));
  };

  const addMovieToFavourities = (movie) => {
    const newFavouritiesMovieList = [...favourites, movie];
    setFavourites(newFavouritiesMovieList);
    saveToLocalStorage(newFavouritiesMovieList);
  };

  const removeMovieFromFavourities = (movie) => {
    console.log(movie, favourites);
    const newFavouritiesMovieList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );

    setFavourites(newFavouritiesMovieList);
    saveToLocalStorage(newFavouritiesMovieList);
  };

  return (
    <div className="container-fluid header-movies">
      <div
        style={{ minHeight: "7vh" }}
        className="row bg-dark pt-3 pb-3 d-flex align-items-center"
      >
        <div className="col-8">
          <MovieListHeading head="Movies" />
        </div>
        <div className="col-4">
          <SearchBox
            searchValue={searchValue}
            setSearchValue={setSearchValue}
          />
        </div>
      </div>
      <div className="row mb-1">
        <div className="col">
          <MovieList movies={movies} add={addMovieToFavourities} />
        </div>
      </div>
      <div style={{ minHeight: "7vh" }} className="row pt-1 pb-1 bg-dark">
        <MovieListHeading head="Favourites" />
      </div>
      <div className="row">
        <FavouritesList
          movies={favourites}
          remove={removeMovieFromFavourities}
        />
      </div>
    </div>
  );
};

export default App;
