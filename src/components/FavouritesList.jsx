import React from "react";
import RemoveFavourites from "./RemoveFavourites";

const FavouritesList = (props) => {
  const removef = props.remove;
  return (
    <div className="mt-2 d-flex align-items-start overflow-auto ">
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
          <RemoveFavourites movie={movie} remove={removef} />
        </div>
      ))}
    </div>
  );
};

export default FavouritesList;
