import React from "react";
import AddFavorurites from "./AddFavourites";

const MovieList = (props) => {
  const add = props.add;
  return (
    <div className="my-2 d-flex align-items-start overflow-auto ">
      {props.movies?.map((movie) => (
        <div>
          <div className="card ">
            <img
              style={{ maxHeight: "275px", minWidth: "220px" }}
              src={movie.Poster}
            />
            <div
              style={{ height: "50px", fontSize: "13px", fontWeight: "bold" }}
              className="card-body p-1 bg-warning text-center "
            >
              {movie.Title}
            </div>
          </div>
          <AddFavorurites movie={movie} add={add} />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
